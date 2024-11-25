import styled from 'styled-components';

export const ChatWindow = styled.div`
  width: 70vw;
  height: 40vw;
  background-color: #F5F5F5;
  border-radius: 2vw;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vw;
  padding-bottom: 1vw;
`;

export const ChatArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
  width: 95%;
  align-self: center;
`;

export const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 1vw;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

export const Profile = styled.div`
  width: 2.08vw;
  height: 2.08vw;
  border-radius: 50%;
  background-color: ${props => props.isUser ? '#4A90E2' : '#E2E2E2'};
  margin: ${props => props.isUser ? '0 0 0 0.52vw' : '0 0.52vw 0 0'};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);  // 기본 그림자 추가
  transition: box-shadow 0.2s ease-in-out;     // 부드러운 그림자 전환 효과
`;

export const MessageBubble = styled.div`
  max-width: 60%;
  padding: 0.6vw 0.8vw;
  font-size: 0.8vw;
  align-self: center;
  border-radius: 16px;
  background-color: ${props => props.isUser ? '#FFFFFF' : '#ECECEC'};
  color: #333;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);  // 그림자 강도와 크기를 증가
`;

export const InputArea = styled.div`
  height: 4.17vw;
  width: 95%;
  align-self: center;
  border-radius: 1vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 1.04vw;
  margin-bottom: 2vw;
`;

export const InputUpperArea = styled.div`
  height: 50%;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
`;

export const InputLowerArea = styled.div`
  width: 100%;
  height: 2.08vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.$selectedCircle?.colors?.theme || '#F0F0F0'};
  position: relative;
  padding: 0 1vw;

  .line-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 1vw;
  }

  .circle {
    width: 0.5vw;
    height: 0.5vw;
    background-color: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    left: 0;
    z-index: 1;
  }

  .line {
    width: 100%;
    height: 0.1vw;
    background-color: #FFFFFF;
  }

  .icons-image {
    width: auto;     // 너비를 자동으로 설정
    height: 50%;     // 컨테이너 높이의 80%로 설정
    object-fit: contain;  // 이미지 비율 유지
  }
`;

export const IconButton = styled.img`
  width: 1.04vw;
  height: 1.04vw;
  cursor: pointer;
  ${props => props.rotate && `
    transform: rotate(90deg);
  `}
`;

export const BackButton = styled.img`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: absolute;
  top: 1.5vw;
  right: 1.5vw;
  &:hover {
    transform: scale(1.1);
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
`;

export const HeaderText = styled.span`
  font-size: 1.2vw;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1vw;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #FFFFFF;
`;

export const IconButtonStyled = styled(IconButton)`
  &.send-button {
    margin-right: 0.5vw;
  }
  &.clear-button {
    margin-left: 10px;
  }
`;
