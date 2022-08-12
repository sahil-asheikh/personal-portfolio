import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Contact = ({ theme }) => {
  return (
    <Box fontFamily={'Montserrat'}>
      <Text
        fontSize={'26px'}
        fontWeight={'thin'}
        letterSpacing={1.1}
        color={'grey'}
        textAlign={{ base: 'center', md: 'left' }}
        mx={6}
      >
        I'd love to work with you,{' '}
        <Text
          as={'span'}
          fontWeight={'semibold'}
          color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
        >
          <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
          Contact Now{' '}
        </Text>
      </Text>
    </Box>
  );
};

export default Contact;
