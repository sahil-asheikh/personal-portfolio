import React from 'react';
import {
  Box,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const ProjectGallery = ({ projectSrc, theme }) => {
  return (
    <>
      <Box>
        {projectSrc.about.map((aboutItem, index) => (
          <Box index={index} my={10}>
            <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
              {aboutItem.title}
            </Text>{' '}
            {aboutItem.description === '' ? (
              ''
            ) : (
              <Text textAlign={'justify'} fontSize={'16px'} my={5}>
                {aboutItem.description}
              </Text>
            )}
            {aboutItem.type === 'list' ? (
              <List spacing={3} mx={3}>
                {aboutItem.list.map((listItem, index) => (
                  <ListItem index={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {listItem}
                  </ListItem>
                ))}
              </List>
            ) : (
              ''
            )}
            {aboutItem.imgUrl === '' ? (
              ''
            ) : (
              <Image
                mx={'auto'}
                rounded={'sm'}
                src={aboutItem.imgUrl}
                layout={'fill'}
              />
            )}
          </Box>
        ))}
        <Box my={6}>
          <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
            Product Design
          </Text>{' '}
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
            gap={{ base: '', md: 6 }}
          >
            {projectSrc.projectImages.map((imgSrc, index) => (
              <Box key={index} my={2}>
                <Text
                  my={2}
                  fontSize={{
                    base: '16px',
                    md: '16px',
                    lg: '14px',
                    xl: '14px',
                  }}
                  color={'gray'}
                  fontWeight={'semibold'}
                >
                  {imgSrc.title}
                </Text>
                <Image
                  mx={'auto'}
                  rounded={'sm'}
                  src={imgSrc.imgUrl}
                  layout={'fill'}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box mt={20}>
          <Text fontSize={'22px'} mt={4} mb={2} fontWeight={'bold'}>
            {projectSrc.conclusionTitle}
          </Text>{' '}
          <Box borderLeftRadius={'5px'} bg={'#27ae60'} me={2}>
            <Text
              textAlign={'justify'}
              fontSize={'16px'}
              my={5}
              bg={theme === 'light' ? '#F2F2F2' : '#010101'}
              ms={2}
              ps={3}
            >
              {projectSrc.conclusionDescription}
            </Text>{' '}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectGallery;
