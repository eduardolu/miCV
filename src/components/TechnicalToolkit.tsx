const toolkitGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue', 'JavaScript', 'TypeScript', 'Vite', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['PHP (Symfony)', 'Express', 'Firebase', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Desarrollo y Herramientas',
    skills: ['Cloudflare', 'Git', 'Docker', 'Linux', 'VS Code', 'Postman'],
  },
];

export default function TechnicalToolkit() {
  return (
    <>
      <h2 className="section-title">Herramientas</h2>
      <p className="section-subtitle">Tecnologías y herramientas que utilizo</p>

      <div className="toolkit-grid" aria-label="Herramientas tecnicas">
        {toolkitGroups.map((group) => (
          <article className="toolkit-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="toolkit-skills">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
