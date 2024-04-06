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
  .area {
    background: ${({ theme }) => theme.body};
    background: -webkit-linear-gradient(to left, ${({ theme }) =>
      theme.bgSecondary}, ${({ theme }) => theme.body});
    width: 100%;
  }
  
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }
  
  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  
  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  
  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }
  
  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  
  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }
  
  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }
  
  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }
  
  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  
  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  
  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }
  
    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
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
