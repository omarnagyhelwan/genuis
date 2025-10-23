# StudyGenius — Ready-to-run React Project

This is a ready-to-run React project for the **StudyGenius** app (bilingual Arabic/English), with TailwindCSS integrated.

## How to run

1. Extract the ZIP.
2. In the project folder run:
```bash
npm install
npm start
```

The app expects the user to input their **Gemini API key** inside the app settings (no API key is included).

CDN libraries (pdf.js and mammoth.js) are already referenced in `public/index.html`.

If you get issues related to PostCSS/Tailwind after `npm install`, run:
```bash
npx tailwindcss -i ./src/index.css -o ./src/tailwind-output.css --minify
```
But usually `react-scripts start` will pick up Tailwind via PostCSS setup.

Enjoy — you can replace `src/App.js` with any updated version if needed.