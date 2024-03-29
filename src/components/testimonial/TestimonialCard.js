import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
// import FiveStar from '../../assets/images/fiveStars.png';
// import TestimonialDescription from './TestimonialDescription';

const TestimonialCard = ({ theme, testimonialItem }) => {
  return (
    <>
      <Box
        as="div"
        my={{ base: 0, md: 3, lg: 3, xl: 3 }}
        py={{ base: 3, md: 9, lg: 9, xl: 9 }}
      >
        <Box
          as="div"
          maxW={{ base: '300px', md: '270px', lg: '270px', xl: '270px' }}
          mx={'auto'}
          p={3}
          rounded={'xl'}
          bg={theme === 'light' ? '#FFFFFF' : '#1A1A1A'}
        >
          <Text mb={3} fontSize={'13px'}>
            {testimonialItem.testimonial}
          </Text>
          <hr />
          <Box position={'relative'}>
            <Image
              src={testimonialItem.img}
              w={'50px'}
              h={'50px'}
              mt={3}
              borderRadius={'50%'}
              objectFit="cover"
              alt="logo"
              display={'inline-block'}
            />
            <Box
              mx={3}
              display={'inline-block'}
              position={'absolute'}
              top={'50%'}
              transform={'translateY(-50%)'}
            >
              <Text fontSize={'16px'} fontWeight={'bold'} textAlign={'left'}>
                {testimonialItem.name}
              </Text>
              <Text fontSize={'10px'}>
                {testimonialItem.position}, {testimonialItem.company}
              </Text>
            </Box>
          </Box>
          {/* <Image
            src={FiveStar}
            maxW={'50px'}
            mx="auto"
            objectFit="cover"
            alt="logo"
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default TestimonialCard;
