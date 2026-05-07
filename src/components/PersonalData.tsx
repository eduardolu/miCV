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
          <p className="role">Full Stack Developer</p>
          <p className="bio">
            Desarrollador Full Stack con 2 años de experiencia creando aplicaciones web modernas y escalables.
            Apasionado por la tecnología, el aprendizaje continuo y la resolución de problemas complejos.
            Basado en Madrid, siempre en busca de nuevos desafíos y oportunidades para crecer profesionalmente.
          </p>
          <div className="info-grid">
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Madrid, España</span>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>eduardo.lu...</span>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              <span>2 años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
