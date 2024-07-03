import React from 'react';
import aroundPic from '../../images/around.png';
import mantikaPic from '../../images/mantika.png';
import cursoPic from '../../images/curso.png';

import { easeInOut, motion } from 'framer-motion';

export default function Projects({
  scrollVariants,
  btnVariants,
  projectsRef,
  windowDimensions,
}) {
  const imgVariants = {
    initial: { y: 30, opacity: 0.8 },
    view: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: easeInOut, delay: 0.1 },
    },
  };

  const { width } = windowDimensions;

  return (
    <section className="projects" ref={projectsRef}>
      <h1 className="projects__title">&lt;Projects&gt;</h1>
      <div className="projects__container">
        <motion.img
          alt="Around screenshots"
          className="projects__pic"
          src={aroundPic}
          variants={imgVariants}
          initial="initial"
          whileInView="view"
        />
        <motion.div
          className="projects__text-container"
          variants={scrollVariants}
          initial="initial"
          whileInView="view"
        >
          <h2 className="projects__name">&lt;Around the US&gt;</h2>
          <p className="projects__text">
            Bootcamp Practicum project. A social app where you can share
            pictures from different places that you have traveled.
          </p>
          <p className="projects__text">
            Techs used: created two versions the first one used vanilla
            JavaScript, the second one was build with React. The backend is
            created with NodeJS, Express and Mongoose.
          </p>
          <p className="projects__text projects__text-link">Link:</p>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a
              href="https://github.com/JulianRB17/react-around-api-full_es"
              className="project__link"
            >
              Github{' '}
            </a>
          </motion.button>
          {/* <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Page
          </motion.button> */}
        </motion.div>
      </div>
      <div
        className="projects__container"
        style={width < 900 ? { flexDirection: 'column-reverse' } : {}}
      >
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
            of any background together. Kind of a linkedin for creators. It was
            my final project to Practicum bootcamp. It has been on pause since I
            have been developing other projects. Someday I will return to it.
          </p>
          <p className="projects__text">
            Techs used: The frontend is builded with React. The backend is
            created with NodeJS, Express and Mongoose.
          </p>
          <p className="projects__text projects__text-link">Link:</p>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="https://github.com/JulianRB17/mantika-full-api">Github</a>
          </motion.button>
          {/* <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Page
          </motion.button> */}
        </motion.div>
        <motion.img
          alt="Mantika screenshots"
          className="projects__pic"
          src={mantikaPic}
          variants={imgVariants}
          initial="initial"
          whileInView="view"
        />
      </div>
      <div
        className="projects__container"
        style={width < 900 ? { flexDirection: 'column-reverse' } : {}}
      >
        <motion.img
          alt="Curso screenshots"
          className="projects__pic"
          src={cursoPic}
          variants={imgVariants}
          initial="initial"
          whileInView="view"
        />
        <motion.div
          className="projects__text-container"
          variants={scrollVariants}
          initial="initial"
          whileInView="view"
        >
          <h2 className="projects__name">&lt;Web course&gt;</h2>
          <p className="projects__text">
            A group of pages for a web course: landing page, register page,
            sales page. This web app has a backend link to Active Campaign so it
            had an automatic mail marketing campaign. The users are also saved
            in the data base of the web app.
          </p>
          <p className="projects__text">
            Techs used: The frontend is builded with React. The backend is
            created with NodeJS, Express and Mongoose.
          </p>
          <p className="projects__text projects__text-link">Link:</p>
          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="https://github.com/JulianRB17/timidez-frontend">
              Frontend on Github
            </a>
          </motion.button>

          <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="https://github.com/JulianRB17/timidez-backend-active">
              Backend on Github
            </a>
          </motion.button>
          {/* <motion.button
            className="projects__link"
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Page
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
