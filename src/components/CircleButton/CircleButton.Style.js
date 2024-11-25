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

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 1s ease;
  position: relative;
  z-index: 1;
  opacity: ${props => (!props.$isSelected && props.$isExpanded) ? 0 : 1};

  &:hover {
    transform: ${props => props.$isExpanded ? 'none' : 'scale(1.05)'};
  }

  &:active {
    transform: ${props => props.$isExpanded ? 'none' : 'scale(0.95)'};
  }
`;

export const CircleImage = styled.img`
  animation: ${fadeIn} 1.5s ease-in;
  border-radius: 50%;
  width: ${props => props.$size || '20vw'};
  height: ${props => props.$size || '20vw'};
  filter: ${props => props.$noShadow ? 'none' : 'drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3))'};
  animation: ${props => {
    if (props.$isExpanded) {
      return props.$isSelected ? expandAnimation : fadeOutAnimation;
    }
    return 'none';
  }} 1s ease-in-out forwards;
  transform-origin: center center;
`; 