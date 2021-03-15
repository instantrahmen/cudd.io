import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const backgroundImage = '/images/background.jpeg';

const Layout = ({ children, className }) => {
  return (
    <SiteContainer>
      <BackgroundImage src={backgroundImage}></BackgroundImage>
      <Header />
      <main className={className}>{children}</main>
      <footer>© {new Date().getFullYear()} Erika Cudd</footer>
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
    <BackgroundImageContainer {...props}>
      <img src={src} className="bg"></img>
    </BackgroundImageContainer>
  );
};

const BackgroundImageContainer = styled.div`
  z-index: -1;
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
