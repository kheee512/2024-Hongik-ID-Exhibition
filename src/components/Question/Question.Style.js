import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const QuestionContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  
  ${props => props.$isVisible && css`
    opacity: 1;
    visibility: visible;
    animation: ${fadeIn} 1s ease-out forwards;
  `}
`;

export const QuestionText = styled.h1`
  font-size: 1.5vw;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SubText = styled.p`
  font-size: 1vw;
  color: #8A8A8E;
  font-weight: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`; 