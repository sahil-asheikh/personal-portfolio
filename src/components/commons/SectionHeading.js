import { Text } from '@chakra-ui/react';
import React from 'react';

const SectionHeading = ({
  theme,
  initialHeading,
  highligtedText,
  summaryText,
}) => {
  return (
    <>
      <Text
        fontSize={'26px'}
        fontWeight={'thin'}
        letterSpacing={1.1}
        color={'grey'}
        textAlign={{ base: 'center', md: 'left' }}
        mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
      >
        {initialHeading + ' '}
        <Text
          as={'span'}
          fontWeight={'semibold'}
          color={theme === 'light' ? '#010101' : '#F2F2F2'}
        >
          {highligtedText + ' '}
          <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
          {summaryText}
        </Text>
      </Text>
    </>
  );
};

export default SectionHeading;
