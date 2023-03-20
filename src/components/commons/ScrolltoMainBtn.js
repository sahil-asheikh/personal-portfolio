import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const ScrolltoMainBtn = () => {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
      >
        <Text mx={'auto'} my={[6, 4, 2]}>
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
            <BsChevronDown />
          </a>
        </Text>
      </Stack>
    </>
  );
};

export default ScrolltoMainBtn;
