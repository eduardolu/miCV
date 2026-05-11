interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    date: '2023 - 2025',
    title: 'Full Stack Developer',
    company: 'LCApps',
    description:
      'Desarrollo y mantenimiento de aplicaciones web con tecnologías modernas. Participación en el diseño de arquitecturas, implementación de funcionalidades y optimización del rendimiento.',
  },
  {
    id: 2,
    date: '2023 - 2025',
    title: 'Formación en Desarrollo de Software',
    company: '42 Madrid',
    description:
      'Formación intensiva basada en aprendizaje peer-to-peer, resolución de retos técnicos y desarrollo de proyectos prácticos. Reconocido como "Popular" del campus durante la prueba de acceso por ayudar a otros compañeros.',
  },
  {
    id: 3,
    date: '2018 - 2023',
    title: 'Gestor de Operaciones de Planta Existente',
    company: 'American Tower',
    description:
      'Responsable de la gestión de obras desde la solicitud hasta la ejecución, coordinando el proceso end-to-end con áreas internas, proveedores y agentes externos en más de 20 provincias.',
  },
];

export default function Experience() {
  return (
    <>
      <h2 className="section-title">Experiencia</h2>
      <p className="section-subtitle">Mi trayectoria profesional</p>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.id}>
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
