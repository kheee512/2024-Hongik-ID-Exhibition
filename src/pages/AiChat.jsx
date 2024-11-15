import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatModal from '../components/ChatModal/ChatModal';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

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
  opacity: ${props => props.isFading ? 0 : 1};
  animation: ${props => props.isEntering ? 'fadeIn 0.5s ease-in-out' : 'none'};
  transition: all 0.5s ease-in-out;

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
  const navigate = useNavigate();
  const selectedCircle = location.state?.selectedCircle;
  const [isFading, setIsFading] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  if (!selectedCircle) {
    return <Navigate to="/" replace />;
  }

  const handleNavigateHome = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/', { 
        state: { 
          isNavigatingBack: true,
          timestamp: Date.now()
        },
        replace: true
      });
    }, 500);
  };

  return (
    <ChatContainer isFading={isFading} isEntering={isEntering}>
      <ChatModal 
        selectedCircle={selectedCircle} 
        onNavigateHome={handleNavigateHome}
      />
    </ChatContainer>
  );
}

export default Chat;
