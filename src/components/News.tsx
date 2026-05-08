interface NewsItem {
  date: string;
  title: string;
  description: string;
  url: string;
}

const news: NewsItem[] = [
  {
    date: 'Mayo 2026',
    title: 'React y Next.js refuerzan su seguridad',
    description:
      'Cloudflare activó mitigaciones y recomendó actualizar dependencias tras nuevas vulnerabilidades en React Server Components y Next.js.',
    url: 'https://developers.cloudflare.com/changelog/post/2026-05-06-react-nextjs-vulnerabilities/',
  },
  {
    date: 'Abril 2026',
    title: 'MDN renueva su frontend',
    description:
      'MDN explicó cómo reconstruyó su interfaz con una arquitectura más ligera, web components y una entrega más cuidada del código necesario.',
    url: 'https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/',
  },
  {
    date: '2026',
    title: 'Baseline 2026 marca nuevas APIs listas para usar',
    description:
      'web.dev agrupa las funciones modernas de HTML, CSS, JavaScript y APIs web que ya alcanzan soporte suficiente para proyectos actuales.',
    url: 'https://web.dev/baseline/2026',
  },
];

export default function News() {
  return (
    <>
      <h2 className="section-title">Noticias</h2>
      <p className="section-subtitle">Lo último que está pasando</p>

      <div className="news-grid">
        {news.map((item, index) => (
          <a className="news-card" href={item.url} target="_blank" rel="noreferrer" key={index}>
            <span className="news-date">{item.date}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}
