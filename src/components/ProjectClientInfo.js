import { Box, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectClientInfo = ({ projectSrc, theme }) => {
  return (
    <Box mt={20}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
        gap={{ base: '', md: 6 }}
        mx={{ base: 3, md: 6, lg: 6, xl: 6 }}
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
          >
            {projectSrc.tools.map((tool, index) => (
              <Text as={'span'} key={index}>
                {tool} <br />
              </Text>
            ))}
          </Text>
        </Box>
      </SimpleGrid>
      {projectSrc.projectLiveUrl === '' ||
      projectSrc.projectLiveUrl === null ||
      projectSrc.projectLiveUrl.length === 0 ? (
        ''
      ) : (
        <Box
          mx={{ base: 3, md: 6, lg: 6, xl: 6 }}
          mt={6}
          mb={10}
          w={{ base: '', md: '50%', lg: '50%', xl: '50%' }}
        >
          <Text fontSize={'14px'}>
            Check out the{' '}
            <Link
              href={projectSrc.projectLiveUrl}
              fontWeight={'bold'}
              target={'_blank'}
              _hover={'none'}
            >
              live website
            </Link>
            .
          </Text>
          <Text fontSize={'14px'}>
            Note: The website may not look exactly the same on the live version
            due to incremental QoL and other updates due to business
            requirements.
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ProjectClientInfo;
