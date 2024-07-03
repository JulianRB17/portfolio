import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact({ scrollVariants, contactRef }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

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
    },
    hoverSbmt: {
      scale: 1.1,
      boxShadow: '0 0 5px #0aaef7',
    },
    tap: {
      scale: 0.8,
    },
    hidden: { display: 'none', opacity: 0 },
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);

      if (result) {
        setForm({
          name: '',
          email: '',
          message: '',
        });
        alert('Thank you. I will get back to you as soon as possible.');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);

      alert('Ahh, something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact" ref={contactRef}>
      <h1 className="contact__subtitle">Let's Bring Your Vision to Life!</h1>

      <motion.div
        className="contact__container"
        variants={scrollVariants}
        initial="initial"
        whileInView="view"
      >
        <h1 className="contact__title">&lt;contact&gt;</h1>
        <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
          <p className="contact__call-to-action">Let's talk!:</p>
          <div className="contact__form-container">
            <div className="contact__input-element">
              <label className="contact__label">Your name:</label>
              <input
                className="contact__input"
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                required
                minLength={7}
              />
            </div>
            <div className="contact__input-element">
              <label className="contact__label">Your email:</label>
              <input
                className="contact__input"
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                required
                minLength={10}
              />
            </div>
            <div className="contact__input-element">
              <label className="contact__label">Your message:</label>
              <textarea
                className="contact__input"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                minLength={15}
              />
            </div>
          </div>
          {loading ? (
            <motion.button type="submit" className="contact__sbmt-btn" disabled>
              Sending
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className="contact__sbmt-btn"
              variants={btnVariants}
              whileHover="hoverSbmt"
              whileTap="tap"
            >
              Send
            </motion.button>
          )}
        </form>
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
            <a href="https://github.com/JulianRB17/"> Github </a>
          </motion.button>
        </div>
        {/* <div className="contact__element">
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
        </div> */}
        <div className="contact__overlay" />
      </motion.div>
    </section>
  );
}
