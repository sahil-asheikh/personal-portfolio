import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectClientInfo = ({ projectSrc }) => {
  return (
    <Box>
      {projectSrc.projectLiveUrl === '' ||
      projectSrc.projectLiveUrl === null ||
      projectSrc.projectLiveUrl.length === 0 ? (
        ''
      ) : (
        <Box mt={6} mb={10} w={{ base: '', md: '50%', lg: '50%', xl: '50%' }}>
          <Text fontSize={'16px'}>
            Check out the{' '}
            <Link
              href={projectSrc.projectLiveUrl}
              fontWeight={'bold'}
              target={'_blank'}
              _hover={'none'}
              color={'#27ae60'}
            >
              live demo <ExternalLinkIcon w={'14px'} h={'14px'} />
            </Link>
            .
          </Text>
          <Text fontSize={'16px'}>
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
