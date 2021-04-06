import React from 'react';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import projects from '../content/projects';
import { fromBelowWithTransition, springTransition } from '../utils/variants';

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ...springTransition,
      staggerChildren: 0.1,
    },
  },
};

const ProjectsPage = () => (
  <PageContainer>
    <motion.ul
      className="page-content"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {projects.map((project) => (
        <motion.li key={project.name} variants={fromBelowWithTransition}>
          <ProjectCard project={project}></ProjectCard>
        </motion.li>
      ))}
    </motion.ul>
  </PageContainer>
);

export default ProjectsPage;

const PageContainer = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  .page-content {
    list-style: none;
    width: 100vw;
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, 360px);
    justify-content: space-evenly;
    grid-gap: 1rem;

    padding: 0 1rem;
    box-sizing: border-box;
    z-index: 10;
    margin-top: 2rem;

    li {
      max-width: 360px;
    }
  }
`;
