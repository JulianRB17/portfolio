import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ scrollVariants, btnVariants }) {
  return (
    <section className="contact">
      <h1 className="contact__subtitle">Wanna create? Let's start.</h1>

      <motion.div
        className="contact__container"
        variants={scrollVariants}
        initial="initial"
        whileInView="view"
      >
        <h1 className="contact__title">&lt;contact&gt;</h1>
        <div className="contact__element">
          <p className="contact__text">Let's talk!:</p>
          <motion.button
            className="contact__btn"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Mail
          </motion.button>
        </div>
        <div className="contact__element">
          <p className="contact__text">
            Wanna see my code? Here are some samples:
          </p>
          <motion.button
            className="contact__btn"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {' '}
            Github{' '}
          </motion.button>
        </div>
        <div className="contact__element">
          <p className="contact__text">
            The synthesis of my professional history:
          </p>
          <motion.button
            className="contact__btn"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {' '}
            Resume{' '}
          </motion.button>
        </div>
        <div className="contact__overlay" />
      </motion.div>
    </section>
  );
}
