import square from '../../images/square.svg';
import circle from '../../images/circle.svg';
import orange from '../../images/orange.svg';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Header() {
  const { scrollYProgress } = useScroll();

  const btnVariants = {
    initial: {
      opacity: 0,
    },
    view: {
      opacity: 1,
      transition: {
        delay: 3.3,
        duration: 1,
      },
    },

    hover: {
      scale: 1.3,
      textShadow: '0 0 3px orange',
      //   color: 'rgb(62, 96, 188)',
    },
    tap: {
      scale: 0.8,
      //   color: 'rgb(62, 96, 188)',
    },
  };

  const headerVariants = {
    initial: { height: '100vh', opacity: 1 },
    height: {
      height: 45,
      transition: { delay: 2.5, duration: 1.5 },
    },
    view: { opacity: 0.8, transition: { delay: 3.5, duration: 1 } },
  };

  const squareVariants = {
    initial: { height: '75vh' },
    view: {
      rotate: [0, 360, 180, 0],
      height: ['75vh', '75vh', '75vh', '6vh'],
      maxHeight: [1000, 1000, 1000, 40],
      transition: { duration: 3.5 },
    },
  };

  const circleVariants = {
    initial: { height: '75vh' },
    view: {
      rotate: [0, 45, 90, 180],
      height: ['75vh', '75vh', '75vh', '6vh'],
      maxHeight: [1000, 1000, 1000, 40],
      transition: { duration: 3.5 },
    },
  };

  const orangeVariants = {
    initial: { height: '75vh' },
    view: {
      scale: [1, 0.8, 1.4, 1],
      height: ['75vh', '75vh', '75vh', '6vh'],
      maxHeight: [1000, 1000, 1000, 40],
      transition: { duration: 3.5 },
    },
  };

  const scrollVariants = {
    initial: { opacity: 0 },
    view: { opacity: 1 },
    // scale: { scaleX: scrollYProgress },
    transition: { duration: 3.5 },
  };

  return (
    <>
      <motion.section
        className="header"
        variants={headerVariants}
        initial="initial"
        animate={['view', 'height']}
      >
        <div className="header__container">
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial="initial"
            animate="view"
            whileHover="hover"
            whileTap="tap"
          >
            Home
          </motion.button>
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial="initial"
            animate="view"
            whileHover="hover"
            whileTap="tap"
          >
            About
          </motion.button>
        </div>
        <div className="header__center">
          <motion.img
            src={circle}
            className="header__center-circle"
            variants={circleVariants}
          />
          <motion.img
            src={square}
            className="header__center-square"
            variants={squareVariants}
          />
          <motion.img
            src={orange}
            className="header__center-orange"
            variants={orangeVariants}
          />
        </div>
        <div className="header__container">
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial="initial"
            animate="view"
            whileHover="hover"
            whileTap="tap"
          >
            Projects
          </motion.button>
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial="initial"
            animate="view"
            whileHover="hover"
            whileTap="tap"
          >
            Contact
          </motion.button>
        </div>
      </motion.section>
      <motion.div
        className="header__scroller"
        variants={scrollVariants}
        initial="initial"
        animate="view"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
