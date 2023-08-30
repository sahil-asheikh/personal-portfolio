import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import AllAffiliateDetails from '../../assets/dataJson/affiliate.json';
import AffiliateItem from './AffiliateItem';

const AffiliateItems = ({ theme }) => {
  return (
    <>
      {AllAffiliateDetails.length === 0 ? (
        ''
      ) : (
        <>
          <section id="main">
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 1, xl: 1 }}
              gap={{ base: '', md: 0 }}
              my={20}
              pt={20}
            >
              {AllAffiliateDetails.map((affiliateItem, index) => (
                <Box my={3} mx={{ base: 3, md: 0, lg: 0, xl: 0 }}>
                  <AffiliateItem
                    key={index}
                    theme={theme}
                    imgThumbnail={affiliateItem.imgThumbnail}
                    title={affiliateItem.title}
                    description={affiliateItem.description}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </section>
        </>
      )}
    </>
  );
};

export default AffiliateItems;
