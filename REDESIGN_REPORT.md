# Redesign Report

## Objective

Rebuild the site as a professional, premium aerospace simulation research portal rather than a default documentation template.

## Design references and principles

The design follows patterns common in high-quality technical documentation and commercial research websites:

- Strong hero section with clear positioning.
- Dark premium visual language with restrained aerospace motifs.
- Card-based information hierarchy.
- Separate layers for daily updates, stable knowledge and project evaluation.
- Markdown-first content maintenance.

## Major changes

| Area | Change |
|---|---|
| Homepage | Rebuilt as a research portal with hero, mission cards, focus domains, latest radar, featured projects and workflow section |
| Visual system | Added dark aerospace theme, glass cards, orbital visual, custom SVG brand assets |
| Content architecture | Added Operations, Project Radar, Learning Path, Tool Stack, Engineering Practice and Methodology sections |
| Maintainability | Homepage content extracted to `src/data/homeContent.js` |
| Deployment | GitHub Pages workflow included |
| Assets | Uses self-contained SVG assets, no external copyrighted images |

## Daily maintenance model

1. Put new discoveries in `blog/` using the daily intake template.
2. Promote useful projects to `docs/radar/project-radar-board.md`.
3. Write stable notes in the relevant `docs/` section.
4. Update `src/data/homeContent.js` only when changing homepage cards.

## Recommended next improvements

- Add local search after the site has enough content.
- Add real project evaluation pages for Orekit, GMAT, Basilisk, JSBSim and RocketPy.
- Add a monthly digest page.
- Add benchmark and reproduction result tables.
