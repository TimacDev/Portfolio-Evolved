// Coastline side-nav: sticky rail with rising waterline + dots per section
function Coastline({ sections, active, onJump }) {
  const [progress, setProgress] = React.useState(0); // 0..1 position of tide

  React.useEffect(() => {
    function onScroll() {
      const first = document.getElementById(sections[0].id);
      const last  = document.getElementById(sections[sections.length - 1].id);
      if (!first || !last) return;
      const start = first.getBoundingClientRect().top + window.scrollY - 200;
      const end   = last.getBoundingClientRect().top + window.scrollY + 200;
      const y = window.scrollY;
      const p = Math.max(0, Math.min(1, (y - start) / (end - start)));
      setProgress(p);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const activeIdx = sections.findIndex(s => s.id === active);

  return (
    <aside className="coastline" aria-label="Coastline navigation">
      <div className="title">
        <span className="ico" />
        <span>THE COASTLINE</span>
      </div>
      <div className="rail">
        <div className="water" style={{ height: (progress * 100) + "%" }} />
        {sections.map((s, i) => (
          <a
            key={s.id}
            className={"stop" + (i <= activeIdx ? " reached" : "") + (i === activeIdx ? " active" : "")}
            href={"#" + s.id}
            onClick={(e) => { e.preventDefault(); onJump(s.id); }}
          >
            <span className="dot" />
            <span className="kicker">{s.kicker}</span>
            <span className="sub">{s.sub}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

Object.assign(window, { Coastline });
