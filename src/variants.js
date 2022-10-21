// import { Variants } from 'framer-motion';

// Animations
export const fadeIn = (direction = 'up' || 'down') => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
  };
};

export const fadeUp = (direction = 'up' || 'down') => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1.8,
        ease: 'easeInOut',
      },
    },
  };
};
