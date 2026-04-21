import { Fragment } from 'react';
import { Reveal, RichText } from '../atoms';

const content = {
  en: {
    num: "01", kicker: "Shore", title: ["Hello — I'm Tiago. ", { em: "Nice of you to drop by." }],
    lede: [
      "I'm a front-end developer from ", { hl: "Peniche" },
      ", a small peninsula on Portugal's west coast where the Atlantic does the talking. ",
      "Three degrees in, ", { em: "people are still the thing" },
      " — I just build for them with code now."
    ],
    facts: [
      ["Based", "Peniche, PT — ", { pin: "39.38°N" }],
      ["Fuels", "Coffee · curiosity · salt air"],
      ["Open to", "Junior / trainee front-end roles"],
      ["Speaks", "Portuguese · English · a bit of the sea"]
    ],
    avatar: { name: "Tiago Machado", role: "Front-end developer", status: "Available" }
  },
  pt: {
    num: "01", kicker: "Costa", title: ["Olá — sou o Tiago. ", { em: "Obrigado pela visita." }],
    lede: [
      "Sou front-end developer de ", { hl: "Peniche" },
      ", uma pequena península na costa oeste de Portugal onde o Atlântico manda. ",
      "Três formações depois, ", { em: "as pessoas continuam a ser o ponto" },
      " — só que agora construo para elas com código."
    ],
    facts: [
      ["Aqui", "Peniche, PT — ", { pin: "39.38°N" }],
      ["Alimento", "Café · curiosidade · maresia"],
      ["À procura", "Roles júnior / trainee em front-end"],
      ["Fala", "Português · Inglês · um bocado de mar"]
    ],
    avatar: { name: "Tiago Machado", role: "Front-end developer", status: "Disponível" }
  }
};

export default function Shore({ lang }) {
  const t = content[lang];
  return (
    <section id="shore" className="sec" data-screen-label="01 Shore">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.num}</span><span>/ {t.kicker}</span></div>
            <h2><RichText tokens={t.title} /></h2>
          </div>
        </div>
      </Reveal>
      <div className="shore-grid">
        <Reveal delay={80}>
          <p className="shore-lede"><RichText tokens={t.lede} /></p>
        </Reveal>
        <Reveal delay={160}>
          <div className="shore-aside">
            <div className="avatar-card">
              <img src={import.meta.env.BASE_URL + "fotoperfil.jpg"} alt="Tiago Machado" />
              <div>
                <div className="who">{t.avatar.name}</div>
                <div className="role">{t.avatar.role}</div>
              </div>
              <div className="status"><span className="live" />{t.avatar.status}</div>
            </div>
            <div>
              {t.facts.map((f, i) => (
                <div key={i} className="fact">
                  <div className="k">{f[0]}</div>
                  <div className="v">
                    {f.slice(1).map((x, j) =>
                      typeof x === "string" ? <Fragment key={j}>{x}</Fragment>
                      : x && x.pin ? <a key={j} className="pin" href="#map">{x.pin}</a> : null
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
