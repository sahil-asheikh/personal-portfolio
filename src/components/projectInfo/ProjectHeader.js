import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const ProjectHeader = ({ projectSrc, theme }) => {
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
      <Text textAlign={'justify'} fontSize={'16px'} my={5}>
        {projectSrc.description}
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
        gap={{ base: '', md: 6 }}
      >
        <Box mt={3}>
          <Text color={'gray'} fontWeight={'bold'} fontSize={'20px'}>
            Client
          </Text>
          <Text
            textAlign={'justify'}
            fontSize={'16px'}
            fontWeight={'semibold'}
            my={2}
            letterSpacing={'2px'}
          >
            {projectSrc.client}
          </Text>
        </Box>
        <Box mt={3}>
          <Text color={'gray'} fontWeight={'bold'} fontSize={'20px'}>
            Timeline
          </Text>
          <Text
            textAlign={'justify'}
            fontSize={'16px'}
            fontWeight={'semibold'}
            my={2}
            letterSpacing={'2px'}
          >
            {projectSrc.timeline}
          </Text>
        </Box>
        <Box mt={3}>
          <Text color={'gray'} fontWeight={'bold'} fontSize={'20px'}>
            Work
          </Text>
          <Text
            textAlign={'justify'}
            fontSize={'16px'}
            fontWeight={'semibold'}
            my={2}
            letterSpacing={'2px'}
          >
            {projectSrc.works.map((work, index) => (
              <Text as={'span'} key={index}>
                {work} <br />
              </Text>
            ))}
          </Text>
        </Box>
        <Box mt={3}>
          <Text color={'gray'} fontWeight={'bold'} fontSize={'20px'}>
            Tools Used
          </Text>
          <Text
            textAlign={'justify'}
            fontSize={'16px'}
            fontWeight={'semibold'}
            my={2}
            letterSpacing={'2px'}
          >
            {projectSrc.tools.map((tool, index) => (
              <Text as={'span'} key={index}>
                {tool} <br />
              </Text>
            ))}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProjectHeader;
