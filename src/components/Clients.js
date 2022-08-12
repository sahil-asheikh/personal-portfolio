import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import MicrosoftLogo from '../images/clients/MicrosoftLogo.png';
import GoogleLogo from '../images/clients/GoogleLogo.png';

const Clients = ({ theme }) => {
  const clientImages = [
    MicrosoftLogo,
    GoogleLogo,
    MicrosoftLogo,
    GoogleLogo,
    MicrosoftLogo,
    GoogleLogo,
  ];

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
          Some of{' '}
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
          >
            the clients I have{' '}
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            developed for
          </Text>
        </Text>
        <SimpleGrid
          columns={{ base: 3, md: 6 }}
          gap={{ base: '', md: 6 }}
          my={6}
          alignItems={'center'}
        >
          {clientImages.map((clientImage, index) => (
            <>
              {clientImage === null ? (
                <Text></Text>
              ) : (
                <Image
                  key={index}
                  src={clientImage}
                  alt="Client Image"
                  w={{ base: '70%', md: '70%' }}
                  mx={'auto'}
                  my={3}
                  // filter={{ base: '', md: 'grayscale(100%)' }}
                  // _hover={{ filter: 'none' }}
                />
              )}
            </>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Clients;
