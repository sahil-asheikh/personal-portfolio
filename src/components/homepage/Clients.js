import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ClientImages from '../../assets/dataJson/clientJson.json';

const Clients = ({ theme }) => {
  const clientImages = ClientImages;

  return (
    <>
      {clientImages.length === 0 ? (
        ''
      ) : (
        <Box fontFamily={'Montserrat'}>
          <Box my={20}>
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
                    <Image
                      key={index}
                      filter="grayscale(100%)"
                      _hover={{
                        filter: 'none',
                        transition: 'all .25s ease-in-out',
                        transform: 'scale(1.15)',
                      }}
                      src={clientImage.img}
                      alt="Client Image"
                      w={{ base: '60%', md: '60%' }}
                      mx={'auto'}
                      my={3}
                      title={clientImage.name}
                    />
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
