import '../assets/css/style.css';
import React from 'react';
import Projects from '../components/homepage/Projects';
import HeroSection from '../components/homepage/HeroSection';
import Clients from '../components/homepage/Clients';
import Skills from '../components/homepage/Skills';
import AboutMe from '../components/homepage/AboutMe';
import { useEffect } from 'react';
// import Testimonial from '../components/homepage/Testimonial';
// import Cta from '../components/commons/Cta';

const Homepage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection theme={theme} />
      <section id="main">
        <AboutMe theme={theme} />
        <Clients theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        {/* <Testimonial theme={theme} /> */}
      </section>
      {/* <Cta /> */}
    </>
  );
};

export default Homepage;
