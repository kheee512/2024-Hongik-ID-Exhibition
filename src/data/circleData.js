import redCircle from '../images/redCircle.png';
import blueCircle from '../images/blueCircle.png';
import greenCircle from '../images/greenCircle.png';
import orangeCircle from '../images/orangeCircle.png';
import redCircle2 from '../images/redCircle2.png';
import blueCircle2 from '../images/blueCircle2.png';
import greenCircle2 from '../images/greenCircle2.png';
import orangeCircle2 from '../images/orangeCircle2.png';

export const circleData = [
  {
    id: 'redCircle',
    image: redCircle,
    chatImage: redCircle2,
    colors: {
      theme: '#FF9999',
      gradient: {
        from: '#FF999933',
        to: '#ECECEC33',
        direction: 'to bottom'
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
    chatImage: blueCircle2,
    colors: {
      theme: '#95A0FE',
      gradient: {
        from: '#95A0FE33',
        to: '#ECECEC33',
        direction: 'to bottom'
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
    chatImage: greenCircle2,
    colors: {
      theme: '#BAFFCB',
      gradient: {
        from: '#BAFFCB33',
        to: '#ECECEC33',
        direction: 'to bottom'
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
    chatImage: orangeCircle2,
    colors: {
      theme: '#FFB55A',
      gradient: {
        from: '#FFB55A33',
        to: '#ECECEC33',
        direction: 'to bottom'
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