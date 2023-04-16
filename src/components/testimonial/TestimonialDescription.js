import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const TestimonialDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    if (showMore) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };
  return (
    <Text fontSize={'18px'} m={1} mx={'auto'}>
      {showMore && description.length > 200
        ? description
        : description.substring(0, 400)}{' '}
      <Button
        colorScheme="green"
        variant="link"
        onClick={() => handleShowMore()}
      >
        {showMore ? 'show less' : 'show more'}
      </Button>
    </Text>
  );
};

export default TestimonialDescription;
