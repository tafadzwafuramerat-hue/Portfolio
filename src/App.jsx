import { useEffect, useState } from 'react';
import Particles from './components/Particles';
import FallingFlowers from './components/FallingFlowers';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="relative min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-300">
      <Particles count={16} className="fixed" />
      <FallingFlowers count={10} className="fixed" />
      <div className="relative z-10 px-2 pt-4">
        <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
