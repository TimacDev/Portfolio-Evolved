import { useState } from 'react';
import { Reveal, RichText } from '../atoms';

const content = {
  en: {
    num: "04", kicker: "Reefs", title: ["Things I've ", { em: "washed ashore." }],
    filters: ["All", "Live", "In progress", "Collab"],
    projects: [
      { id: 1, title: "Tech Store",     desc: "E-commerce mini-project — product grid, cart, checkout. Built hand-in-hand with a classmate.", tags: ["HTML", "CSS", "JS"], type: "Live · collab", thumb: "ocean",  href: "https://github.com/OdaIT/Mini-Projeto_Tiago_Danilo" },
      { id: 2, title: "Digital Menu",   desc: "A restaurant menu flow with categories, filters and a mobile-first layout.",                   tags: ["JS", "Flexbox"],     type: "Live",          thumb: "sand",   href: "https://github.com/OdaIT/Restaurante" },
      { id: 3, title: "Café App",       desc: "Final project — a React app for specialty coffee shops. Ordering, loyalty, and a touch of ritual.", tags: ["React", "Tailwind"], type: "In progress",  thumb: "sunset", href: "#", wip: true },
      { id: 4, title: "This Portfolio", desc: "Rebuilt in React — a coastline for a navbar, waves between sections, and Baleal at the top.",       tags: ["React", "CSS"],      type: "Live",          thumb: "ocean",  href: "#" }
    ]
  },
  pt: {
    num: "04", kicker: "Recifes", title: ["Coisas que ", { em: "deram à costa." }],
    filters: ["Todos", "Em linha", "Em curso", "Colab"],
    projects: [
      { id: 1, title: "Tech Store",       desc: "Mini-projeto de e-commerce — grelha, carrinho, checkout. Feito a quatro mãos com um colega.",           tags: ["HTML", "CSS", "JS"], type: "Em linha · colab", thumb: "ocean",  href: "https://github.com/OdaIT/Mini-Projeto_Tiago_Danilo" },
      { id: 2, title: "Menu Digital",     desc: "Menu de restaurante com categorias, filtros e layout mobile-first.",                                     tags: ["JS", "Flexbox"],     type: "Em linha",         thumb: "sand",   href: "https://github.com/OdaIT/Restaurante" },
      { id: 3, title: "Café App",         desc: "Projeto final — app em React para cafetarias de especialidade. Pedidos, fidelização, e um toque de ritual.", tags: ["React", "Tailwind"], type: "Em curso",         thumb: "sunset", href: "#", wip: true },
      { id: 4, title: "Este Portefólio",  desc: "Reconstruído em React — uma costa por navbar, ondas entre secções, e o Baleal no topo.",                  tags: ["React", "CSS"],      type: "Em linha",         thumb: "ocean",  href: "#" }
    ]
  }
};

export default function Reefs({ lang }) {
  const t = content[lang];
  const [filter, setFilter] = useState(t.filters[0]);
  const all = t.filters[0];
  const filtered = t.projects.filter(p =>
    filter === all ||
    (filter.toLowerCase().includes("progress") || filter.toLowerCase().includes("curso")) ? (filter === all ? true : p.type.toLowerCase().includes("progress") || p.type.toLowerCase().includes("curso")) :
    p.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="reefs" className="sec" data-screen-label="04 Reefs">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.num}</span><span>/ {t.kicker}</span></div>
            <h2><RichText tokens={t.title} /></h2>
          </div>
          <div className="reef-bar">
            {t.filters.map(f => (
              <button key={f} className={f === filter ? "on" : ""} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="reefs">
        {filtered.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <a className="reef" href={p.href} target="_blank" rel="noreferrer">
              <div className={"thumb " + p.thumb}>
                <div className="stripe-ph" />
                <span className="proj-label">{p.title.toLowerCase().replace(/\s+/g, "-")}.jpg</span>
              </div>
              <div className="body">
                <div className="tagline-row">
                  <span>{p.type}</span>
                  {p.wip && <span className="wip">● WIP</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="desc">{p.desc}</p>
                <div className="foot">
                  <div className="stack">
                    {p.tags.map(tg => <span key={tg}>{tg}</span>)}
                  </div>
                  <span className="open">Open →</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
