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
      <h1 className="hero__hook">
        Your vision, a little coding, infinite possibilities
      </h1>
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
          A junior JavaScript developer with an arts background: transforms your
          web ideas into stunning digital realities. Elevate your web presence
          with unique solutions that capture your vision and engage your
          audience.
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
          With a background in theater direction, production, and acting, I
          possess a deep understanding of the power of words, effective
          administration, and the inevitability of failure as a stepping stone
          to success.
        </p>
        <p className="hero__description">
          My experience in theater has equipped me with insights into human
          interactions and the human condition, allowing me to explore concepts
          and emotions through my own body and those of others. Transitioning to
          web development, I found a similar creative outlet, where I can
          materialize ideas on a screen through code.
        </p>
        <p className="hero__description">
          The essence remains: how can we create something meaningful? Human
          creativity fuels our growth.
        </p>
        <p className="hero__description">
          Achieving my current skills required hard work and discipline. I
          firmly believe that imagination thrives when we are dedicated to our
          craft.
        </p>
        <div className="hero__description-overlay" />
      </motion.div>
    </section>
  );
}
