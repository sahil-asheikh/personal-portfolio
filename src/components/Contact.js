import { Box, Button, Checkbox, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Contact = ({ theme }) => {
  return (
    <Box fontFamily={'Montserrat'}>
      <Box pt={20}>
        <Text
          fontSize={'26px'}
          fontWeight={'thin'}
          letterSpacing={1.1}
          color={'grey'}
          textAlign={{ base: 'center', md: 'left' }}
          mx={6}
        >
          Let's start a new project together,{' '}
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
          >
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            Contact Now{' '}
          </Text>
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
          gap={{ base: '', md: 10, lg: 10, xl: 10 }}
          mx={{ base: 3, md: 6, lg: 6, xl: 6 }}
        >
          <Box mt={7}>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              Please enter your personal details,
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              Name: <br />
              <input
                id="clientName"
                type="text"
                placeholder="Robert Downey Jr."
                fontWeight={'semibold'}
              />
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              Phone:{' '}
              <input
                id="clientPhone"
                type="tel"
                placeholder="+1 1234567890"
                fontWeight={'semibold'}
                pattern={'[0-9]'}
              />
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              E-mail:{' '}
              <input
                id="clientEmail"
                type="email"
                placeholder="rd.jr@gmail.com"
                fontWeight={'semibold'}
              />
            </Text>
          </Box>
          <Box mt={7}>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              Please enter your project details.
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              Project Name:{' '}
              <input
                id="clientProjectName"
                type="text"
                placeholder="My Project"
                fontWeight={'semibold'}
              />
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              <Text as={'span'} verticalAlign={'top'}>
                Project Description:{' '}
              </Text>
              <textarea
                id="clientProjectDescription"
                placeholder="Describe your project in few lines"
                rows={4}
                fontWeight={'semibold'}
              />
            </Text>
          </Box>
          <Box mt={{ base: 7, md: 0, lg: 0, xl: 0 }}>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              What do you want to work on?
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              <Checkbox my={1} colorScheme="green" value={'Portfolio Design'}>
                Portfolio Design
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={1}
                colorScheme="green"
                value={'Landing Page Design'}
              >
                Landing Page Design
              </Checkbox>{' '}
              <br />
              <Checkbox my={1} colorScheme="green" value={'Management Tools'}>
                Management Tools
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={1}
                colorScheme="green"
                value={'Android Application'}
              >
                Android Application
              </Checkbox>{' '}
              <br />
              <Checkbox my={1} colorScheme="green" value={'Other'}>
                Other
              </Checkbox>{' '}
              <br />
            </Text>
          </Box>
          <Box mt={{ base: 7, md: 0, lg: 0, xl: 0 }}>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              What is your budget for the project?
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              <Checkbox
                my={1}
                colorScheme="green"
                value={'Less than 10,000 INR'}
              >
                Less than 10,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={1}
                colorScheme="green"
                value={'10,000 INR to 20,000 INR'}
              >
                10,000 INR to 20,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={1}
                colorScheme="green"
                value={'20,000 INR to 50,000 INR'}
              >
                20,000 INR to 50,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={1}
                colorScheme="green"
                value={'50,000 INR to 1,00,000 INR'}
              >
                50,000 INR to 1,00,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={1}
                colorScheme="green"
                value={'More than 1,00,000 INR'}
              >
                More than 1,00,000 INR
              </Checkbox>{' '}
              <br />
            </Text>
          </Box>
        </SimpleGrid>
        <Box textAlign={'left'} mx={{ base: 3, md: 6, lg: 6, xl: 6 }}>
          <Button
            // size={'sm'}
            color={'#FFFFFF'}
            bg={'#27AE60'}
            _hover={'none'}
            fontWeight={'semibold'}
            mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
            my={6}
            borderRadius="none"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
