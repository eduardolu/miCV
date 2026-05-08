const toolkitGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Firebase', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Cloudflare', 'Git', 'Docker', 'Linux', 'Vercel'],
  },
];

export default function TechnicalToolkit() {
  return (
    <>
      <div className="toolkit-heading">
        <span className="toolkit-index" aria-hidden="true">03.</span>
        <h2 className="toolkit-title">Technical Toolkit</h2>
      </div>

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
