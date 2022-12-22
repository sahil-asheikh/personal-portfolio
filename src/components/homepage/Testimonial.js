import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Testimonial = ({ theme }) => {
  return (
    <Box fontFamily={'Montserrat'}>
      <Box my={20}>
        <Text
          fontSize={'26px'}
          fontWeight={'thin'}
          letterSpacing={1.1}
          color={'grey'}
          textAlign={{ base: 'center', md: 'left' }}
          mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
        >
          Here are some{' '}
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#010101' : '#F2F2F2'}
          >
            Testimonials{' '}
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            from my Clients
          </Text>
        </Text>
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
