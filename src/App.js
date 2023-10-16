import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;