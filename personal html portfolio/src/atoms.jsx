// Low-level atoms: renderers for bilingual rich text, wave SVGs, etc.
const { Fragment } = React;

// Render an array of text/tokens where tokens are {em}, {hl}, {pin}
function RichText({ tokens }) {
  if (!Array.isArray(tokens)) return tokens;
  return (
    <>
      {tokens.map((t, i) => {
        if (typeof t === "string") return <Fragment key={i}>{t}</Fragment>;
        if (t.em)  return <em key={i}>{t.em}</em>;
        if (t.hl)  return <span key={i} className="hl">{t.hl}</span>;
        if (t.pin) return <span key={i} className="pin">{t.pin}</span>;
        return null;
      })}
    </>
  );
}

function WaveDivider({ color = "var(--foam)", height = 40 }) {
  return (
    <svg className="wave-div" viewBox="0 0 1200 40" preserveAspectRatio="none" style={{ height, color }}>
      <path fill="currentColor" opacity="0.55" d="M0 20 C 60 6, 120 34, 180 20 S 300 6, 360 20 S 480 34, 540 20 S 660 6, 720 20 S 840 34, 900 20 S 1020 6, 1080 20 S 1200 34, 1200 20 L1200 40 L0 40 Z"/>
      <path fill="currentColor" d="M0 28 C 60 18, 120 38, 180 28 S 300 18, 360 28 S 480 38, 540 28 S 660 18, 720 28 S 840 38, 900 28 S 1020 18, 1080 28 S 1200 38, 1200 28 L1200 40 L0 40 Z"/>
    </svg>
  );
}

function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={"reveal" + (shown ? " in" : "")} style={{ transitionDelay: delay + "ms" }}>
      {children}
    </div>
  );
}

// Animated SVG wave icon for Tide cards
function WaveMark() {
  return (
    <svg className="wavemark" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20 Q 15 10 30 20 T 58 20" />
      <path d="M2 32 Q 15 22 30 32 T 58 32" />
      <path d="M2 44 Q 15 34 30 44 T 58 44" />
    </svg>
  );
}

Object.assign(window, { RichText, WaveDivider, Reveal, WaveMark });
