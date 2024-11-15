import styled from 'styled-components';

export const ChatWindow = styled.div`
  width: 1000px;
  height: 600px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const ChatArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
`;

export const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.isUser ? '#4A90E2' : '#E2E2E2'};
  margin: ${props => props.isUser ? '0 0 0 10px' : '0 10px 0 0'};
`;

export const MessageBubble = styled.div`
  max-width: 60%;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: ${props => props.isUser ? '#4A90E2' : '#F0F0F0'};
  color: ${props => props.isUser ? 'white' : 'black'};
`;

export const InputArea = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #eee;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  background-color: #4A90E2;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #357ABD;
  }
`;
