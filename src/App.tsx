import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalData from './components/PersonalData';
import Experience from './components/Experience';
import Projects from './components/Projects';
import News from './components/News';

function App() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const progressDistance = windowHeight * (isMobile ? 0.72 : 1.1);
      const progress = Math.min(scrollY / progressDistance, 1);
      
      setHeroScrollProgress(progress);
      setHeaderVisible(scrollY > windowHeight * (isMobile ? 0.26 : 0.5));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const doorsOpen = heroScrollProgress > 0.26;

  return (
    <>
      <Header visible={headerVisible} />
      <Hero scrollProgress={heroScrollProgress} />

      <main className={`page-content ${doorsOpen ? 'page-content-visible' : ''}`}>
        <section className="section" id="datos">
          <PersonalData />
        </section>
        <section className="section" id="experiencia">
          <Experience />
        </section>
        <section className="section" id="proyectos">
          <Projects />
        </section>
        <section className="section" id="noticias">
          <News />
        </section>
      </main>

      <footer className={`footer ${doorsOpen ? 'footer-visible' : ''}`}>
        <p>© 2026 Eduardo Lu. Hecho con React + TypeScript.</p>
      </footer>
    </>
  );
}

export default App;
