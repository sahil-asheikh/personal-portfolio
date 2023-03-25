import React from 'react';
import HeroSection from '../components/work/HeroSection';
import ProjectItems from '../components/work/ProjectItems';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const Work = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Box mx={{ base: 2, md: 10 }}>
        <ProjectItems theme={theme} />
      </Box>
    </>
  );
};

export default Work;
