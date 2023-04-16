import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/montserrat';
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
            I'm a Full Stack Developer, specializing in
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>{' '}
            <Text
              as={'span'}
              fontWeight={'bold'}
              color={theme === 'light' ? '#010101' : '#F2F2F2'}
            >
              Web, API
            </Text>{' '}
            and{' '}
            <Text
              as={'span'}
              fontWeight={'bold'}
              color={theme === 'light' ? '#010101' : '#F2F2F2'}
            >
              Android Development
            </Text>{' '}
          </Text>
          <ScrolltoMainText title={'Know more about me!'} theme={theme} />
        </Box>
      </Stack>
      <ScrolltoMainBtn />
    </>
  );
};

export default HeroSection;
