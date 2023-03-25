import { Box, Text } from '@chakra-ui/react';

const SkillsItem = ({ theme, skillItem }) => {
  return (
    <Box
      as="div"
      my={3}
      mx={{ base: 3, md: 1, lg: 1, xl: 1 }}
      fontFamily={'Montserrat'}
      bg={theme === 'light' ? '#FFFFFF' : '#090909'}
      _hover={{
        transition: 'all .25s ease-in-out',
        transform: 'translate3d(0px, -15px, 0px)',
      }}
    >
      <Box
        as="div"
        mx={'auto'}
        my={3}
        p={3}
        borderRadius={'5px'}
        textAlign={'right'}
        background={`url(${skillItem.logo}) no-repeat`}
        backgroundSize={'100%'}
        w={'70px'}
        h={'100%'}
        maxH={'100px'}
        float={'right'}
      ></Box>
      <Box m={3} overflow={'hidden'}>
        <Text fontSize={'20px'} fontWeight={'semibold'}>
          {skillItem.skillTitle}
        </Text>
        <Text fontSize={'14px'} color={'grey'} m={1} mb={6}>
          - {skillItem.subSkills}
        </Text>
      </Box>
      <Box m={3}>
        <Text fontSize={'16px'} m={1} textAlign="justify">
          {skillItem.description}
        </Text>
      </Box>
    </Box>
  );
};

export default SkillsItem;
