import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import LinkedInDark from '../../assets/images/linkedinDark.png';
import LinkedinLight from '../../assets/images/linkedinLight.png';
import InstagramDark from '../../assets/images/instagramDark.png';
import InstagramLight from '../../assets/images/instagramLight.png';
import YoutubeDark from '../../assets/images/youtubeDark.png';
import YoutubeLight from '../../assets/images/youtubeLight.png';
import Profile1 from '../../assets/images/profile2.jpg';
import SectionHeading from '../commons/SectionHeading';
// import ProfileBg from '../../assets/images/profilebg.png';

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
            columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
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
              <Image
                mx={'auto'}
                w={'80%'}
                h={'80%'}
                src={Profile1}
                layout={'fill'}
                rounded={'xl'}
              />
            </Box>
            <Box
              letterSpacing={1.1}
              textAlign={{ base: 'center', md: 'left' }}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={6}
            >
              <SectionHeading
                theme={theme}
                initialHeading={'Hey 👋, this is '}
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
                A software developer who is passionate about creating beautiful,
                animated and joyful digital experiences. Besides design, I love
                music, games and travelling.
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
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
