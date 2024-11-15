import redCircle from '../images/redCircle.png';
import blueCircle from '../images/blueCircle.png';
import greenCircle from '../images/greenCircle.png';
import orangeCircle from '../images/orangeCircle.png';

export const circleData = [
  {
    id: 'redCircle',
    image: redCircle,
    colors: {
      gradient: {
        from: '#FF9999',
        to: '#F7B188'
      }
    },
    question: {
      main: "오늘 가장 기억에 남은 순간은?",
      sub: "전시중 가장 인상 깊었던 것은?"
    }
  },
  {
    id: 'blueCircle',
    image: blueCircle,
    colors: {
      gradient: {
        from: '#95A0FE',
        to: '#A2DAFF'
      }
    },
    question: {
      main: "이 작품을 통해 어떤 감정을 느꼈나요?",
      sub: "당신의 솔직한 감정을 들려주세요"
    }
  },
  {
    id: 'greenCircle',
    image: greenCircle,
    colors: {
      gradient: {
        from: '#BAFFCB',
        to: '#C4FF80'
      }
    },
    question: {
      main: "이 작품이 당신에게 어떤 의미인가요?",
      sub: "당신만의 해석을 들려주세요"
    }
  },
  {
    id: 'orangeCircle',
    image: orangeCircle,
    colors: {
      gradient: {
        from: '#FFB55A',
        to: '#FFCDA2'
      }
    },
    question: {
      main: "이 작품을 누구와 함께 보고 싶나요?",
      sub: "그 이유는 무엇인가요?"
    }
  }
];

// 빈 슬라이드 데이터 추가
export const slideData = [
  ...circleData,
  { id: 'empty1', image: null },
  { id: 'empty2', image: null }
]; 