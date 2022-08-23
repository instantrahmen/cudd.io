import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
const backgroundImage = '/images/background.jpeg';

const Layout = ({ children, className }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <SiteContainer>
      <BackgroundImage src={backgroundImage}></BackgroundImage>

      <ScrollContainer
        style={{
          overflow: isAnimating ? 'hidden' : 'auto',
        }}
      >
        <main className={className}>{children}</main>
        <Footer />
      </ScrollContainer>
      <Header />
    </SiteContainer>
  );
};

export default Layout;

const ScrollContainer = styled.div`
  overflow: hidden;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  scrollbar-gutter: stable;

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    position: fixed;
  }

  ::-webkit-scrollbar-track {
    background: #00000033;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-pink);
    border-radius: 200px;
    &:hover {
      background: var(--color-darker-pink);
    }
  }
`;

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
    margin-top: 76px;
    flex: 1;
    z-index: 0;
    h1,
    h2,
    h3 {
      color: var(--color-white);
    }
  }
`;

const BackgroundImage = ({ src, ...props }) => {
  return (
    <BackgroundImageContainer role="presentation" {...props}>
      <Image
        role="presentation"
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
