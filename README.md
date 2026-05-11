# YNSP Portfolio

React + Vite portfolio website for Y Naga Sai Paraksh.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Edit content

- Main content: `src/main.jsx`
- Styling: `src/styles.css`
- Resume PDF: `public/resume.pdf`
- Project/certificate preview images: place files in `public` and reference them as `/filename.png`
- Add more projects/certificates by adding objects to the `projects` or `certificates` arrays. The carousel shows three at a time, cycles with arrows, and numbers cards automatically.

Example:

```js
image: '/ipl-insights.png',
link: 'https://your-project-link.com',
```
