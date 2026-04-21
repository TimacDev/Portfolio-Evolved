const content = {
  en: {
    colophon: "\u00A9 2026 Tiago Machado. Developed with React. Hosted in Peniche, where the Atlantic edits everything.",
    big: "See you by the sea."
  },
  pt: {
    colophon: "\u00A9 2026 Tiago Machado. Desenvolvido com React. Alojado em Peniche, onde o Atlântico edita tudo.",
    big: "Até já, pelo mar."
  }
};

export default function Footer({ lang }) {
  const t = content[lang];
  return (
    <footer className="foot">
      <div className="colophon">{t.colophon}</div>
      <div className="big">{t.big}</div>
    </footer>
  );
}
