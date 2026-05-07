interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    date: '2023 - 2025',
    title: 'Full Stack Developer',
    company: 'LCApp',
    description:
      'Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías modernas. Participación activa en el diseño de arquitecturas, implementación de features y optimización del rendimiento.',
  },
  {
    date: '2018 - 2023',
    title: 'Gestor de Operaciones de Planta Existente',
    company: 'American Tower',
    description:
      'Responsable de la Gestión de Obras desde la solicitud hasta la ejecución de la misma, coordinando el E2E con áreas internas (Adquisición, Legal...), como con proveedores y agentes externos, llevando más d e 20 provincias.',
  },
];

export default function Experience() {
  return (
    <>
      <h2 className="section-title">Experiencia</h2>
      <p className="section-subtitle">Mi trayectoria profesional</p>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <span className="timeline-date">{exp.date}</span>
            <h4>{exp.title}</h4>
            <p className="timeline-company">{exp.company}</p>
            <p className="timeline-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
