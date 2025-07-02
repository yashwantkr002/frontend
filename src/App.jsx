import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Skills from './components/Skills';
import LearningJourney from './components/LearningJourney';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <Navbar />
      <main className="w-full ">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Blog />
              <Contact />
            </>
          } />
          <Route path="/journey" element={<LearningJourney />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

