# Aerospace Simulation Notes

A professional aerospace simulation research portal, project radar and engineering knowledge base.

## What this site is

This repository is not a link dump. It is designed for long-term maintenance of aerospace simulation knowledge:

- Orbital mechanics
- Spacecraft dynamics
- GNC / ADCS
- Propulsion
- Aerodynamics / CFD
- 6DOF simulation
- Mission analysis tools
- Open-source project evaluation
- Engineering reproduction logs

## Local development

```bash
npm install
npm run start
```

Open:

```text
http://localhost:3000/AerospaceSimulationNotes/
```

## Build

```bash
npm run build
```

## Deploy

The repository includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

In GitHub:

```text
Settings → Pages → Source → GitHub Actions
```

Then push to `main`.

## Content workflow

- Daily notes go to `blog/`.
- Stable knowledge goes to `docs/`.
- Project evaluations go to `docs/radar/` and `docs/projects/`.
- Homepage content cards are controlled by `src/data/homeContent.js`.
- Visual styling is controlled by `src/css/custom.css` and `src/pages/index.module.css`.
