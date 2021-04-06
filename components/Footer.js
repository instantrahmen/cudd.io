import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="copyright-notice">
        © {new Date().getFullYear()} Erika Cudd{' '}
      </div>
      <ul className="social-links">
        <FooterLink href="https://github.com/saltyNoodles">github</FooterLink>
        <FooterLink href="https://twitter.com/rahmen_dev">twitter</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/erika-cudd-08340495">
          linkedIn
        </FooterLink>
        <FooterLink href="/files/erika-cudd-resume.pdf">résumé</FooterLink>
      </ul>
    </FooterContainer>
  );
};

const FooterLink = ({ href, children, ...props }) => (
  <li>
    <a href={href} target="_blank" {...props}>
      {children}
    </a>
  </li>
);

export default Footer;
const FooterContainer = styled.footer`
  background: none;
  padding: 1rem;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;

  .social-links {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-right: 1rem;
    }

    a:hover {
      text-decoration: underline;
      color: var(--color-secondary);
    }
  }
`;
