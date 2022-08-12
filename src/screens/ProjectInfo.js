import { Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectInfo = () => {
  const { projectId } = useParams({});
  return (
    <div>
      ProjectInfo <Text>{projectId}</Text>{' '}
    </div>
  );
};

export default ProjectInfo;
