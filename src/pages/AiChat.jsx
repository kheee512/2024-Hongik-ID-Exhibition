import React from 'react';
import styled from 'styled-components';
import ChatModal from '../components/ChatModal/ChatModal';
import { useLocation } from 'react-router-dom';

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  background-color: #ECECEC;
  padding: 20px;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function Chat() {
  const location = useLocation();
  const { selectedCircleImage, selectedQuestion } = location.state || {};

  return (
    <ChatContainer>
      <ChatModal 
        selectedCircleImage={selectedCircleImage}
        selectedQuestion={selectedQuestion}
      />
    </ChatContainer>
  );
}

export default Chat;
