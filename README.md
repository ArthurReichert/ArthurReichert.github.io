# arthurreichert.github.io

Site pessoal e currículo de Arthur Reichert, publicado em https://arthurreichert.github.io/.

## Stack

Vue 3 + Vite + Tailwind CSS. Sem back-end. Três idiomas (pt, en, es) e tema claro/escuro.

## Onde editar o conteúdo

- `src/i18n/translations.js`: todos os textos, por idioma (hero, sobre, experiência, projetos, skills, formação, contato).
- `src/data/portfolioData.js`: contatos, links, tags e imagens dos projetos e a lista de cursos.
- `public/projects/`: ícones e capturas de tela dos apps.

## Rodar local

```bash
npm install
npm run dev
```

## Publicação

Todo push na `main` dispara `.github/workflows/deploy.yml`, que faz o build e publica `dist/` na branch `gh-pages`. O GitHub Pages serve essa branch.
