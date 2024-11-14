import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CircleButton from '../components/CircleButton';
import StartButton from '../components/StartButton';
import Question from '../components/Question';
import redCircle from '../images/redCircle.png';

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

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const handleCircleClick = () => {
    if (!showStartButton && !isExpanded) {
      setShowStartButton(true);
    }
  };

  const handleStartClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setShowStartButton(false);
    }
  };

  return (
    <Container>
      <ButtonContainer>
        <CircleButton 
          onClick={handleCircleClick}
          isExpanded={isExpanded}
          imageSrc={redCircle}
        />
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