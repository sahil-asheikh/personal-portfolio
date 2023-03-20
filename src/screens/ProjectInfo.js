import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ProjectHeader from '../components/projectInfo/ProjectHeader';
import ProjectClientInfo from '../components/projectInfo/ProjectClientInfo';
import ProjectJson from '../assets/dataJson/projectJson.json';
import ProjectGallery from '../components/projectInfo/ProjectGallery';

const ProjectInfo = ({ theme }) => {
  const { projectIndex } = useParams({});
  const projectSrc = ProjectJson[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <>
        <Box pt={{ base: '63px', md: '64px', lg: '64px', xl: '64px' }}>
          <section id="main">
            <Box mx={{ base: 2, md: 10, lg: 20, xl: 40 }}>
              <ProjectHeader projectSrc={projectSrc} theme={theme} />
              <ProjectGallery projectSrc={projectSrc} theme={theme} />
              <ProjectClientInfo projectSrc={projectSrc} />
            </Box>
          </section>
        </Box>
      </>
    </div>
  );
};

export default ProjectInfo;
