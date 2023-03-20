import React from 'react';
import { Text } from '@chakra-ui/react';

const ScrolltoMainText = ({ title, theme }) => {
  return (
    <>
      <Text
        fontSize={{ base: '20px', md: '40px' }}
        fontFamily={'Montserrat'}
        fontWeight={'bold'}
        color={theme === 'light' ? '#010101' : '#F2F2F2'}
        mt={20}
      >
        <a
          href="/"
          onClick={e => {
            let hero = document.getElementById('main');
            e.preventDefault();
            hero &&
              hero.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
          }}
        >
          {title}
        </a>
      </Text>
    </>
  );
};

export default ScrolltoMainText;
