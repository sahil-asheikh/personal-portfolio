import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import JavaLogo from '../images/skills/java.png';
import AndroidLogo from '../images/skills/android.png';
import HtmlLogo from '../images/skills/html.png';
import ReactLogo from '../images/skills/react.png';
import DbLogo from '../images/skills/dbLogo.png';
import SpringBootLogo from '../images/skills/springboot.png';
import SkillsItem from './SkillsItem';

const Skills = ({ theme }) => {
  const skillInfo = [
    {
      logo: HtmlLogo,
      skillTitle: 'Web Designing and Development',
      subSkills: 'HTML, CSS, Bootstrap, JavaScript',
    },
    {
      logo: AndroidLogo,
      skillTitle: 'Cross Platform App Development',
      subSkills: 'Android, React Native, Dart, Flutter',
    },
    {
      logo: ReactLogo,
      skillTitle: 'Frontend Development Framework',
      subSkills: 'React.Js, Chakr-UI, Tailwind CSS',
    },
    {
      logo: JavaLogo,
      skillTitle: 'Backend Development Framework',
      subSkills: 'Java, JDBC, Servlet, JSP, JSTL',
    },
    {
      logo: SpringBootLogo,
      skillTitle: 'REST-API Development Framework',
      subSkills: 'Spring, Hibernate, Spring Boot',
    },
    {
      logo: DbLogo,
      skillTitle: 'Database Management System',
      subSkills: 'SQL, MySQL, Oracle, Firebase',
    },
  ];

  return (
    <div>
      <Box fontFamily={'Montserrat'}>
        <Box my={20}>
          <Text
            fontSize={'26px'}
            fontWeight={'thin'}
            letterSpacing={1.1}
            color={'grey'}
            textAlign={{ base: 'center', md: 'left' }}
            mx={6}
          >
            Skills that I am good at,{' '}
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            <Text
              as={'span'}
              fontWeight={'semibold'}
              color={theme === 'light' ? '#0B0F13' : '#F2F2F2'}
            >
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
  );
};

export default Skills;
