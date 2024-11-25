import styled from 'styled-components';

export const ChatWindow = styled.div`
  width: 70vw;
  height: 40vw;
  background-color: #F5F5F5;
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
  padding: 15px 0;
  
  min-height: 4.17vw;
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
  padding: 12px 16px;
  border-radius: 16px;
  background-color: ${props => props.isUser ? '#FFFFFF' : '#ECECEC'};
  color: #333;  // 텍스트 색상을 검정색 계열로 통일
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);  // 약간의 그림자 추가
`;

export const InputArea = styled.div`
  height: 4.17vw;
  width: 95%;
  align-self: center;
  border-radius: 0.8vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 1.04vw;
  margin-bottom: 1.04vw;
`;

export const InputUpperArea = styled.div`
  height: 50%;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const InputLowerArea = styled.div`
  width: 100%;
  height: 2.08vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.$selectedCircle?.colors?.theme || '#F0F0F0'};
  position: relative;
  padding: 0 0.52vw;

  .line {
    width: 57vw;
    height: 0.1vw;
    background-color: #FFFFFF;
    margin-left: 1.04vw;
  }

  .icons-image {
    width: auto;     // 너비를 자동으로 설정
    height: 50%;     // 컨테이너 높이의 80%로 설정
    object-fit: contain;  // 이미지 비율 유지
    margin-right: 1.56vw;
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
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: absolute;
  right: 16rem;
  &:hover {
    transform: scale(1.1);
  }
`;
