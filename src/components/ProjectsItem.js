import { Box, Text, Center, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectItem = ({ theme, projectIndex, imgThumbnail, title, type }) => {
  return (
    <Center
      py={{ base: 0, md: 6, lg: 6, xl: 6 }}
      w={{ base: '', md: '80%' }}
      mx={'auto'}
      mt={3}
      fontFamily={'Montserrat'}
    >
      <Box
        bg={theme === 'light' ? '#FFFFFF' : '#1A2026'}
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'sm'}
        p={3}
        overflow={'hidden'}
      >
        <Box mt={-6} mx={-6} mb={3}>
          <Image w={'100%'} h={'100%'} src={imgThumbnail} layout={'fill'} />
        </Box>
        <Stack>
          <Link to={'/ProjectInfo/' + projectIndex}>
            <Text fontWeight={'semibold'} fontSize={'16px'}>
              {title} &nbsp;
              <ExternalLinkIcon w={'14px'} h={'14px'} />
            </Text>
          </Link>
          <Text fontWeight={'thin'} fontSize={'12px'} fontStyle={'italic'}>
            #{type}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProjectItem;
