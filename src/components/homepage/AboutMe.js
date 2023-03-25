import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import LinkedInDark from '../../assets/images/linkedinDark.png';
import LinkedinLight from '../../assets/images/linkedinLight.png';
import InstagramDark from '../../assets/images/instagramDark.png';
import InstagramLight from '../../assets/images/instagramLight.png';
import YoutubeDark from '../../assets/images/youtubeDark.png';
import YoutubeLight from '../../assets/images/youtubeLight.png';
import SectionHeading from '../commons/SectionHeading';
import ProfileBg from '../../assets/images/profilebg.png';
import Clients from './Clients';

const AboutMe = ({ theme }) => {
  return (
    <Box
      bgImage={{ base: '', md: ProfileBg }}
      bgRepeat="no-repeat"
      bgPosition={'right'}
    >
      <Box pt={'1px'}>
        <Box my={20} pt={20}>
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
                maxW={'1000px'}
                fontSize={'18px'}
                fontWeight={'thin'}
                letterSpacing={1.1}
                textAlign={'justify'}
                mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
              >
                I am a full stack developer with 4+ years of experience in Java
                and React JS. I have a proven track record of developing web
                applications and RESTful APIs, and have worked on a variety of
                projects for clients ranging from small startups to large
                enterprises, and am comfortable working on both the front-end
                and back-end of a web application. As a freelance developer, I
                am able to bring my skills and expertise to a variety of
                projects. Contact me if you need a full stack developer for your
                next project.
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
