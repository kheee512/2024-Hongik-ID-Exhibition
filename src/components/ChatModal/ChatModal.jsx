import React, { useState, useEffect, useRef } from 'react';
import userProfile from '../../images/userprofile.png';  // 사용자 프로필 이미지 경로
import aiProfile from '../../images/aiprofile.png';     // AI 프로필 이미지 경로
import {
  ChatWindow,
  Header,
  ChatArea,
  MessageContainer,
  Profile,
  MessageBubble,
  InputArea,
  InputUpperArea,
  InputLowerArea,
  IconButton
} from './ChatModal.Style';
import CircleButton from '../CircleButton/CircleButton';
import { callOpenAI } from '../../services/openai';
import { useNavigate } from 'react-router-dom';
import zoomIcon from '../../images/zoom.png';
import xIcon from '../../images/x.png';
import iconsIcon from '../../images/icons.png';
import { LoadingBubble } from './ChatModal.Style';

const ChatModal = ({ selectedCircle, onNavigateHome }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tokenUsage, setTokenUsage] = useState({
    total: 0,
    conversations: []
  });
  const chatAreaRef = useRef(null);
  const navigate = useNavigate();

  // 스크롤을 항상 최신 메시지로 이동
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // 초기 메시지를 제거하고 빈 배열로 시작
  useEffect(() => {
    if (selectedCircle) {
      setMessages([]);
    }
  }, [selectedCircle]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      text: inputText,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    // 즉시 메시지 목록 업데이트
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await callOpenAI(
        inputText,
        selectedCircle.question.main,
        messages // 전체 대화 히스토리 전달
      );
      
      const aiMessage = {
        text: response.content,
        isUser: false,
        timestamp: new Date().toISOString()
      };

      console.log('=== AI 응답 ===');
      console.log('AI Message:', aiMessage);

      if (response.usage) {
        setTokenUsage(prev => ({
          total: prev.total + response.usage.total_tokens,
          conversations: [...prev.conversations, {
            timestamp: new Date().toISOString(),
            promptTokens: response.usage.prompt_tokens,
            completionTokens: response.usage.completion_tokens,
            totalTokens: response.usage.total_tokens
          }]
        }));

        console.log('=== 토큰 사용량 업데이트 ===');
        console.log('Current Conversation Usage:', response.usage);
        console.log('Total Token Usage:', tokenUsage.total + response.usage.total_tokens);
      }

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      const errorMessage = {
        text: '죄송합니다. 오류가 발생했습니다.',
        isUser: false,
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHomeClick = () => {
    onNavigateHome();
  };

  // selectedCircle이 없으면 로딩 상태나 에러 표시
  if (!selectedCircle) {
    return <div>Loading...</div>;
  }

  return (
    <ChatWindow $selectedCircle={selectedCircle}>
      <Header>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '20px', 
          paddingTop: '20px'
        }}>
          <CircleButton
            imageSrc={selectedCircle.chatImage}
            isExpanded={false}
            isSelected={false}
            size="80px"
            noShadow={true}
            onClick={handleHomeClick}
          />
          <span style={{ 
            fontSize: '14px', 
            color: '#666', 
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            {selectedCircle.question.main}
          </span>
        </div>
      </Header>
      <ChatArea ref={chatAreaRef}>
        {messages.map((message, index) => (
          <MessageContainer key={index} isUser={message.isUser}>
            {message.isUser ? (
              <>
                <MessageBubble isUser={message.isUser}>
                  {message.text}
                </MessageBubble>
                <Profile 
                  isUser={message.isUser} 
                  style={{
                    backgroundImage: `url(${userProfile})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </>
            ) : (
              <>
                <Profile 
                  isUser={message.isUser}
                  style={{
                    backgroundImage: `url(${aiProfile})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <MessageBubble isUser={message.isUser}>
                  {message.text}
                </MessageBubble>
              </>
            )}
          </MessageContainer>
        ))}
        {isLoading && (
          <MessageContainer isUser={false}>
            <Profile 
              isUser={false}
              style={{
                backgroundImage: `url(${aiProfile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <LoadingBubble isUser={false}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </LoadingBubble>
          </MessageContainer>
        )}
      </ChatArea>
      <InputArea>
        <InputUpperArea>
          <IconButton 
            onClick={handleSend}
            disabled={isLoading}
            src={zoomIcon} 
            alt="send" 
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Search"
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '20px',
              outline: 'none',
              backgroundColor: '#FFFFFF'
            }}
          />
          <IconButton 
            onClick={() => setInputText('')}
            src={xIcon} 
            alt="clear" 
            style={{ marginLeft: '10px' }}
          />
        </InputUpperArea>
        <InputLowerArea $selectedCircle={selectedCircle}>
          <div className="line"></div>
          <img 
            src={iconsIcon}
            alt="icons" 
            className="icons-image"
          />
        </InputLowerArea>
      </InputArea>
    </ChatWindow>
  );
};

export default ChatModal;
