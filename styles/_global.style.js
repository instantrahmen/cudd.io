import { css } from 'styled-components';

export default css`
  html,
  body {
    height: 100%;
    /* z-index fix so the background image (z-index: -1;) appears above this */
    z-index: -5;
    background: var(--color-blue);
  }

  body {
    color: var(--color-white);
    font-family: var(--font-body);

    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100vh;
    position: relative;
  }

  #__next {
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: var(--font-header) !important;
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: lighter;
    }

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }

  a {
    color: var(--color-blue);
    text-decoration: none;
  }

  footer {
    background: none;
    padding: 1rem;
    color: var(--color-white);
  }
`;
