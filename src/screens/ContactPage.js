import React, { useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Contact from '../components/contactPage/Contact';
import HeroSection from '../components/contactPage/HeroSection';

const ContactPage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection theme={theme} />
      <section id="main">
        <Box mx={{ base: 2, md: 10 }}>
          <Stack my={20} pt={20}>
            <Contact theme={theme} />
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default ContactPage;
