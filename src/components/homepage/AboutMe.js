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
                Welcome to my portfolio! I'm a Bangalore based freelance
                software developer with a passion for crafting immersive digital
                experiences. With four years of hands-on experience in the
                field, I specialize in developing cutting-edge 3D animated
                websites using React JS and the Spline Tool. My approach to web
                development is driven by creativity, innovation, and a deep
                understanding of user experience. By leveraging the power of
                React JS, I ensure that each website I create is not only
                visually stunning but also highly interactive and user-friendly.
                <br />
                <br />
                What sets my work apart is my expertise in integrating 3D
                animations seamlessly into the web environment. Whether it's
                adding dynamic transitions, creating captivating visual effects,
                or building entire scenes, I thrive on pushing the boundaries of
                what's possible on the web.
                <br />
                <br />
                Collaboration is at the heart of my process. I work closely with
                clients to understand their unique vision and translate it into
                a bespoke digital experience that exceeds their expectations.
                From concept to execution, I strive for perfection in every
                detail, ensuring that the final product not only meets but
                surpasses the desired objectives. Browse through my portfolio to
                explore a diverse range of projects, each showcasing my
                commitment to excellence and passion for innovation. Whether
                you're looking to elevate your brand's online presence or create
                an unforgettable user experience, I'm here to turn your vision
                into reality. Let's collaborate and bring your ideas to life in
                stunning 3D!
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
