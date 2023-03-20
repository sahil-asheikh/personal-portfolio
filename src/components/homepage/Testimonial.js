import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import SectionHeading from '../commons/SectionHeading';

const Testimonial = ({ theme }) => {
  return (
    <Box fontFamily={'Montserrat'}>
      <Box my={20}>
        <SectionHeading
          theme={theme}
          initialHeading={'What my'}
          highligtedText={'Client Says'}
          summaryText={'(Testimonials)'}
        />
        <SimpleGrid
          columns={{ base: 3, md: 6 }}
          gap={{ base: '', md: 0 }}
          my={6}
          alignItems={'center'}
        ></SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonial;
