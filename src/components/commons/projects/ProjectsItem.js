import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import ProjectThumbnailText from './ProjectThumbnailText';
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
                <ProjectThumbnail imgThumbnail={imgThumbnail} />
                <ProjectThumbnailText
                  theme={theme}
                  projectIndex={projectIndex}
                  title={title}
                  shortDescription={shortDescription}
                  type={type}
                  works={works}
                />
              </>
            ) : (
              <>
                <ProjectThumbnailText
                  theme={theme}
                  projectIndex={projectIndex}
                  title={title}
                  shortDescription={shortDescription}
                  type={type}
                  works={works}
                />
                <ProjectThumbnail imgThumbnail={imgThumbnail} />
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
          <ProjectThumbnail imgThumbnail={imgThumbnail} />
          <ProjectThumbnailText
            theme={theme}
            projectIndex={projectIndex}
            title={title}
            shortDescription={shortDescription}
            type={type}
            works={works}
          />
        </Box>
      </Box>
      {/* </Link> */}
    </Center>
  );
};

export default ProjectItem;
