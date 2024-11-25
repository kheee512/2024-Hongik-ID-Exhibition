import styled from 'styled-components';

export const Button = styled.button`
  width: 10vw;
  height: 2.3vw;
  border: none;
  border-radius: 3vw;
  background-color: #F5F5F5;
  color: black;
  font-size: 1vw;
  font-weight: bold;
  font-family: Helvetica;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease, visibility 0.8s ease;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 6px 8px rgba(0, 0, 0, 0.2);
  
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  
  ${props => props.$isVisible && `
    opacity: 1;
    visibility: visible;
  `}

  &:hover {
    background-color: #EAEAEA;
  }
`; 