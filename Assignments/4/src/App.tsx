import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />
      <main>
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Marco Ho. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;