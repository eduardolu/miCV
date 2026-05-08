export default function Projects() {
  return (
    <>
      <h2 className="section-title">Proyectos</h2>
      <p className="section-subtitle">Trabajos destacados y proyectos publicados</p>

      <div className="projects-grid">
        <article className="project-card featured-project">
          <div className="project-visual" aria-hidden="true">
            <span className="project-sun" />
            <span className="project-cloud project-cloud-main" />
            <span className="project-cloud project-cloud-soft" />
            <span className="project-rain project-rain-one" />
            <span className="project-rain project-rain-two" />
            <span className="project-rain project-rain-three" />
          </div>

          <div className="project-content">
            <div className="project-meta">
              <span>Aplicacion web</span>
              <span>Cloudflare Pages</span>
            </div>

            <h3>Meteo Eduardo Lu</h3>
            <p>
              App meteorologica publicada en meteo.eduardolu.com con una vista moderna para consultar
              el tiempo, previsiones y datos clave de forma clara y rapida.
            </p>

            <div className="project-tags" aria-label="Tecnologias del proyecto">
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>Cloudflare</span>
            </div>

            <a className="project-link" href="https://meteo.eduardolu.com" target="_blank" rel="noreferrer">
              Ver proyecto
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
