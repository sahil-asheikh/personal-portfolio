import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import FiveStar from '../../assets/images/fiveStars.png';
import TestimonialDescription from './TestimonialDescription';

const TestimonialCard = ({ theme, testimonialItem }) => {
  return (
    <>
      <Box
        as="div"
        minH={'300px'}
        my={3}
        py={9}
        bg={theme === 'light' ? '#FFFFFF' : '#090909'}
        textAlign="center"
        display={'flex'}
        alignItems="center"
      >
        <Box as="div" minH={'300px'} maxW="1000px" mx={'auto'}>
          <Image
            src={testimonialItem.img}
            w={'150px'}
            h={'150px'}
            mx="auto"
            mb={6}
            borderRadius={'50%'}
            objectFit="cover"
            alt="logo"
          />
          <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'semibold'}>
            {testimonialItem.name}
          </Text>
          <Text as={'h1'} fontSize={'20px'} mb={3} fontWeight={'500'}>
            {testimonialItem.position}, {testimonialItem.company}
          </Text>
          <Image
            src={FiveStar}
            maxW={'150px'}
            mx="auto"
            mb={6}
            objectFit="cover"
            alt="logo"
          />
          <TestimonialDescription description={testimonialItem.testimonial} />
        </Box>
      </Box>
    </>
  );
};

export default TestimonialCard;
