import {
  Box,
  Text,
  Center,
  Image,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import React from 'react';
// import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const AffiliateItem = ({
  theme,
  imgThumbnail,
  title,
  description,
  amazonUrl,
  flipkartUrl,
}) => {
  return (
    <Center
      py={{ base: 0, md: 6, lg: 6, xl: 6 }}
      w={{ base: '', md: '80%' }}
      mx={'auto'}
      mt={3}
      fontFamily={'Montserrat'}
    >
      <Box
        bg={theme === 'light' ? '#FFFFFF' : '#090909'}
        maxW={'100%'}
        minH={'310px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'sm'}
        //   p={3}
        overflow={'hidden'}
        //   _hover={{
        //     transition: 'all .25s ease-in-out',
        //     transform: 'translate3d(0px, -15px, 0px)',
        //   }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
          gap={{ base: '', md: 0 }}
          my={3}
          // pt={20}
        >
          <Box mx={6} alignSelf={'center'}>
            <Image
              w={'80%'}
              h={'80%'}
              maxH={'1000px'}
              src={imgThumbnail}
              layout={'fill'}
            />
          </Box>
          <Box
            py={{ base: 3, md: 9, lg: 9, xl: 9 }}
            textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
            alignSelf={'center'}
            mx={2}
          >
            <>
              <Text fontWeight={'bold'} fontSize={'16px'}>
                {title}
              </Text>
              <Text fontSize={'14px'}>{description}</Text>
              <Box mt={3}>
                {amazonUrl === null || amazonUrl === '' ? (
                  ''
                ) : (
                  <Link
                    href={amazonUrl}
                    target={'_blank'}
                    color={'#ff9900'}
                    w={'80%'}
                    _hover={'none'}
                    fontWeight={'bold'}
                    my={2}
                    borderRadius="none"
                  >
                    Amazon Link &nbsp;&nbsp;&nbsp;
                    <ExternalLinkIcon />
                  </Link>
                )}
                <br />
                {flipkartUrl === null || flipkartUrl === '' ? (
                  ''
                ) : (
                  <Link
                    href={flipkartUrl}
                    target={'_blank'}
                    color={'#047BD5'}
                    w={'80%'}
                    _hover={'none'}
                    fontWeight={'bold'}
                    my={2}
                    borderRadius="none"
                  >
                    Flipkart Link &nbsp;&nbsp;&nbsp;&nbsp;
                    <ExternalLinkIcon />
                  </Link>
                )}
              </Box>
            </>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default AffiliateItem;
