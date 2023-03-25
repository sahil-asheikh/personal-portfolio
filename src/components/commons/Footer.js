import { Box, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = ({ theme }) => {
  return (
    <Box
      fontFamily={'Montserrat'}
      px={{ base: 2, md: 10 }}
      mt={0}
      py={10}
      bg={theme === 'light' ? '#FFFFFF' : '#090909'}
      w={'100%'}
    >
      <Text
        fontSize={'18px'}
        fontWeight={'thin'}
        letterSpacing={1.1}
        color={'grey'}
        textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
        mx={6}
      >
        Thanks for visiting my porifolio{' '}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: '', md: 6 }}
          // alignItems={'end'}
        >
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#010101' : '#F2F2F2'}
          >
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            <Link href="/" _hover={{ color: '#27AE60' }}>
              Sahil Sheikh{' '}
            </Link>
          </Text>
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#010101' : '#F2F2F2'}
            textAlign={{
              base: 'center',
              md: 'right',
              lg: 'right',
              xl: 'right',
            }}
          >
            <Link
              href="https://www.linkedin.com/in/sahilsheikh-dev/"
              _hover={{ color: '#0072b1' }}
              target={'_blank'}
            >
              LinkedIn
            </Link>{' '}
            &nbsp;&nbsp;&nbsp;
            <Link
              href="https://www.youtube.com/c/IamSahilSheikh"
              _hover={{ color: 'red' }}
              target={'_blank'}
            >
              YouTube
            </Link>{' '}
            &nbsp;&nbsp;&nbsp;
            <Link
              href="https://instagram.com/sahilsheikh.dev"
              _hover={{ color: '#bc2a8d' }}
              target={'_blank'}
            >
              Instagram
            </Link>{' '}
            &nbsp;&nbsp;&nbsp;
          </Text>
        </SimpleGrid>
      </Text>
    </Box>
  );
};

export default Footer;
