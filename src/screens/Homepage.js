import React, { useEffect, useState } from 'react';
import Header from '../components/commons/Header';
import Projects from '../components/homepage/Projects';
import { Box } from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Home from '../components/homepage/Home';
import Clients from '../components/homepage/Clients';
import Skills from '../components/homepage/Skills';
import Footer from '../components/commons/Footer';
import ScrollToTop from '../components/commons/ScrollToTop';
// import AboutMe from '../components/commons/AboutMe';
// import Testimonial from '../components/commons/Testimonial';
// import Cta from '../components/commons/Cta';

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Homepage = () => {
  const [theme, setTheme] = useState('dark');
  const [toMain, setToMain] = useState('');
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
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <Header themeToggler={themeToggler} theme={theme} />
        <Home theme={theme} toMain={toMain} />
        <Box mx={{ base: 2, md: 10 }}>
          <ScrollToTop theme={theme} />
          <section id="main">
            {/* <AboutMe /> */}
            <Clients theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            {/* <Testimonial /> */}
          </section>
        </Box>
        {/* <Cta /> */}
        <Footer theme={theme} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default Homepage;
