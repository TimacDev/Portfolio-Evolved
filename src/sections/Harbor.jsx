import { Reveal, RichText } from '../atoms';

const content = {
  en: {
    num: "05", kicker: "Harbor", title: ["Drop anchor ", { em: "here." }],
    intro: "If you're hiring, collaborating, or just want to talk surf and cafés — the harbor's open.",
    channels: [
      { k: "Email",    v: "hello@tiagomachado.dev",    act: "Write →",   href: "mailto:hello@tiagomachado.dev" },
      { k: "Phone",    v: "+351 92x xxx xxx",          act: "Call →",    href: "tel:+351925516462" },
      { k: "GitHub",   v: "github.com/TimacDev",       act: "Visit →",   href: "https://github.com/TimacDev" },
      { k: "LinkedIn", v: "in/tiagomachado",           act: "Connect →", href: "#" }
    ],
    mapTitle: "Based in Peniche",
    coord: "39.3558°N 9.3811°W",
    form: {
      title: "…or send a message",
      name: "Name", email: "Email", subject: "Subject", message: "Message",
      subjects: ["Recruitment", "Freelance", "Collaboration", "Just saying hi"],
      placeholder: "Hey Tiago — I was wondering…",
      send: "Send message"
    }
  },
  pt: {
    num: "05", kicker: "Porto", title: ["Ancora ", { em: "aqui." }],
    intro: "Se estás a recrutar, a colaborar, ou só queres falar de surf e cafés — o porto está aberto.",
    channels: [
      { k: "Email",    v: "hello@tiagomachado.dev",    act: "Escrever →", href: "mailto:hello@tiagomachado.dev" },
      { k: "Telefone", v: "+351 92x xxx xxx",          act: "Ligar →",    href: "tel:+351925516462" },
      { k: "GitHub",   v: "github.com/TimacDev",       act: "Visitar →",  href: "https://github.com/TimacDev" },
      { k: "LinkedIn", v: "in/tiagomachado",           act: "Ligar →",    href: "#" }
    ],
    mapTitle: "Baseado em Peniche",
    coord: "39.3558°N 9.3811°W",
    form: {
      title: "…ou deixa uma mensagem",
      name: "Nome", email: "Email", subject: "Assunto", message: "Mensagem",
      subjects: ["Recrutamento", "Freelance", "Colaboração", "Apenas um olá"],
      placeholder: "Olá Tiago — estava a pensar…",
      send: "Enviar mensagem"
    }
  }
};

export default function Harbor({ lang }) {
  const t = content[lang];

  function onSubmit(e) {
    e.preventDefault();
    alert("Thanks! I'll get back to you soon.");
  }

  return (
    <section id="harbor" className="sec" data-screen-label="05 Harbor">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.num}</span><span>/ {t.kicker}</span></div>
            <h2><RichText tokens={t.title} /></h2>
          </div>
        </div>
      </Reveal>
      <div className="harbor">
        <Reveal>
          <div className="harbor-intro">
            <p className="big">{t.intro}</p>
            <div className="channels">
              {t.channels.map((c, i) => (
                <a key={i} className="channel" href={c.href}>
                  <span className="k">{c.k}</span>
                  <span className="v">{c.v}</span>
                  <span className="act">{c.act}</span>
                </a>
              ))}
            </div>
            <div id="map" className="map-card">
              <div className="head">
                <h4>{t.mapTitle}</h4>
                <span className="coord">{t.coord}</span>
              </div>
              <iframe
                title="Peniche map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255437.60377585478!2d-9.601791469594723!3d39.38444984172151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f45c49805a145%3A0x26caf596a0956bf3!2sPeniche!5e1!3m2!1spt-PT!2spt!4v1767267966019!5m2!1spt-PT!2spt"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <form className="form-card" onSubmit={onSubmit}>
            <h4>{t.form.title}</h4>
            <div className="row">
              <label>{t.form.name}<input required type="text" /></label>
              <label>{t.form.email}<input required type="email" /></label>
            </div>
            <label>{t.form.subject}
              <select>{t.form.subjects.map(s => <option key={s}>{s}</option>)}</select>
            </label>
            <label>{t.form.message}
              <textarea required minLength={10} placeholder={t.form.placeholder} />
            </label>
            <button type="submit" className="submit">{t.form.send} <span>&rarr;</span></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
