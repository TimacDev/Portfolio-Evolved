// All page sections: Hero, Shore, Tides, Currents, Reefs, Harbor, Footer

function Hero({ t, onJump }) {
  const photoRef = React.useRef(null);
  React.useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const scale = 1.08 + Math.min(y / 4000, 0.05);
        el.style.transform = `translateY(${y * 0.25}px) scale(${scale})`;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <header className="hero">
      <div ref={photoRef} className="hero-photo" />
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-eyebrow">
          {t.hero.eyebrow.map((s, i) => (
            <React.Fragment key={i}>
              <span className={i === 1 ? "coord" : ""}>{s}</span>
              {i < t.hero.eyebrow.length - 1 && <span className="divider" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="hero-title">
          <RichText tokens={t.hero.title} />
        </h1>

        <div className="hero-meta">
          <div>
            <div className="name">{t.hero.name}</div>
            <div className="sub">{t.hero.sub}</div>
          </div>
          <div className="scroll-cue">
            {t.hero.cue}
            <div className="line" />
          </div>
          <div className="right">
            <div className="chips">
              {t.hero.chips.map((c, i) => <span key={i} className="chip">{c}</span>)}
            </div>
          </div>
        </div>
      </div>

      <svg className="wave-out" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path fill="var(--paper)" opacity="0.5" d="M0 40 C 200 10, 400 70, 600 40 S 1000 10, 1200 40 L1200 80 L0 80 Z"/>
        <path fill="var(--paper)" d="M0 60 C 200 30, 400 90, 600 60 S 1000 30, 1200 60 L1200 80 L0 80 Z"/>
      </svg>
    </header>
  );
}

function Shore({ t }) {
  return (
    <section id="shore" className="sec" data-screen-label="01 Shore">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.shore.num}</span><span>/ {t.shore.kicker}</span></div>
            <h2><RichText tokens={t.shore.title} /></h2>
          </div>
        </div>
      </Reveal>
      <div className="shore-grid">
        <Reveal delay={80}>
          <p className="shore-lede"><RichText tokens={t.shore.lede} /></p>
        </Reveal>
        <Reveal delay={160}>
          <div className="shore-aside">
            <div className="avatar-card">
              <img src="assets/fotoperfil.jpg" alt="Tiago Machado" />
              <div>
                <div className="who">{t.shore.avatar.name}</div>
                <div className="role">{t.shore.avatar.role}</div>
              </div>
              <div className="status"><span className="live" />{t.shore.avatar.status}</div>
            </div>
            <div>
              {t.shore.facts.map((f, i) => (
                <div key={i} className="fact">
                  <div className="k">{f[0]}</div>
                  <div className="v">
                    {f.slice(1).map((x, j) =>
                      typeof x === "string" ? <React.Fragment key={j}>{x}</React.Fragment>
                      : x && x.pin ? <span key={j} className="pin">{x.pin}</span> : null
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

function Tides({ t }) {
  return (
    <section id="tides" className="sec" data-screen-label="02 Tides">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.tides.num}</span><span>/ {t.tides.kicker}</span></div>
            <h2><RichText tokens={t.tides.title} /></h2>
          </div>
          <p style={{ maxWidth: "28ch", color: "var(--ink-3)", fontSize: 14 }}>{t.tides.intro}</p>
        </div>
      </Reveal>
      <div className="tides">
        {t.tides.cards.map((c, i) => (
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

function Currents({ t }) {
  return (
    <section id="currents" className="sec" data-screen-label="03 Currents">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.currents.num}</span><span>/ {t.currents.kicker}</span></div>
            <h2><RichText tokens={t.currents.title} /></h2>
          </div>
        </div>
      </Reveal>
      <div className="currents">
        {t.currents.stops.map((s, i) => (
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
          <span className="quote">“</span>
          <div>
            {t.currents.thread}<em>{t.currents.threadEm}</em>{t.currents.threadEnd}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Reefs({ t }) {
  const [filter, setFilter] = React.useState(t.reefs.filters[0]);
  const all = t.reefs.filters[0];
  const filtered = t.reefs.projects.filter(p =>
    filter === all ||
    (filter.toLowerCase().includes("progress") || filter.toLowerCase().includes("curso")) ? (filter === all ? true : p.type.toLowerCase().includes("progress") || p.type.toLowerCase().includes("curso")) :
    p.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="reefs" className="sec" data-screen-label="04 Reefs">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.reefs.num}</span><span>/ {t.reefs.kicker}</span></div>
            <h2><RichText tokens={t.reefs.title} /></h2>
          </div>
          <div className="reef-bar">
            {t.reefs.filters.map(f => (
              <button key={f} className={f === filter ? "on" : ""} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="reefs">
        {filtered.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <a className={"reef " + (p.size === "feature" ? "feature" : p.size === "wide" ? "wide" : "")} href={p.href} target="_blank" rel="noreferrer">
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

function Harbor({ t }) {
  function onSubmit(e) {
    e.preventDefault();
    alert("Thanks! I'll get back to you soon.");
  }
  return (
    <section id="harbor" className="sec" data-screen-label="05 Harbor">
      <Reveal>
        <div className="sec-head">
          <div>
            <div className="kicker"><span className="num">{t.harbor.num}</span><span>/ {t.harbor.kicker}</span></div>
            <h2><RichText tokens={t.harbor.title} /></h2>
          </div>
        </div>
      </Reveal>
      <div className="harbor">
        <Reveal>
          <div className="harbor-intro">
            <p className="big">{t.harbor.intro}</p>
            <div className="channels">
              {t.harbor.channels.map((c, i) => (
                <a key={i} className="channel" href={c.href}>
                  <span className="k">{c.k}</span>
                  <span className="v">{c.v}</span>
                  <span className="act">{c.act}</span>
                </a>
              ))}
            </div>
            <div className="map-card">
              <div className="head">
                <h4>{t.harbor.mapTitle}</h4>
                <span className="coord">{t.harbor.coord}</span>
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
            <h4>{t.harbor.form.title}</h4>
            <div className="row">
              <label>{t.harbor.form.name}<input required type="text" /></label>
              <label>{t.harbor.form.email}<input required type="email" /></label>
            </div>
            <label>{t.harbor.form.subject}
              <select>{t.harbor.form.subjects.map(s => <option key={s}>{s}</option>)}</select>
            </label>
            <label>{t.harbor.form.message}
              <textarea required minLength={10} placeholder={t.harbor.form.placeholder} />
            </label>
            <button type="submit" className="submit">{t.harbor.form.send} <span>→</span></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FooterBlock({ t }) {
  return (
    <footer className="foot">
      <div className="colophon">{t.foot.colophon}</div>
      <div className="big">{t.foot.big}</div>
    </footer>
  );
}

Object.assign(window, { Hero, Shore, Tides, Currents, Reefs, Harbor, FooterBlock });
