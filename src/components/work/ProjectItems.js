import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProjectItem from '../commons/projects/ProjectsItem';
import AllProjectDetails from '../../assets/dataJson/projectJson.json';

const ProjectItems = ({ theme }) => {
  return (
    <>
      {AllProjectDetails.length === 0 ? (
        ''
      ) : (
        <>
          <section id="main">
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
              gap={{ base: '', md: 0 }}
              my={20}
              pt={20}
            >
              {AllProjectDetails.map((projectItem, index) => (
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
              ))}
            </SimpleGrid>
          </section>
        </>
      )}
    </>
  );
};

export default ProjectItems;
