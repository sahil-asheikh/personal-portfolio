import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text, Center, Stack, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectItem = ({
  theme,
  projectIndex,
  imgThumbnail,
  title,
  shortDescription,
  type,
  works,
}) => {
  return (
    <Center
      py={{ base: 0, md: 6, lg: 6, xl: 6 }}
      w={{ base: '', md: '80%' }}
      mx={'auto'}
      mt={3}
      fontFamily={'Montserrat'}
    >
      {/* <Link to={'/ProjectInfo/' + projectIndex}> */}
      <Box
        bg={theme === 'light' ? '#FFFFFF' : '#1A1A1A'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'xl'}
        p={3}
        overflow={'hidden'}
      >
        {/* _hover={{
          transition: 'all .25s ease-in-out',
          transform: 'translate3d(0px, -15px, 0px)',
        }} */}
        {/* FOR LARGE SCREENS */}
        <Box
          display={{
            base: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
            gap={{ base: '', md: 0 }}
          >
            {projectIndex === 0 || projectIndex % 2 === 0 ? (
              <>
                <Box>
                  <Image
                    w={'100%'}
                    h={'100%'}
                    src={imgThumbnail}
                    layout={'fill'}
                    rounded={'xl'}
                  />
                </Box>
                <Stack p={6} mx={3} mt={'auto'}>
                  <Text fontSize={'16px'} mb={6}>
                    #{type}
                  </Text>
                  <Text fontWeight={'semibold'} fontSize={'18px'}>
                    {title}
                  </Text>
                  <Text fontSize={'16px'}>{shortDescription}</Text>
                  <Text fontSize={'16px'} mt={6}>
                    {works[0]}
                  </Text>
                  <Link to={'/ProjectInfo/' + projectIndex}>
                    <Text
                      w={'100%'}
                      maxW={'200px'}
                      mt={6}
                      align={'center'}
                      fontWeight={'semibold'}
                      fontSize={'18px'}
                      border={
                        theme === 'light'
                          ? '1px solid #1A1A1A'
                          : '1px solid #FFFFFF'
                      }
                      borderRadius={'15px'}
                    >
                      View Work &nbsp;
                      <ChevronRightIcon w={'16px'} h={'16px'} />
                    </Text>
                  </Link>
                </Stack>
              </>
            ) : (
              <>
                <Stack p={6} mx={3} mt={'auto'}>
                  <Text fontSize={'16px'} mb={6}>
                    #{type}
                  </Text>
                  <Text fontWeight={'semibold'} fontSize={'18px'}>
                    {title}
                  </Text>
                  <Text fontSize={'16px'}>{shortDescription}</Text>
                  <Text fontSize={'16px'} mt={6}>
                    {works[0]}
                  </Text>
                  <Link to={'/ProjectInfo/' + projectIndex}>
                    <Text
                      w={'100%'}
                      maxW={'200px'}
                      mt={6}
                      align={'center'}
                      fontWeight={'semibold'}
                      fontSize={'18px'}
                      border={'1px solid #FFFFFF'}
                      borderRadius={'15px'}
                    >
                      View Work &nbsp;
                      <ChevronRightIcon w={'16px'} h={'16px'} />
                    </Text>
                  </Link>
                </Stack>
                <Box>
                  <Image
                    w={'100%'}
                    h={'100%'}
                    src={imgThumbnail}
                    layout={'fill'}
                    rounded={'xl'}
                  />
                </Box>
              </>
            )}
          </SimpleGrid>
        </Box>

        {/* FOR MOBILE SCREENS */}
        <Box
          display={{
            base: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          }}
        >
          <Box>
            <Image
              w={'100%'}
              h={'100%'}
              src={imgThumbnail}
              layout={'fill'}
              rounded={'xl'}
            />
          </Box>
          <Stack p={6} mx={3} mt={'auto'}>
            <Text fontSize={'16px'} mb={6}>
              #{type}
            </Text>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              {title}
            </Text>
            <Text fontSize={'16px'}>{shortDescription}</Text>
            <Text fontSize={'16px'} mt={6}>
              {works[0]}
            </Text>
            <Link to={'/ProjectInfo/' + projectIndex}>
              <Text
                w={'100%'}
                maxW={'200px'}
                mt={6}
                align={'center'}
                fontWeight={'semibold'}
                fontSize={'18px'}
                border={'1px solid #FFFFFF'}
                borderRadius={'15px'}
              >
                View Work &nbsp;
                <ChevronRightIcon w={'16px'} h={'16px'} />
              </Text>
            </Link>
          </Stack>
        </Box>
      </Box>
      {/* </Link> */}
    </Center>
  );
};

export default ProjectItem;
