import { Reveal, RichText } from '../atoms';

const content = {
  en: {
    num: "03", kicker: "Currents", title: ["Three degrees, ", { em: "one current." }],
    stops: [
      { when: "2016 — 2019", title: "Anthropology",    where: "ISCTE-IUL · BA",       text: "Learning how people build meaning. Fieldwork, writing, listening carefully." },
      { when: "2019 — 2021", title: "Police Sciences", where: "ISCPSI · Post-grad",    text: "Criminology, investigation, systems thinking. Detail-work under pressure." },
      { when: "2025 → now",  title: "Front-end Dev",   where: "UpSkill · JavaScript", text: "Building interfaces for people. Same job — different tools.", now: true }
    ],
    thread: "The thread through all of it is ",
    threadEm: "people",
    threadEnd: ". Anthropology taught me to notice them, policing taught me how systems serve them, code lets me build for them."
  },
  pt: {
    num: "03", kicker: "Correntes", title: ["Três formações, ", { em: "uma corrente." }],
    stops: [
      { when: "2016 — 2019",  title: "Antropologia",      where: "ISCTE-IUL · Lic.",     text: "Como as pessoas constroem sentido. Trabalho de campo, escrita, ouvir com atenção." },
      { when: "2019 — 2021",  title: "Ciências Policiais", where: "ISCPSI · Pós-grad",    text: "Criminologia, investigação, pensamento sistémico. Atenção ao detalhe sob pressão." },
      { when: "2025 → agora", title: "Front-end Dev",      where: "UpSkill · JavaScript", text: "A construir interfaces para pessoas. Mesmo trabalho, ferramentas diferentes.", now: true }
    ],
    thread: "O fio por trás de tudo são ",
    threadEm: "as pessoas",
    threadEnd: ". Antropologia ensinou-me a notá-las, as ciências policiais a ver como os sistemas as servem, o código deixa-me construir para elas."
  }
};

export default function Currents({ lang }) {
  const t = content[lang];
  return (
    <section id="currents" className="sec" data-screen-label="03 Currents">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.num}</span><span>/ {t.kicker}</span></div>
            <h2><RichText tokens={t.title} /></h2>
          </div>
        </div>
      </Reveal>
      <div className="currents">
        {t.stops.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className={"cur" + (s.now ? " now" : "")}>
              <div className="node" />
              <div className="when">{s.when}</div>
              <h3>{s.title}</h3>
              <div className="where">{s.where}</div>
              <p>{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <div className="thread">
          <span className="quote">"</span>
          <div>
            {t.thread}<em>{t.threadEm}</em>{t.threadEnd}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
