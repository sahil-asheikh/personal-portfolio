import React, { useEffect, useState } from 'react';
import Header from '../components/commons/Header';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Footer from '../components/commons/Footer';
import ScrollToTop from '../components/commons/ScrollToTop';
import { BsChevronDown } from 'react-icons/bs';
import ProjectItem from '../components/commons/projects/ProjectsItem';
import AllProjectDetails from '../assets/dataJson/projectJson.json';

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Work = () => {
  const allProjectDetails = AllProjectDetails;

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

  useEffect(() => {
    setCurrentTheme();
    setToMain(document.getElementById('main'));
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
                This page includes most of the projects I have
                <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
                worked on thoughout my entire development career.
              </Text>
              <Text
                fontSize={{ base: '20px', md: '40px' }}
                fontFamily={'Montserrat'}
                fontWeight={'bold'}
                color={theme === 'light' ? '#090909' : '#F2F2F2'}
                mt={20}
              >
                Recent Project
              </Text>
            </Box>
          </Stack>

          {allProjectDetails.length === 0 ? (
            ''
          ) : (
            <>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
              >
                <Text mx={'auto'} my={[6, 4, 2]}>
                  <a
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      toMain &&
                        toMain.scrollIntoView({
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
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                  gap={{ base: '', md: 0 }}
                  my={20}
                  pt={20}
                >
                  {allProjectDetails.map((projectItem, index) => (
                    <Box my={3} mx={{ base: 3, md: 0, lg: 0, xl: 0 }}>
                      <ProjectItem
                        key={index}
                        theme={theme}
                        projectIndex={index}
                        imgThumbnail={projectItem.imgThumbnail}
                        title={projectItem.title}
                        type={projectItem.type}
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              </section>
            </>
          )}
        </Box>
        <Footer theme={theme} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default Work;
