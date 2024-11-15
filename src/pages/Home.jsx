import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const StyledSlider = styled(Slider)`
  width: 80%;
  
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slick-center {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  
  .slick-list {
    overflow: visible;
  }
`;

const slideData = [
    { id: 1, image: redCircle },
    { id: 2, image: blueCircle },
    { id: 3, image: greenCircle },
    { id: 4, image: orangeCircle },
    // 빈 슬라이드 추가
    { id: 5, image: null },
    { id: 6, image: null },
  ];
  

const Home = () => {
  const [showStartButton, setShowStartButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const navigate = useNavigate();

  // 각 원형 버튼별 질문 데이터 추가
  const questions = [
    {
      questionText: "오늘 가장 기억에 남은 순간은?",
      subText: "전시중 가장 인상 깊었던 것은?"
    },
    {
      questionText: "이 작품을 통해 어떤 감정을 느꼈나요?",
      subText: "당신의 솔직한 감정을 들려주세요"
    },
    {
      questionText: "이 작품이 당신에게 어떤 의미인가요?",
      subText: "당신만의 해석을 들려주세요"
    },
    {
      questionText: "이 작품을 누구와 함께 보고 싶나요?",
      subText: "그 이유는 무엇인가요?"
    }
  ];

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const handleCircleClick = (index) => {
    if (!isExpanded) {
      if (selectedCircle !== null && selectedCircle !== index) {
        // 다른 원을 선택했을 때
        setShowStartButton(false);
        setTimeout(() => {
          setSelectedCircle(index);
          setShowStartButton(true);
        }, 800); // transition 시간과 맞춤
      } else if (selectedCircle === null) {
        // 처음 원을 선택했을 때
        setShowStartButton(true);
        setSelectedCircle(index);
      }
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

  // 슬라이더 설정
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      if (!isExpanded) {
        setShowStartButton(false);
        setTimeout(() => {
          setSelectedCircle(next);
          setShowStartButton(true);
        }, 800);
      }
    }
  };

  return (
    <Container isFading={isFading}>
      <ButtonContainer>
            <StyledSlider {...settings}>
            {slideData.map((slide, index) => (
                slide.image ? (
                <CircleButton
                    key={slide.id}
                    onClick={() => handleCircleClick(index)}
                    isExpanded={isExpanded}
                    isSelected={selectedCircle === index}
                    imageSrc={slide.image}
                />
                ) : (
                <div key={slide.id} style={{ width: 0 }} />
                )
            ))}
            </StyledSlider>
        <StartButton 
          onClick={handleStartClick}
          isVisible={showStartButton}
        />
      </ButtonContainer>
      <Question 
        isVisible={showQuestion}
        questionText={selectedCircle !== null ? questions[selectedCircle].questionText : ""}
        subText={selectedCircle !== null ? questions[selectedCircle].subText : ""}
      />
    </Container>
  );
};

export default Home; 