import { ChevronRightIcon } from '@chakra-ui/icons';
import { Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectThumbnailText = ({
  theme,
  projectIndex,
  title,
  shortDescription,
  type,
  works,
}) => {
  return (
    <Stack
      px={{ base: 3, md: 6, lg: 6, xl: 6 }}
      py={6}
      mx={{ base: 0, md: 3, lg: 3, xl: 3 }}
      mt={'auto'}
    >
      <Text fontSize={'16px'} mb={6}>
        {type}
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
          border={theme === 'light' ? '1px solid #1A1A1A' : '1px solid #FFFFFF'}
          borderRadius={'15px'}
        >
          View Work &nbsp;
          <ChevronRightIcon w={'16px'} h={'16px'} />
        </Text>
      </Link>
    </Stack>
  );
};

export default ProjectThumbnailText;
