import { useState, useEffect } from 'react';
import LogoMark from './LogoMark';

const sections = [
  { id: 'datos', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'toolkit', label: 'Herramientas' },
  { id: 'noticias', label: 'Noticias' },
];

interface HeaderProps {
  visible: boolean;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Header({ visible, theme, onToggleTheme }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      document.documentElement.style.setProperty('--page-progress', progress.toFixed(4));
    };

    const scheduleProgress = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('touchmove', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress);

    return () => {
      window.removeEventListener('scroll', scheduleProgress);
      window.removeEventListener('touchmove', scheduleProgress);
      window.removeEventListener('resize', scheduleProgress);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${visible ? 'visible' : ''}`}>
        <div className="header-inner">
          <button className="header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Ir al inicio">
            <LogoMark className="logo-mark" title="Ir al inicio" />
          </button>

          <nav className="header-nav" aria-label="Navegación principal">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollTo(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Cambiar a modo dia' : 'Cambiar a modo noche'}
              title={theme === 'dark' ? 'Modo dia' : 'Modo noche'}
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3a6 6 0 0 0 9 7.2A9 9 0 1 1 12 3Z" />
                </svg>
              )}
            </button>

            <a href="mailto:e.lu@eduardolu.com" className="header-cta">
              Contacto
            </a>
          </div>
        </div>
      </header>

      <div className="header-progress" />
    </>
  );
}
