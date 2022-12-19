import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from '../commons/projects/ProjectsItem';
import AllProjectDetails from '../../assets/dataJson/projectJson.json';

const Projects = ({ theme }) => {
  const allProjectDetails = AllProjectDetails;

  return (
    <>
      {allProjectDetails.length === 0 ? (
        ''
      ) : (
        <div>
          <Box fontFamily={'Montserrat'}>
            <Box mt={20}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={{ base: '', md: 6 }}
                alignItems={'end'}
              >
                <Text
                  fontSize={'26px'}
                  fontWeight={'thin'}
                  letterSpacing={1.1}
                  color={'grey'}
                  textAlign={{ base: 'center', md: 'left' }}
                  mx={6}
                >
                  Some of my{' '}
                  <Text
                    as={'span'}
                    fontWeight={'semibold'}
                    color={theme === 'light' ? '#090909' : '#F2F2F2'}
                  >
                    Projects,{' '}
                    <Text
                      as={'p'}
                      display={{ base: 'none', md: 'block' }}
                    ></Text>
                    Recent Work{' '}
                  </Text>
                </Text>
                <Box
                  textAlign={{ base: 'right', md: 'right' }}
                  mx={{ base: 1, md: 10 }}
                  display={{ base: 'none', md: 'block' }}
                >
                  <Link to={'/Work'}>
                    <Text
                      size={'sm'}
                      bg={'none'}
                      _hover={'none'}
                      _active={'none'}
                      mx={'auto'}
                      color={'#27AE60'}
                      fontWeight={'semibold'}
                    >
                      More Projects &nbsp; <ArrowRightIcon />
                    </Text>
                  </Link>
                </Box>
              </SimpleGrid>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                gap={{ base: '', md: 0 }}
              >
                {allProjectDetails.map((projectItem, index) =>
                  index <= 3 ? (
                    <Box my={3} mx={{ base: 3, md: 0, lg: 0, xl: 0 }}>
                      <ProjectItem
                        key={index}
                        theme={theme}
                        projectIndex={index}
                        imgThumbnail={projectItem.imgThumbnail}
                        title={projectItem.title}
                        type={projectItem.type}
                      />
                    </Box>
                  ) : (
                    <></>
                  )
                )}
              </SimpleGrid>
              <Box
                textAlign={{ base: 'center', md: 'right' }}
                mx={{ base: 1, md: 10 }}
                display={{ base: 'block', md: 'none' }}
              >
                <Link to={'/Work'}>
                  <Text
                    size={'sm'}
                    bg={'none'}
                    _hover={'none'}
                    _active={'none'}
                    mx={'auto'}
                    mt={3}
                    color={'#27AE60'}
                    fontWeight={'semibold'}
                  >
                    More Projects &nbsp; <ArrowRightIcon />
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Projects;
