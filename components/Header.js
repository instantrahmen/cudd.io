import React, { useState, useRef } from 'react';
import { lighten } from 'polished';
import styled from 'styled-components';
import { Link } from './Link';
import LogoImage from './Logo';
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const headerBg = '/images/header-bg.svg';

const navLinks = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'projects',
    href: '/projects',
  },
];

const Header = ({ className }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // const toggleMenu = (e, value = !menuOpen) => {
  //   setMenuOpen((__open) => value);
  // };

  return (
    <>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        navLinks={navLinks}
      />
      <HeaderContainer
        bg={headerBg}
        className={` ${className}`}
        menuOpen={isOpen}
      >
        <Logo href="/">
          <LogoImage className="logo" />
        </Logo>

        <IconButton
          ref={btnRef}
          variant="outline"
          icon={<HamburgerIcon />}
          className="menu-button"
          onClick={onOpen}
        ></IconButton>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

const MenuDrawer = ({ isOpen, onClose, btnRef, navLinks }) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <MenuDrawerWrapper>
      <DrawerOverlay>
        <DrawerContent background="var(--color-blue)" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody textAlign="center" padding="0">
            <nav>
              <ul>
                {navLinks.map((link) => (
                  <li>
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </MenuDrawerWrapper>
  </Drawer>
);

const MenuDrawerWrapper = styled.div`
  background: black !important;
  color: white !important;
  text-align: center;
  ul,
  li {
    list-style: none !important;
    margin: 0;
    width: 100%;
    transition: 150ms ease-in-out;
    padding: 0.3rem;
  }

  li:hover {
    background: #12121223;
  }
`;
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

  .menu-button {
    display: none;

    color: var(--color-white);
    border: 1px solid var(--color-white);

    &:active,
    &:focus,
    &:hover {
      color: var(--color-secondary);
      border: 1px solid var(--color-secondary);
      outline: none;
      box-shadow: none;
      background: #ff80cc33;
    }
  }

  @media (max-width: 400px) {
    nav {
      display: none;
    }

    .menu-button {
      display: block;
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
