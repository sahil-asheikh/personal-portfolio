import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from '../commons/projects/ProjectsItem';
import AllProjectDetails from '../../assets/dataJson/projectJson.json';
import SectionHeading from '../commons/SectionHeading';

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
                <SectionHeading
                  theme={theme}
                  initialHeading={'Some of my'}
                  highligtedText={'Projects,'}
                  summaryText={'(Recent Work)'}
                />
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
              {allProjectDetails.length <= 4 ? (
                ''
              ) : (
                <Box textAlign={'center'} mx={{ base: 1, md: 10 }}>
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
              )}
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Projects;
