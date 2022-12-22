import React, { useEffect, useState } from 'react';
import Header from '../components/commons/Header';
import { Box, Link, Stack, Text } from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Footer from '../components/commons/Footer';
import ScrollToTop from '../components/commons/ScrollToTop';
import { BsChevronDown } from 'react-icons/bs';
import Contact from '../components/contactPage/Contact';

const ContactPage = () => {
  const StyledApp = styled.div`
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  `;

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

  useEffect(() => {
    setCurrentTheme();
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Header themeToggler={themeToggler} theme={theme} />
        <ScrollToTop theme={theme} />
        <Box mx={{ base: 2, md: 10 }} fontFamily={'Montserrat'}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            h={{ base: '80vh', md: '80vh', lg: '80vh', xl: '80vh' }}
          >
            <Box my={{ base: 'auto', md: 3 }} mx={'auto'} textAlign={'center'}>
              <Text
                fontSize={{ base: '20px', md: '40px' }}
                fontWeight={'light'}
                fontFamily={'Montserrat'}
                color={'grey'}
              >
                Feel free to send me an &nbsp;
                <Link
                  href="mailto: sahilasheikh.dev@gmail.com"
                  style={{ color: '#4267B2', fontWeight: 'bold' }}
                  _hover={{ textDecoration: 'none' }}
                >
                  Email
                </Link>
                &nbsp;or&nbsp;
                <br />
                <Link
                  href="https://wa.me/+918766509387"
                  style={{ color: '#27AE60', fontWeight: 'bold' }}
                  _hover={{ textDecoration: 'none' }}
                  target={'_blank'}
                >
                  WhatsApp
                </Link>
                &nbsp;me at any given time
              </Text>
              <Text
                fontSize={{ base: '20px', md: '40px' }}
                fontFamily={'Montserrat'}
                fontWeight={'bold'}
                color={theme === 'light' ? '#010101' : '#F2F2F2'}
                mt={20}
              >
                <a
                  href="/"
                  onClick={e => {
                    let hero = document.getElementById('main');
                    e.preventDefault();
                    hero &&
                      hero.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                  }}
                >
                  Start a Project
                </a>
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
          >
            <Text mx={'auto'} my={[6, 4, 2]}>
              <a
                href="/"
                onClick={e => {
                  let hero = document.getElementById('main');
                  e.preventDefault();
                  hero &&
                    hero.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                }}
              >
                <BsChevronDown />
              </a>
            </Text>
          </Stack>
          <section id="main">
            <Stack my={20} pt={20}>
              <Contact theme={theme} />
            </Stack>
          </section>
        </Box>
        <Footer theme={theme} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default ContactPage;
