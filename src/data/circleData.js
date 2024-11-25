import blueChatAI from '../images/new/blue/blueChatAI.svg'
import blueChatUser from '../images/new/blue/blueChatUser.svg'
import blueHome from '../images/new/blue/blueHome.svg'
import blueMain from '../images/new/blue/blueMain.svg'

import greenChatAI from '../images/new/green/greenChatAI.svg'
import greenChatUser from '../images/new/green/greenChatUser.svg'
import greenHome from '../images/new/green/greenHome.svg'
import greenMain from '../images/new/green/greenMain.svg'

import yellowChatAI from '../images/new/yellow/yellowChatAI.svg'
import yellowChatUser from '../images/new/yellow/yellowChatUser.svg'
import yellowHome from '../images/new/yellow/yellowHome.svg'
import yellowMain from '../images/new/yellow/yellowMain.svg'

import redChatAI from '../images/new/red/redChatAI.svg'
import redChatUser from '../images/new/red/redChatUser.svg'
import redHome from '../images/new/red/redHome.svg'
import redMain from '../images/new/red/redMain.svg'

export const circleData = [
  {
    id: 'greenCircle',
    homeImage: greenHome,
    mainImage: greenMain,
    chatAIImage: greenChatAI,
    chatUserImage: greenChatUser,
    colors: {
      theme: '#084941',
    },
    question: {
      main: "관람하고 있는 이 순간 어떤 기분이 드나요?",
    }
  },
  {
    id: 'blueCircle',
    homeImage: blueHome,
    mainImage: blueMain,
    chatAIImage: blueChatAI,
    chatUserImage: blueChatUser,
    colors: {
      theme: '#1E3494',
    },
    question: {
      main: "관람하면서 떠오른 \"찰나의 순간\"이 있나요?",
    }
  },
  {
    id: 'yellowCircle',
    homeImage: yellowHome,
    mainImage: yellowMain,
    chatAIImage: yellowChatAI,
    chatUserImage: yellowChatUser,
    colors: {
      theme: '#FFA319',
    },
    question: {
      main: "담다'에 있는 당신의 모습은 어떤 모습인가요?",
    }
  },
  {
    id: 'redCircle',
    homeImage: redHome,
    mainImage: redMain,
    chatAIImage: redChatAI,
    chatUserImage: redChatUser,
    colors: {
      theme: '#8C2230',
    },
    question: {
      main: "전시 관람 후 남기고 싶은 한마디 있을까요?",
    }
  }
];

// 빈 슬라이드 데이터 추가
export const slideData = [
  ...circleData,
  { id: 'empty1', image: null },
  { id: 'empty2', image: null }
]; 