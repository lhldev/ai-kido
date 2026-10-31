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
--rule-strong #B7AC97  card and exhibit edges
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
where possible. Budget: under 200KB total. The site ships latin subsets only:
Fraunces 67KB, Instrument Sans 30KB, JetBrains Mono 31KB (128KB total).

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
| Module title | `clamp(1.5rem, 2.4vw, 2rem)` | Fraunces — larger than H3, set next to an oversized numeral |
| H3 | `1.25rem` | Fraunces |
| Lead | `clamp(1.125rem, 1.6vw, 1.25rem)` / 1.55 | Instrument Sans |
| Body | `1.0625rem` / 1.65 | Instrument Sans — never below 17px |
| Label | `0.6875–0.8125rem`, uppercase, tracking 0.1–0.12em | Instrument Sans — smallest sizes for stamps and exhibit meta |
| Evidence | `0.9375rem` | JetBrains Mono |

---

## 4. Layout

- Content sits on a **1140px** grid with 24px gutters. Sections compose it as
  two columns (hero, about), a numeral + body row (learn), or a single bordered
  panel (the investigation).
- On `>=1024px` a **left margin rail (~200px)** appears. This is the editorial
  signature: a section label (`02 / Learn`) and a short marginal note, joined to
  the content by a thin hairline leader. The rail is sticky within its section.
- Section order is fixed: **header → hero → learn → game → about → colophon**,
  followed by a single-line footer.
- `privacy.html` is a separate route, served at `/privacy`. It reuses the same
  header, footer, rail, section shell and type scale, so it reads as the same
  document rather than a bolted-on legal page.
- Mobile breakpoints: 360 / 768 / 1024 / 1440.

---

## 5. Sections

### Header
Wordmark + nav. Sticky. Paper background, single hairline that thickens slightly
on scroll. No shadow, no blur.

### Hero
Two columns on desktop. Left: kicker, display headline, lead, two buttons.
Right: **Exhibit A** — a fake SMS or email card built in the DOM. Each of the
three red flags carries an inline numbered marker, and a hairline footnote strip
beneath the hero explains all three. Numbers, not colour alone, connect the
markers to the explanations.

> Exhibit A is the concept in one screen. If it works, the site works. Build it
> early and judge the whole direction on it.

Mobile: stacks, exhibit follows the copy, and the footnote strip stacks with it.

### Learn
Three modules. **No boxed cards.** Each module is a grid row: an oversized
numeral (`01`, `02`, `03`) in Fraunces, then title, body, a "red flags" list, a
one-line "the check" takeaway, and one mono specimen quote. A top hairline
separates rows. The AI-impersonation / deepfake module is the feature: it splits
into copy and specimen columns.

### The Investigation
The only section that gets a container and a border: case file #001, exhibit
list, status, CTA. `--game` teal permitted here and nowhere else. The rotated
case stamp is built in CSS.

### About
Two-column copy, partner information, accessibility statement, and the
"if a scam reaches you" guidance (997 and Semak Mule).

### Colophon
Font names and their licences, asset provenance, and the line
*"No real people are depicted on this site."* This is the licensing paper trail —
keep it accurate. It also records that the site sets no cookies, runs no
analytics and makes no third-party requests.

### Privacy
A single legal page at `privacy.html`, served at `/privacy`. A kicker and
display `h1` sit above a four-item facts strip — cookies, analytics, accounts,
hosting — then short policy blocks separated by hairlines. No new visual
language: the block headings are ordinary `h2`s, body copy is the standard
measure, and provider names link directly to their privacy policies. It must
stay true to the build: no cookies, no analytics, no browser storage, and the
only outside party is the host that delivers the files.

---

## 6. Components

`wordmark` · `nav` · `kicker` · `display` · `lead` · `btn` (solid ink / hairline)
· `module-entry` · `red-flag-list` (numbered, highlighter-marked) · `flag` (inline
numbered marker) · `flag-strip` (hairline footnote beneath the hero) · `specimen`
(mono quote block with source label) · `exhibit-card` · `case-panel`
· `case-stamp` (rotated CSS stamp) · `annotation` (margin note + leader line)
· `partner-list` · `helpline` · `colophon` · `legal-facts` (four-item summary
strip) · `legal-block` (policy section with hairline rule)

---

## 7. Assets

| Need | Source | Rules |
|---|---|---|
| Typefaces | Fraunces, Instrument Sans, JetBrains Mono | OFL 1.1, self-hosted latin-subset woff2. Licence texts in `assets/fonts/` |
| Icons | none on v1 | Numbered flags, stamps and rules are set in type, not drawn |
| Scam artifacts | **Built in HTML/CSS** | Never screenshots. Must be crisp, responsive, annotatable, screen-reader accessible |
| Faces for fake personas | none | No personas are depicted; exhibits are text only |
| Textures | none on v1 | Paper grain may be added later at ≤4% opacity |
| Photos | none | — |
| AI-generated | none used | If ever added: textures/atmosphere only, 2–3 pieces max. Record tool + date in the colophon |

### Hard asset rules

- **No unlicensed or scraped assets.** This deploys publicly with Universiti
  Malaya and a school attached to it.
- **Never a real person's photo as "the scammer"** — or as a victim. v1 uses no
  faces at all; any future personas must be illustrated avatars.
- **No AI-generated images containing text.** It renders garbled; build text in
  the DOM.
- **No "hooded figure in a dark room"** imagery. It is the visual cliché of
  cybersecurity and makes a serious topic look like a movie poster.

---

## 8. Constraints

**Motion** — colour and opacity state changes at 120ms, nothing else. No scroll
reveals, no parallax, no autoplay. Honour `prefers-reduced-motion`.

**Accessibility**

- Body text never below 17px
- 44px minimum tap targets
- 2px ink focus ring with 2px offset, visible on every interactive element
- Real heading order — no `h3` before `h2` for visual reasons
- `aria-label` on icon-only controls
- Colour never the only signal: red flags also carry a number and a label

**Performance** — no framework, no build step. One CSS file (~25KB raw, ~5KB
gzipped), three woff2 files (128KB), inline SVG favicon, zero image files.
Deploys statically to Cloudflare Pages and Netlify as-is.

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
privacy.html                    # served at /privacy
netlify.toml                    # publish root, no build command
assets/
  styles.css                    # single stylesheet, tokens in :root
  app.js                        # smooth scroll + progressive enhancement only
  fonts/
    fraunces-latin.woff2
    instrument-sans-latin.woff2
    jetbrains-mono-latin.woff2
    OFL-fraunces.txt
    OFL-instrumentsans.txt
    OFL-jetbrainsmono.txt
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
7. Privacy page
8. Responsive pass: 360 / 768 / 1024 / 1440
9. Accessibility + print pass

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
