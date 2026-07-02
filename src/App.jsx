import React, { Suspense } from 'react';
import './index.css';

// Eagerly load Navbar and Footer as they are small and critical
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load major sections to improve initial load time
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Resume = React.lazy(() => import('./components/Resume'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="container section" style={{textAlign: 'center'}}>Loading...</div>}>
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
