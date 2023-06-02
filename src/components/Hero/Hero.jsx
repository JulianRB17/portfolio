import photo from '../../images/retrato.png';
import { easeInOut, motion, spring } from 'framer-motion';

export default function Hero({ scrollVariants, setMousePosition }) {
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMousePosition([x, y]);
  };

  const titleVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    left: {
      x: -20,
    },
    right: {
      x: 20,
    },
    view: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: easeInOut, delay: 3.3 },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    view: {
      opacity: 1,
      boxShadow: '0 0 10px #223f5b',
      transition: {
        duration: 2,
        ease: easeInOut,
        type: spring,
        delay: 3,
      },
    },
  };

  const quoteVariants = {
    initial: { opacity: 0, y: -10 },
    view: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.5, duration: 1 },
    },
    author: {
      opacity: 1,
      y: 0,
      transition: { delay: 5, duration: 1 },
    },
  };

  const imgVariants = {
    initial: { opacity: 0 },
    view: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 3.5,
      },
    },
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove} id="hero">
      <div className="hero__presentation-container">
        <motion.h1
          className="hero__name"
          variants={titleVariants}
          initial={['initial', 'left']}
          animate="view"
        >
          Julián Reyes Botello
        </motion.h1>
        <motion.img
          className="hero__img"
          alt="portrait"
          src={photo}
          variants={imgVariants}
          initial="initial"
          animate="view"
        />
        <motion.h2
          className="hero__presentation"
          variants={titleVariants}
          initial={['initial', 'right']}
          animate="view"
        >
          Javascript web developer with an arts background and a passion for the
          endless possibilities of coding.
        </motion.h2>
      </div>
      <motion.div
        className="hero__quote-container"
        variants={containerVariants}
        initial="initial"
        animate="view"
      >
        <motion.p className="hero__quote" variants={quoteVariants}>
          "Imagination is the beginning of creation. You imagine what you
          desire, you will what you imagine, and at last, you create what you
          will."
        </motion.p>
        <motion.p
          variants={quoteVariants}
          initial="initial"
          animate="author"
          className="hero__quote-author"
        >
          George Bernard Shaw.
        </motion.p>
      </motion.div>
      <motion.div
        className="hero__description-container"
        variants={scrollVariants}
        initial="initial"
        whileInView="view"
      >
        <h2 className="hero__description-title">
          &lt;Art and coding, coding and art&gt;
        </h2>
        <p className="hero__description">
          I have a theater direction, production and acting background: I know
          my way with words, I know how to administrate and I know how failure
          is just a step to achieve a goal.
        </p>
        <p className="hero__description">
          As someone with a theater background I have studied for a long time
          human interactions, human condition and experimenting with concepts
          and feelings through my body or the bodies of other people. I have
          found the same possibility as a web developer: the possibility of
          creation, not on the human body but through a language that
          materializes itself on a screen. The origin is the same: how to do
          this?
        </p>
        <p className="hero__description">
          Human creativity is the basis to our development.
        </p>
        <p className="hero__description">
          It was not easy for me to be here: I believe in hard work and in
          discipline as the basis of creation. The ability to imagine works only
          when we dedicate ourselves to our work.
        </p>
        <div className="hero__description-overlay" />
      </motion.div>
    </section>
  );
}
