import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const ProjectThumbnail = ({ imgThumbnail }) => {
  return (
    <Box>
      <Image
        w={'100%'}
        h={'100%'}
        src={imgThumbnail}
        layout={'fill'}
        rounded={'xl'}
      />
    </Box>
  );
};

export default ProjectThumbnail;
