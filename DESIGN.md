# DESIGN.md — AI-kido visual system

The single source of truth for how this site looks. Read this before touching
`index.html`, `assets/styles.css` or any new page. If a change contradicts this
document, the change is wrong — or this document needs updating first, in the
same commit.

---

## 1. Direction

**Typographic editorial — "a scam-awareness dossier."**

The site should read like a printed investigative file: paper, ink, rules, big
serif headlines, and monospace type for anything quoted from a scammer.

Visual interest comes from three places only:

1. Typography and its scale
2. Fake scam artifacts rendered in the DOM (email, SMS, job posting)
3. One red accent, used only to mark danger

Everything else stays quiet.

### Why this direction

- The content is already a dossier — scam cases, red flags, "indicators of
  compromise", case file #001. The styling makes the structure teach the lesson.
- Two audiences at once: students need it to not feel like homework; the school
  and UM partner need it to look credible enough to endorse.
- It survives the room it is used in — a projector and cheap phones. High
  contrast ink-on-paper beats glass, neon, or pastel in that setting.
- It needs almost no assets. No photography, no textures, no illustration.

### Rejected directions (do not reintroduce)

| Direction | Why not |
|---|---|
| Glassmorphism | Low contrast, overused, unusable on projectors |
| Claymorphism | Reads childish; undermines a safety topic |
| Maximalism / surrealism / ethereal | Cognitive load fights comprehension for beginners |
| Victorian / luxury typography | Wrong register for the audience; signals "expensive", not "safe" |
| Y2K / synthwave | Dated fast; nostalgia aimed at the wrong generation |
| Wabi-sabi | Too quiet to signal "warning" |
| Pixel art as a base | Fine as a 16px badge, unreadable as UI |
| Cybercore as a base | Thematic but dark; kills classroom projection. Teal accent only |
| Scrapbook | Right theme, wrong cost — 20+ assets that must all look like one hand made them |
| Neobrutalism | Strong runner-up, but loses warmth and distinctiveness |

---

## 2. Tokens

Defined in `:root` in `assets/styles.css`. Use the variables; never hardcode.

```
--paper      #F7F3EA   page background
--surface    #FFFDF8   raised blocks, exhibit cards
--ink        #14110F   body and headings
--ink-muted  #5A544C   secondary text, captions
--rule       #D9D1C1   hairlines, dividers
--stamp      #B23A2E   red flags, "flagged", case stamps
--marker     #F2E14C   highlighter behind clue phrases — never a text colour
--game       #15524F   cold teal, game section only
```

**Light only.** There is no dark mode. The previous dark palette
(`#0b0f14` background, `#4ade80` accent) is retired — `assets/styles.css` gets
rewritten, not patched.

Contrast targets: `--ink` on `--paper` is ~15:1. `--stamp` on `--paper` is
~5:1 — acceptable for text, do not lighten it. `--marker` is a background
highlight only.

---

## 3. Typography

Three families, all OFL, all self-hosted in `assets/fonts/` as woff2, variable
where possible. Budget: under 200KB total.

| Role | Family | Usage |
|---|---|---|
| Headlines | Fraunces | display, h2, h3, module numerals |
| Body | Instrument Sans | paragraphs, nav, buttons, labels |
| Evidence | JetBrains Mono | quoted scam messages, URLs, timestamps, sender addresses |

The mono/body split is the core trick: a quoted scam message must *look*
quoted, not blend into the lesson text around it.

| Role | Size | Notes |
|---|---|---|
| Display | `clamp(2.5rem, 6.5vw, 4.5rem)` | Fraunces, line-height 0.98, tracking −0.02em |
| H2 | `clamp(1.75rem, 3.5vw, 2.5rem)` | Fraunces |
| H3 | `1.25rem` | Fraunces |
| Lead | `1.25rem` / 1.55 | Instrument Sans |
| Body | `1.0625rem` / 1.65 | Instrument Sans — never below 17px |
| Label | `0.8125rem`, uppercase, tracking 0.12em, weight 600 | Instrument Sans |
| Evidence | `0.9375rem` | JetBrains Mono |

---

## 4. Layout

- 12-column grid, **1140px** content width, 24px gutters.
- On `>=1024px` a **left margin rail (~200px)** appears for annotations. This is
  the editorial signature — numbered clue callouts live here, with a thin leader
  line pointing to the thing being called out.
- Section order is fixed: **header → hero → learn → game → about → colophon**.
- Mobile breakpoints: 360 / 768 / 1024 / 1440.

---

## 5. Sections

### Header
Wordmark + nav. Sticky. Paper background, single hairline that thickens slightly
on scroll. No shadow, no blur.

### Hero
Two columns on desktop. Left: kicker, display headline, lead, two buttons.
Right: **Exhibit A** — a fake SMS or email card built in the DOM, with three
numbered red flags annotated in the margin rail.

> Exhibit A is the concept in one screen. If it works, the site works. Build it
> early and judge the whole direction on it.

Mobile: stacks, exhibit follows the copy.

### Learn
Three modules. **No boxed cards.** Each module is a grid row: an oversized
numeral (`01`, `02`, `03`) in Fraunces, then title, body, a "red flags" list, and
one mono specimen quote. A top hairline separates rows. The AI-impersonation /
deepfake module may span wider as the feature.

### The Investigation
The only section that gets a container and a border: case file #001, exhibit
list, status, CTA. `--game` teal permitted here and nowhere else.

### About
Two-column copy, partner information, accessibility statement.

### Colophon
Font names and their licences, asset provenance, and the line
*"No real people are depicted on this site."* This is the licensing paper trail —
keep it accurate.

---

## 6. Components

`wordmark` · `nav` · `kicker` · `display` · `lead` · `btn` (solid ink / hairline)
· `module-entry` · `red-flag-list` (numbered, highlighter-marked)
· `specimen` (mono quote block with source label) · `exhibit-card`
· `case-stamp` (CSS rotation + SVG) · `annotation` (margin note + leader line)
· `colophon`

---

## 7. Assets

| Need | Source | Rules |
|---|---|---|
| Icons | Lucide (MIT) | Inline SVG, ~6 total: mail, link, phone, warning, clock, file |
| Scam artifacts | **Built in HTML/CSS** | Never screenshots. Must be crisp, responsive, annotatable, screen-reader accessible |
| Faces for fake personas | DiceBear | Illustrated avatars only |
| Textures | none on v1 | Paper grain may be added later at ≤4% opacity |
| Photos | none | — |
| AI-generated | optional, 2–3 pieces max | Textures/atmosphere only. Record tool + date in the colophon |

### Hard asset rules

- **No unlicensed or scraped assets.** This deploys publicly with Universiti
  Malaya and a school attached to it.
- **Never a real person's photo as "the scammer"** — or as a victim. Illustrated
  avatars only.
- **No AI-generated images containing text.** It renders garbled; build text in
  the DOM.
- **No "hooded figure in a dark room"** imagery. It is the visual cliché of
  cybersecurity and makes a serious topic look like a movie poster.

---

## 8. Constraints

**Motion** — colour transitions at 120ms, nothing else. No scroll reveals, no
parallax, no autoplay. Honour `prefers-reduced-motion`.

**Accessibility**

- Body text never below 17px
- 44px minimum tap targets
- 2px ink focus ring with 2px offset, visible on every interactive element
- Real heading order — no `h3` before `h2` for visual reasons
- `aria-label` on icon-only controls
- Colour never the only signal: red flags also carry a number and a label

**Performance** — no framework, no build step. One CSS file (~12–14KB), inline
SVG, zero images on v1. Deploys statically to Cloudflare Pages as-is.

**Print** — a print stylesheet that drops nav and buttons while keeping rules
and text. Teachers will print handouts; this is cheap and unusually valuable for
this specific project.

**Shapes and depth** — square corners (`border-radius: 0`, 2px maximum). No box
shadows, no gradients, no blur. Depth in this system comes from rules and
whitespace, never from elevation.

---

## 9. File layout

```
index.html
assets/
  styles.css      # single stylesheet, tokens in :root
  app.js          # smooth scroll + progressive enhancement only
  fonts/          # self-hosted woff2, 2 files per family max
```

`assets/app.js` stays small and non-essential: the site must be fully usable
with JS disabled.

---

## 10. Build order

1. Tokens, type scale, reset
2. Header + footer shell
3. Hero + Exhibit A → **stop and review before continuing**
4. Learn modules
5. Game panel
6. About + colophon
7. Responsive pass: 360 / 768 / 1024 / 1440
8. Accessibility + print pass

---

## 11. Open questions

These are unresolved and affect structure, not just styling:

- **Language** — English only, or Bahasa Malaysia too? For secondary students
  this is the biggest open question. It affects nav labels, module titles, and
  line lengths, so decide before finalising the type scale.
- **Game scope** — a section on this page, or a separate route with its own
  screen? This decides whether the case-file components are reusable page
  furniture or a self-contained app.

Until decided: English only, and the game lives in-page under `#game`.
