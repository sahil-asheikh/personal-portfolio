import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import FiveStar from '../../assets/images/fiveStars.png';

const Cta = ({ theme }) => {
  return (
    <>
      <Box
        as="div"
        minW={'100%'}
        minH={'300px'}
        mt={3}
        mb={0}
        py={9}
        mx={'auto'}
        bg={theme === 'light' ? '#FFFFFF' : '#090909'}
        textAlign="center"
        display={'flex'}
        alignItems="center"
        left={0}
        right={0}
      >
        <Box as="div" w={'100%'} mx={'auto'}>
          <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'semibold'}>
            Transform your vision into reality
          </Text>
          <Text as={'h1'} fontSize={'20px'} mb={3} fontWeight={'500'}>
            Schedule your free consultation today!
          </Text>
          <Image
            src={FiveStar}
            maxW={'150px'}
            mx="auto"
            objectFit="cover"
            alt="logo"
          />
          <Button
            color={'#FFFFFF'}
            bg={'#27AE60'}
            _hover={'none'}
            fontWeight={'semibold'}
            mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
            my={6}
            borderRadius="none"
          >
            <Link to={'/Contact'}>Get in touch</Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cta;
