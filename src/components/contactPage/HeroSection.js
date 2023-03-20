import { Box, Link, Stack, Text } from '@chakra-ui/react';
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
            Feel free to send me an &nbsp;
            <Link
              href="mailto: sahilasheikh.dev@gmail.com"
              style={{ color: '#4267B2', fontWeight: 'bold' }}
              _hover={{ textDecoration: 'none' }}
            >
              Email
            </Link>
            &nbsp;or&nbsp;
            <br />
            <Link
              href="https://wa.me/+918766509387"
              style={{ color: '#27AE60', fontWeight: 'bold' }}
              _hover={{ textDecoration: 'none' }}
              target={'_blank'}
            >
              WhatsApp
            </Link>
            &nbsp;me at any given time
          </Text>
          <ScrolltoMainText title={'Start a Project'} theme={theme} />
        </Box>
      </Stack>
      <ScrolltoMainBtn />
    </>
  );
};

export default HeroSection;
