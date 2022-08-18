import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectsItem';

const Projects = ({ theme }) => {
  const allProjectDetails = [
    {
      projectId: 1,
      imageSrc:
        'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Kanban-Board - Project Management Tool',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Web Application',
    },
    {
      projectId: 2,
      imageSrc:
        'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Landing Page for a Burger Shop',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Product Landing Page',
    },
    {
      projectId: 3,
      imageSrc:
        'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Digital Portfolio for Miss. Ishika Rangari',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Web Portfolio',
    },
    {
      projectId: 4,
      imageSrc:
        'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Digital Portfolio for Mr. Mustaquim Khan',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod.',
      type: 'Web Portfolio',
    },
  ];
  return (
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
              Some of my projects -{' '}
              <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
              <Text
                as={'span'}
                fontWeight={'semibold'}
                color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
              >
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
            {allProjectDetails.map((projectItem, index) => (
              <Box my={3} mx={{ base: 3, md: 0, lg: 0, xl: 0 }}>
                <ProjectItem
                  key={index}
                  theme={theme}
                  projectId={projectItem.projectId}
                  imageSrc={projectItem.imageSrc}
                  title={projectItem.title}
                  description={projectItem.description}
                  type={projectItem.type}
                />
              </Box>
            ))}
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
  );
};

export default Projects;
