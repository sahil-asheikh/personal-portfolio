import { Box, Text } from '@chakra-ui/react';

const SkillsItem = ({ theme, skillImage, skilTitle, subSkills }) => {
  return (
    <Box
      as="div"
      my={3}
      mx={{ base: 3, md: 1, lg: 1, xl: 1 }}
      bg={theme === 'light' ? '#FFFFFF' : '#1A2026'}
      transition="all .25s ease-in-out"
      _hover={{ transform: 'translate3d(0px, -15px, 0px)' }}
    >
      <Box
        as="div"
        mx={'auto'}
        my={3}
        p={3}
        borderRadius={'5px'}
        textAlign={'right'}
        background={`url(${skillImage}) no-repeat`}
        backgroundSize={'100%'}
        w={'70px'}
        h={'100px'}
        float={'right'}
      ></Box>
      <Box m={3} overflow={'hidden'}>
        <Text fontSize={'18px'} fontWeight={'semibold'}>
          {skilTitle}
        </Text>
        <Text fontSize={'14px'} color={'grey'} m={1}>
          - {subSkills}
        </Text>
      </Box>
    </Box>
  );
};

export default SkillsItem;
