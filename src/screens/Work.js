import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { BsChevronDown } from 'react-icons/bs';
import ProjectItem from '../components/ProjectsItem';

const StyledApp = styled.div``;

const Work = () => {
  const allProjectDetails = [
    {
      projectId: 1,
      imageSrc:
        'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Android Application',
    },
    {
      projectId: 2,
      imageSrc:
        'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Company Landing Page',
    },
    {
      projectId: 3,
      imageSrc:
        'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Product Landing Page',
    },
    {
      projectId: 4,
      imageSrc:
        'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Web Portfolio',
    },
    {
      projectId: 5,
      imageSrc:
        'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Android Application',
    },
    {
      projectId: 6,
      imageSrc:
        'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Company Landing Page',
    },
    {
      projectId: 7,
      imageSrc:
        'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Product Landing Page',
    },
    {
      projectId: 8,
      imageSrc:
        'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Project Title',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Web Portfolio',
    },
  ];

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
        <ScrollToTop theme={theme} />
        <Box>
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
                All my projects in one place{' '}
                <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
                <Text
                  as={'span'}
                  fontWeight={'bold'}
                  color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
                >
                  Recent Projects
                </Text>{' '}
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
        </Box>
        <section id="main">
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            gap={{ base: '', md: 0 }}
            mx={{ base: 2, md: 10 }}
            my={20}
            pt={20}
          >
            {allProjectDetails.map((projectItem, index) => (
              <Box my={3} mx={{ base: 3, md: 0, lg: 0, xl: 0 }}>
                <ProjectItem
                  key={index}
                  theme={theme}
                  projectId={projectItem.projectId}
                  imageSrc={projectItem.imageSrc}
                  title={projectItem.title}
                  description={projectItem.description}
                  type={projectItem.type}
                />
              </Box>
            ))}
          </SimpleGrid>
        </section>
        <Footer theme={theme} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default Work;