import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import Avatar from '../components/Avatar';
import {
  fromLeft,
  fromBelow,
  generateAnimationProps,
  springTransition,
} from '../utils/variants';

const Home = () => (
  <PageContainer>
    <Head>
      <title>Erika Cudd</title>
    </Head>

    <Avatar alt="Erika" className="avatar" />
    <div className="content">
      <motion.h1 {...generateAnimationProps(fromBelow)}>Erika Cudd</motion.h1>
      <motion.h2
        {...generateAnimationProps(fromBelow)}
        transition={{ ...springTransition, delay: 0.2 }}
      >
        Software Engineer
      </motion.h2>
    </div>
  </PageContainer>
);

export default Home;

const PageContainer = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .avatar {
    width: 200px;
    height: 200px;
  }

  .content {
    h1 {
      font-weight: 300 !important;
    }
    h2 {
      font-weight: lighter !important;
    }
  }
`;
