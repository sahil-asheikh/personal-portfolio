import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import LinkedInDark from '../../assets/images/linkedinDark.png';
import LinkedinLight from '../../assets/images/linkedinLight.png';
import InstagramDark from '../../assets/images/instagramDark.png';
import InstagramLight from '../../assets/images/instagramLight.png';
import YoutubeDark from '../../assets/images/youtubeDark.png';
import YoutubeLight from '../../assets/images/youtubeLight.png';
import SectionHeading from '../commons/SectionHeading';
// import ProfileBg from '../../assets/images/profilebg.png';
import Clients from './Clients';

const AboutMe = ({ theme }) => {
  return (
    <Box
      // bgImage={{ base: '', md: ProfileBg }}
      bgRepeat="no-repeat"
      bgPosition={'right'}
    >
      <Box pt={'1px'}>
        <Box my={20} pt={0}>
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 1, xl: 1 }}
            gap={{ base: 1, md: 2, lg: 2, xl: 2 }}
            my={6}
            alignItems={'center'}
          >
            <Box
              letterSpacing={1.1}
              textAlign={{ base: 'center', md: 'left' }}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={6}
            >
              <SectionHeading
                theme={theme}
                initialHeading={'Hi, I am'}
                highligtedText={'Sahil Sheikh'}
                summaryText={''}
              />
              <Text
                // maxW={'1000px'}
                fontSize={'18px'}
                fontWeight={'thin'}
                letterSpacing={1.1}
                textAlign={'justify'}
                mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
              >
                Bangalore based Full Stack Developer who creates well-designed
                websites and applications. A tech nerd, and have used his
                programming powers mainly for good. Like many of his generation,
                he was drawn to coding originally as an angsty teen trying to
                make his MySpace page look cool-but not too cool.
                <br />
                <br />
                Since those days have been pretty busy both in-house and as a
                freelancer, and with his YouTube channel where teaches people
                how to develop. Have a variety of experience such as developing
                custom website themes and templates, frontend development in
                React, backend/RestAPIs/micro-services development in
                Java/Spring Boot, and speaks fluent HTML, CSS, JavaScript,
                React, and Spring Boot.
                <br />
                <br />
                Loves to tackle a challenge head-on by analyzing it and coming
                up with a plan to solve the needs of his clients that makes
                sense for their big-picture goals. Most recently, developed and
                deployed a ReactJs and Spring Boot application on AWS, and
                working as a Software Engineer at Betsol (India).
                <br />
                <br />
                Does your product team need a hand bringing your designs to
                life? Learn how{' '}
                <a
                  as={'a'}
                  href="/Contact"
                  rel="noreferrer"
                  bg={'transparent'}
                  me={3}
                >
                  <Text
                    color={'#27AE60'}
                    as={'a'}
                    fontWeight={'bold'}
                    textDecoration={'underline'}
                  >
                    "how you can hire Me"
                  </Text>
                </a>
                <br />
                <br />
                Want to see what tools I use as a developer?{' '}
                <a
                  as={'a'}
                  href="/Affiliate"
                  rel="noreferrer"
                  bg={'transparent'}
                  me={3}
                >
                  <Text
                    color={'#27AE60'}
                    as={'a'}
                    fontWeight={'bold'}
                    textDecoration={'underline'}
                  >
                    Check out my uses page.
                  </Text>
                </a>
              </Text>
              <Box
                letterSpacing={1.1}
                textAlign={{ base: 'center', md: 'left' }}
                mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
                mt={9}
                display={'inline-flex'}
              >
                <a
                  as={'a'}
                  href="https://www.linkedin.com/in/sahilsheikh-dev/"
                  target={'_blank'}
                  rel="noreferrer"
                  bg={'transparent'}
                  me={3}
                >
                  <Image
                    as={'img'}
                    w={'100%'}
                    maxW={'40px'}
                    _hover={{
                      transition: 'all .25s ease-in-out',
                      transform: 'translate3d(0px, -15px, 0px)',
                    }}
                    src={theme === 'dark' ? LinkedinLight : LinkedInDark}
                    alt="logo"
                  />
                </a>
                &nbsp; &nbsp;
                <a
                  href="https://instagram.com/sahilsheikh.dev"
                  target={'_blank'}
                  rel="noreferrer"
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
                </a>
                &nbsp; &nbsp;
                <a
                  href="https://www.youtube.com/@sahilsheikh-dev"
                  target={'_blank'}
                  rel="noreferrer"
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
                </a>
              </Box>
              <Clients theme={theme} />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
