import React from 'react';
import { motion } from 'framer-motion';

const avatarSrc = '/images/Avatar.png';

const Avatar = ({ ...props }) => {
  return <motion.img src={avatarSrc} {...props} />;
};

export default Avatar;
