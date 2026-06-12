import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-sand text-ink font-sans selection:bg-ink selection:text-sand">
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
