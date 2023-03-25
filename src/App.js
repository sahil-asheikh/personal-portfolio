import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import Header from './components/commons/Header';
import ScrollToTop from './components/commons/ScrollToTop';
import ContactPage from './screens/ContactPage';
import Homepage from './screens/Homepage';
import ProjectInfo from './screens/ProjectInfo';
import Work from './screens/Work';
import Footer from './components/commons/Footer';
import { Box } from '@chakra-ui/react';

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

function App() {
  const [theme, setTheme] = useState('dark');

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <BrowserRouter>
          <Header themeToggler={themeToggler} theme={theme} />
          <ScrollToTop />
          <Box
            // mx={{ base: 2, md: 10 }}
            fontFamily={'Montserrat'}
          >
            <Routes>
              <Route path="/" element={<Homepage theme={theme} />} />
              <Route path="/Work" element={<Work theme={theme} />} />
              <Route
                path="/ProjectInfo/:projectIndex"
                element={<ProjectInfo theme={theme} />}
              />
              <Route path="/Contact" element={<ContactPage theme={theme} />} />
            </Routes>
          </Box>
          <Footer theme={theme} />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
