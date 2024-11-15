import styled from 'styled-components';

export const Button = styled.button`
  width: 259px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: #F5F5F5;
  color: black;
  font-size: 18px;
  font-weight: bold;
  font-family: Helvetica;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease, visibility 0.8s ease;
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.2);
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