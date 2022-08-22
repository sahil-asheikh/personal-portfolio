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

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ProjectInfo = () => {
  const { projectId } = useParams({});
  const projectSrc = {
    imgCover:
      'https://images.pexels.com/photos/1233258/pexels-photo-1233258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Landing Page for a Burger Shop',
    projectLiveUrl: 'https://www.linkedin.com/in/sahilsk-dev/',
    posted: 'Feb 2022',
    views: '1159 views',
    avgRead: '2 min read',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    projectImages: [
      {
        title: 'Image Title Enter Here',
        imgUrl:
          'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Image Title Enter Here',
        imgUrl:
          'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Image Title Enter Here',
        imgUrl:
          'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Image Title Enter Here',
        imgUrl:
          'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
    client: "Burger's Way Pvt. Ltd.",
    timeline: 'January 2022 - February 2022',
    works: ['UI/UX Designing', 'Brand Landing Page', 'Product Landing Pages'],
    tools: ['HTML, CSS, JavaScript', 'Bootstrap', 'Material UI'],
  };
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
