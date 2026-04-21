import { useRef, useEffect, Fragment } from 'react';
import { RichText } from '../atoms';

const content = {
  en: {
    eyebrow: ["Baleal · Peniche, PT", "39.38°N · 9.38°W", "Portfolio · 2026"],
    title: ["Curious by nature, coder by ", { em: "choice" }, "."],
    name: "Tiago Machado",
    sub: "Front-end developer · based where the Atlantic breaks.",
    chips: ["React", "Learning out loud", "Open to work"],
    cue: "Scroll"
  },
  pt: {
    eyebrow: ["Baleal · Peniche, PT", "39.38°N · 9.38°W", "Portefólio · 2026"],
    title: ["Curioso por natureza, developer por ", { em: "escolha" }, "."],
    name: "Tiago Machado",
    sub: "Front-end developer · onde o Atlântico rebenta.",
    chips: ["React", "A aprender", "Disponível"],
    cue: "Scroll"
  }
};

export default function Hero({ lang }) {
  const t = content[lang];
  const photoRef = useRef(null);

  useEffect(() => {
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
          {t.eyebrow.map((s, i) => (
            <Fragment key={i}>
              <span className={i === 1 ? "coord" : ""}>{s}</span>
              {i < t.eyebrow.length - 1 && <span className="divider" />}
            </Fragment>
          ))}
        </div>

        <h1 className="hero-title">
          <RichText tokens={t.title} />
        </h1>

        <div className="hero-meta">
          <div>
            <div className="name">{t.name}</div>
            <div className="sub">{t.sub}</div>
          </div>
          <div className="scroll-cue">
            {t.cue}
            <div className="line" />
          </div>
          <div className="right">
            <div className="chips">
              {t.chips.map((c, i) => <span key={i} className="chip">{c}</span>)}
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
