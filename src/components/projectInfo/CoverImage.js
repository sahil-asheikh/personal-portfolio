import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CoverImage = ({ projectSrc, theme }) => {
  return (
    <Box my={6}>
      <Box
        background={`url(${projectSrc.imgCover}) no-repeat`}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        rounded={'sm'}
        w={{ base: '', md: '100%', lg: '100%', xl: '100%' }}
        layout={'fill'}
        display={'flex'}
      >
        <Box
          pt={10}
          display={'inline-block'}
          alignSelf={'flex-end'}
          left={0}
          bgGradient={`linear(to-b, transparent, ${
            theme === 'dark' ? '#010101' : '#F2F2F2'
          })`}
          w={'100%'}
        >
          <Text
            fontSize={{ base: '24px', md: '28px', lg: '30px', xl: '32px' }}
            fontWeight={'bold'}
          >
            {projectSrc.title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CoverImage;
