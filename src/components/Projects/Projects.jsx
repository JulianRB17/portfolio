import React from 'react';
import aroundPic from '../../images/around.png';
import mantikaPic from '../../images/mantika.png';

import { motion } from 'framer-motion';

export default function Projects({ scrollVariants, btnVariants }) {
  return (
    <section className="projects">
      <h1 className="projects__title">&lt;Projects&gt;</h1>
      <div className="projects__container">
        <img
          alt="Around screenshots"
          className="projects__pic"
          src={aroundPic}
        />
        <motion.div
          className="projects__text-container"
          variants={scrollVariants}
          initial="initial"
          whileInView="view"
        >
          <h2 className="projects__name">&lt;Around the US&gt;</h2>
          <p className="projects__text">
            Bootcamp Practicum final project. A social app where you can share
            pictures from different places that you have traveled.
          </p>
          <p className="projects__text">
            Techs used: created two versions the first one used vanilla
            JavaScript, the second one was build with React. The backend is
            created with NodeJS, Express and Mongoose.
          </p>
          <p className="projects__text">Links:</p>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Github
          </motion.button>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Page
          </motion.button>
        </motion.div>
      </div>
      <div className="projects__container">
        <motion.div
          className="projects__text-container"
          variants={scrollVariants}
          initial="initial"
          whileInView="view"
        >
          <h2 className="projects__name">&lt;Mantika&gt;</h2>
          <p className="projects__text">
            A personal project: a web app from artists to artists, it's
            objective is to generate new relationships between different artists
            of any background together. Kind of a linkedin for creators.
          </p>
          <p className="projects__text">
            Techs used: The frontend is builded with React. The backend is
            created with NodeJS, Express and Mongoose.
          </p>
          <p className="projects__text">Links:</p>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Github
          </motion.button>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Page
          </motion.button>
        </motion.div>
        <img
          alt="Mantika screenshots"
          className="projects__pic"
          src={mantikaPic}
        />
      </div>
    </section>
  );
}
