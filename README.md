# Konstantinos Nakos — Personal Site

Source for my personal website, deployed via **GitHub Pages** at [knakos.github.io](https://knakos.github.io).

It is a fully static site: hand-written HTML, one shared `styles.css`, one shared `script.js`. No build step, no framework, no package manager.

## Structure

- `index.html` — landing page: a Notes carousel, a Key Projects grid, and an About section.
- Topic sections, each a folder with its own `welcome.html` hub:
  - `ArtificialIntelligence/`, `BusinessStrategy/`, `QuantitativeMethods/`, `TransformationAndEffectiveness/`, `Miscellaneous/`
  - `QuantitativeMethods/` nests article pages under `Quant/`, `SD/`, `Statistics/`.
- `projects/` — individual Key Project pages.
- `positions.html` — career/positions detail, linked from About.
- `styles.css` — single global stylesheet (theming via CSS variables in `:root`).
- `script.js` — shared interactivity (carousel, smooth-scroll, topic-ribbon tabs, rotating quotes).
- `images/` — assets, organized by area (`home/`, `ai/`, `projects/`, `favicon/`). Images are AI-generated.

## Local development

```bash
python -m http.server   # then open http://localhost:8000
```

There is nothing to compile — edit a file and reload the browser. Changes deploy automatically when pushed to `master`.

## Customization

- Colors and shared tokens live as CSS variables in `:root` at the top of `styles.css`.
- New topic hubs and articles start as a copy of an existing `welcome.html` / article page, with content swapped — keep the shared structure so the shared CSS/JS keep working.
- Mind relative-path depth (`styles.css` vs `../styles.css`) when adding or moving pages.

## License

Open source under the [MIT License](LICENSE).
