import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact';
import { useParams } from 'react-router-dom';
import CoverImage from '../components/CoverImage';
import ProjectClientInfo from '../components/ProjectClientInfo';
import ProjectJson from '../dataJson/projectJson.json';

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ProjectInfo = () => {
  const { projectId } = useParams({});
  const projectSrc = ProjectJson;
  const [theme, setTheme] = useState('dark');
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

  useEffect(() => {
    setCurrentTheme();
    setToContact(document.getElementById('contact'));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Header
            themeToggler={themeToggler}
            theme={theme}
            toContact={toContact}
          />
          {console.log(projectId)}
          <ScrollToTop theme={theme} />
          <Box
            mx={{ base: 2, md: 10 }}
            pt={{ base: '63px', md: '64px', lg: '64px', xl: '64px' }}
            fontFamily={'Montserrat'}
          >
            <section id="main">
              <Box mx={{ base: 3, md: 6, lg: 6, xl: 6 }}>
                <CoverImage projectSrc={projectSrc} theme={theme} />
                <Box mt={16}>
                  <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
                    Project Description,
                  </Text>{' '}
                  <Text textAlign={'justify'} fontSize={'16px'}>
                    {projectSrc.description}
                  </Text>{' '}
                  <Box my={6}>
                    <SimpleGrid
                      columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
                      gap={{ base: '', md: 6 }}
                    >
                      {projectSrc.projectImages.map((imgSrc, index) => (
                        <Box key={index} my={2}>
                          <Text
                            my={2}
                            fontSize={{
                              base: '16px',
                              md: '16px',
                              lg: '14px',
                              xl: '14px',
                            }}
                            color={'gray'}
                            fontWeight={'semibold'}
                          >
                            {imgSrc.title}
                          </Text>
                          <Image
                            mx={'auto'}
                            rounded={'sm'}
                            src={imgSrc.imgUrl}
                            layout={'fill'}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                </Box>
              </Box>
              {/* <Text>ProjectInfo {projectId}</Text>{' '} */}
              <ProjectClientInfo projectSrc={projectSrc} theme={theme} />
            </section>
            <section id="contact">
              <Contact theme={theme} />
            </section>
          </Box>
          <Footer theme={theme} />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
};

export default ProjectInfo;
