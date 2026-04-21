import { useState, useEffect } from 'react';
import Coastline from './components/Coastline';
import { WaveDivider } from './atoms';
import Hero from './sections/Hero';
import Shore from './sections/Shore';
import Tides from './sections/Tides';
import Currents from './sections/Currents';
import Reefs from './sections/Reefs';
import Harbor from './sections/Harbor';
import Footer from './sections/Footer';

const SECTION_META = {
  en: [
    { id: "shore",    kicker: "Shore",    sub: "01 · Intro" },
    { id: "tides",    kicker: "Tides",    sub: "02 · Skills" },
    { id: "currents", kicker: "Currents", sub: "03 · Journey" },
    { id: "reefs",    kicker: "Reefs",    sub: "04 · Projects" },
    { id: "harbor",   kicker: "Harbor",   sub: "05 · Contact" }
  ],
  pt: [
    { id: "shore",    kicker: "Costa",     sub: "01 · Intro" },
    { id: "tides",    kicker: "Marés",     sub: "02 · Skills" },
    { id: "currents", kicker: "Correntes", sub: "03 · Percurso" },
    { id: "reefs",    kicker: "Recifes",   sub: "04 · Projetos" },
    { id: "harbor",   kicker: "Porto",     sub: "05 · Contacto" }
  ]
};

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [active, setActive] = useState("shore");
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [accent, setAccent] = useState("ocean");
  const [showWaterline, setShowWaterline] = useState(true);

  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);

  const sections = SECTION_META[lang];

  useEffect(() => {
    const targets = sections.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!targets.length) return;
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55% 0px", threshold: [0, .25, .5, .75, 1] });
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  function jump(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  useEffect(() => {
    const root = document.documentElement;
    if (accent === "sun") {
      root.style.setProperty("--ocean", "#c36a2a");
      root.style.setProperty("--ocean-2", "#e3893c");
      root.style.setProperty("--foam", "#f0d3a8");
    } else if (accent === "forest") {
      root.style.setProperty("--ocean", "#2d6a4f");
      root.style.setProperty("--ocean-2", "#52a37c");
      root.style.setProperty("--foam", "#cfe4d6");
    } else {
      root.style.setProperty("--ocean", "#1e5a7a");
      root.style.setProperty("--ocean-2", "#2e7ea3");
      root.style.setProperty("--foam", "#c6dfea");
    }
  }, [accent]);

  useEffect(() => {
    function onMsg(e) {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksOpen(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOpen(false);
    }
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <>
      <nav className="topnav" aria-label="Primary">
        <span className="brand">TM<span className="dot" /></span>
        <div className="links">
          {sections.map(s => (
            <a key={s.id} href={"#" + s.id} className={active === s.id ? "active" : ""} onClick={(e) => { e.preventDefault(); jump(s.id); }}>
              {s.kicker}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="lang"
          data-lang={lang}
          aria-label={`Switch language (current: ${lang.toUpperCase()})`}
          onClick={() => setLang(lang === "en" ? "pt" : "en")}
        >
          <span className={lang === "en" ? "on" : ""}>EN</span>
          <span className={lang === "pt" ? "on" : ""}>PT</span>
        </button>
        <button className="cta">CV &darr;</button>
      </nav>

      <Hero lang={lang} />

      <div className="page">
        {showWaterline && <Coastline sections={sections} active={active} onJump={jump} />}
        <main className="main">
          <Shore lang={lang} />
          <WaveDivider />
          <Tides lang={lang} />
          <WaveDivider color="var(--sand-2)" />
          <Currents lang={lang} />
          <WaveDivider />
          <Reefs lang={lang} />
          <WaveDivider color="var(--sand-2)" />
          <Harbor lang={lang} />
        </main>
      </div>

      <Footer lang={lang} />

      {!tweaksOpen && (
        <button className="tweaks-fab" style={{ display: "inline-flex" }} onClick={() => setTweaksOpen(true)}>
          Tweaks
        </button>
      )}
      <div className={"tweaks-panel" + (tweaksOpen ? " open" : "")}>
        <h5>Tweaks <button onClick={() => setTweaksOpen(false)}>×</button></h5>
        <label>Language
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="pt">Português</option>
          </select>
        </label>
        <label>Accent
          <div className="swatches">
            <button className={accent === "ocean"  ? "on" : ""} style={{ background: "#1e5a7a" }} onClick={() => setAccent("ocean")}  aria-label="Ocean" />
            <button className={accent === "sun"    ? "on" : ""} style={{ background: "#d98a3d" }} onClick={() => setAccent("sun")}    aria-label="Sun" />
            <button className={accent === "forest" ? "on" : ""} style={{ background: "#2d6a4f" }} onClick={() => setAccent("forest")} aria-label="Forest" />
          </div>
        </label>
        <label>Coastline rail
          <input type="checkbox" checked={showWaterline} onChange={e => setShowWaterline(e.target.checked)} />
        </label>
      </div>
    </>
  );
}
