import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import SkillsItem from './Skills/SkillsItem';
import SkillInfo from '../../assets/dataJson/skillInfo.json';

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
              <Text
                fontSize={'26px'}
                fontWeight={'thin'}
                letterSpacing={1.1}
                color={'grey'}
                textAlign={{ base: 'center', md: 'left' }}
                mx={{ base: 1, md: 6, lg: 6, xl: 6 }}
              >
                Skills that{' '}
                <Text
                  as={'span'}
                  fontWeight={'semibold'}
                  color={theme === 'light' ? '#090909' : '#F2F2F2'}
                >
                  I am good at,{' '}
                  <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
                  {'('}Capabilities{')'}
                </Text>
              </Text>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
                gap={{ base: '', md: 6 }}
                my={6}
                mx={{ base: 0, md: 3, lg: 3, xl: 3 }}
              >
                {skillInfo.map((skillItem, index) => (
                  <SkillsItem
                    key={index}
                    theme={theme}
                    skillImage={skillItem.logo}
                    skilTitle={skillItem.skillTitle}
                    subSkills={skillItem.subSkills}
                  />
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
