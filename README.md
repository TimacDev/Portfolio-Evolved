# Portfolio Evolved

Personal portfolio site with an ocean/coastline theme, built with React and Vite. Bilingual (English / Portuguese) with a language toggle that is remembered between visits.

**Live:** https://timacdev.github.io/Portfolio-Evolved/

## Sections

| # | Section | EN | PT |
|---|---------|----|----|
| 01 | Intro | Shore | Costa |
| 02 | Skills | Tides | Marés |
| 03 | Journey | Currents | Correntes |
| 04 | Projects | Reefs | Recifes |
| 05 | Contact | Harbor | Porto |

## Tech stack

- [React 18](https://react.dev/)
- [Vite 6](https://vite.dev/)
- Plain CSS (`src/styles.css`)
- GitHub Actions → GitHub Pages for deployment

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
├── index.html
├── public/               # static assets (images, svg)
├── src/
│   ├── main.jsx          # entry point
│   ├── app.jsx           # layout, navigation, language state
│   ├── atoms.jsx         # small shared UI pieces (e.g. WaveDivider)
│   ├── components/
│   │   └── Coastline.jsx
│   ├── sections/         # Hero, Shore, Tides, Currents, Reefs, Harbor, Footer
│   └── styles.css
├── vite.config.js        # base path set to /Portfolio-Evolved/
└── .github/workflows/deploy.yml
```

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. It can also be run manually from the Actions tab.

If the repository is renamed, update `base` in [vite.config.js](vite.config.js) to match.

## Author

Tiago Machado — [@TimacDev](https://github.com/TimacDev)
