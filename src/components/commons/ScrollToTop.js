import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTop = () => {
  const [scrollCheck, setScrollCheck] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollCheck(true);
    } else {
      setScrollCheck(false);
    }
  }

  return (
    <div>
      {scrollCheck ? (
        <Box
          overflow="hidden"
          background-color="#333"
          position="fixed"
          width="95%"
          fontFamily={'Montserrat'}
        >
          <Button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            position={'fixed'}
            bottom={'20px'}
            right={'15px'}
            z-index={'99'}
            border={'none'}
            outline={'none'}
            cursor={'pointer'}
            border-radius={'4px'}
            bg={'none'}
            _hover={'none'}
            _active={'none'}
            p={0}
          >
            <BsArrowUpCircleFill color="#27AE60" size={'lg'} />
          </Button>
        </Box>
      ) : (
        ''
      )}
    </div>
  );
};

export default ScrollToTop;
