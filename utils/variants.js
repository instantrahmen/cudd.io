export const springTransition = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
};

export const fromAbove = {
  initial: { opacity: 0, y: '-100vh' },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const fromBelow = {
  initial: { opacity: 0, y: '100vh' },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fromBelowWithTransition = {
  ...fromBelow,
  animate: {
    ...fromBelow.animate,
    transition: springTransition,
  },
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
