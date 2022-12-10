import { Box, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ClientImages from '../../dataJson/clientJson.json';

const Clients = ({ theme }) => {
  const clientImages = ClientImages;

  return (
    <>
      {clientImages.length === 0 ? (
        ''
      ) : (
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
                the companies I have{' '}
                <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
                worked with
              </Text>
            </Text>
            <SimpleGrid
              columns={{ base: 3, md: 6 }}
              gap={{ base: '', md: 0 }}
              my={6}
              alignItems={'center'}
            >
              {clientImages.map((clientImage, index) => (
                <>
                  {clientImage.img === '' ||
                  clientImage.img.length === 0 ||
                  clientImage.img === null ? (
                    <Text
                      display={{
                        base: 'none',
                        md: 'block',
                        lg: 'block',
                        xl: 'block',
                      }}
                    ></Text>
                  ) : (
                    <Link
                      mx={'auto'}
                      _hover={{
                        color: '#27AE60',
                        textDecoration: 'none',
                      }}
                      // target={'_blank'}
                      // href={''}
                    >
                      <Image
                        key={index}
                        src={clientImage.img}
                        alt="Client Image"
                        w={{ base: '60%', md: '60%' }}
                        mx={'auto'}
                        my={3}
                        title={clientImage.name}
                      />
                      {/* <Text
                        fontWeight={'semibold'}
                        px={3}
                        _hover={{ color: '#27AE60', textDecoration: 'none' }}
                        align={'center'}
                      >
                        {clientImage.name}
                      </Text> */}
                    </Link>
                  )}
                </>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Clients;
