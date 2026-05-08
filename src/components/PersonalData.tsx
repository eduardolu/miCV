import LogoMark from './LogoMark';

export default function PersonalData() {
  return (
    <>
      <h2 className="section-title">Datos Personales</h2>
      <p className="section-subtitle">Conóceme un poco mejor</p>

      <div className="personal-card">
        <div className="avatar" aria-hidden="true">
          <LogoMark className="avatar-mark" />
        </div>
        <div className="personal-info">
          <h3>Eduardo Lu</h3>
          <p className="role">Full Stack Developer | 42 Madrid</p>
          <p className="bio">
            Desarrollador Full Stack en Madrid, formado en 42 y con experiencia creando aplicaciones web
            modernas con React, TypeScript y herramientas del ecosistema JavaScript. Combino una base técnica
            práctica con experiencia previa en operaciones, coordinación de proyectos y resolución de problemas.
          </p>
          <div className="info-grid">
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Madrid, España</span>
            </div>
            <a className="info-item" href="https://www.linkedin.com/in/edulu/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn / edulu</span>
            </a>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              <span>2 años de experiencia</span>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
              </svg>
              <span>42 Madrid · 2023 - 2025</span>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 010 20" />
                <path d="M12 2a15.3 15.3 0 000 20" />
              </svg>
              <span>Español y chino bilingüe</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
