import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ScrolltoMainBtn from '../commons/ScrolltoMainBtn';
import ScrolltoMainText from '../commons/ScrolltoMainText';

const HeroSection = ({ theme }) => {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        h={{ base: '80vh', md: '80vh', lg: '80vh', xl: '80vh' }}
      >
        <Box my={{ base: 'auto', md: 3 }} mx={'auto'} textAlign={'center'}>
          <Text
            fontSize={{ base: '20px', md: '40px' }}
            fontWeight={'light'}
            fontFamily={'Montserrat'}
            color={'grey'}
          >
            This page includes most of the projects I have
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            worked on thoughout my entire development career.
          </Text>
          <ScrolltoMainText title={'Recent Project'} theme={theme} />
        </Box>
      </Stack>
      <ScrolltoMainBtn />
    </>
  );
};

export default HeroSection;
