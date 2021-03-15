import React from 'react';
import NextImage from 'next/image';

export const Image = ({
  src = '',
  width = 100,
  height = 100,
  alt = '',
  ...props
}) => <NextImage width={width} height={width} src={src} alt={alt} {...props} />;

export default Image;
