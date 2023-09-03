import React from 'react';
import HeroSection from '../components/affiliate/HeroSection';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import AffiliateItems from '../components/affiliate/AffiliateItems';

const Affiliate = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection theme={theme} />
      <Box mx={{ base: 2, md: 10 }}>
        <AffiliateItems theme={theme} />
      </Box>
    </>
  );
};

export default Affiliate;
