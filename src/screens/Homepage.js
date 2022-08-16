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

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Homepage = () => {
  const [theme, setTheme] = useState('dark');
  const [toMain, setToMain] = useState('');
  const [toContact, setToContact] = useState('');
  const themeToggler = () => {
    if (theme === 'dark') {
      localStorage.setItem('currentTheme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('currentTheme', 'dark');
      setTheme('dark');
    }
    setCurrentTheme();
  };

  const setCurrentTheme = () => {
    if (
      localStorage.getItem('currentTheme') === null ||
      localStorage.getItem('currentTheme') === ''
    ) {
      localStorage.setItem('currentTheme', 'dark');
      setTheme('dark');
    } else {
      setTheme(localStorage.getItem('currentTheme'));
    }
  };

  // const themeReset = () => {
  //   localStorage.clear();
  //   console.log('reset-complete');
  // };

  useEffect(() => {
    setCurrentTheme();
    setToMain(document.getElementById('main'));
    setToContact(document.getElementById('contact'));
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <Header
          themeToggler={themeToggler}
          theme={theme}
          toContact={toContact}
        />
        <Home theme={theme} toMain={toMain} />
        <Box mx={{ base: 2, md: 10 }}>
          <ScrollToTop theme={theme} />
          <section id="main">
            <Clients theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <section id="contact">
              <Contact theme={theme} />
            </section>
          </section>
        </Box>
        <Footer theme={theme} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default Homepage;
