import { Box, Text, Center, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectItem = ({
  theme,
  projectId,
  imageSrc,
  title,
  description,
  type,
}) => {
  return (
    <Center
      py={{ base: 0, md: 6, lg: 6, xl: 6 }}
      w={{ base: '', md: '80%' }}
      mx={'auto'}
      mt={3}
    >
      <Box
        bg={theme === 'light' ? '#FFFFFF' : '#1A2026'}
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={3}
        overflow={'hidden'}
      >
        <Box mt={-6} mx={-6} mb={3}>
          <Image src={imageSrc} layout={'fill'} />
        </Box>
        <Stack>
          <Link to={'/ProjectInfo/' + projectId}>
            <Text fontWeight={'semibold'} fontSize={'16px'}>
              {title} &nbsp;
              <ExternalLinkIcon w={'14px'} h={'14px'} />
            </Text>
          </Link>
          {/* <Text
            color={'gray'}
            fontSize={'16px'}
            textAlign={'justify'}
            fontWeight={'light'}
          >
            {description}
          </Text> */}
          <Text fontWeight={'thin'} fontSize={'12px'} fontStyle={'italic'}>
            #{type}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProjectItem;
