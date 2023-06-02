import React from 'react';
import codePhoto from '../../images/magnetar_code.jpg';
import { motion } from 'framer-motion';

export default function About({aboutRef}) {
  const scrollLeftVariants = {
    initial: { opacity: 0.5, x: -30 },
    view: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.1 },
    },
  };

  const scrollRightVariants = {
    initial: { opacity: 0.5, x: 30 },
    view: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.1 },
    },
  };

  return (
    <section className="about" ref ={aboutRef}>
      <motion.h3
        className="about__intro-text"
        variants={scrollLeftVariants}
        initial="initial"
        whileInView="view"
      >
        A beautiful code is one that is elegant, efficient and minimalistic. Who
        doesn't want something simple solving our lives?
      </motion.h3>
      <div className="about__container">
        <motion.img
          alt="art and code"
          src={codePhoto}
          className="about__pic"
          variants={scrollLeftVariants}
          initial="initial"
          whileInView="view"
        />
        <motion.div
          className="about__text-container"
          initial="initial"
          whileInView="view"
          variants={scrollRightVariants}
        >
          <h2 className="about__title">&lt;About me&gt;</h2>
          <p className="about__paragraph">
            As a teenager I wanted to be Batman or maybe the one who could
            invent a flying car, kind of Doc Emmet Brown. I wanted to create
            something. And then: BOOM! Just like that I fell in love, with a
            girl, yes, but more importantly, with theater. A place to experiment
            humanity, reality and poetry through my body. I found a way to
            create. But something was missing. Years passed, and then another
            BOOM: 2020 happened. There I embraced our weakness, and without
            having the possibility to join with other people I needed to find a
            different way to express my creativity, so I turned back and talked
            a little with the teenager Julián, he may had an idea… And he did. I
            learned how to code, from HTML to CSS was kinda easy. And then
            JavaScript opened the door: the possibilities were endless. React
            found a way to bring structure and NodeJS showed complexity. So,
            here I am, a weird dude that can do both: theater and coding. So…
            let's talk about coding.
          </p>
          <p className="about__paragraph">
            JavaScript is my origin. My first step into this creation. Someday I
            want to play with Python.
          </p>
          <p className="about__paragraph">
            I have a personal project that joins both passions: A web from
            artists to artists, it's called Mantika. Soon it will be ready to be
            outside.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
