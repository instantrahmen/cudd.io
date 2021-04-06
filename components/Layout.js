import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
const backgroundImage = '/images/background.jpeg';

const Layout = ({ children, className }) => {
  return (
    <SiteContainer>
      <BackgroundImage src={backgroundImage}></BackgroundImage>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </SiteContainer>
  );
};

export default Layout;

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100vh;
  /* background: black; */
  & > * {
    z-index: 1;
  }
  main {
    flex: 1;

    h1,
    h2,
    h3 {
      color: var(--color-white);
    }
  }
`;

const BackgroundImage = ({ src, ...props }) => {
  return (
    <BackgroundImageContainer aria-role="presentation" {...props}>
      <Image
        aria-role="presentation"
        priority
        layout="fill"
        src={src}
        className="bg"
      ></Image>
    </BackgroundImageContainer>
  );
};

const BackgroundImageContainer = styled.figure`
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--color-black);

  img {
    width: 100%;
    height: 100%;
    filter: blur(8px);
    object-fit: cover;
    opacity: 0.2;
  }
`;
