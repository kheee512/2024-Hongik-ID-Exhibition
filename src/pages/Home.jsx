import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import CircleButton from '../components/CircleButton/CircleButton';
import StartButton from '../components/StartButton/StartButton';
import Question from '../components/Question/Question';
import { circleData, slideData } from '../data/circleData';
import { useNavigate, useLocation } from 'react-router-dom';

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
  animation: ${props => props.isEntering ? 'fadeIn 0.5s ease-in-out' : 'none'};
  transition: all 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
    transform: scale(1);
    transition: transform 0.3s ease;
  }
  
  .slick-center {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  
  .slick-list {
    overflow: visible;
  }

  // 터치 스와이프 활성화
  touch-action: pan-x;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
`;

const CircleButtonWrapper = styled.div`
  opacity: ${props => props.fadeOut ? 0 : 1};
  transition: opacity 0.5s ease-in-out;
`;

const Home = () => {
  const [showStartButton, setShowStartButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState(0);
  const [doubleSelected, setDoubleSelected] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isEntering, setIsEntering] = useState(true);
  const [prevTimestamp, setPrevTimestamp] = useState(null);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    if (location.state?.isNavigatingBack) {
      const currentTimestamp = location.state.timestamp;
      
      if (currentTimestamp !== prevTimestamp) {
        setPrevTimestamp(currentTimestamp);
        setIsEntering(false);
        const timer = setTimeout(() => {
          setIsEntering(true);
        }, 50);
        return () => clearTimeout(timer);
      }
    }
  }, [location.state]);

  useEffect(() => {
    setIsEntering(true);
    return () => setIsEntering(false);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        
        // deltaX 값이 특정 임계값을 넘을 때만 슬라이드 이동
        const threshold = 50;
        if (Math.abs(e.deltaX) > threshold) {
          if (e.deltaX > 0) {
            sliderRef.current.slickNext();
          } else {
            sliderRef.current.slickPrev();
          }
        }
      }
    };

    const sliderElement = document.querySelector('.slick-list');
    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleCircleClick = (index) => {
    if (!isExpanded) {
      if (selectedCircle === index) {
        // 같은 원을 두 번 클릭했을 때
        if (!doubleSelected) {
          setDoubleSelected(true);
          setShowStartButton(true);
        } else {
          // 세 번째 클릭 시
          setDoubleSelected(false);
          setShowStartButton(false);
        }
      } else {
        // 다른 원을 선택했을 때
        setShowStartButton(false);
        setDoubleSelected(false);
        setTimeout(() => {
          setSelectedCircle(index);
        }, 800);
      }
    } else if (showQuestion) {
      setIsFading(true);
      setTimeout(() => {
        navigate('/chat', { 
          state: { 
            selectedCircle: circleData[selectedCircle],
          } 
        });
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
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
    afterChange: (current) => {
      // 슬라이드가 멈춘 후 중앙에 있는 구를 자동 선택
      if (!isExpanded) {
        setSelectedCircle(current);
        if (selectedCircle === current && !doubleSelected) {
          setShowStartButton(true);
        }
      }
    },
    beforeChange: (current, next) => {
      if (current === 3 && next > 3) {
        return false;
      }
      
      if (!isExpanded) {
        setShowStartButton(false);
      }
    },
    swipeToSlide: true,
    touchThreshold: 10,
    draggable: true,
    swipe: true,
  };

  return (
    <Container isFading={isFading} isEntering={isEntering}>
      <ButtonContainer>
        <StyledSlider ref={sliderRef} {...settings}>
          {slideData.map((slide, index) => (
            slide.homeImage ? (
            <CircleButtonWrapper 
              key={slide.id} 
              fadeOut={doubleSelected && selectedCircle !== index}
            >
              <CircleButton
                onClick={() => handleCircleClick(index)}
                isExpanded={isExpanded}
                isSelected={selectedCircle === index}
                imageSrc={doubleSelected && selectedCircle === index ? 
                  circleData[index].mainImage : 
                  slide.homeImage}
                isMainImage={doubleSelected && selectedCircle === index}
              />
            </CircleButtonWrapper>
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
        questionText={selectedCircle !== null ? circleData[selectedCircle].question.main : ""}
        subText={selectedCircle !== null ? 
          circleData[selectedCircle === 3 ? 0 : selectedCircle + 1].question.main : ""}
      />
    </Container>
  );
};

export default Home; 