import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Chat from './pages/AiChat';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ECECEC;
  }
`;

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
