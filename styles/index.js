import { createGlobalStyle, css } from 'styled-components';
import variables from './_variables.style';
import utils from './_utils.style';
import global from './_global.style';

export const GlobalStyles = createGlobalStyle`
  ${variables};
  ${utils};
  ${global};
`;
