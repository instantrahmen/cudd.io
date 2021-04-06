import React from 'react';
import styled, { css } from 'styled-components';

const AspectBox = ({ width, height, children, childAs = 'div', className }) => {
  return (
    <BoxContainer className={className}>
      <Box className="box" as={childAs} width={width} height={height}>
        {children}
      </Box>
    </BoxContainer>
  );
};

export default AspectBox;

const BoxContainer = styled.div``;

const Box = styled.div`
  height: 0px;
  overflow: hidden;
  height: 0;
  padding-top: ${({ width, height }) => css`calc(${height} / ${width} * 100%)`};
`;
