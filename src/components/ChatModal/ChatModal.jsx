import React, { useState, useEffect, useRef } from 'react';     // AI 프로필 이미지 경로
import back from '../../images/back.svg';  // 파일 상단에 추가
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
  IconButton,
  BackButton,
  HeaderContent,
  HeaderText,
  ChatInput,
  IconButtonStyled,
} from './ChatModal.Style';
import CircleButton from '../CircleButton/CircleButton';
import { callOpenAI } from '../../services/openai';
import { useNavigate } from 'react-router-dom';
import zoomIcon from '../../images/zoom.png';
import xIcon from '../../images/x.png';
import iconsIcon from '../../images/icons.png';


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
    if (!inputText.trim()) return;

    const userMessage = {
      text: inputText,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // AI 메시지 초기 상태 추가
    const aiMessageId = Date.now();
    setMessages(prev => [...prev, {
      id: aiMessageId,
      text: '',
      isUser: false,
      timestamp: new Date().toISOString()
    }]);

    try {
      await callOpenAI(
        inputText,
        selectedCircle.question.main,
        messages,
        (chunk) => {
          // 스트리밍 응답을 실시간으로 업데이트
          setMessages(prev => prev.map(msg => 
            msg.id === aiMessageId 
              ? { ...msg, text: msg.text + chunk }
              : msg
          ));
        }
      );
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId 
          ? { ...msg, text: '죄송합니다. 오류가 발생했습니다.', isError: true }
          : msg
      ));
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
      <BackButton 
        src={back} 
        alt="back to home" 
        onClick={handleHomeClick}
      />

      <Header>
        <HeaderContent>
          <CircleButton
            imageSrc={selectedCircle.mainImage}
            isExpanded={false}
            isSelected={false}
            size="7vw"
            noShadow={true}
            onClick={handleHomeClick}
          />
          <HeaderText>
            {selectedCircle.question.main}
          </HeaderText>
        </HeaderContent>
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
                    backgroundImage: `url(${selectedCircle.chatUserImage})`,
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
                    backgroundImage: `url(${selectedCircle.chatAIImage})`,
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
      </ChatArea>

      
      <InputArea>
        <InputUpperArea>
          <IconButtonStyled 
            onClick={handleSend}
            disabled={isLoading}
            src={zoomIcon} 
            alt="send" 
            className="send-button"
          />
          <ChatInput
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Search"
          />
          <IconButtonStyled 
            onClick={() => setInputText('')}
            src={xIcon} 
            alt="clear" 
            className="clear-button"
          />
        </InputUpperArea>
        <InputLowerArea $selectedCircle={selectedCircle}>
          <div className="line-container">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
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
