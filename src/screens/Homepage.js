import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import { Box } from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Home from '../components/Home';
import Clients from '../components/Clients';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact';
import ProjectInfo from './ProjectInfo';

const StyledApp = styled.div``;

const Homepage = () => {
  const [theme, setTheme] = useState('');
  const [toMain, setToMain] = useState('');
  const themeToggler = () => {
    if (theme === 'light') {
      localStorage.setItem('currentTheme', 'dark');
    } else {
      localStorage.setItem('currentTheme', 'light');
    }
    setCurrentTheme();
  };

  const setCurrentTheme = () => {
    setTheme(localStorage.getItem('currentTheme'));
  };

  const setDefaultTheme = () => {
    if (
      localStorage.getItem('currentTheme') == null ||
      localStorage.getItem('currentTheme') === ''
    ) {
      localStorage.setItem('currentTheme', 'dark');
    }
  };

  useEffect(() => {
    setDefaultTheme();
    setCurrentTheme();
    setToMain(document.getElementById('main'));
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Header themeToggler={themeToggler} theme={theme} />
        <Home theme={theme} toMain={toMain} />
        <Box mx={{ base: 2, md: 10 }}>
          <ScrollToTop theme={theme} />
          <section id="main">
            <Clients theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <Contact theme={theme} />
          </section>
        </Box>
        <Footer theme={theme} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default Homepage;
