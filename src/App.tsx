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
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
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
    let lastProgress = -1;
    let lastHeaderVisible = false;

    const updateScrollState = () => {
      frameId = null;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const progressDistance = windowHeight * (isMobile ? 0.72 : 1.1);
      const progress = Math.min(scrollY / progressDistance, 1);
      const nextHeaderVisible = scrollY > windowHeight * (isMobile ? 0.26 : 0.5);

      if (Math.abs(progress - lastProgress) > 0.003) {
        lastProgress = progress;
        setHeroScrollProgress(progress);
      }

      if (nextHeaderVisible !== lastHeaderVisible) {
        lastHeaderVisible = nextHeaderVisible;
        setHeaderVisible(nextHeaderVisible);
      }
    };

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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

  const doorsOpen = heroScrollProgress > 0.26;
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Header visible={headerVisible} theme={theme} onToggleTheme={toggleTheme} />
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
