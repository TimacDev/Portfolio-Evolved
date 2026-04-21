import { Reveal, WaveMark, RichText } from '../atoms';

const content = {
  en: {
    num: "02", kicker: "Tides", title: ["What I can do, ", { em: "day to day." }],
    intro: "Tides come in stages. So do skills. Here's where mine sit right now — honestly.",
    cards: [
      { level: "fluent",   depth: "High tide · daily",   title: "Foundations",    items: ["HTML", "CSS", "JavaScript", "Responsive design", "Accessibility", "Git"] },
      { level: "learning", depth: "Mid tide · shipping", title: "Building with",  items: ["React", "React Router", "Tailwind", "REST APIs", "Figma"] },
      { level: "curious",  depth: "Low tide · next",     title: "On the horizon", items: ["TypeScript", "Node / Express", "Testing", "Next.js"] }
    ]
  },
  pt: {
    num: "02", kicker: "Marés", title: ["O que faço, ", { em: "no dia-a-dia." }],
    intro: "As marés têm fases. As skills também. Aqui está onde estão as minhas — sem floreados.",
    cards: [
      { level: "fluent",   depth: "Preia-mar · diário",     title: "Bases",           items: ["HTML", "CSS", "JavaScript", "Responsivo", "Acessibilidade", "Git"] },
      { level: "learning", depth: "Meia-maré · a enviar",   title: "A construir com", items: ["React", "React Router", "Tailwind", "APIs REST", "Figma"] },
      { level: "curious",  depth: "Baixa-mar · a seguir",   title: "No horizonte",    items: ["TypeScript", "Node / Express", "Testes", "Next.js"] }
    ]
  }
};

export default function Tides({ lang }) {
  const t = content[lang];
  return (
    <section id="tides" className="sec" data-screen-label="02 Tides">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.num}</span><span>/ {t.kicker}</span></div>
            <h2><RichText tokens={t.title} /></h2>
          </div>
          <p style={{ maxWidth: "28ch", color: "var(--ink-3)", fontSize: 14 }}>{t.intro}</p>
        </div>
      </Reveal>
      <div className="tides">
        {t.cards.map((c, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className={"tide " + c.level}>
              <WaveMark />
              <h3>{c.title}</h3>
              <div className="depth">{c.depth}</div>
              <ul className="list">
                {c.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
