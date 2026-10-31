# AGENTS.md

## Project

**AI-kido** — an AI scam-awareness workshop for Malaysian secondary school
students, with a tabletop detective game. Static site, deployed to Cloudflare
Pages and Netlify. See `README.md` for the product overview.

## Read DESIGN.md first

`DESIGN.md` is the authoritative visual system: direction, tokens, typography,
layout, components, asset rules, and constraints. **Read it before writing any
HTML, CSS, or UI copy.** Do not invent a new visual style, palette, or font
without updating `DESIGN.md` in the same change.

Summary of the direction, so it is not missed: **typographic editorial** —
paper and ink, high-contrast serif headlines, monospace for quoted scam
messages, one red accent for danger. Light only. Square corners, hairlines,
whitespace. No gradients, shadows, blur, glass, neon, or photography.

## Rules

- Keep the stack buildless: plain HTML/CSS/JS. No frameworks, no bundler.
- The site must work with JavaScript disabled; `assets/app.js` is progressive
  enhancement only.
- Fake scam artifacts (emails, SMS, job postings) are built in the DOM, never
  screenshots.
- Open-licence assets only (OFL fonts, MIT icons). Never a real person's photo
  as a scammer or victim. Record any AI-generated asset in the colophon.
- Body text never below 17px; 44px tap targets; visible focus rings; honour
  `prefers-reduced-motion`.
- Keep `DESIGN.md`'s colophon section accurate when fonts or assets change.
