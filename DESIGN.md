# DESIGN.md — AI-kido visual system

The single source of truth for how this site looks. Read this before touching
`index.html`, `assets/styles.css` or any new page. If a change contradicts this
document, the change is wrong — or this document needs updating first, in the
same commit.

---

## 1. Direction

**Typographic editorial — "a scam-awareness briefing."**

The site should read like a printed briefing document: paper, ink, rules, big
serif headlines, and monospace type for anything quoted from a scammer.

Visual interest comes from three places only:

1. Typography and its scale
2. Fake scam artifacts rendered in the DOM (email, SMS, job posting)
3. One red accent, used only to mark danger

Everything else stays quiet.

### Why this direction

- The content is already case-based — scam examples, red flags and warning
  signs. The styling makes the structure teach the lesson.
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
  panel (the game).
- On `>=1024px` a **left margin rail (~200px)** appears. This is the editorial
  signature: a section label (`02 / Learn`) and a short marginal note, joined to
  the content by a thin hairline leader. The rail is sticky within its section.
- The site is **six static pages**, each with one `h1` and the same shell:
  header → page body → footer.
  - `/` (`index.html`) — hero + Exhibit A, then a contents index.
  - `/learn`, `/game`, `/about`, `/colophon`, `/privacy` — one section each,
    opened by a page head (kicker, display `h1`, lead).
  Internal links are root-relative and extensionless; both hosts resolve
  `learn.html` at `/learn`.
- Every page reuses the same header, footer, rail, section shell and type scale,
  so the set reads as one document rather than separate templates.
- The header marks the current route with `aria-current="page"` (static markup,
  no JavaScript). Learn, Game and About sit in the header; Colophon and Privacy
  sit in the footer.
- Mobile breakpoints: 360 / 768 / 1024 / 1440.

---

## 5. Sections

### Header
Wordmark + nav. Sticky. Paper background, single hairline that thickens slightly
on scroll. No shadow, no blur. The current page's nav link carries
`aria-current="page"`.

### Hero
Two columns on desktop. Left: kicker, display headline, lead, two buttons.
Right: **Exhibit A** — a fake SMS or email card built in the DOM. Each of the
three red flags carries an inline numbered marker, and a hairline footnote strip
beneath the hero explains all three. Numbers, not colour alone, connect the
markers to the explanations. The buttons link to `/learn` and `/game`.

> Exhibit A is the concept in one screen. If it works, the site works. Build it
> early and judge the whole direction on it.

Mobile: stacks, exhibit follows the copy, and the footnote strip stacks with it.

### Page head
Kicker, display `h1` and lead, used at the top of every subpage. It replaces the
section head on Learn, Game, About and Colophon, and matches the privacy page.

### Home
The hero, then a short **Contents** index: four hairline rows linking to Learn,
Game, About and Colophon. Each row is a number, a display-size title, one line of
description and an arrow. No cards, no duplicated module copy. The home page is
the only place where `01 / Exhibit A` and `02 / Contents` share a rail numbering
sequence.

### Learn
`/learn`. Three modules. **No boxed cards.** Each module is a grid row: an
oversized numeral (`01`, `02`, `03`) in Fraunces, then an `h2` title, body, a
"red flags" list, a one-line "the check" takeaway, and one mono specimen quote.
A top hairline separates rows. The AI-impersonation / deepfake module is the
feature: it splits into copy and specimen columns. The page ends with buttons to
the game and the workshop brief.

### The Game
`/game` (`game/index.html`) acts as the lightweight hub linking to two standalone interactive games served from separate URLs inside the `/game/` directory so that each route only downloads the code for a single game:
- `/game/impersonation` (`game/impersonation.html` + `assets/game-impersonation.js`) — **Game 01: Echo Chamber**, covering deepfake videos, AI voice cloning, and personalised messaging at scale, with audio specimens in `assets/audio/`.
- `/game/forgeries` (`game/forgeries.html` + `assets/game-forgeries.js`) — **Game 02: Paper Trail**, covering mirror websites and fake documentation (investment certificates, romance scam passports and work permits) with inline SVG seals generated in JS.
`--game` teal is permitted in the game sections and nowhere else. The rotated status stamp is built in CSS.

### About
`/about`. Two-column copy, partner information, accessibility statement, and the
"if a scam reaches you" guidance (997 and Semak Mule). Subheads are `h2`s.

### Colophon
`/colophon`. Font names and their licences, asset provenance, and the line
*"No real people are depicted on this site."* This is the licensing paper trail —
keep it accurate. It also records that the site sets no cookies, runs no
analytics and makes no third-party requests.

### Privacy
`/privacy`. A kicker and display `h1` sit above a four-item facts strip — cookies,
analytics, accounts, hosting — then short policy blocks separated by hairlines.
No new visual language: the block headings are ordinary `h2`s, body copy is the
standard measure, and provider names link directly to their privacy policies. It
must stay true to the build: no cookies, no analytics, no browser storage, and
the only outside party is the host that delivers the files.

---

## 6. Components

`wordmark` · `nav` · `kicker` · `display` · `lead` · `btn` (solid ink / hairline)
· `page-head` (kicker + `h1` + lead on subpages) · `contents` (hairline list of
page links on the home page) · `module-entry` · `red-flag-list`
(numbered, highlighter-marked) · `flag` (inline numbered marker) · `flag-strip`
(hairline footnote beneath the hero) · `specimen` (mono quote block with source
label) · `exhibit-card` · `case-panel` · `case-stamp` (rotated CSS stamp) ·
`annotation` (margin note + leader line) · `partner-list` · `helpline` ·
`colophon` · `legal-facts` (four-item summary strip) · `legal-block` (policy
section with hairline rule)

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

**Performance** — no framework, no build step. One shared CSS file (~28KB raw,
~5KB gzipped), one shared `app.js` under 4KB, three woff2 files (128KB), inline
SVG favicon, zero image files. Deploys statically to Cloudflare Pages and Netlify
as-is. Pages are split so a reader only downloads the page they are on. Any
interactive game code is page-only (`assets/game.js`, loaded by `/game` alone);
do not add it to the shared `app.js`.

**Print** — a print stylesheet that drops nav and buttons while keeping rules
and text. Teachers will print handouts; this is cheap and unusually valuable for
this specific project.

**Shapes and depth** — square corners (`border-radius: 0`, 2px maximum). No box
shadows, no gradients, no blur. Depth in this system comes from rules and
whitespace, never from elevation.

---

## 9. File layout

```
index.html                      # / — hero, Exhibit A, contents index
learn.html                      # /learn
game/
  index.html                    # /game — hub linking to the two standalone games
  impersonation.html            # /game/impersonation — Game 01 (Deepfakes, Voice Clones, Personalised Scale)
  forgeries.html                # /game/forgeries — Game 02 (Mirror Websites & Fake Documentation)
about.html                      # /about
colophon.html                   # /colophon
privacy.html                    # /privacy
netlify.toml                    # publish root, no build command
assets/
  styles.css                    # single stylesheet, tokens in :root
  app.js                        # smooth scroll + header state only
  game-impersonation.js         # loaded by /game/impersonation alone
  game-forgeries.js             # loaded by /game/forgeries alone
  audio/
    clone-sister.mp3            # voice-clone specimen for Game 01 (Case 01)
    clone-endorsement.mp3       # deepfake endorsement specimen for Game 01 (Case 03)
    clone-amir.mp3              # video-call voice specimen for Game 01 (Case 04)
  fonts/
    fraunces-latin.woff2
    instrument-sans-latin.woff2
    jetbrains-mono-latin.woff2
    OFL-fraunces.txt
    OFL-instrumentsans.txt
    OFL-jetbrainsmono.txt
```

The header and footer are duplicated in each HTML file because there is no build
step. Keep the copies identical; a nav change touches every page.

`assets/app.js` stays small and non-essential: the site must be fully usable
with JS disabled.

---

## 10. Build order

1. Tokens, type scale, reset
2. Header + footer shell (repeated per page)
3. Hero + Exhibit A → **stop and review before continuing**
4. Learn modules, then /learn
5. Game panel, then /game
6. About and Colophon pages
7. Privacy page
8. Responsive pass: 360 / 768 / 1024 / 1440
9. Accessibility + print pass

---

## 11. Open questions

These are unresolved and affect structure, not just styling:

- **Language** — English only, or Bahasa Malaysia too? For secondary students
  this is the biggest open question. It affects nav labels, module titles, and
  line lengths, so decide before finalising the type scale.

**Resolved:** the game now has its own route, `/game`, so its app code and
styles can stay off every other page. English only until the language question
is settled.
