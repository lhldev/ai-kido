# AI-kido: AI Scam Awareness Workshop

## 1. Project Overview
This project addresses the escalating threat of AI-powered online scams, such as phishing, fraudulent job offers, and realistic impersonations. As noted by The Star (2026), Malaysian youth and students are particularly vulnerable to these sophisticated deceptions. The primary objective is to enhance cybersecurity awareness and equip young individuals with the critical skills required to identify suspicious online activities.

## 2. Platform Architecture
The platform is a buildless static site, deployed from this repository to two hosts:

*   **Cloudflare Pages** — hosting and CDN.
*   **Netlify** — the same static files on a second host.

Both publish the repository root as-is. There is no build step, framework, package manager, environment variable or server-side code. `netlify.toml` pins Netlify's publish directory to the repository root; Cloudflare Pages needs no configuration file. Asset URLs are root-relative (`/assets/...`), so the site must be served from a domain root or a deploy-preview root, not a subdirectory.

The public pages are `index.html` (the workshop) and `privacy.html` (the privacy policy, served at `/privacy` by both hosts). The platform consists of two primary components:

### Part 1: Educational Content
*   **Curriculum:** Delivers essential cybersecurity information, focusing on AI-facilitated scams and practical digital safety measures.
*   **Post-Event Accessibility:** The website and its educational resources will remain publicly accessible to facilitate continuous learning after the workshop concludes.
*   **Resource Distribution:** Provides reusable educational materials that the collaborating school can utilize for future initiatives.

### Part 2: Interactive Game (Tabletop Investigation)
*   **Format:** A interactive cybersecurity detective game, structurally inspired by platforms such as TryHackMe.
*   **Execution:** Participants will work in groups to systematically analyze fictional scam cases and identify indicators of compromise or suspicious activity.
*   **Objective:** To apply theoretical knowledge in a simulated environment, thereby reinforcing critical-thinking skills and threat recognition capabilities.

## 3. Collaboration and Target Demographic
*   **Target Community:** The primary beneficiaries are secondary school students with limited prior knowledge of cybersecurity. Alternatively, the program may target university students external to Universiti Malaya (UM).
*   **Collaborators:** The project will be conducted in partnership with a secondary school located outside of Universiti Malaya. The collaborating institution will assist in assessing the students' specific educational requirements, coordinating the workshop logistics, and providing evaluative feedback on the proposed curriculum and activities.

## 4. Deployment
Both hosts deploy from the repository with no build command and no server-side code.

*   **Cloudflare Pages:** connect the repository, leave the framework preset and build command empty, and set the output directory to the repository root.
*   **Netlify:** connect the repository. `netlify.toml` sets `publish = "."` and enables pretty URLs, so the build command can stay empty.

No environment variables, redirects or functions are required. Both hosts serve HTML at extensionless URLs: `privacy.html` is available at `/privacy`, so internal links use `/privacy`. A plain local file server (for example `python -m http.server`) does not apply that rewrite; use the Netlify CLI or `npx wrangler pages dev .` to preview host routing, or open `/privacy.html` directly when previewing locally. Both pages must be served over HTTP so the root-relative `/assets/...` paths resolve.

The privacy policy is a plain static page as well. It records that the site sets no cookies, runs no analytics and makes no third-party requests, and it names both hosts and their privacy policies.
