import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const AboutMe = ({ theme }) => {
  return (
    <Box fontFamily={'Montserrat'}>
      <Box my={20} pt={20}>
        <Text
          fontSize={'26px'}
          fontWeight={'thin'}
          letterSpacing={1.1}
          color={'grey'}
          textAlign={{ base: 'center', md: 'left' }}
          mx={6}
        >
          Here is{' '}
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#090909' : '#F2F2F2'}
          >
            some Description,{' '}
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            {'('}About Me{')'}
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

export default AboutMe;
