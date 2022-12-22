import { Box, IconButton, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ProfilePic from '../../assets/images/profile.png';
import LinkedInDark from '../../assets/images/linkedinDark.png';
import LinkedinLight from '../../assets/images/linkedinLight.png';
import InstagramDark from '../../assets/images/instagramDark.png';
import InstagramLight from '../../assets/images/instagramLight.png';
import YoutubeDark from '../../assets/images/youtubeDark.png';
import YoutubeLight from '../../assets/images/youtubeLight.png';

const AboutMe = ({ theme }) => {
  return (
    <Box fontFamily={'Montserrat'}>
      <Box my={20} pt={20}>
        {/* <Text
          fontSize={'26px'}
          fontWeight={'thin'}
          letterSpacing={1.1}
          color={'grey'}
          textAlign={{ base: 'center', md: 'left' }}
          mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
        >
          Here is{' '}
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#010101' : '#F2F2F2'}
          >
            some Description,{' '}
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            {'('}About Me{')'}
          </Text>
        </Text> */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
          gap={{ base: 1, md: 2, lg: 2, xl: 2 }}
          my={6}
          alignItems={'center'}
        >
          <Box
            letterSpacing={1.1}
            color={'grey'}
            textAlign={{ base: 'center', md: 'left' }}
            mx={'auto'}
            mt={6}
            bg={'red'}
          >
            <Image
              w={'100%'}
              h={'100%'}
              layout={'fill'}
              maxWidth={'500px'}
              src={ProfilePic}
              alt="logo"
            />
          </Box>
          <Box
            letterSpacing={1.1}
            textAlign={{ base: 'center', md: 'left' }}
            mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
            mt={6}
          >
            <Text
              fontSize={{ base: '26px', md: '26px', lg: '26px', xl: '26px' }}
              fontWeight={'bold'}
              letterSpacing={1.1}
              color={'grey'}
              textAlign={{ base: 'center', md: 'left' }}
              mx={6}
              mb={3}
            >
              Hi, I am{' '}
              <Text
                as={'span'}
                fontWeight={'semibold'}
                color={theme === 'light' ? '#010101' : '#F2F2F2'}
              >
                Sahil Sheikh
              </Text>
            </Text>
            <Text
              fontSize={'18px'}
              fontWeight={'thin'}
              letterSpacing={1.1}
              textAlign={'justify'}
              mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
            >
              A Software Developer and Freelance Full Stack Developer with
              industry experience of 4+ Years in building responsive, mobile
              friendly websites and web apps using React Js, also Microservices,
              and REST APIs using Java and Spring Boot, developing end-to-end
              solutions for clients, and delivering the work throughout the
              internet.
              <br />
              <br />I can help you or your business to create a landing page,
              portfolio website, web application, microservices, APIs, or
              android application, from a design concept to a completed,
              polished, professional app. I can also help maintain and update
              existing applications.
            </Text>
            <Box
              letterSpacing={1.1}
              textAlign={{ base: 'center', md: 'left' }}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={9}
            >
              <IconButton
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/sahilsheikh-dev/',
                    '_blank'
                  );
                }}
                bg={'transparent'}
                _hover={'none'}
                _active={'none'}
                me={3}
              >
                <Image
                  w={'100%'}
                  maxW={'40px'}
                  _hover={{
                    transition: 'all .25s ease-in-out',
                    transform: 'translate3d(0px, -15px, 0px)',
                  }}
                  src={theme === 'dark' ? LinkedinLight : LinkedInDark}
                  alt="logo"
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    'https://instagram.com/sahilsheikh.dev',
                    '_blank'
                  );
                }}
                bg={'transparent'}
                _hover={'none'}
                _active={'none'}
                mx={3}
              >
                <Image
                  w={'100%'}
                  maxW={'40px'}
                  _hover={{
                    transition: 'all .25s ease-in-out',
                    transform: 'translate3d(0px, -15px, 0px)',
                  }}
                  src={theme === 'dark' ? InstagramLight : InstagramDark}
                  alt="logo"
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    'https://www.youtube.com/@sahilsheikh-dev',
                    '_blank'
                  );
                }}
                bg={'transparent'}
                _hover={'none'}
                _active={'none'}
                ms={3}
              >
                <Image
                  w={'100%'}
                  maxW={'40px'}
                  _hover={{
                    transition: 'all .25s ease-in-out',
                    transform: 'translate3d(0px, -15px, 0px)',
                  }}
                  src={theme === 'dark' ? YoutubeLight : YoutubeDark}
                  alt="logo"
                />
              </IconButton>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AboutMe;
