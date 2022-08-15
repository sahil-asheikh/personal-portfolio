import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#F2F2F2',
  text: '#000000',
  bgSecondary: '#F5F5F5',
};

export const darkTheme = {
  body: '#0B0F13',
  text: '#FFFFFF',
  bgSecondary: '#2D2D2D',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    scroll-behavior: smooth;
  }
  input{
    background: transparent;
    color: ${({ theme }) => theme.text};
    padding: 2px 5px;
    border:0;
    outline:0;
    shadow: none;
  }
  input:focus {
    outline:none!important;
    shadow: none;
  }
  textarea{
    background: transparent;
    color: ${({ theme }) => theme.text};
    padding: 0px 5px;
    border:0;
    outline:0;
    shadow: none;
  }
  textarea:focus {
    outline:none!important;
    shadow: none;
  }
  `;
