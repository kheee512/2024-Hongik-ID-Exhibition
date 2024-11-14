import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const expandAnimation = keyframes`
  from {
    transform: scale(1) translateY(0);
  }
  to {
    transform: scale(3) translateY(17vh);
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: ${props => props.$isExpanded ? 'none' : 'scale(1.05)'};
  }

  &:active {
    transform: ${props => props.$isExpanded ? 'none' : 'scale(0.95)'};
  }
`;

export const CircleImage = styled.img`
  animation: ${fadeIn} 1.5s ease-in;
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3));
  animation: ${props => props.$isExpanded ? expandAnimation : 'none'} 1s ease-in-out forwards;
  transform-origin: center center;
`; 