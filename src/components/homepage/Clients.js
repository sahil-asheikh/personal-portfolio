import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ClientImages from '../../assets/dataJson/clientJson.json';
import SectionHeading from '../commons/SectionHeading';

const Clients = ({ theme }) => {
  const clientImages = ClientImages;

  return (
    <>
      {clientImages.length === 0 ? (
        ''
      ) : (
        <Box pt={'1px'}>
          <Box my={20} pt={0}>
            <SectionHeading
              theme={theme}
              initialHeading={'Some of'}
              highligtedText={' the companies I have'}
              summaryText={'developed for'}
            />
            <SimpleGrid
              columns={{ base: 3, md: 6 }}
              gap={{ base: '', md: 0 }}
              my={6}
              alignItems={{ base: 'center', md: 'start' }}
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
                      mx={{ base: 'auto', md: '0' }}
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
