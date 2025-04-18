import styled, { keyframes } from 'styled-components';

const expandAnimationMain = keyframes`
  from {
    transform: scale(1) translateY(0);
  }
  to {
    transform: scale(2.3) translateY(20vh);
  }
`;

const expandAnimationNormal = keyframes`
  from {
    transform: scale(1) translateY(0);
  }
  to {
    transform: scale(2.3) translateY(20vh);
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

const imageFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.5s ease, opacity 1s ease;
  position: relative;
  z-index: 1;
  opacity: ${props => (!props.$isSelected && props.$isExpanded) ? 0 : 1};

  &:hover {
    transform: ${props => props.$isExpanded ? 'none' : 'scale(1.1)'};
  }

  &:active {
    transform: ${props => props.$isExpanded ? 'none' : 'scale(1)'};
  }
`;

export const CircleImage = styled.img`
  position: relative;
  
  width: ${props => props.$isMainImage ? `calc(${props.$size || '20vw'} * 0.8)` : props.$size || '13vw'};
  height: ${props => props.$isMainImage ? `calc(${props.$size || '20vw'} * 0.8)` : props.$size || '13vw'};
  filter: ${props => props.$noShadow ? 'none' : 'drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3))'};
  animation: ${props => {
    if (props.$isExpanded) {
      if (props.$isSelected) {
        return props.$isMainImage ? expandAnimationMain : expandAnimationNormal;
      }
      return fadeOutAnimation;
    }
    return imageFadeIn;
  }} 1s ease-in-out forwards;
  transform-origin: center center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${props => props.$size || '20vw'};
  height: ${props => props.$size || '20vw'};
  display: flex;
  justify-content: center;
  align-items: center;
`; 