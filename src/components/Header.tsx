import { useState, useEffect } from 'react';
import LogoMark from './LogoMark';

const sections = [
  { id: 'datos', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'noticias', label: 'Noticias' },
];

interface HeaderProps {
  visible: boolean;
}

export default function Header({ visible }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

          <a href="mailto:eduardo.luzhan@gmail.com" className="header-cta">
            Contacto
          </a>
        </div>
      </header>

      <div className="header-progress" style={{ width: `${scrollProgress}%` }} />
    </>
  );
}
