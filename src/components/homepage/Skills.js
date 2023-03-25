import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import SkillsItem from './Skills/SkillsItem';
import SkillInfo from '../../assets/dataJson/skillInfo.json';
import SectionHeading from '../commons/SectionHeading';

const Skills = ({ theme }) => {
  const skillInfo = SkillInfo;
  return (
    <>
      {skillInfo.length === 0 ? (
        ''
      ) : (
        <div>
          <Box fontFamily={'Montserrat'}>
            <Box my={20}>
              <SectionHeading
                theme={theme}
                initialHeading={'Skills that'}
                highligtedText={'I am good at,'}
                summaryText={'(Capabilities and Services)'}
              />
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
                gap={{ base: '', md: 6 }}
                my={6}
                mx={{ base: 0, md: 3, lg: 3, xl: 3 }}
              >
                {skillInfo.map((skillItem, index) => (
                  <SkillsItem key={index} theme={theme} skillItem={skillItem} />
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default Skills;
