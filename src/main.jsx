import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import App from './App.jsx'
import './index.css'

const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
        font-size: 62.5%; /* 10px로 설정 - 1rem = 10px */
        scroll-behavior: smooth;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
    }

    body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
