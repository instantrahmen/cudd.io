import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { ButtonGroup, Heading } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fromBelow } from '../utils/variants';
import marked from 'marked';

const ProjectCard = ({ project, ...props }) => {
  const descriptionHtml = marked(project.description);

  return (
    <ProjectCardContainer {...props}>
      <div className="header">
        <ProjectPhoto aria-role="presentation" color={project.color}>
          {project.photo && (
            <Image priority layout="fill" src={project.photo}></Image>
          )}
        </ProjectPhoto>
        <Heading as="h2">{project.name}</Heading>
        <ButtonGroup className="links">
          <IconLink
            href={project.links.live}
            icon={<FaExternalLinkAlt />}
            disabled={!project.links.live}
          ></IconLink>
          <IconLink
            href={project.links.source}
            icon={<FaGithub />}
            disabled={!project.links.source}
          ></IconLink>
        </ButtonGroup>
      </div>

      <div className="content">
        {!!descriptionHtml ? (
          <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <ul className="tags">
        {project.tags.map((tag) => (
          <div className="tag">{tag}</div>
        ))}
      </ul>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

const IconLink = ({ href, icon, disabled = false, ...props }) => {
  return (
    <StyledIconButton
      href={href}
      className="styled-icon"
      target="_blank"
      disabled={disabled}
      {...props}
    >
      {icon}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.a`
  &.styled-icon {
    background: none;
    color: var(--color-white);
    padding-bottom: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 1.5rem;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--color-secondary);
    }

    &:focus {
      outline: none;
      color: var(--color-secondary);
    }

    ${({ disabled }) =>
      disabled &&
      css`
        color: #ccc6;
        cursor: not-allowed;
        &:hover {
          color: #ccc6;
        }
      `}
  }
`;

const ProjectCardContainer = styled.div`
  background: var(--color-white);
  box-shadow: var(--depth-2);
  overflow-y: visible;
  font-size: 1.1rem;
  max-width: 100%;
  width: 100%;
  max-width: 360px;
  min-height: 70vh;
  max-height: 90vh;
  color: var(--color-darkest-grey);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }

  .header {
    position: relative;
    text-align: center;
    height: 180px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: black;

    * {
      z-index: 10;
    }

    h2 {
      color: var(--color-white);
      font-weight: 500;
      font-size: 1.3rem !important;

      margin-bottom: auto !important;
      margin-top: auto !important;
    }
  }

  .content {
    margin: 1.5rem 2rem;
    flex: 1;
  }

  .tags {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    box-sizing: border-box;
    grid-gap: 0.2rem;

    width: 100%;
    justify-content: space-between;

    .tag {
      color: white;
      background: var(--color-primary);
      padding: 0.3rem;
      transition: 150ms ease-in-out;

      &:hover {
        background: var(--color-secondary);
      }
    }
  }

  .links {
    padding: 0;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;

    & > * {
      padding: 0 1.5rem 0.5rem 1.5rem;
    }
  }
`;

const ProjectPhoto = styled.figure`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ color }) => (color ? color : 'none')};
  z-index: 0;
  opacity: 0.3;

  img {
    object-fit: cover;
  }
`;
