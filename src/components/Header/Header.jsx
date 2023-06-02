import square from '../../images/square.svg';
import circle from '../../images/circle.svg';
import orange from '../../images/orange.svg';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Header({ refs, windowDimensions }) {
  const { scrollYProgress } = useScroll();

  const { projectsRef, heroRef, contactRef, aboutRef } = refs;

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
      textShadow: '0 0 3px #0aaef7',
      //   color: 'rgb(62, 96, 188)',
    },
    tap: {
      scale: 0.8,
      //   color: 'rgb(62, 96, 188)',
    },
    hidden: { display: 'none', opacity: 0 },
  };

  const headerVariants = {
    initial: { height: '100vh', opacity: 1 },
    height: {
      height: 46,
      transition: { delay: 2.5, duration: 1.5 },
    },
    view: { opacity: 0.9, transition: { delay: 3.5, duration: 1 } },
    viewSmall: { height: 0, transition: { delay: 3.5, duration: 1 } },
    hidden: { display: 'none', opacity: 0 },
  };

  const squareVariants = {
    initial: { height: '75vh' },
    view: {
      rotate: [0, 360, 180, 0],
      height: ['80vh', '60vh', '80vh', '6vh'],
      maxHeight: [1000, 1000, 1000, 40],
      transition: { duration: 3.5 },
    },
    initialSmall: { width: '75vh' },
    viewSmall: {
      rotate: [0, 360, 180, 0],
      width: ['80vw', '60vw', '80vw', '0vw'],
      transition: { duration: 3.5 },
    },
  };

  const circleVariants = {
    initial: { height: '75vh' },
    view: {
      rotate: [0, 45, 90, 180],
      height: ['60vh', '80vh', '60vh', '6vh'],
      maxHeight: [1000, 1000, 1000, 40],
      transition: { duration: 3.5 },
    },

    initialSmall: { width: '75vw' },
    viewSmall: {
      rotate: [0, 45, 90, 180],
      width: ['60vw', '80vw', '60vw', '0vw'],
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
    initialSmall: { width: '75vw' },
    viewSmall: {
      scale: [1, 0.8, 1.4, 1],
      width: ['75vw', '75vw', '75vw', '0vw'],
      transition: { duration: 3.5 },
    },
  };

  const scrollVariants = {
    initial: { opacity: 0 },
    view: { opacity: 1 },
    transition: { duration: 3.5 },
  };

  const handleClick = (section) => {
    window.scrollTo({ behavior: 'smooth', top: section.current.offsetTop });
  };

  return (
    <>
      <motion.section
        className="header"
        variants={headerVariants}
        initial="initial"
        animate={
          windowDimensions.width > 550 ? ['view', 'height'] : 'viewSmall'
        }
      >
        <div className="header__container">
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'hidden'}
            animate={windowDimensions.width > 550 ? 'view' : 'hidden'}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleClick(heroRef)}
          >
            Home
          </motion.button>
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'hidden'}
            animate={windowDimensions.width > 550 ? 'view' : 'hidden'}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleClick(aboutRef)}
          >
            About
          </motion.button>
        </div>
        <div className="header__center">
          <motion.img
            src={circle}
            className="header__center-circle"
            variants={circleVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'initialSmall'}
            animate={windowDimensions.width > 550 ? 'view' : 'viewSmall'}
          />
          <motion.img
            src={square}
            className="header__center-square"
            variants={squareVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'initialSmall'}
            animate={windowDimensions.width > 550 ? 'view' : 'viewSmall'}
          />
          <motion.img
            src={orange}
            className="header__center-orange"
            variants={orangeVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'initialSmall'}
            animate={windowDimensions.width > 550 ? 'view' : 'viewSmall'}
          />
        </div>
        <div className="header__container">
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'hidden'}
            animate={windowDimensions.width > 550 ? 'view' : 'hidden'}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleClick(projectsRef)}
          >
            Projects
          </motion.button>
          <motion.button
            className="header__element"
            variants={btnVariants}
            initial={windowDimensions.width > 550 ? 'initial' : 'hidden'}
            animate={windowDimensions.width > 550 ? 'view' : 'hidden'}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleClick(contactRef)}
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
