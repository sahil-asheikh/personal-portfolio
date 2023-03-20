import React from 'react';
import HeroSection from '../components/work/HeroSection';
import ProjectItems from '../components/work/ProjectItems';
import { useEffect } from 'react';

const Work = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ProjectItems theme={theme} />
    </>
  );
};

export default Work;
