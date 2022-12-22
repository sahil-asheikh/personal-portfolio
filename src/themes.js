import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#F2F2F2',
  text: '#000000',
  borderColor: 'rgb(0, 0, 0, 0.7)',
  bgSecondary: '#F5F5F5',
};

export const darkTheme = {
  body: '#010101',
  text: '#FFFFFF',
  borderColor: 'rgb(255, 255, 255, 0.7)',
  bgSecondary: '#2D2D2D',
};

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: scroll;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Montserrat, BlinkMacSystemFont, Helvetica, sans-serif;
    transition: all 0.25s linear;
    scroll-behavior: smooth;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  home {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  input{
    background: transparent;
    color: ${({ theme }) => theme.text};
    padding: 2px 5px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    width: 100%;
    outline: 0;
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
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    width: 100%;
    outline:0;
    shadow: none;
  }
  textarea:focus {
    outline:none!important;
    shadow: none;
  }
  `;

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export const ProgressBar = styled.div`
  height: 3px;
  background-color: #27ae60;
  border-radius: 5px;
`;
