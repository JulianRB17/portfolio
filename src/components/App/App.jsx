import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import './App.css';
import AbstractHero from '../AbstractHero/AbstractHero';
import { useState, useRef, useEffect } from 'react';
import Techs from './../Techs/Techs';

function App() {
  const [mousePosition, setMousePosition] = useState();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  const scrollVariants = {
    initial: { opacity: 1, y: -20 },
    view: {
      y: 0,
      transition: { duration: 1, delay: 0.1 },
    },
  };

  const btnVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0 0 5px #0aaef7',
    },
    tap: {
      scale: 0.9,
      boxShadow: '0 0 10px 2px #0aaef7',
    },
  };

  return (
    <>
      <Header
        refs={{ heroRef, aboutRef, contactRef, projectsRef }}
        windowDimensions={windowDimensions}
      />
      <section className="hero-container" ref={heroRef}>
        <AbstractHero
          mousePosition={mousePosition}
          windowDimensions={windowDimensions}
        />
        <Hero
          scrollVariants={scrollVariants}
          setMousePosition={setMousePosition}
        />
      </section>
      <About scrollVariants={scrollVariants} aboutRef={aboutRef} />
      <Projects
        scrollVariants={scrollVariants}
        btnVariants={btnVariants}
        projectsRef={projectsRef}
        windowDimensions={windowDimensions}
      />
      <Techs scrollVariants={scrollVariants} />
      <Contact scrollVariants={scrollVariants} contactRef={contactRef} />
    </>
  );
}

export default App;
