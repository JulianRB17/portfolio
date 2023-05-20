import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import './App.css';

function App() {
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
      boxShadow: '0 0 5px orange',
    },
    tap: {
      scale: 0.9,
      boxShadow: '0 0 10px 2px orange',
    },
  };

  return (
    <>
      <Header />
      <Hero scrollVariants={scrollVariants} />
      <About scrollVariants={scrollVariants} />
      <Projects scrollVariants={scrollVariants} btnVariants={btnVariants} />
      <Contact scrollVariants={scrollVariants} btnVariants={btnVariants} />
    </>
  );
}

export default App;
