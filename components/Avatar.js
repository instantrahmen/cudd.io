import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const avatarSrcSmall = '/images/Avatar-2.png';
const avatarSrc = '/images/avatar-2.png';
import styled from 'styled-components';

import {
  fromAbove,
  springTransition,
  generateAnimationProps,
} from '../utils/variants';

const Avatar = ({ small, className, imageProps = {}, ...props }) => {
  return (
    <Figure
      layoutId="avatar"
      transition={springTransition}
      className={className}
      {...props}
    >
      <Image
        layout="fill"
        // src={small ? avatarSrcSmall : avatarSrc}
        src={avatarSrc}
        priority
        alt="Erika"
        {...imageProps}
      />
    </Figure>
  );
};

export default Avatar;

const Figure = styled(motion.figure)`
  height: 100px;
  width: 100px;
  position: relative;

  span {
    overflow: visible !important;
  }

  img {
    object-fit: contain;
    filter: drop-shadow(1px 1px 1px #212);
  }
`;
