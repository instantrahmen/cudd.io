import { css } from 'styled-components';

export default css`
  :root {
    /* Colors */
    --color-blue: #56ccf2;
    --color-pink: #ff80cc;
    --color-white: #efefef;
    --color-black: #121212;
    --color-darkest-grey: #202020;
    --color-dark-grey: #333;
    --color-grey: #888;

    --color-primary: var(--color-blue);
    --color-secondary: var(--color-pink);

    /* Shadows */
    --depth-0: none;
    --depth-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --depth-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --depth-3: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    // Gradient-borders
    --border-verticle: linear-gradient(
      180deg,
      var(--color-white),
      var(--color-secondary)
    );
    --border-horizontal: linear-gradient(
      90deg,
      var(--color-white),
      var(--color-secondary)
    );

    // Clip Paths
    --hex: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

    // Fonts
    --font-header: 'Montserrat', sans-serif;
    --font-body: 'Raleway', sans-serif;
  }
`;
