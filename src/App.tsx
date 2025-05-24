import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MarsDust from './components/MarsDust';
import FloatingStones from './components/FloatingStones';

const App: React.FC = () => {
  return (
    <div className="relative">
      <MarsDust />
      <FloatingStones />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;