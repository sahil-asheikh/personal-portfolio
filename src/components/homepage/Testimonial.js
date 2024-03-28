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
          columns={{ base: 1, md: 4 }}
          gap={{ base: '', md: '' }}
          mt={6}
          mb={3}
        >
          {TestimonialJson?.map((testimonialItem, index) => (
            <TestimonialCard
              key={index}
              theme={theme}
              testimonialItem={testimonialItem}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonial;
