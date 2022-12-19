import React, { useEffect, useState } from 'react';
import Header from '../components/commons/Header';
import {
  Box,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Footer from '../components/commons/Footer';
import ScrollToTop from '../components/commons/ScrollToTop';
import { useParams } from 'react-router-dom';
import CoverImage from '../components/projectInfo/CoverImage';
import ProjectClientInfo from '../components/projectInfo/ProjectClientInfo';
import ProjectJson from '../assets/dataJson/projectJson.json';
import { CheckCircleIcon } from '@chakra-ui/icons';

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ProjectInfo = () => {
  const { projectIndex } = useParams({});
  const projectSrc = ProjectJson[projectIndex];
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
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Header themeToggler={themeToggler} theme={theme} />
          <ScrollToTop theme={theme} />
          <Box
            mx={{ base: 2, md: 10 }}
            pt={{ base: '63px', md: '64px', lg: '64px', xl: '64px' }}
            fontFamily={'Montserrat'}
          >
            <section id="main">
              <Box mx={{ base: 2, md: 10, lg: 20, xl: 40 }}>
                <CoverImage projectSrc={projectSrc} theme={theme} />
                <Box>
                  {projectSrc.about.map((aboutItem, index) => (
                    <Box index={index} my={10}>
                      <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
                        {aboutItem.title}
                      </Text>{' '}
                      {aboutItem.description === '' ? (
                        ''
                      ) : (
                        <Text textAlign={'justify'} fontSize={'16px'} my={5}>
                          {aboutItem.description}
                        </Text>
                      )}
                      {aboutItem.type === 'list' ? (
                        <List spacing={3} mx={3}>
                          {aboutItem.list.map((listItem, index) => (
                            <ListItem index={index}>
                              <ListIcon
                                as={CheckCircleIcon}
                                color="green.500"
                              />
                              {listItem}
                            </ListItem>
                          ))}
                        </List>
                      ) : (
                        ''
                      )}
                      {aboutItem.imgUrl === '' ? (
                        ''
                      ) : (
                        <Image
                          mx={'auto'}
                          rounded={'sm'}
                          src={aboutItem.imgUrl}
                          layout={'fill'}
                        />
                      )}
                    </Box>
                  ))}
                  <Box my={6}>
                    <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
                      Product Design
                    </Text>{' '}
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
                  <Box my={10}>
                    <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
                      {projectSrc.conclusionTitle}
                    </Text>{' '}
                    <Box
                      borderLeftRadius={'5px'}
                      // bg={theme === 'light' ? '#000000' : '#FFFFFF'}
                      bg={'#27ae60'}
                      me={2}
                    >
                      <Text
                        textAlign={'justify'}
                        fontSize={'16px'}
                        my={5}
                        bg={theme === 'light' ? '#F2F2F2' : '#090909'}
                        ms={2}
                        ps={3}
                      >
                        {projectSrc.conclusionDescription}
                      </Text>{' '}
                    </Box>
                  </Box>
                </Box>
                <ProjectClientInfo projectSrc={projectSrc} theme={theme} />
              </Box>
            </section>
          </Box>
          <Footer theme={theme} />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
};

export default ProjectInfo;
