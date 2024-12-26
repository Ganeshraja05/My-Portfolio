import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';

function App() {
    return (
        <div className="App">
            {/* Header remains at the top */}
            <Header />

            {/* Sections with IDs for Smooth Scrolling */}
            <div id="hero">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="Education">
                <Education />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="Certifications">
              <Certifications />
            </div>
            <div id="Achievements">
              <Achievements />
            </div>
            <div id="Experience">
              <Experience />
            </div>
            <div id="resume">
                <Resume />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default App;
