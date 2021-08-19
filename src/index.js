import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { getTheme } from './hooks'

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    background: ${getTheme() === 'dark' ? 'rgb(19,23,34)' : 'rgb(255, 255, 255)'};
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

