// Reusable bits
const waveSVG = `<svg class="wave" viewBox="0 0 600 28" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M0 14 Q 25 2, 50 14 T 100 14 T 150 14 T 200 14 T 250 14 T 300 14 T 350 14 T 400 14 T 450 14 T 500 14 T 550 14 T 600 14"/>
  <path opacity=".4" d="M0 22 Q 25 12, 50 22 T 100 22 T 150 22 T 200 22 T 250 22 T 300 22 T 350 22 T 400 22 T 450 22 T 500 22 T 550 22 T 600 22"/>
</svg>`;

const langToggle = `<span class="lang-toggle"><span class="on">EN</span><span>PT</span></span>`;

const slot = document.getElementById('wire-slot');

slot.innerHTML = `

<!-- ======================================================= -->
<!-- 01  CLASSIC PLUS — one-page, polished, + skills/timeline -->
<!-- ======================================================= -->
<div id="w1" class="wire">
  <div class="canvas">
    <div class="wire-head">
      <h2>01 · Classic Plus</h2>
      <div class="tagline">Everything you have today, tightened up. One page, smooth scroll, new <b>Skills</b> and <b>Timeline</b> sections. Safest upgrade path — minimum risk, biggest return.</div>
    </div>

    <!-- top nav -->
    <div class="box" style="display:flex;justify-content:space-between;align-items:center;padding:8px 14px;margin-bottom:14px;">
      <span class="hand" style="font-size:22px;">TM · <span class="mono" style="color:var(--ink-3)">/portfolio</span></span>
      <div style="display:flex;gap:10px;align-items:center">
        <span class="chip">About</span><span class="chip">Skills</span><span class="chip">Journey</span><span class="chip">Projects</span><span class="chip">Contact</span>
        ${langToggle}
      </div>
    </div>

    <!-- hero -->
    <div class="w1-hero">
      <div class="hero-photo" style="height:300px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;">
        <span class="tag">hero · Baleal drone (KEEP)</span>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <div class="eyebrow" style="color:#fff;opacity:.8">Future web developer · based in Peniche</div>
            <div class="hand" style="font-size:52px;line-height:1;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.5)">Tiago Machado.</div>
          </div>
          <div style="display:flex;gap:8px;">
            <span class="btn solid">See projects ↓</span>
            <span class="btn" style="background:#fff">Download CV</span>
          </div>
        </div>
      </div>
      <div class="box" style="padding:16px;display:flex;flex-direction:column;gap:10px;">
        <span class="lbl">intro block</span>
        <div class="eyebrow">Olá / Hello</div>
        <div class="hand" style="font-size:26px;line-height:1.1">From anthropology & policing to frontend — still curious, still by the sea.</div>
        <div class="lorem"><span></span><span></span><span></span><span></span></div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span class="chip">☕ coffee</span><span class="chip">🌊 surf</span><span class="chip ocean">Peniche</span>
        </div>
      </div>
    </div>

    ${waveSVG}

    <!-- skills -->
    <div style="margin-top:14px;">
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:10px;">
        <span class="eyebrow">§ 02</span>
        <div class="hand" style="font-size:28px;">Skills &amp; stack</div>
        <span class="note" style="margin-left:auto">grouped, not a bar chart</span>
      </div>
      <div class="w1-skills">
        <div class="box"><span class="lbl">core</span><div class="hand" style="font-size:20px">HTML · CSS · JS</div><div class="mono" style="color:var(--ink-3);margin-top:4px">semantic · a11y · grid/flex</div></div>
        <div class="box ocean"><span class="lbl">framework</span><div class="hand" style="font-size:20px">React</div><div class="mono" style="margin-top:4px">learning · hooks · router</div></div>
        <div class="box"><span class="lbl">tools</span><div class="hand" style="font-size:20px">Git · VS Code · Figma</div><div class="mono" style="color:var(--ink-3);margin-top:4px">daily driver</div></div>
        <div class="box dashed"><span class="lbl">next up</span><div class="hand" style="font-size:20px">TypeScript · Node</div><div class="mono" style="color:var(--ink-3);margin-top:4px">on the roadmap</div></div>
      </div>
    </div>

    <!-- timeline -->
    <div style="margin-top:26px;">
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:20px;">
        <span class="eyebrow">§ 03</span>
        <div class="hand" style="font-size:28px;">The career pivot</div>
        <span class="note" style="margin-left:auto">horizontal, 3 stops</span>
      </div>
      <div class="w1-tl">
        <div class="node">
          <div class="eyebrow">2016–19</div>
          <div class="hand" style="font-size:22px">Anthropology</div>
          <div class="mono" style="color:var(--ink-3)">ISCTE-IUL · BA</div>
          <div class="lorem tight" style="margin-top:8px"><span></span><span></span></div>
        </div>
        <div class="node">
          <div class="eyebrow">2019–21</div>
          <div class="hand" style="font-size:22px">Police Sciences</div>
          <div class="mono" style="color:var(--ink-3)">ISCPSI · Post-grad</div>
          <div class="lorem tight" style="margin-top:8px"><span></span><span></span></div>
        </div>
        <div class="node">
          <div class="eyebrow">2025 → now</div>
          <div class="hand" style="font-size:22px;color:var(--sun)">Frontend / React</div>
          <div class="mono" style="color:var(--ink-3)">UpSkill JS · current</div>
          <div class="lorem tight" style="margin-top:8px"><span></span><span></span></div>
        </div>
      </div>
    </div>

    ${waveSVG}

    <!-- projects -->
    <div style="margin-top:14px;">
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:10px;">
        <span class="eyebrow">§ 04</span>
        <div class="hand" style="font-size:28px;">Projects</div>
        <div style="margin-left:auto;display:flex;gap:6px;">
          <span class="chip sun">All</span><span class="chip">React</span><span class="chip">Vanilla</span><span class="chip">In-progress</span>
        </div>
      </div>
      <div class="w1-projects">
        <figure class="w1-project">
          <div class="img-ph"><span class="label">project-1.jpg · Tech Store</span></div>
          <div class="hand" style="font-size:22px">Tech Store</div>
          <div class="mono" style="color:var(--ink-3)">mini · HTML / CSS / JS</div>
        </figure>
        <figure class="w1-project">
          <div class="img-ph"><span class="label">project-2.jpg · Menu Digital</span></div>
          <div class="hand" style="font-size:22px">Digital Menu</div>
          <div class="mono" style="color:var(--ink-3)">mini · restaurant flow</div>
        </figure>
        <figure class="w1-project">
          <div class="img-ph"><span class="label">project-3.jpg · Café App</span></div>
          <div class="hand" style="font-size:22px">Café App <span class="mono" style="color:var(--sun)">WIP</span></div>
          <div class="mono" style="color:var(--ink-3)">final · React (planned)</div>
        </figure>
      </div>
    </div>

    <!-- contact -->
    <div style="margin-top:26px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
      <div class="box" style="padding:16px">
        <span class="lbl">contact form</span>
        <div class="hand" style="font-size:24px;margin-bottom:6px">Say hi 👋</div>
        <div class="line thin" style="margin:6px 0"></div>
        <div class="mono" style="color:var(--ink-3)">name</div><div class="line" style="height:12px;background:var(--paper-2);border:1px solid var(--ink);border-radius:4px;margin:4px 0 8px"></div>
        <div class="mono" style="color:var(--ink-3)">email</div><div class="line" style="height:12px;background:var(--paper-2);border:1px solid var(--ink);border-radius:4px;margin:4px 0 8px"></div>
        <div class="mono" style="color:var(--ink-3)">message</div><div class="line" style="height:48px;background:var(--paper-2);border:1px solid var(--ink);border-radius:4px;margin:4px 0 8px"></div>
        <span class="btn solid">Send 🚀</span>
      </div>
      <div class="box ocean" style="padding:16px">
        <span class="lbl">map · Peniche</span>
        <div class="hand" style="font-size:24px;margin-bottom:6px">Based in: Peniche 📍</div>
        <div class="img-ph" style="height:140px"><span class="label">google map iframe (KEEP)</span></div>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          <span class="chip">📧 email</span><span class="chip">📞 phone</span><span class="chip">🐙 GitHub</span>
        </div>
      </div>
    </div>
  </div>

  <div class="wire-foot">
    <div class="card"><h4>Why it works</h4>Lowest-risk upgrade. Keeps the mental model users already have, just more polished.</div>
    <div class="card"><h4>React shape</h4><span class="mono">&lt;Hero/&gt; &lt;Skills/&gt; &lt;Timeline/&gt; &lt;Projects/&gt; &lt;Contact/&gt;</span> — all sections as components, props for copy.</div>
    <div class="card"><h4>Beach moments</h4>Hero photo + animated wave dividers between sections. Sand palette. Subtle.</div>
  </div>
</div>


<!-- ======================================================= -->
<!-- 02  STICKY COASTLINE — vertical waterline side-nav       -->
<!-- ======================================================= -->
<div id="w2" class="wire">
  <div class="canvas">
    <div class="wire-head">
      <h2>02 · Sticky Coastline</h2>
      <div class="tagline">One-page, but the left rail is a <b>vertical waterline</b> that fills up as you scroll — your progress rises like the tide. Playful, on-theme, recruiter-safe.</div>
    </div>

    <div class="w2">
      <aside class="w2-nav">
        <div class="mono" style="color:var(--ink-3);margin-bottom:10px;">SCROLL</div>
        <div class="coast" style="position:relative;">
          <div class="waterline"></div>
          <div class="dot active">Shore<div class="mono" style="color:var(--ink-3)">intro</div></div>
          <div class="dot active">Tides<div class="mono" style="color:var(--ink-3)">skills</div></div>
          <div class="dot">Currents<div class="mono" style="color:var(--ink-3)">journey</div></div>
          <div class="dot">Reefs<div class="mono" style="color:var(--ink-3)">projects</div></div>
          <div class="dot">Harbor<div class="mono" style="color:var(--ink-3)">contact</div></div>
        </div>
        <div class="line thin" style="margin:14px 0"></div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          ${langToggle}
          <span class="btn sm">CV</span>
        </div>
      </aside>

      <div class="w2-main">
        <!-- hero -->
        <div class="hero-photo" style="height:340px;padding:22px;display:flex;flex-direction:column;justify-content:flex-end;">
          <span class="tag">Baleal drone · full-bleed</span>
          <div class="eyebrow" style="color:#fff;opacity:.85">SECTION · SHORE</div>
          <div class="hand" style="font-size:60px;line-height:.95;color:#fff;text-shadow:0 4px 16px rgba(0,0,0,.6)">
            Curious by nature.<br/>Coder by choice.
          </div>
          <div style="display:flex;gap:10px;margin-top:14px;">
            <span class="btn ocean">Dive in ↓</span>
            <span class="btn" style="background:#fff">Projects</span>
          </div>
          <svg style="position:absolute;left:0;right:0;bottom:-2px;width:100%;height:40px;color:var(--paper);display:block;z-index:2" viewBox="0 0 600 40" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 40 L0 24 Q 40 6 80 22 T 160 22 T 240 22 T 320 22 T 400 22 T 480 22 T 560 22 T 600 22 L600 40 Z"/>
          </svg>
        </div>

        <!-- skills -->
        <div class="box" style="padding:16px;">
          <span class="lbl">02 · Tides — skills</span>
          <div style="display:flex;align-items:baseline;gap:10px;">
            <div class="hand" style="font-size:26px">Tides · what I can do</div>
            <span class="note" style="margin-left:auto">grouped + proficiency, no progress bars</span>
          </div>
          <div class="line thin" style="margin:8px 0 12px"></div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
            <div class="box ocean"><span class="lbl">fluent</span><div class="hand">HTML · CSS · JS · Git</div></div>
            <div class="box sun"><span class="lbl">learning</span><div class="hand">React · Tailwind · APIs</div></div>
            <div class="box dashed"><span class="lbl">curious</span><div class="hand">TS · Node · testing</div></div>
          </div>
        </div>

        <!-- journey -->
        <div class="box" style="padding:16px;">
          <span class="lbl">03 · Currents — journey</span>
          <div class="hand" style="font-size:26px;margin-bottom:8px">Where the current took me</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
            <div><div class="eyebrow">2016</div><div class="hand" style="font-size:20px">Anthropology</div><div class="mono" style="color:var(--ink-3)">understanding people</div></div>
            <div><div class="eyebrow">2019</div><div class="hand" style="font-size:20px">Police sciences</div><div class="mono" style="color:var(--ink-3)">systems &amp; detail</div></div>
            <div><div class="eyebrow">2025</div><div class="hand" style="font-size:20px;color:var(--sun)">Frontend dev</div><div class="mono" style="color:var(--ink-3)">building for people</div></div>
          </div>
          <div style="margin-top:10px" class="callout">thread: all three are about <b>people</b> — lead with that.</div>
        </div>

        <!-- projects -->
        <div class="box" style="padding:16px;">
          <span class="lbl">04 · Reefs — projects</span>
          <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:10px">
            <div class="hand" style="font-size:26px">Reefs · things I've built</div>
            <div style="margin-left:auto;display:flex;gap:6px">
              <span class="chip sun">All</span><span class="chip">Mini</span><span class="chip">Final</span>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
            <div class="img-ph" style="aspect-ratio:4/3"><span class="label">Tech Store</span></div>
            <div class="img-ph" style="aspect-ratio:4/3"><span class="label">Menu Digital</span></div>
            <div class="img-ph" style="aspect-ratio:4/3"><span class="label">Café App · WIP</span></div>
          </div>
        </div>

        <!-- harbor -->
        <div class="box" style="padding:16px;">
          <span class="lbl">05 · Harbor — contact</span>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:center">
            <div>
              <div class="hand" style="font-size:26px">Drop anchor here</div>
              <div class="lorem" style="margin:6px 0 10px"><span></span><span></span></div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">
                <span class="chip">📧 email</span><span class="chip">📞 phone</span><span class="chip">🐙 GitHub</span><span class="chip ocean">LinkedIn</span>
              </div>
            </div>
            <div class="img-ph" style="height:120px"><span class="label">map · Peniche (KEEP iframe)</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="wire-foot">
    <div class="card"><h4>Signature move</h4>Side-nav as a filling waterline. Section names borrowed from the coast (Shore, Tides, Reefs, Harbor).</div>
    <div class="card"><h4>React shape</h4><span class="mono">&lt;Coastline activeSection/&gt; + IntersectionObserver</span> to advance the waterline. Each section is its own component.</div>
    <div class="card"><h4>Risk</h4>Metaphor can feel cutesy if overcooked — keep labels optional, mono subtitles do the work.</div>
  </div>
</div>


<!-- ======================================================= -->
<!-- 03  MULTI-ROUTE SPA — Home / Projects / About / Contact  -->
<!-- ======================================================= -->
<div id="w3" class="wire">
  <div class="canvas">
    <div class="wire-head">
      <h2>03 · Multi-route SPA</h2>
      <div class="tagline">React Router. Each page does one thing well. Shared hero strip with the Baleal photo across routes. Best if projects grow into case studies.</div>
    </div>

    <!-- browser chrome -->
    <div class="w3-frame">
      <div class="w3-topnav">
        <div style="display:flex;gap:6px;align-items:center">
          <span class="mono" style="color:var(--ink-3)">tiagomachado.dev</span>
        </div>
        <div style="display:flex;gap:6px">
          <span class="chip sun">Home</span><span class="chip">Projects</span><span class="chip">About</span><span class="chip">Contact</span>
        </div>
        <div>${langToggle}</div>
      </div>

      <!-- shared hero strip -->
      <div class="hero-photo" style="height:120px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center">
        <span class="tag">shared masthead · shrinks on inner pages</span>
        <div class="hand" style="font-size:30px;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.6)">Tiago Machado</div>
        <span class="mono" style="color:#fff;opacity:.85">peniche · pt</span>
      </div>

      <div class="w3-routes">
        <!-- route: Home -->
        <div class="w3-route">
          <div class="tab-label"><span class="eyebrow">ROUTE · /</span><span class="mono" style="color:var(--sun)">landing</span></div>
          <div class="hand" style="font-size:22px">Home</div>
          <div class="lorem tight"><span></span><span></span><span></span></div>
          <div class="line dashed"></div>
          <div class="eyebrow">featured project</div>
          <div class="img-ph" style="aspect-ratio:16/9"><span class="label">hero project</span></div>
          <div style="display:flex;gap:6px;margin-top:4px">
            <span class="btn sm solid">See all →</span>
            <span class="btn sm">CV ↓</span>
          </div>
        </div>

        <!-- route: Projects -->
        <div class="w3-route">
          <div class="tab-label"><span class="eyebrow">ROUTE · /projects</span><span class="mono" style="color:var(--ink-3)">list + filter</span></div>
          <div class="hand" style="font-size:22px">Projects</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            <span class="chip sun">All</span><span class="chip">React</span><span class="chip">Vanilla</span>
          </div>
          <div class="img-ph" style="aspect-ratio:16/6"><span class="label">card 1</span></div>
          <div class="img-ph" style="aspect-ratio:16/6"><span class="label">card 2</span></div>
          <div class="img-ph" style="aspect-ratio:16/6"><span class="label">card 3</span></div>
          <div class="mono" style="color:var(--ink-3);margin-top:auto">click → /projects/:id</div>
        </div>

        <!-- route: About -->
        <div class="w3-route">
          <div class="tab-label"><span class="eyebrow">ROUTE · /about</span><span class="mono" style="color:var(--ink-3)">story + skills</span></div>
          <div class="hand" style="font-size:22px">About</div>
          <div class="img-ph" style="aspect-ratio:1/1;width:70px"><span class="label">me</span></div>
          <div class="lorem tight"><span></span><span></span><span></span><span></span></div>
          <div class="line dashed"></div>
          <div class="eyebrow">timeline</div>
          <div style="display:flex;gap:4px;align-items:center">
            <span class="chip">2016</span><span class="mono">→</span><span class="chip">2019</span><span class="mono">→</span><span class="chip sun">2025</span>
          </div>
          <div class="eyebrow" style="margin-top:4px">skills</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            <span class="chip">HTML</span><span class="chip">CSS</span><span class="chip">JS</span><span class="chip ocean">React</span>
          </div>
        </div>

        <!-- route: Contact -->
        <div class="w3-route">
          <div class="tab-label"><span class="eyebrow">ROUTE · /contact</span><span class="mono" style="color:var(--ink-3)">form + map</span></div>
          <div class="hand" style="font-size:22px">Contact</div>
          <div class="mono" style="color:var(--ink-3)">name</div><div class="line" style="height:10px;background:var(--paper-2);border:1px solid var(--ink);border-radius:3px"></div>
          <div class="mono" style="color:var(--ink-3)">email</div><div class="line" style="height:10px;background:var(--paper-2);border:1px solid var(--ink);border-radius:3px"></div>
          <div class="mono" style="color:var(--ink-3)">message</div><div class="line" style="height:30px;background:var(--paper-2);border:1px solid var(--ink);border-radius:3px"></div>
          <span class="btn sm solid" style="align-self:flex-start">Send 🚀</span>
          <div class="img-ph" style="aspect-ratio:16/6"><span class="label">map · Peniche</span></div>
        </div>
      </div>

      <!-- case study preview -->
      <div class="line dashed" style="margin:16px 0"></div>
      <div class="eyebrow" style="margin-bottom:6px">ROUTE · /projects/:id — individual case study template</div>
      <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:10px">
        <div class="img-ph" style="aspect-ratio:16/7"><span class="label">project hero</span></div>
        <div class="box" style="padding:10px">
          <div class="hand" style="font-size:22px">Project title</div>
          <div class="mono" style="color:var(--ink-3)">role · stack · year</div>
          <div class="lorem tight" style="margin-top:6px"><span></span><span></span><span></span></div>
          <div style="display:flex;gap:6px;margin-top:8px"><span class="btn sm">Live</span><span class="btn sm">GitHub</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="wire-foot">
    <div class="card"><h4>Why it works</h4>Projects can breathe. Easy SEO per route. Clear mental model for recruiters.</div>
    <div class="card"><h4>React shape</h4><span class="mono">react-router-dom</span> · <span class="mono">&lt;Layout/&gt;</span> wraps <span class="mono">&lt;Outlet/&gt;</span> · routes: <span class="mono">/ /projects /projects/:id /about /contact</span></div>
    <div class="card"><h4>Risk</h4>More surface area = more pages to maintain. Only pick this if projects become case studies.</div>
  </div>
</div>


<!-- ======================================================= -->
<!-- 04  BENTO BEACH — asymmetric bento of postcards          -->
<!-- ======================================================= -->
<div id="w4" class="wire">
  <div class="canvas">
    <div class="wire-head">
      <h2>04 · Bento Beach</h2>
      <div class="tagline">Asymmetric bento grid on the landing view. Every tile is a "postcard" — bite-sized, skimmable. Modern, dense, lets personality shine without a long scroll.</div>
    </div>

    <!-- top -->
    <div class="box" style="display:flex;justify-content:space-between;align-items:center;padding:8px 14px;margin-bottom:12px;">
      <span class="hand" style="font-size:22px;">Tiago Machado</span>
      <div style="display:flex;gap:10px;align-items:center">
        <span class="chip">Projects</span><span class="chip">About</span><span class="chip">Contact</span>
        ${langToggle}
      </div>
    </div>

    <div class="w4-bento">
      <!-- hero photo -->
      <div class="hero-photo b-hero" style="padding:18px;display:flex;flex-direction:column;justify-content:flex-end;">
        <span class="tag">b-hero · drone photo</span>
        <div class="eyebrow" style="color:#fff;opacity:.9">postcard from peniche</div>
        <div class="hand" style="font-size:44px;color:#fff;line-height:.95;text-shadow:0 2px 12px rgba(0,0,0,.6)">Hi, I'm Tiago.<br/>I build for the web.</div>
      </div>

      <!-- intro -->
      <div class="box sun b-intro" style="padding:14px;display:flex;flex-direction:column;gap:6px">
        <span class="lbl">intro</span>
        <div class="eyebrow">olá / hello</div>
        <div class="hand" style="font-size:22px;line-height:1.05">Anthropology → policing → code. Curious by default.</div>
        <div class="lorem tight"><span></span><span></span></div>
        <div style="margin-top:auto;display:flex;gap:6px"><span class="btn sm solid">Read more</span></div>
      </div>

      <!-- skills -->
      <div class="box b-skills" style="padding:10px 14px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="lbl">skills</span>
        <span class="chip">HTML</span><span class="chip">CSS</span><span class="chip">JS</span><span class="chip ocean">React</span><span class="chip">Git</span><span class="chip">Figma</span>
      </div>

      <!-- projects as postcards -->
      <div class="box b-proj-1" style="padding:0;overflow:hidden;display:flex;flex-direction:column">
        <span class="lbl">project · 01</span>
        <div class="img-ph" style="flex:1;border:0"><span class="label">Tech Store</span></div>
        <div style="padding:8px 12px;border-top:2px solid var(--ink);background:var(--paper)">
          <div class="hand" style="font-size:18px">Tech Store</div>
          <div class="mono" style="color:var(--ink-3)">HTML · CSS · JS</div>
        </div>
      </div>
      <div class="box b-proj-2" style="padding:0;overflow:hidden;display:flex;flex-direction:column">
        <span class="lbl">project · 02</span>
        <div class="img-ph" style="flex:1;border:0"><span class="label">Menu Digital</span></div>
        <div style="padding:8px 12px;border-top:2px solid var(--ink);background:var(--paper)">
          <div class="hand" style="font-size:18px">Digital Menu</div>
          <div class="mono" style="color:var(--ink-3)">restaurant</div>
        </div>
      </div>
      <div class="box b-proj-3 ocean" style="padding:0;overflow:hidden;display:flex;flex-direction:column">
        <span class="lbl">project · 03</span>
        <div class="img-ph" style="flex:1;border:0;opacity:.7"><span class="label">Café App · WIP</span></div>
        <div style="padding:8px 12px;border-top:2px solid var(--ink);background:var(--ocean-soft)">
          <div class="hand" style="font-size:18px">Café App</div>
          <div class="mono">React · in progress</div>
        </div>
      </div>

      <!-- timeline -->
      <div class="box b-timeline" style="padding:14px">
        <span class="lbl">timeline</span>
        <div class="hand" style="font-size:22px;margin-bottom:8px">The pivot</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
          <div><div class="eyebrow">2016</div><div class="hand" style="font-size:18px">Anthropology</div></div>
          <div><div class="eyebrow">2019</div><div class="hand" style="font-size:18px">Police sciences</div></div>
          <div><div class="eyebrow">2025</div><div class="hand" style="font-size:18px;color:var(--sun)">Frontend</div></div>
        </div>
        <div class="line dashed" style="margin-top:10px"></div>
        <div class="mono" style="color:var(--ink-3);margin-top:6px">three degrees, one thread: people.</div>
      </div>

      <!-- contact -->
      <div class="box b-contact" style="padding:14px;display:flex;flex-direction:column;gap:6px">
        <span class="lbl">contact</span>
        <div class="hand" style="font-size:22px">Say hi 👋</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span class="chip">📧</span><span class="chip">📞</span><span class="chip">🐙</span>
        </div>
        <div style="margin-top:auto;display:flex;gap:6px"><span class="btn sm solid">Open form</span></div>
      </div>

      <!-- map -->
      <div class="box b-map" style="padding:0;overflow:hidden">
        <span class="lbl">where</span>
        <div class="img-ph" style="height:100%;border:0"><span class="label">map · Peniche iframe</span></div>
      </div>

      <!-- quote / now -->
      <div class="box b-quote" style="padding:14px;display:flex;flex-direction:column;justify-content:center;background:var(--paper-2)">
        <span class="lbl">now</span>
        <div class="mono" style="color:var(--ink-3)">currently</div>
        <div class="hand" style="font-size:24px;line-height:1.05">Learning React, drinking too much coffee, surfing when the swell's right.</div>
      </div>
    </div>

    <div style="display:flex;gap:14px;margin-top:14px;">
      <span class="note">each tile animates in on scroll — stagger 40ms</span>
      <span class="note">hero tile has subtle parallax on mousemove</span>
    </div>
  </div>

  <div class="wire-foot">
    <div class="card"><h4>Why it works</h4>Personality in 15 seconds. Recruiters can skim; fans can explore. Very "modern 2026 portfolio".</div>
    <div class="card"><h4>React shape</h4><span class="mono">&lt;Bento/&gt;</span> + tile components. <span class="mono">grid-area</span> definitions per tile. Easy to add/remove.</div>
    <div class="card"><h4>Risk</h4>Needs real content for every tile. No room to hide behind long paragraphs.</div>
  </div>
</div>


<!-- ======================================================= -->
<!-- 05  SCROLL JOURNEY — horizontal coastal walk             -->
<!-- ======================================================= -->
<div id="w5" class="wire">
  <div class="canvas">
    <div class="wire-head">
      <h2>05 · Scroll Journey</h2>
      <div class="tagline">The whole site is a <b>horizontal scroll along the coast</b>. Each "stop" is a section — Peniche → Lisbon → back home → future. The career pivot becomes the walk.</div>
    </div>

    <div class="w5-frame">
      <!-- sticky header bar -->
      <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;background:var(--paper);border:2px solid var(--ink);border-radius:999px;margin-bottom:10px;">
        <span class="hand" style="font-size:22px">TM</span>
        <div class="mono" style="color:var(--ink-3)">Journey · drag ← → or scroll</div>
        <div style="display:flex;gap:6px;align-items:center">${langToggle}<span class="btn sm">Skip intro</span></div>
      </div>

      <!-- horizontal track -->
      <div class="w5-track" style="min-height:420px">
        <div class="w5-stop" style="background:#9ec2d4;border-color:var(--ocean)">
          <span class="lbl">stop · 01 · Peniche</span>
          <div class="eyebrow">2016 · hometown</div>
          <div class="hand" style="font-size:24px">Born by the sea</div>
          <div class="img-ph" style="aspect-ratio:4/3"><span class="label">photo · Baleal</span></div>
          <div class="lorem tight"><span></span><span></span></div>
        </div>
        <div class="w5-stop">
          <span class="lbl">stop · 02 · Lisbon</span>
          <div class="eyebrow">2016–2021</div>
          <div class="hand" style="font-size:24px">Anthropology → Policing</div>
          <div class="img-ph" style="aspect-ratio:4/3"><span class="label">books / lisbon</span></div>
          <div class="mono" style="color:var(--ink-3)">ISCTE → ISCPSI</div>
        </div>
        <div class="w5-stop" style="background:#f5d7b3;border-color:var(--sun)">
          <span class="lbl">stop · 03 · The pivot</span>
          <div class="eyebrow">2025</div>
          <div class="hand" style="font-size:24px">Hello, code.</div>
          <div class="img-ph" style="aspect-ratio:4/3"><span class="label">laptop + coffee</span></div>
          <div class="mono" style="color:var(--ink-3)">UpSkill JS</div>
        </div>
        <div class="w5-stop">
          <span class="lbl">stop · 04 · Projects</span>
          <div class="eyebrow">now</div>
          <div class="hand" style="font-size:24px">Things I've built</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
            <div class="img-ph" style="aspect-ratio:1/1"><span class="label">p1</span></div>
            <div class="img-ph" style="aspect-ratio:1/1"><span class="label">p2</span></div>
            <div class="img-ph" style="aspect-ratio:1/1"><span class="label">p3</span></div>
            <div class="img-ph" style="aspect-ratio:1/1"><span class="label">+</span></div>
          </div>
        </div>
        <div class="w5-stop" style="background:var(--ink);color:var(--paper)">
          <span class="lbl" style="background:var(--ink);color:var(--paper-2)">stop · 05 · Next</span>
          <div class="eyebrow" style="color:var(--paper-2)">2026 →</div>
          <div class="hand" style="font-size:24px">Let's build together</div>
          <div class="lorem tight" style="margin-top:6px"><span style="background:var(--paper-2)"></span><span style="background:var(--paper-2)"></span></div>
          <div style="display:flex;gap:6px;margin-top:8px"><span class="btn sm" style="background:var(--paper);color:var(--ink);border-color:var(--paper)">Contact</span><span class="btn sm" style="background:transparent;color:var(--paper);border-color:var(--paper)">CV</span></div>
        </div>
      </div>

      <!-- scroll track -->
      <div class="w5-scrollbar">
        <span>PENICHE</span>
        <div class="track"><div class="thumb"></div></div>
        <span>NEXT</span>
      </div>
    </div>

    <div style="display:flex;gap:16px;margin-top:14px;flex-wrap:wrap">
      <div class="callout">horizontal scroll hijack — falls back to vertical on mobile</div>
      <div class="callout" style="border-color:var(--sun);color:var(--sun);background:rgba(245,215,179,.4)">walking path SVG between stops; waves at the bottom tie it together</div>
    </div>
  </div>

  <div class="wire-foot">
    <div class="card"><h4>Why it works</h4>Most on-theme. Turns the career pivot — your most distinctive asset — into the main experience.</div>
    <div class="card"><h4>React shape</h4><span class="mono">&lt;Journey/&gt;</span> with <span class="mono">useScroll</span> → horizontal translate. Each stop is a Sprite. Framer Motion or GSAP for the path.</div>
    <div class="card"><h4>Risk</h4>Horizontal scroll is polarizing. Mobile fallback must be rock-solid. Needs a "skip to CV" escape hatch.</div>
  </div>
</div>


<!-- ======================================================= -->
<!-- 06  MINIMALIST SURF — editorial / case-study expand      -->
<!-- ======================================================= -->
<div id="w6" class="wire">
  <div class="canvas">
    <div class="wire-head">
      <h2>06 · Minimalist Surf</h2>
      <div class="tagline">Editorial layout — big type, generous whitespace, photo-forward. Projects as a list of <b>case studies that expand in place</b>. Beach theme carried by one large photo + mono captions, not decoration.</div>
    </div>

    <div class="w6">
      <!-- masthead -->
      <div class="w6-masthead">
        <div>
          <div class="eyebrow">a portfolio · est. 2025</div>
          <h3>Tiago Machado.<br/><span style="color:var(--ocean-soft)">&amp; the sea.</span></h3>
        </div>
        <div style="text-align:right">
          <div class="mono" style="color:var(--ink-3)">PENICHE, PT · 39.38 N</div>
          <div style="display:flex;gap:6px;margin-top:8px;justify-content:flex-end">
            ${langToggle}<span class="btn sm">CV</span>
          </div>
        </div>
      </div>

      <!-- big photo -->
      <div class="hero-photo" style="height:260px;padding:16px;display:flex;align-items:flex-end">
        <span class="tag">one photo, full-bleed, no overlay copy</span>
        <div class="mono" style="color:#fff;opacity:.85;background:rgba(0,0,0,.35);padding:4px 8px;border:1px solid rgba(255,255,255,.5)">FIG. 01 · BALEAL, AT SUNRISE</div>
      </div>

      <!-- article + sidebar -->
      <div class="w6-cols">
        <div class="w6-article">
          <div class="eyebrow">§ the story</div>
          <div style="font-family:'Kalam',sans-serif;font-size:15px;line-height:1.6;">
            <span class="w6-dropcap">T</span>
            <span style="color:var(--ink-2)">hree degrees, one thread. Started in anthropology — the study of people. Moved into policing — the study of systems. Now writing code — building for both. It's the same job, different tools.</span>
          </div>
          <div class="lorem"><span></span><span></span><span></span><span></span></div>
          <div class="line dashed" style="margin:8px 0"></div>

          <!-- case studies -->
          <div class="eyebrow">§ selected work</div>

          <div class="w6-case">
            <div class="num">01</div>
            <div>
              <div class="hand" style="font-size:22px">Tech Store · e-commerce mini</div>
              <div class="mono" style="color:var(--ink-3)">2025 · HTML / CSS / JS · with @Danilo</div>
            </div>
            <div class="mono" style="color:var(--ink-3)">▾ expand</div>
          </div>

          <!-- expanded one -->
          <div class="w6-case" style="grid-template-columns:1fr;background:var(--paper-2);padding:14px;border-radius:8px;border:2px solid var(--ink);border-top:2px solid var(--ink)">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start">
              <div>
                <div class="num" style="display:inline">02</div>
                <div class="hand" style="font-size:22px">Digital Menu · restaurant flow</div>
                <div class="mono" style="color:var(--ink-3)">2025 · vanilla JS</div>
                <div class="lorem tight" style="margin:8px 0"><span></span><span></span><span></span></div>
                <div class="eyebrow">what I learned</div>
                <div class="lorem tight" style="margin:4px 0 8px"><span></span><span></span></div>
                <div style="display:flex;gap:6px"><span class="btn sm">Live ↗</span><span class="btn sm">GitHub ↗</span></div>
              </div>
              <div class="img-ph" style="aspect-ratio:4/3"><span class="label">screen gallery</span></div>
            </div>
          </div>

          <div class="w6-case">
            <div class="num" style="color:var(--sun)">03</div>
            <div>
              <div class="hand" style="font-size:22px">Café App · final project <span class="mono" style="color:var(--sun)">WIP</span></div>
              <div class="mono" style="color:var(--ink-3)">2026 · React · shipping soon</div>
            </div>
            <div class="mono" style="color:var(--ink-3)">▾ expand</div>
          </div>
        </div>

        <!-- sidebar -->
        <aside style="display:flex;flex-direction:column;gap:14px">
          <div class="box" style="padding:12px">
            <span class="lbl">skills</span>
            <div class="hand" style="font-size:20px;margin-bottom:6px">In the toolbox</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <span class="chip">HTML</span><span class="chip">CSS</span><span class="chip">JS</span>
              <span class="chip ocean">React</span><span class="chip">Git</span><span class="chip">Figma</span>
              <span class="chip sun">TS soon</span>
            </div>
          </div>
          <div class="box" style="padding:12px">
            <span class="lbl">timeline</span>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div><span class="mono" style="color:var(--ink-3)">2016–19</span> · Anthropology</div>
              <div><span class="mono" style="color:var(--ink-3)">2019–21</span> · Police sciences</div>
              <div><span class="mono" style="color:var(--sun)">2025 →</span> · <b>Frontend</b></div>
            </div>
          </div>
          <div class="box" style="padding:12px">
            <span class="lbl">contact</span>
            <div class="hand" style="font-size:20px;margin-bottom:6px">Say hi.</div>
            <div style="display:flex;flex-direction:column;gap:4px" class="mono">
              <div>hello@tiagomachado.dev</div>
              <div>+351 · 9xx · xxx · xxx</div>
              <div>github.com/TimacDev</div>
            </div>
          </div>
          <div class="box ocean" style="padding:12px">
            <span class="lbl">colophon</span>
            <div class="mono" style="font-size:11px;line-height:1.5">Set in Caveat + Kalam. Built with React. Hosted by the wind. Peniche, Portugal.</div>
          </div>
        </aside>
      </div>
    </div>
  </div>

  <div class="wire-foot">
    <div class="card"><h4>Why it works</h4>Most "grown-up" option. Reads like a magazine. The beach is a backdrop, not a costume.</div>
    <div class="card"><h4>React shape</h4><span class="mono">&lt;Article/&gt;</span> + <span class="mono">&lt;CaseStudy expanded/&gt;</span> with <span class="mono">&lt;AnimatePresence/&gt;</span>. Accordion-style, one-open-at-a-time.</div>
    <div class="card"><h4>Risk</h4>Needs case-study content you may not have yet. Lean on this if projects are substantial.</div>
  </div>
</div>
`;
