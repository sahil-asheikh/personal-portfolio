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
      <Link to={'/ProjectInfo/' + projectIndex}>
        <Box
          bg={theme === 'light' ? '#FFFFFF' : '#090909'}
          maxW={'445px'}
          minH={'310px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'sm'}
          p={3}
          overflow={'hidden'}
          _hover={{
            transition: 'all .25s ease-in-out',
            transform: 'translate3d(0px, -15px, 0px)',
          }}
        >
          <Box mt={-6} mx={-6} mb={3}>
            <Image w={'100%'} h={'100%'} src={imgThumbnail} layout={'fill'} />
          </Box>
          <Stack>
            <Text fontWeight={'semibold'} fontSize={'16px'}>
              {title} &nbsp;
              <ExternalLinkIcon w={'14px'} h={'14px'} />
            </Text>
            {/* <Text fontWeight={'thin'} fontSize={'12px'}>
              #{type}
            </Text> */}
          </Stack>
        </Box>
      </Link>
    </Center>
  );
};

export default ProjectItem;
