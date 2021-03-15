import { css } from 'styled-components';

export default css`
  .border {
    border-image-slice: 1;

    &.horizontal,
    &.h {
      border-image-source: var(--border-horizontal);
    }
    &.vertical,
    &.v {
      border-image-source: var(--border-verticle);
    }
    &.bottom {
      border-bottom: 4px solid;
    }

    &.all {
      border: 4px solid;
    }
  }
`;
