import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalData from './components/PersonalData';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalToolkit from './components/TechnicalToolkit';
import News from './components/News';

function App() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    let frameId: number | null = null;
    let lastHeaderVisible = false;
    let lastDoorsOpen = false;

    const updateHeroProgress = () => {
      frameId = null;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const progressDistance = windowHeight * (isMobile ? 0.72 : 1.1);
      const progress = Math.min(scrollY / progressDistance, 1);
      const nextHeaderVisible = scrollY > windowHeight * (isMobile ? 0.26 : 0.5);
      const nextDoorsOpen = progress > 0.26;

      document.documentElement.style.setProperty('--hero-progress', progress.toFixed(4));

      if (nextHeaderVisible !== lastHeaderVisible) {
        lastHeaderVisible = nextHeaderVisible;
        setHeaderVisible(nextHeaderVisible);
      }

      if (nextDoorsOpen !== lastDoorsOpen) {
        lastDoorsOpen = nextDoorsOpen;
        setDoorsOpen(nextDoorsOpen);
      }
    };

    const scheduleHeroProgress = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateHeroProgress);
    };

    updateHeroProgress();
    window.addEventListener('scroll', scheduleHeroProgress, { passive: true });
    window.addEventListener('touchmove', scheduleHeroProgress, { passive: true });
    window.addEventListener('resize', scheduleHeroProgress);

    return () => {
      window.removeEventListener('scroll', scheduleHeroProgress);
      window.removeEventListener('touchmove', scheduleHeroProgress);
      window.removeEventListener('resize', scheduleHeroProgress);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
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

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Header visible={headerVisible} theme={theme} onToggleTheme={toggleTheme} />
      <Hero doorsOpen={doorsOpen} />

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
        <section className="section section-wide" id="toolkit">
          <TechnicalToolkit />
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
