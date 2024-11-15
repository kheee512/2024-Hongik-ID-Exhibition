import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CircleButton from '../components/CircleButton/CircleButton';
import StartButton from '../components/StartButton/StartButton';
import Question from '../components/Question/Question';
import redCircle from '../images/redCircle.png';
import blueCircle from '../images/blueCircle.png';
import greenCircle from '../images/greenCircle.png';
import orangeCircle from '../images/orangeCircle.png';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: #ECECEC;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => props.isFading ? 0 : 1};
`;

const CIRCLE_DIAMETER = 200;

const ScrollContainer = styled.div`
  display: flex;
  
  width: 100%;
  
  gap: 100px;
  
  
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Home = () => {
  const [showStartButton, setShowStartButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const handleCircleClick = (index) => {
    if (!showStartButton && !isExpanded) {
      setShowStartButton(true);
      setSelectedCircle(index);
    } else if (showQuestion) {
      setIsFading(true);
      setTimeout(() => {
        navigate('/chat');
      }, 500);
    }
  };

  const handleStartClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setShowStartButton(false);
    }
  };

  return (
    <Container isFading={isFading}>
      <ButtonContainer>
        <ScrollContainer>
          <CircleButton 
            onClick={() => handleCircleClick(0)}
            isExpanded={isExpanded}
            isSelected={selectedCircle === 0}
            imageSrc={redCircle}
          />
          <CircleButton 
            onClick={() => handleCircleClick(1)}
            isExpanded={isExpanded}
            isSelected={selectedCircle === 1}
            imageSrc={blueCircle}
          />
          <CircleButton 
            onClick={() => handleCircleClick(2)}
            isExpanded={isExpanded}
            isSelected={selectedCircle === 2}
            imageSrc={greenCircle}
          />
          <CircleButton 
            onClick={() => handleCircleClick(3)}
            isExpanded={isExpanded}
            isSelected={selectedCircle === 3}
            imageSrc={orangeCircle}
          />
        </ScrollContainer>
        <StartButton 
          onClick={handleStartClick}
          isVisible={showStartButton}
        />
      </ButtonContainer>
      <Question 
        isVisible={showQuestion}
        questionText="오늘 가장 기억에 남은 순간은?"
        subText="전시중 가장 인상 깊었던 것은?"
      />
    </Container>
  );
};

export default Home; 