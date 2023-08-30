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
        <Box
          my={{ base: 'auto', md: 3 }}
          mx={'auto'}
          textAlign={'center'}
          pt={{ base: 'auto', md: '100px', lg: '150px', xl: '150px' }}
        >
          <Text
            fontSize={{ base: '20px', md: '40px' }}
            fontWeight={'light'}
            fontFamily={'Montserrat'}
            color={'grey'}
          >
            Want to know what I use to code?
            {/* <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            worked on thoughout my entire development career. */}
          </Text>
          <ScrolltoMainText title={'Check Out Now !'} theme={theme} />
        </Box>
      </Stack>
      <ScrolltoMainBtn />
    </>
  );
};

export default HeroSection;
