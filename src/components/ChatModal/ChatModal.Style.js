import styled from 'styled-components';

export const ChatWindow = styled.div`
  width: 1000px;
  height: 600px;
  background: linear-gradient(
    to bottom,
    ${props => props.$selectedCircle?.colors?.gradient?.from || '#FFFFFF33'}, 
    ${props => props.$selectedCircle?.colors?.gradient?.to || '#ECECEC33'}
  );
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
  border-bottom: 1px solid #eee;
  min-height: 80px;
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
  height: 80px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
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
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.$selectedCircle?.colors?.theme || '#F0F0F0'};
  position: relative;
  padding: 0 10px;

  .line {
    width: 800px;
    height: 2px;
    background-color: #FFFFFF;
    margin-left: 20px;
  }

  .icons-image {
    width: auto;     // 너비를 자동으로 설정
    height: 50%;     // 컨테이너 높이의 80%로 설정
    object-fit: contain;  // 이미지 비율 유지
    margin-right: 30px;
  }
`;

export const IconButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  ${props => props.rotate && `
    transform: rotate(90deg);
  `}
`;

export const LoadingBubble = styled(MessageBubble)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 16px;
  min-width: 60px;

  .dot {
    width: 6px;
    height: 6px;
    background: #666;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out;
    display: inline-block;
  }

  .dot:nth-child(1) { animation-delay: 0s; }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-6px); }
  }
`;
