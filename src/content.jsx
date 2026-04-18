// Content dictionary — bilingual (EN / PT)
window.CONTENT = {
  en: {
    nav: { shore: "Shore", tides: "Tides", currents: "Currents", reefs: "Reefs", harbor: "Harbor", cv: "CV" },
    hero: {
      eyebrow: ["Baleal · Peniche, PT", "39.38°N · 9.38°W", "Portfolio · 2026"],
      title: ["Curious by nature, coder by ", { em: "choice" }, "."],
      name: "Tiago Machado",
      sub: "Front-end developer · based where the Atlantic breaks.",
      chips: ["React", "Learning out loud", "Open to work"],
      cue: "Scroll"
    },
    shore: {
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
    tides: {
      num: "02", kicker: "Tides", title: ["What I can do, ", { em: "day to day." }],
      intro: "Tides come in stages. So do skills. Here's where mine sit right now — honestly.",
      cards: [
        { level: "fluent", depth: "High tide · daily", title: "Foundations", items: ["HTML", "CSS", "JavaScript", "Responsive design", "Accessibility", "Git"] },
        { level: "learning", depth: "Mid tide · shipping", title: "Building with", items: ["React", "React Router", "Tailwind", "REST APIs", "Figma"] },
        { level: "curious", depth: "Low tide · next", title: "On the horizon", items: ["TypeScript", "Node / Express", "Testing", "Next.js"] }
      ]
    },
    currents: {
      num: "03", kicker: "Currents", title: ["Three degrees, ", { em: "one current." }],
      stops: [
        { when: "2016 — 2019", title: "Anthropology", where: "ISCTE-IUL · BA", text: "Learning how people build meaning. Fieldwork, writing, listening carefully." },
        { when: "2019 — 2021", title: "Police Sciences", where: "ISCPSI · Post-grad", text: "Criminology, investigation, systems thinking. Detail-work under pressure." },
        { when: "2025 → now", title: "Front-end Dev", where: "UpSkill · JavaScript", text: "Building interfaces for people. Same job — different tools.", now: true }
      ],
      thread: "The thread through all of it is ", threadEm: "people", threadEnd: ". Anthropology taught me to notice them, policing taught me how systems serve them, code lets me build for them."
    },
    reefs: {
      num: "04", kicker: "Reefs", title: ["Things I've ", { em: "washed ashore." }],
      filters: ["All", "Live", "In progress", "Collab"],
      projects: [
        {
          id: 1, title: "Tech Store",
          desc: "E-commerce mini-project — product grid, cart, checkout. Built hand-in-hand with a classmate.",
          tags: ["HTML", "CSS", "JS"], type: "Live · collab", size: "feature", thumb: "ocean",
          href: "https://github.com/OdaIT/Mini-Projeto_Tiago_Danilo"
        },
        {
          id: 2, title: "Digital Menu",
          desc: "A restaurant menu flow with categories, filters and a mobile-first layout.",
          tags: ["JS", "Flexbox"], type: "Live", size: "std", thumb: "sand",
          href: "https://github.com/OdaIT/Restaurante"
        },
        {
          id: 3, title: "Café App",
          desc: "Final project — a React app for specialty coffee shops. Ordering, loyalty, and a touch of ritual.",
          tags: ["React", "Tailwind"], type: "In progress", wip: true, size: "wide", thumb: "sunset",
          href: "#"
        },
        {
          id: 4, title: "This Portfolio",
          desc: "Rebuilt in React — a coastline for a navbar, waves between sections, and Baleal at the top.",
          tags: ["React", "CSS"], type: "Live", size: "std", thumb: "ocean", href: "#"
        }
      ]
    },
    harbor: {
      num: "05", kicker: "Harbor", title: ["Drop anchor ", { em: "here." }],
      intro: "If you're hiring, collaborating, or just want to talk surf and cafés — the harbor's open.",
      channels: [
        { k: "Email", v: "hello@tiagomachado.dev", act: "Write →", href: "mailto:hello@tiagomachado.dev" },
        { k: "Phone", v: "+351 92x xxx xxx", act: "Call →", href: "tel:+351925516462" },
        { k: "GitHub", v: "github.com/TimacDev", act: "Visit →", href: "https://github.com/TimacDev" },
        { k: "LinkedIn", v: "in/tiagomachado", act: "Connect →", href: "#" }
      ],
      mapTitle: "Based in Peniche", coord: "39.3558°N 9.3811°W",
      form: {
        title: "…or send a message",
        name: "Name", email: "Email", subject: "Subject", message: "Message",
        subjects: ["Recruitment", "Freelance", "Collaboration", "Just saying hi"],
        placeholder: "Hey Tiago — I was wondering if…",
        send: "Send message"
      }
    },
    foot: {
      colophon: "© 2026 Tiago Machado. Set in Bricolage Grotesque & Instrument Sans. Built with React. Hosted in Peniche, where the Atlantic edits everything.",
      big: "See you by the sea."
    }
  },
  pt: {
    nav: { shore: "Costa", tides: "Marés", currents: "Correntes", reefs: "Recifes", harbor: "Porto", cv: "CV" },
    hero: {
      eyebrow: ["Baleal · Peniche, PT", "39.38°N · 9.38°W", "Portefólio · 2026"],
      title: ["Curioso por natureza, developer por ", { em: "escolha" }, "."],
      name: "Tiago Machado",
      sub: "Front-end developer · onde o Atlântico rebenta.",
      chips: ["React", "A aprender", "Disponível"],
      cue: "Scroll"
    },
    shore: {
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
    },
    tides: {
      num: "02", kicker: "Marés", title: ["O que faço, ", { em: "no dia-a-dia." }],
      intro: "As marés têm fases. As skills também. Aqui está onde estão as minhas — sem floreados.",
      cards: [
        { level: "fluent", depth: "Preia-mar · diário", title: "Bases", items: ["HTML", "CSS", "JavaScript", "Responsivo", "Acessibilidade", "Git"] },
        { level: "learning", depth: "Meia-maré · a enviar", title: "A construir com", items: ["React", "React Router", "Tailwind", "APIs REST", "Figma"] },
        { level: "curious", depth: "Baixa-mar · a seguir", title: "No horizonte", items: ["TypeScript", "Node / Express", "Testes", "Next.js"] }
      ]
    },
    currents: {
      num: "03", kicker: "Correntes", title: ["Três formações, ", { em: "uma corrente." }],
      stops: [
        { when: "2016 — 2019", title: "Antropologia", where: "ISCTE-IUL · Lic.", text: "Como as pessoas constroem sentido. Trabalho de campo, escrita, ouvir com atenção." },
        { when: "2019 — 2021", title: "Ciências Policiais", where: "ISCPSI · Pós-grad", text: "Criminologia, investigação, pensamento sistémico. Atenção ao detalhe sob pressão." },
        { when: "2025 → agora", title: "Front-end Dev", where: "UpSkill · JavaScript", text: "A construir interfaces para pessoas. Mesmo trabalho, ferramentas diferentes.", now: true }
      ],
      thread: "O fio por trás de tudo são ", threadEm: "as pessoas", threadEnd: ". Antropologia ensinou-me a notá-las, as ciências policiais a ver como os sistemas as servem, o código deixa-me construir para elas."
    },
    reefs: {
      num: "04", kicker: "Recifes", title: ["Coisas que ", { em: "deram à costa." }],
      filters: ["Todos", "Em linha", "Em curso", "Colab"],
      projects: [
        { id: 1, title: "Tech Store", desc: "Mini-projeto de e-commerce — grelha, carrinho, checkout. Feito a quatro mãos com um colega.", tags: ["HTML", "CSS", "JS"], type: "Em linha · colab", size: "feature", thumb: "ocean", href: "https://github.com/OdaIT/Mini-Projeto_Tiago_Danilo" },
        { id: 2, title: "Menu Digital", desc: "Menu de restaurante com categorias, filtros e layout mobile-first.", tags: ["JS", "Flexbox"], type: "Em linha", size: "std", thumb: "sand", href: "https://github.com/OdaIT/Restaurante" },
        { id: 3, title: "Café App", desc: "Projeto final — app em React para cafetarias de especialidade. Pedidos, fidelização, e um toque de ritual.", tags: ["React", "Tailwind"], type: "Em curso", wip: true, size: "wide", thumb: "sunset", href: "#" },
        { id: 4, title: "Este Portefólio", desc: "Reconstruído em React — uma costa por navbar, ondas entre secções, e o Baleal no topo.", tags: ["React", "CSS"], type: "Em linha", size: "std", thumb: "ocean", href: "#" }
      ]
    },
    harbor: {
      num: "05", kicker: "Porto", title: ["Ancora ", { em: "aqui." }],
      intro: "Se estás a recrutar, a colaborar, ou só queres falar de surf e cafés — o porto está aberto.",
      channels: [
        { k: "Email", v: "hello@tiagomachado.dev", act: "Escrever →", href: "mailto:hello@tiagomachado.dev" },
        { k: "Telefone", v: "+351 92x xxx xxx", act: "Ligar →", href: "tel:+351925516462" },
        { k: "GitHub", v: "github.com/TimacDev", act: "Visitar →", href: "https://github.com/TimacDev" },
        { k: "LinkedIn", v: "in/tiagomachado", act: "Ligar →", href: "#" }
      ],
      mapTitle: "Baseado em Peniche", coord: "39.3558°N 9.3811°W",
      form: { title: "…ou deixa uma mensagem", name: "Nome", email: "Email", subject: "Assunto", message: "Mensagem", subjects: ["Recrutamento", "Freelance", "Colaboração", "Apenas um olá"], placeholder: "Olá Tiago — estava a pensar se…", send: "Enviar mensagem" }
    },
    foot: {
      colophon: "© 2026 Tiago Machado. Tipos: Bricolage Grotesque & Instrument Sans. Feito com React. Alojado em Peniche, onde o Atlântico edita tudo.",
      big: "Até já, pelo mar."
    }
  }
};
