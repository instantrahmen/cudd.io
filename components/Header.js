import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Link } from './Link';
import LogoImage from './Logo';
import { useRouter } from 'next/router';

const headerBg = '/images/header-bg.svg';

const Header = ({ className }) => {
  const router = useRouter();

  return (
    <>
      <HeaderContainer bg={headerBg} className={` ${className}`}>
        <Logo href="/">
          <LogoImage className="logo" />
        </Logo>

        <nav>
          <ul>
            <li>
              <NavLink href="/">home</NavLink>
            </li>
            <li>
              <NavLink href="/about">about</NavLink>
            </li>
            <li>
              <NavLink href="/projects">projects</NavLink>
            </li>
            {/* <li>
            <NavLink href="/">contact</NavLink>
          </li> */}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

const NavLink = styled(Link)`
  color: var(--color-white);
  font-size: 1.3rem;
  font-family: var(--font-header);
  position: relative;
  transition: 250ms ease-out;

  &::before,
  &::after {
    background: none;
    border-bottom: 2px solid ${lighten(0.1, '#FF80CC')};
    content: '';
    height: 100%;
    left: 0%;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 250ms ease-out;
    width: 0;
  }

  &:hover {
    color: ${lighten(0.1, '#FF80CC')};

    &::after {
      transition: 250ms ease-in;
      width: 100%;
    }
  }

  &.active {
    &::before {
      border-bottom: 2px solid var(--color-white);
      width: 100%;
    }
  }
`;
const HeaderContainer = styled.header`
  position: relative;
  background-size: 100% auto;
  overflow: visible;

  padding: 1.3rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: url(${({ bg }) => bg});
  background-size: 100% 100%;

  nav {
    * {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul {
      display: flex;
    }
    li {
      padding: 0 0.5rem;
    }
  }
`;
export default Header;

const Logo = styled(Link)`
  width: 75px;

  position: absolute;
  left: 0.5rem;
  top: 0.5rem;

  transition: 250ms ease-in;

  img {
    width: 100%;
    height: auto;
  }

  &:active {
    filter: contrast(80%);
  }
`;
