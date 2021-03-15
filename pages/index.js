import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';

const avatar = '/images/Avatar.png';
const Home = () => (
  <PageContainer>
    <Head>
      <title>Erika Cudd</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <img src={avatar} alt="Erika" className="avatar" />
    <div className="content">
      <h1>Erika Cudd</h1>
      <h2>Software Engineer</h2>
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
    height: auto;
  }
  h1 {
    font-size: 5rem;
  }
`;
