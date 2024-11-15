import React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  background-color: #ECECEC;
  padding: 20px;
`;

const ChatWindow = styled.div`
  width: 1000px;
  height: 600px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Chat() {
  return (
    <ChatContainer>
      <ChatWindow>
        {/* 채팅 컨텐츠는 여기에 추가될 예정입니다 */}
      </ChatWindow>
    </ChatContainer>
  );
}

export default Chat;
