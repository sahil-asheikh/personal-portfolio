import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import '@fontsource/montserrat';

const Home = ({ theme, toMain }) => {
  return (
    <Box fontFamily={'Montserrat'}>
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
            I’m a developer specializing in{' '}
            <Text
              as={'span'}
              fontWeight={'bold'}
              color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
            >
              Web, API
            </Text>{' '}
            and <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            <Text
              as={'span'}
              fontWeight={'bold'}
              color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
            >
              Android Development
            </Text>{' '}
          </Text>
          <Text
            fontWeight={'bold'}
            fontStyle={'italic'}
            fontSize={{ base: '16px', md: '18px' }}
          >
            {/* #
            <Text as={'span'} color={'#73A1FB'}>
              Java
            </Text>
            ,  */}
            #
            <Text as={'span'} color={'#00CDF2'}>
              React.Js
            </Text>
            , #
            <Text as={'span'} color={'#67AA3C'}>
              SpringBoot
            </Text>
            , #
            {/* <Text as={'span'} color={'#EAD41C'}>
              JavaScript
            </Text>
            , # */}
            <Text as={'span'} color={'#3BD17E'}>
              Android
            </Text>
          </Text>
        </Box>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
      >
        <Text mx={'auto'} my={[6, 4, 2]}>
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              toMain &&
                toMain.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
            }}
          >
            <BsChevronDown />
          </a>
        </Text>
      </Stack>
    </Box>
  );
};

export default Home;
