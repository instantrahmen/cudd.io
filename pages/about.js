import React from 'react';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';
import AboutCard from '../components/AboutCard';
import { motion } from 'framer-motion';
import {
  fromAbove,
  fromBelow,
  generateAnimationProps,
  springTransition,
} from '../utils/variants';

const stackSvg = '/images/stack.svg';

const AboutPage = () => (
  <PageContainer>
    <div className="page-content">
      <AboutCard />

      <div className="stack">
        <AnimatedH2
          as="h2"
          className="title"
          {...generateAnimationProps(fromAbove)}
          styled
          transition={{
            ...springTransition,
            delay: 0.05,
          }}
        >
          Tech I use
        </AnimatedH2>
        <TechStackImage
          onDragStart={(e) => e.preventDefault()}
          src={stackSvg}
          alt=""
          {...generateAnimationProps(fromBelow)}
          transition={{
            ...springTransition,
            delay: 0.2,
          }}
        />
      </div>
    </div>
  </PageContainer>
);

export default AboutPage;

const TechStackImage = styled(motion.img)`
  margin-top: 1rem;
`;
const AnimatedH2 = styled(motion.h2)`
  /* background: purple; */
  padding-bottom: 2rem;
`;

const PageContainer = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  .page-content {
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding: 0 1rem;
    box-sizing: border-box;
    z-index: 10;
    margin-top: 2rem;

    & > * {
      margin-bottom: 2rem;
    }

    .stack {
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      text-align: center;
      box-sizing: border-box;
      padding-top: 0;
      /* background: white; */
      margin-top: 0;
      /* border-top: 1px solid pink; */
      @media (min-width: 806px) {
        justify-content: space-between;

        height: 100%;
      }
    }
  }
`;
