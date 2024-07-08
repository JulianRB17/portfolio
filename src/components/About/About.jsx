import React from 'react';
import codePhoto from '../../images/obscenos-code.png';
import { motion } from 'framer-motion';

export default function About({ aboutRef }) {
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
    <section className="about" ref={aboutRef}>
      <h2 className="about__title">&lt;About me&gt;</h2>
      <motion.h3
        className="about__intro-text"
        variants={scrollLeftVariants}
        initial="initial"
        whileInView="view"
      >
        Bringing Creativity to Your Digital World
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
          <p className="about__paragraph">
            As a teenager, I dreamt of being Batman or inventing a flying car
            like Doc Emmet Brown. I longed to create something remarkable. Then,
            BOOM! I fell in love—not just with a girl but more profoundly with
            theater. It became a space where I could explore humanity, reality,
            and poetry through my body. Yet, something was still missing.
          </p>
          <p className="about__paragraph">
            Years flew by, and then another BOOM: 2020 hit. During that time, I
            embraced our collective vulnerability. Without the chance to connect
            with others physically, I sought a new avenue for my creativity. I
            revisited my younger self, and he had an idea. I delved into coding,
            starting with HTML and CSS, which were relatively straightforward.
            Then JavaScript opened a world of endless possibilities. React
            introduced structure, and NodeJS revealed complexity. So, here I am,
            a unique blend of theater and coding. Let's dive into the world of
            code together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
