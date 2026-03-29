# Atelier Serein — One-Page Artistic Website

A lightweight, responsive one-page website designed as a digital letter for an independent creative brand.

## Concept

This project favors:

- editorial typography (serif + sans)
- generous whitespace and asymmetrical composition
- minimal color palette
- slow, subtle motion that feels like reading

## File structure

```text
patatina/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── product-hero.svg
        └── vessel-detail.svg
```

## Sections

1. Hero / Landing
2. Manifesto (poetic text)
3. Product focus (single core piece)
4. Stockists
5. Contact

## Accessibility and performance

- semantic landmarks (`header`, `main`, `section`, `nav`, `footer`)
- skip link for keyboard users
- readable text contrast and scalable typography
- reduced-motion support (`prefers-reduced-motion`)
- local SVG placeholders for fast loading

## Run locally

Open `index.html` directly, or serve the folder with any static server.

Example:

```bash
cd /home/badph/Desktop/giambo/patatina
python3 -m http.server 4173
```

Then open: `http://localhost:4173`

## Publish online with GitHub Pages (Deploy from branch)

This project can be published directly from the repository branch (no Actions workflow required).

### One-time GitHub setup

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. In **Build and deployment**:
    - **Source**: `Deploy from a branch`
    - **Branch**: `main`
    - **Folder**: `/ (root)`
4. Click **Save**.

Your site URL will be:

- `https://badph3.github.io/patatina/`

After saving, GitHub usually publishes in 1–3 minutes and each new push to `main` updates the site.

## Notes on dependencies

No package manager or dependency manifest is required for this version because it is a pure static HTML/CSS/JS build with zero external runtime dependencies.
