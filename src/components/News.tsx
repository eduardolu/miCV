interface NewsItem {
  date: string;
  title: string;
  description: string;
}

const news: NewsItem[] = [
  {
    date: 'Mayo 2026',
    title: 'Nuevo portfolio web',
    description:
      'Lanzamiento de mi nuevo portfolio personal con un diseño moderno y animaciones interactivas. Construido con React, TypeScript y mucho cariño.',
  },
  {
    date: 'Abril 2026',
    title: 'Aprendiendo nuevas tecnologías',
    description:
      'Explorando nuevas herramientas y frameworks del ecosistema JavaScript para seguir mejorando como desarrollador y ofrecer soluciones más eficientes.',
  },
  {
    date: 'Marzo 2026',
    title: 'Próximamente más contenido',
    description:
      'Preparando nuevos proyectos y contenido interesante. Mantente atento a las actualizaciones.',
  },
];

export default function News() {
  return (
    <>
      <h2 className="section-title">Noticias</h2>
      <p className="section-subtitle">Lo último que está pasando</p>

      <div className="news-grid">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <span className="news-date">{item.date}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
