export default function Projects() {
  return (
    <>
      <h2 className="section-title">Proyectos</h2>
      <p className="section-subtitle">Trabajos destacados próximamente</p>

      <div className="projects-grid">
        <div className="project-placeholder">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>Próximamente nuevos proyectos...</p>
        </div>
        <div className="project-placeholder">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <p>Stay tuned...</p>
        </div>
      </div>
    </>
  );
}
