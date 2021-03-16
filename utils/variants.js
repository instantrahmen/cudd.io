export const springTransition = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
};

export const fromAbove = {
  initial: { opacity: 0, y: '-100vh' },
  animate: { opacity: 1, y: 0 },
};

export const fromBelow = {
  initial: { opacity: 0, y: '100vh' },
  animate: { opacity: 1, y: 0 },
};

export const fromLeft = {
  initial: { opacity: 0, x: '-100vw' },
  animate: { opacity: 1, x: 0 },
};

export const fromRight = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0 },
};

export const generateAnimationProps = (variants) => {
  return {
    variants,
    initial: 'initial',
    animate: 'animate',
    transition: springTransition,
  };
};
