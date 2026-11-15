# AI-kido: AI Scam Awareness Workshop

## 1. Project Overview
This project addresses the escalating threat of AI-powered online scams, such as phishing, fraudulent job offers, and realistic impersonations. As noted by The Star (2026), Malaysian youth and students are particularly vulnerable to these sophisticated deceptions. The primary objective is to enhance cybersecurity awareness and equip young individuals with the critical skills required to identify suspicious online activities.

## 2. Platform Architecture
The platform is a buildless static site, deployed from this repository to two hosts:

*   **Cloudflare Workers** — hosting and CDN, serving `public/` as static assets.
*   **Netlify** — the same static files on a second host.

Both publish the `public/` directory as-is. There is no build step, framework, package manager, environment variable or server-side code. All deployable files — the HTML pages and the `assets/` and `game/` directories — live under `public/`; the repository root holds only documentation, configuration and tooling. `netlify.toml` pins Netlify's publish directory to `public/`; `wrangler.jsonc` serves `public/` as Cloudflare Workers static assets. Asset URLs are root-relative (`/assets/...`), so the site must be served from a domain root or a deploy-preview root, not a subdirectory.

The public pages are `index.html` (home: Exhibit A and the contents index), `learn.html`, `game/index.html`, `about.html`, `colophon.html` and `privacy.html` (the privacy policy), all under `public/`. Both hosts serve each page at an extensionless URL, so internal links use `/learn`, `/game`, `/about`, `/colophon` and `/privacy`. The platform consists of two primary components:

### Part 1: Educational Content
*   **Curriculum:** Delivers essential cybersecurity information, focusing on AI-facilitated scams and practical digital safety measures.
*   **Post-Event Accessibility:** The website and its educational resources will remain publicly accessible to facilitate continuous learning after the workshop concludes.
*   **Resource Distribution:** Provides reusable educational materials that the collaborating school can utilize for future initiatives.

### Part 2: Interactive Game
*   **Format:** An interactive cybersecurity game, structurally inspired by platforms such as TryHackMe.
*   **Execution:** Participants will work through fictional scam scenarios and identify suspicious activity and warning signs.
*   **Objective:** To apply theoretical knowledge in a simulated environment, thereby reinforcing critical-thinking skills and threat recognition capabilities.

## 3. Collaboration and Target Demographic
*   **Target Community:** The primary beneficiaries are secondary school students with limited prior knowledge of cybersecurity. Alternatively, the program may target university students external to Universiti Malaya (UM).
*   **Collaborators:** The project will be conducted in partnership with a secondary school located outside of Universiti Malaya. The collaborating institution will assist in assessing the students' specific educational requirements, coordinating the workshop logistics, and providing evaluative feedback on the proposed curriculum and activities.

## 4. Deployment
Both hosts deploy from the repository with no build command and no server-side code.

*   **Cloudflare Workers:** connect the repository through Workers Builds, set `main` as the production branch, leave the build command empty, and deploy the `public/` directory configured in `wrangler.jsonc` as static assets. The empty `previews` block enables `npx wrangler preview`. There is no separate `prod` branch.
*   **Netlify:** connect the repository. `netlify.toml` sets `publish = "public"` and enables pretty URLs, so the build command can stay empty.

No environment variables, redirects or functions are required. Both hosts serve HTML at extensionless URLs: `learn.html` is available at `/learn`, and so on, so internal links never include `.html`. A plain local file server (for example `python -m http.server -d public`) does not apply that rewrite; use the Netlify CLI or `npx wrangler dev` to preview host routing, or open the page's `.html` file directly when previewing locally. Every page must be served over HTTP so the root-relative `/assets/...` paths resolve.

The privacy policy is a plain static page as well. It records that the site sets no cookies, runs no analytics and makes no third-party requests, and it names both hosts and their privacy policies.
