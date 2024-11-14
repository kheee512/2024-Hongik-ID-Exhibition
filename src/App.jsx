import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import redCircle from './images/redCircle.png'
import './App.css'

const AppContainer = styled.div`
  background-color: #ECECEC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Circle = styled.img`
  animation: ${fadeIn} 1.5s ease-in;
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.25));
`

function App() {
  return (
    <AppContainer>
      <Circle src={redCircle} alt="Red Circle" />
    </AppContainer>
  )
}

export default App
