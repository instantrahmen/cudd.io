import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const avatarSrcSmall = '/images/Avatar-smaller.png';
const avatarSrc = '/images/Avatar.png';
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
      alt="Erika Cudd"
      {...props}
    >
      <Image
        layout="fill"
        src={small ? avatarSrcSmall : avatarSrc}
        priority
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

  img {
    object-fit: contain;
  }
`;
