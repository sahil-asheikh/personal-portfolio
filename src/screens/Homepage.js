import '../assets/css/style.css';
import React from 'react';
import Projects from '../components/homepage/Projects';
import HeroSection from '../components/homepage/HeroSection';
import Skills from '../components/homepage/Skills';
import AboutMe from '../components/homepage/AboutMe';
import { useEffect } from 'react';
import Testimonial from '../components/homepage/Testimonial';
import Cta from '../components/commons/Cta';
import { Box } from '@chakra-ui/react';

const Homepage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection theme={theme} />
      <section id="main">
        <Box mx={{ base: 2, md: 10 }}>
          <AboutMe theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Testimonial theme={theme} />
        </Box>
      </section>
      <Cta theme={theme} />
    </>
  );
};

export default Homepage;
