import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CoverImage = ({ projectSrc, theme }) => {
  return (
    <Box my={6}>
      <Box
        background={`url(${projectSrc.imgCover}) no-repeat`}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        mx={'auto'}
        rounded={'sm'}
        w={{ base: '', md: '100%', lg: '100%', xl: '100%' }}
        h={{ base: '', md: '360px', lg: '360px', xl: '360px' }}
        layout={'fill'}
        display={'flex'}
      >
        <Box
          pt={20}
          px={{ base: 3, md: 6, lg: 6, xl: 6 }}
          pb={{ base: 3, md: 6, lg: 6, xl: 6 }}
          display={'inline-block'}
          alignSelf={'flex-end'}
          left={0}
          bottom={0}
          bgGradient={`linear(to-b, transparent, ${
            theme === 'dark' ? '#0B0F13' : '#F2F2F2'
          })`}
          w={'100%'}
        >
          <Text
            fontSize={{ base: '24px', md: '28px', lg: '28px', xl: '28px' }}
            fontWeight={'bold'}
          >
            {projectSrc.title}
          </Text>
          <Text color={'grey'}>
            {projectSrc.posted} {projectSrc.views} {projectSrc.avgRead} &nbsp;
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CoverImage;
