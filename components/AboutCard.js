import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';
import { ButtonGroup, Heading } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { fromBelow, generateAnimationProps } from '../utils/variants';

const AboutCard = () => {
  return (
    <AboutCardContainer {...generateAnimationProps(fromBelow)}>
      <div className="header">
        <AnimatePresence>
          <Avatar className="avatar" small></Avatar>
        </AnimatePresence>
        <Heading as="h2">Erika Cudd</Heading>
      </div>
      <ButtonGroup className="links">
        <IconLink
          href="https://twitter.com/rahmen_dev"
          icon={<FaTwitter />}
        ></IconLink>
        <IconLink
          href="https://github.com/saltyNoodles"
          icon={<FaGithub />}
        ></IconLink>
        <IconLink
          href="https://www.linkedin.com/in/erika-cudd-08340495/"
          icon={<FaLinkedin />}
        ></IconLink>
      </ButtonGroup>
      <div className="content">
        <p>
          Hi, my name is Erika and I’m a full-stack software developer based out
          of Chattanooga, TN with a strong focus on the front end. I have 4
          years of professional experience and have worked on many large
          projects with teams both large and small.
        </p>
        <p>
          I’m currently open for freelance work, so please get in touch if
          you’re interested in working with me.
        </p>
      </div>
    </AboutCardContainer>
  );
};

export default AboutCard;

const IconLink = ({ href, icon, ...props }) => {
  return (
    <StyledIconButton
      href={href}
      className="styled-icon"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {icon}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.a`
  &.styled-icon {
    background: none;
    color: var(--color-dark-grey);
    padding: 0.5rem;
    margin: 0.4rem;
    font-size: 1.5rem;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--color-secondary);
      filter: drop-shadow(0px 0px 1px #212);
    }
    &:focus {
      outline: none;
      color: var(--color-secondary);
    }
  }
`;

const AboutCardContainer = styled(motion.div)`
  background: var(--color-white);
  box-shadow: var(--depth-2);
  overflow-y: visible;
  font-size: 1.1rem;
  max-width: 100%;
  width: 360px;
  height: 100%;
  min-height: 365px;
  max-height: 500px;
  color: var(--color-darkest-grey);
  box-sizing: border-box;
  position: relative;
  border-radius: var(--card-border-radius);
  /* margin: 1rem; */

  * {
    box-sizing: border-box;
  }

  .header {
    text-align: center;

    h2 {
      color: var(--color-primary);
      font-weight: 500;
      text-shadow: 1px 1px 1px #212;
    }
  }

  .avatar {
    width: 100px;
    height: 100px;
    margin: -50px auto 0 auto;
  }

  .content {
    margin: 0 1.5rem;
  }

  .links {
    padding: 0.4rem 2rem;
    justify-content: space-evenly;
    width: 100%;
    box-sizing: border-box;
  }
`;
