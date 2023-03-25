import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import SectionHeading from '../commons/SectionHeading';
import TestimonialJson from '../../assets/dataJson/Testimonial.json';
import TestimonialCard from '../testimonial/TestimonialCard';

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
          columns={{ base: 1, md: 1 }}
          gap={{ base: '', md: 0 }}
          my={6}
          alignItems={'center'}
        >
          {TestimonialJson?.map((testimonialItem, index) => (
            <TestimonialCard theme={theme} testimonialItem={testimonialItem} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonial;
