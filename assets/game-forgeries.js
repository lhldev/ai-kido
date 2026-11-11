// Game 02: Paper Trail (Sophisticated Website & Document Creation: Mirror Websites & Fake Documentation)
// Loaded exclusively by /game/forgeries (game/forgeries.html)
(() => {
  const mount = document.getElementById("forgeries-app");
  if (!mount) return;

  function getDocSealSvg(sealType) {
    switch (sealType) {
      case "bank-mirror":
        return `<span class="doc-seal" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="6" width="52" height="52" />
            <path d="M16 26L32 14L48 26H16Z" />
            <line x1="20" y1="26" x2="20" y2="44" />
            <line x1="28" y1="26" x2="28" y2="44" />
            <line x1="36" y1="26" x2="36" y2="44" />
            <line x1="44" y1="26" x2="44" y2="44" />
            <line x1="14" y1="46" x2="50" y2="46" />
          </svg>
        </span>`;
      case "investment-seal":
        return `<span class="doc-seal doc-seal--stamp" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="32" cy="32" r="27" />
            <circle cx="32" cy="32" r="21" stroke-dasharray="3 3" />
            <polygon points="32,15 36,26 48,26 38,33 42,44 32,37 22,44 26,33 16,26 28,26" />
          </svg>
        </span>`;
      case "passport-visa":
        return `<span class="doc-seal doc-seal--stamp" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="8" y="12" width="48" height="40" />
            <circle cx="32" cy="32" r="13" />
            <ellipse cx="32" cy="32" rx="6" ry="13" />
            <line x1="19" y1="32" x2="45" y2="32" />
            <line x1="12" y1="18" x2="22" y2="18" />
            <line x1="42" y1="46" x2="52" y2="46" />
          </svg>
        </span>`;
      case "ewallet-shield":
        return `<span class="doc-seal" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M32 8L52 16V31C52 44 43 52 32 56C21 52 12 44 12 31V16L32 8Z" />
            <rect x="25" y="28" width="14" height="12" />
            <path d="M28 28V24C28 21.8 29.8 20 32 20C34.2 20 36 21.8 36 24V28" />
          </svg>
        </span>`;
      case "warrant-crest":
      default:
        return `<span class="doc-seal doc-seal--stamp" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="32,6 54,18 54,46 32,58 10,46 10,18" />
            <polygon points="32,12 48,21 48,43 32,52 16,43 16,21" stroke-dasharray="4 2" />
            <line x1="32" y1="20" x2="32" y2="44" />
            <line x1="20" y1="28" x2="44" y2="28" />
            <polygon points="20,28 16,36 24,36" />
            <polygon points="44,28 40,36 48,36" />
          </svg>
        </span>`;
    }
  }

  const STAGES = [
    {
      id: "01",
      tag: "Mirror Websites",
      sealType: "bank-mirror",
      title: "The 3-Hour-Old Student Rebate Portal",
      context:
        "Bank Maju announced a new RM200 Student Book Rebate at 9:00 AM today. At 12:15 PM, you see a social media advertisement linking to a portal with the exact same logo, branding, and a working customer service chat widget.",
      artifactType: "BROWSER INSPECTOR · MIRROR SITE",
      artifactMeta: "Live Since 11:40 AM Today",
      urlBar: "https://bankmaju-studentrebate.my-claim.org/login",
      docHeader: {
        authority: "BANK MAJU MALAYSIA · STUDENT REBATE PORTAL",
        sub: "Official Logo & Branding · 24/7 Live Customer Chat Active"
      },
      docFields: [
        { label: "Service Launched", value: "Today, 09:00 AM" },
        { label: "Domain Registered", value: "Today, 11:12 AM (2 hrs after launch)" }
      ],
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "Address bar reads: bankmaju-studentrebate.my-claim.org (reached by clicking a social media advertisement link).",
          note: "Lookalike domain reached via a social media ad — the real bank domain ends in bankmaju.com.my."
        },
        {
          type: "text",
          text: " The page displays Bank Maju's exact typography, header navigation, and a working contact form. "
        },
        {
          type: "clue",
          id: "c2",
          text: "[Live Chat Agent — Online]: “Hi! Enter your Internet Banking username, password, and SMS TAC code in our form below to claim your RM200 immediately.”",
          note: "Working customer service features on a mirror website used to harvest banking credentials."
        }
      ],
      tools: [
        {
          label: "Check Domain Age & WHOIS Registry",
          result:
            "Domain 'my-claim.org' was registered just 3 hours ago using an AI site cloner right after Bank Maju's press release."
        },
        {
          label: "Type 'bankmaju.com.my' Directly Into Browser",
          result:
            "On the real bankmaju.com.my website, a banner states: 'Rebate applications open next Monday inside the official Bank Maju app only. We never ask for your password.'"
        }
      ],
      prompt: "This website has the exact logo, branding, and a working customer service chat. Why is it still a trap?",
      choices: [
        {
          key: "A",
          text: "Scammers use AI tools to create perfect copies of real websites—with working contact forms and customer service—within hours of a real launch. Always type web addresses directly into your browser.",
          correct: true,
          feedback:
            "Spot on! AI mirror sites copy logos, branding, and working chat features within hours of a real company launching a service. Never click links in social media ads — type the web address directly into your browser."
        },
        {
          key: "B",
          text: "A scam website cannot have a working customer service chat or gone live on the same morning as the real launch.",
          correct: false,
          feedback:
            "With AI tools, scammers build mirror sites with working contact forms and customer service features that go live within hours of a real announcement."
        },
        {
          key: "C",
          text: "Submit the contact form with your username first, and only stop if the live chat agent is slow to reply.",
          correct: false,
          feedback:
            "The live chat on a mirror site is often powered by an instant AI bot designed to steal your credentials in real time."
        }
      ],
      ruleSummary:
        "Scammers use AI to build perfect mirror websites with working customer service within hours of a launch. Always type web addresses directly into your browser rather than clicking links in ads, messages, or emails."
    },
    {
      id: "02",
      tag: "Fake Documentation · Investment",
      sealType: "investment-seal",
      title: "The 'Guaranteed Return' Regulatory Certificate",
      context:
        "An online investment mentor invites you into an 'AI Quant Trading Pool' promising 18% weekly returns. When you ask if they are legal, they immediately send a professional-looking PDF regulatory licence.",
      artifactType: "DOCUMENT AUDIT · INVESTMENT LICENCE",
      artifactMeta: "PDF Generated · 420 KB",
      urlBar: null,
      docHeader: {
        authority: "CAPITAL MARKETS REGULATORY AUTHORITY · MALAYSIA",
        sub: "Certificate of Authorised AI Asset Management · Form SC-992-AI"
      },
      docFields: [
        { label: "Licence Holder", value: "NovaYield AI Capital Sdn Bhd" },
        { label: "Approval Code", value: "MY-SC-2026-GUARANTEED-889" },
        { label: "Status Stamp", value: "APPROVED & INSURED UP TO RM500,000" },
        { label: "Contact Hotline", value: "+60 3-9981 0042 (Printed on PDF)" }
      ],
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "“This Certificate hereby authorises NovaYield AI Capital to guarantee a fixed 18% weekly profit with zero risk to student depositors.”",
          note: "No real financial regulator ever issues a certificate guaranteeing fixed weekly investment profits."
        },
        {
          type: "text",
          text: " Signed with an official-looking seal, barcode, and signature block. "
        },
        {
          type: "clue",
          id: "c2",
          text: "“To verify this licence, call our dedicated compliance officer at the number printed on this certificate (+60 3-9981 0042).”",
          note: "Directs you to call a phone number printed on the fake document instead of looking up the regulator yourself."
        }
      ],
      tools: [
        {
          label: "Search Official Securities Commission Investor Alert List",
          result:
            "MATCH FOUND: 'NovaYield AI Capital' is unlicensed and listed on the official Investor Alert List. Licence code MY-SC-2026-GUARANTEED-889 does not exist."
        },
        {
          label: "Inspect PDF File Metadata",
          result:
            "Created 11 minutes ago using an AI document generator template. The seal and signatures are synthetic vector layers."
        }
      ],
      prompt: "Investment scammers sent you an official-looking regulatory certificate with a hotline number on it. How should you verify it?",
      choices: [
        {
          key: "A",
          text: "Call the compliance phone number printed at the bottom of the PDF certificate to ask if it is genuine.",
          correct: false,
          feedback:
            "Calling a number printed on a fake document just connects you to another scammer sitting at the next desk."
        },
        {
          key: "B",
          text: "Recognise that AI can generate professional-looking fake regulatory documentation in minutes — verify via the regulator's real website or official phone number that you find yourself.",
          correct: true,
          feedback:
            "Exactly right! Investment scammers use AI to create fake regulatory documentation in minutes. Always verify an organisation using contact details you find yourself on their official website."
        },
        {
          key: "C",
          text: "The certificate has a barcode, official crest, and registration number, so it is safe to invest RM200.",
          correct: false,
          feedback:
            "Professional-looking certificates, licences, and official documents can be created in minutes with AI tools."
        }
      ],
      ruleSummary:
        "Investment scammers create fake regulatory documentation in minutes. Never trust a PDF certificate at face value — verify directly with the official regulator."
    },
    {
      id: "03",
      tag: "Fake Documentation · Romance & Overseas Work",
      sealType: "passport-visa",
      title: "The Forged Passport & Work Permit at KLIA",
      context:
        "Your older cousin has been chatting online for two months with an 'overseas robotics engineer' who promised to fly to Kuala Lumpur to meet her. Today, the engineer claims to be detained at airport immigration and sends photos of a passport and work permit.",
      artifactType: "DOCUMENT AUDIT · PASSPORT & WORK PERMIT",
      artifactMeta: "2 Attachments · Sent via Chat",
      urlBar: null,
      docHeader: {
        authority: "FOREIGN SPECIALIST WORK PERMIT & VISA CLEARANCE",
        sub: "Permit Ref: WP-KLIA-88412-AI · Entry Port: Kuala Lumpur"
      },
      docFields: [
        { label: "Document Type", value: "Passport Bio Page + Work Permit" },
        { label: "Holder Name", value: "Lucas Vance (Robotics Specialist)" },
        { label: "Stamp Text", value: "HELD — PENDING RM2,400 STAMP FEE" },
        { label: "Payment Channel", value: "Personal Bank Account (Instant Transfer)" }
      ],
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "[Attached Passport & Work Permit]: Crisp layout with official-looking emblems, visa hologram graphic, and a red stamp: 'URGENT RELEASE FEE REQUIRED: RM2,400'.",
          note: "Romance scammers generate fake passports and work permits in minutes to make fake travel emergencies believable."
        },
        {
          type: "text",
          text: " Accompanying message: “You can see my official passport and Malaysian work permit right there!” "
        },
        {
          type: "clue",
          id: "c2",
          text: "“Please transfer RM2,400 to this clearance agent's personal account within 1 hour or they will deport me back!”",
          note: "Immigration authorities never demand urgent transfers to a personal bank account to release a traveller."
        }
      ],
      tools: [
        {
          label: "Examine Passport MRZ (Machine Readable Zone) Checksum",
          result:
            "FORGERY DETECTED: The bottom passport code has invalid check digits and the document template was synthesised by an AI generator."
        },
        {
          label: "Look Up Official Immigration Department Contact Yourself",
          result:
            "Official Immigration guidelines confirm travellers are never held for 'personal bank transfer release fees' and permits are not cleared via WhatsApp."
        }
      ],
      prompt: "Your cousin says: 'Look, he sent his passport and official work permit, so he really is at the airport!' What do you tell her?",
      choices: [
        {
          key: "A",
          text: "Romance scammers use AI to generate fake passports and work permits in minutes to stage emergencies. Do not send a single sen.",
          correct: true,
          feedback:
            "Spot on. Romance scammers can generate fake passports, visas, and work permits in minutes to make their stories look official."
        },
        {
          key: "B",
          text: "Since both a passport and a work permit are attached, lend her half the money just in case.",
          correct: false,
          feedback:
            "Both documents were generated in minutes using AI tools. Sending money only leads to bigger 'customs' or 'medical' demands next."
        },
        {
          key: "C",
          text: "Ask the online contact to send one more certificate from the airline before paying.",
          correct: false,
          feedback:
            "A scammer who generated a fake passport and work permit in 2 minutes will happily generate a fake airline ticket in 30 seconds."
        }
      ],
      ruleSummary:
        "Romance scammers generate fake passports and work permits in minutes. Official-looking documents attached in a chat are never proof that an emergency is real."
    },
    {
      id: "04",
      tag: "Mirror Websites · Direct URL Habit",
      sealType: "ewallet-shield",
      title: "The E-Wallet 'Security Upgrade' Email Link",
      context:
        "You receive an email claiming your e-wallet just launched a new 'AI Fraud Shield' feature today and requires you to confirm your PIN. The email includes a prominent link to a site that looks identical to your real e-wallet.",
      artifactType: "EMAIL + MIRROR SITE COMPARISON",
      artifactMeta: "Link in Email vs. Browser Address Bar",
      urlBar: "https://touchpay-malaysia-verify.com/shield-activate",
      docHeader: {
        authority: "TOUCHPAY E-WALLET · SECURITY CENTRE",
        sub: "Identical Brand Colours · Working Helpdesk Ticket Form"
      },
      docFields: [
        { label: "Link in Email", value: "touchpay-malaysia-verify.com" },
        { label: "Official Domain", value: "touchpay.com.my" }
      ],
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "Email button text says 'https://www.touchpay.com.my', but hovering/tapping opens 'https://touchpay-malaysia-verify.com/shield-activate'.",
          note: "Clicking a link in an email or message takes you to a mirror website on a different domain."
        },
        {
          type: "text",
          text: " The mirror site has working FAQ accordions, the real company logo, and a live ticket counter. "
        },
        {
          type: "clue",
          id: "c2",
          text: "Form prompt: “Enter your 6-digit e-wallet PIN and OTP to activate AI Fraud Shield.”",
          note: "Mirror website designed to steal your PIN and one-time password."
        }
      ],
      tools: [
        {
          label: "Close Email & Type 'touchpay.com.my' Directly Into Browser",
          result:
            "Typing the address yourself loads the real site — there is no 'PIN verification web form', and a security notice warns of a mirror site launched this afternoon."
        },
        {
          label: "Open Your Official E-Wallet App Directly",
          result:
            "Your account inside the official app shows zero security alerts."
        }
      ],
      prompt: "What is the best everyday habit to protect yourself from AI-built mirror websites?",
      choices: [
        {
          key: "A",
          text: "Click the link in the email first, and judge the site by whether its logo and contact form work properly.",
          correct: false,
          feedback:
            "Mirror websites use the exact same logo and branding and have working contact forms, making visual checks unreliable."
        },
        {
          key: "B",
          text: "Always type web addresses directly into your browser (or open the official app) rather than clicking links in emails, messages, or social media ads.",
          correct: true,
          feedback:
            "100% right. Always type web addresses directly into your browser rather than clicking links in emails, messages, or social media advertisements."
        },
        {
          key: "C",
          text: "Only click links if they appear in a sponsored social media advertisement.",
          correct: false,
          feedback:
            "Scammers frequently buy social media advertisements pointing straight to newly launched mirror websites."
        }
      ],
      ruleSummary:
        "Always type web addresses directly into your browser rather than clicking links in emails, messages, or social media advertisements."
    },
    {
      id: "05",
      tag: "Fake Documentation + Caller Verification",
      sealType: "warrant-crest",
      title: "The 'Cybersecurity Officer' Call & Case Warrant",
      context:
        "Someone calls your phone claiming to be from the 'National Financial Fraud Desk', saying your bank account was flagged. To prove they are real, they send you an official-looking clearance letter on WhatsApp and tell you to transfer your savings to a 'safe audit account'.",
      artifactType: "CALL + OFFICIAL CLEARANCE LETTER",
      artifactMeta: "Incoming Call + PDF Letter",
      urlBar: null,
      docHeader: {
        authority: "NATIONAL FINANCIAL AUDIT & CLEARANCE DIVISION",
        sub: "Directive #NF-2026-091 · Official Seal & Officer Badge Attached"
      },
      docFields: [
        { label: "Caller ID", value: "+60 3-2700 9912 (Spoofed / Unknown)" },
        { label: "Attached Proof", value: "Signed Warrant PDF + Officer ID Card" },
        { label: "Callback Given by Caller", value: "+60 3-2788 1100 ('Extension 4')" },
        { label: "Official Bank App Number", value: "Found on back of your bank card / official app" }
      ],
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "Caller sends a formatted PDF letter with your name, an official crest, and an 'Officer Licence Certificate' within 60 seconds of calling you.",
          note: "AI generates official-looking certificates, licences, and letters in minutes to intimidate victims."
        },
        {
          type: "text",
          text: " Caller says: “If you doubt me, call our verification line at +60 3-2788 1100 printed on this letter.” "
        },
        {
          type: "clue",
          id: "c2",
          text: "“Do not hang up or open your bank app — transfer your balance to the Temporary Audit Account on page 2 immediately.”",
          note: "Tries to stop you from hanging up and looking up the organisation's real phone number yourself."
        }
      ],
      tools: [
        {
          label: "Hang Up & Find Your Bank's Number on Their Official Website/App",
          result:
            "You look up the official number yourself inside your bank's app and call them. The real bank confirms your account is completely safe and no audit letter exists."
        },
        {
          label: "Audit the Attached PDF Warrant & Officer Licence",
          result:
            "Both documents were generated from an AI template 4 minutes ago. The 'Temporary Audit Account' is a mule account."
        }
      ],
      prompt: "An organisation calls you and sends an official-looking document to prove their identity. How do you verify them safely?",
      choices: [
        {
          key: "A",
          text: "Hang up and verify the organisation by calling them back on a number you find yourself on their official website or app.",
          correct: true,
          feedback:
            "Perfect! Always verify an organisation that has called you by calling them back on a number you find yourself on their official website or app."
        },
        {
          key: "B",
          text: "Call the verification phone number printed on the PDF document they sent you.",
          correct: false,
          feedback:
            "Never call a number supplied by the caller or printed on a suspect document. Find the official number yourself on their official website or app."
        },
        {
          key: "C",
          text: "Trust the caller because they sent a signed licence and official clearance document with your name on it.",
          correct: false,
          feedback:
            "Professional-looking certificates, licences, and official documents can be created in minutes with AI."
        }
      ],
      ruleSummary:
        "Verify an organisation that has called you by calling them back on a number you find yourself on their official website or app."
    }
  ];

  let currentStageIdx = 0;
  let auditScore = 100;
  let cluesFoundTotal = 0;
  let correctDecisions = 0;
  let stageFlagged = new Set();
  let stageOpenedTools = new Set();
  let stageAnswered = null;
  let historyLog = [];

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    if (currentStageIdx >= STAGES.length) {
      renderDebrief();
      return;
    }

    const stage = STAGES[currentStageIdx];
    const totalCluesInStage = stage.segments.filter(
      (s) => s.type === "clue"
    ).length;
    const progressPct = Math.round((currentStageIdx / STAGES.length) * 100);

    const urlBarHtml = stage.urlBar
      ? `<div class="artifact-url-bar">
          <span class="url-lock">HTTPS</span>
          <span>${escapeHtml(stage.urlBar)}</span>
        </div>`
      : "";

    const docFieldsHtml = stage.docFields
      .map(
        (f) => `<div>
          <dt>${escapeHtml(f.label)}</dt>
          <dd>${escapeHtml(f.value)}</dd>
        </div>`
      )
      .join("");

    const segmentsHtml = stage.segments
      .map((seg, i) => {
        if (seg.type !== "clue") {
          return `<span>${escapeHtml(seg.text)}</span>`;
        }
        const isFlagged = stageFlagged.has(seg.id);
        const clueNumber =
          stage.segments.slice(0, i + 1).filter((s) => s.type === "clue")
            .length;
        return `<button type="button" class="clue-token ${
          isFlagged ? "is-flagged" : ""
        }" data-clue-id="${escapeHtml(seg.id)}" aria-pressed="${
          isFlagged ? "true" : "false"
        }" title="Tap to flag forgery clue">
          <span class="clue-token-num">${clueNumber}</span>${escapeHtml(
          seg.text
        )}
        </button>`;
      })
      .join("");

    const flaggedNotesHtml = stage.segments
      .filter((s) => s.type === "clue" && stageFlagged.has(s.id))
      .map(
        (s) =>
          `<div class="tool-result"><strong>Forensic note:</strong> ${escapeHtml(
            s.note
          )}</div>`
      )
      .join("");

    const toolsHtml = stage.tools
      .map((t, idx) => {
        const isOpen = stageOpenedTools.has(idx);
        return `<div>
          <button type="button" class="tool-action-btn" data-tool-idx="${idx}" aria-expanded="${
          isOpen ? "true" : "false"
        }">
            <span>${escapeHtml(t.label)}</span>
            <span>${isOpen ? "−" : "+"}</span>
          </button>
          ${
            isOpen
              ? `<div class="tool-result">${escapeHtml(t.result)}</div>`
              : ""
          }
        </div>`;
      })
      .join("");

    const choicesHtml = stage.choices
      .map((c) => {
        let stateClass = "";
        if (stageAnswered) {
          if (c.correct) stateClass = "is-correct";
          else if (stageAnswered.choiceKey === c.key) stateClass = "is-wrong";
        }
        return `<button type="button" class="choice-btn ${stateClass}" data-choice-key="${escapeHtml(
          c.key
        )}" ${stageAnswered ? "disabled" : ""}>
          <span class="choice-key">${escapeHtml(c.key)}</span>
          <span>${escapeHtml(c.text)}</span>
        </button>`;
      })
      .join("");

    const feedbackHtml = stageAnswered
      ? `<div class="feedback-box ${
          stageAnswered.isCorrect ? "" : "feedback-box--wrong"
        }">
          <div class="feedback-head">
            <span class="feedback-verdict">${
              stageAnswered.isCorrect
                ? "Forgery Rejected · Safe Action"
                : "Deceived by Forgery · Warning"
            }</span>
            <span class="mono">${
              stageAnswered.isCorrect ? "+200 pts" : "−25 Integrity"
            }</span>
          </div>
          <p class="feedback-body">${escapeHtml(stageAnswered.feedback)}</p>
          <p class="feedback-rule"><strong>Key takeaway:</strong> ${escapeHtml(
            stage.ruleSummary
          )}</p>
          <div class="actions">
            <button type="button" class="btn btn--solid" id="next-stage-btn">
              ${
                currentStageIdx + 1 < STAGES.length
                  ? `Next Exhibit (${currentStageIdx + 2} of ${STAGES.length}) →`
                  : "View Final Audit Report →"
              }
            </button>
          </div>
        </div>`
      : "";

    mount.innerHTML = `
      <dl class="game-hud" aria-label="Game status">
        <div class="hud-item">
          <dt>Exhibit</dt>
          <dd>${stage.id} / 0${STAGES.length}</dd>
        </div>
        <div class="hud-item ${auditScore <= 50 ? "hud-item--danger" : ""}">
          <dt>Audit Shield</dt>
          <dd>${auditScore}%</dd>
        </div>
        <div class="hud-item">
          <dt>Clues Flagged</dt>
          <dd>${cluesFoundTotal}</dd>
        </div>
        <div class="hud-item">
          <dt>Forgeries Caught</dt>
          <dd>${correctDecisions} / ${currentStageIdx + (stageAnswered ? 1 : 0)}</dd>
        </div>
        <div class="game-progress-bar" aria-hidden="true">
          <div class="game-progress-fill" style="width: ${progressPct}%"></div>
        </div>
      </dl>

      <article class="game-stage">
        <div class="stage-header">
          <span class="stage-kicker">Exhibit #${stage.id} · ${escapeHtml(
      stage.tag
    )}</span>
          <span class="stage-badge">${escapeHtml(stage.artifactType)}</span>
        </div>

        <h2 class="stage-title">${escapeHtml(stage.title)}</h2>
        <p class="stage-context">${escapeHtml(stage.context)}</p>

        <div class="game-workspace">
          <div>
            <div class="artifact-box">
              <div class="artifact-bar">
                <span class="artifact-bar-title">Submitted Specimen</span>
                <span class="artifact-bar-meta">${escapeHtml(
                  stage.artifactMeta
                )}</span>
              </div>
              ${urlBarHtml}
              <div class="artifact-content">
                <div class="doc-certificate">
                  <div class="doc-header">
                    ${getDocSealSvg(stage.sealType)}
                    <p class="doc-authority">${escapeHtml(
                      stage.docHeader.authority
                    )}</p>
                    <p class="doc-sub">${escapeHtml(stage.docHeader.sub)}</p>
                  </div>

                  <dl class="doc-grid">
                    ${docFieldsHtml}
                  </dl>

                  <div class="bubble" style="background:var(--paper);">
                    ${segmentsHtml}
                  </div>
                </div>

                <p class="flagged-counter">
                  <span>Forgery clues spotted: <strong>${
                    stageFlagged.size
                  } / ${totalCluesInStage}</strong> (tap underlined phrases above)</span>
                </p>

                ${flaggedNotesHtml}
              </div>
            </div>
          </div>

          <div class="tool-panel">
            <div class="tool-box">
              <p class="tool-box-title">
                <span>Independent Lookup Desk</span>
                <span>Verify outside the exhibit</span>
              </p>
              <p class="exhibit-foot" style="margin-top:0;margin-bottom:0.5rem;">
                Never rely on links or phone numbers inside a suspect page or PDF. Run independent checks below:
              </p>
              ${toolsHtml}
            </div>
          </div>
        </div>

        <div class="decision-section">
          <h3 class="decision-prompt">${escapeHtml(stage.prompt)}</h3>
          <p class="decision-hint">Tip: Tag the forgery clues and run an independent lookup above before locking in your verdict.</p>
          <div class="choice-grid">
            ${choicesHtml}
          </div>
          ${feedbackHtml}
        </div>
      </article>
    `;

    bindStageEvents(stage);
  }

  function bindStageEvents(stage) {
    mount.querySelectorAll("[data-clue-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-clue-id");
        if (!id) return;
        if (stageFlagged.has(id)) {
          stageFlagged.delete(id);
          cluesFoundTotal = Math.max(0, cluesFoundTotal - 1);
        } else {
          stageFlagged.add(id);
          cluesFoundTotal += 1;
        }
        render();
      });
    });

    mount.querySelectorAll("[data-tool-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-tool-idx"));
        if (stageOpenedTools.has(idx)) {
          stageOpenedTools.delete(idx);
        } else {
          stageOpenedTools.add(idx);
        }
        render();
      });
    });

    mount.querySelectorAll("[data-choice-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (stageAnswered) return;
        const key = btn.getAttribute("data-choice-key");
        const chosen = stage.choices.find((c) => c.key === key);
        if (!chosen) return;

        stage.segments.forEach((s) => {
          if (s.type === "clue" && !stageFlagged.has(s.id)) {
            stageFlagged.add(s.id);
          }
        });

        if (chosen.correct) {
          correctDecisions += 1;
        } else {
          auditScore = Math.max(0, auditScore - 25);
        }

        stageAnswered = {
          choiceKey: chosen.key,
          isCorrect: chosen.correct,
          feedback: chosen.feedback
        };

        historyLog.push({
          id: stage.id,
          title: stage.title,
          tag: stage.tag,
          correct: chosen.correct,
          ruleSummary: stage.ruleSummary
        });

        render();
      });
    });

    const nextBtn = document.getElementById("next-stage-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentStageIdx += 1;
        stageFlagged = new Set();
        stageOpenedTools = new Set();
        stageAnswered = null;
        render();
        mount.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function renderDebrief() {
    const rank =
      correctDecisions === STAGES.length
        ? "Chief Document & Domain Inspector"
        : correctDecisions >= 3
        ? "Forensic Reviewer — Good Eye"
        : "Junior Auditor — Always Type URLs Directly";

    const logHtml = historyLog
      .map(
        (item) => `
        <li class="${item.correct ? "" : "is-missed"}">
          <p class="mono" style="font-size:0.75rem;color:var(--ink-muted);text-transform:uppercase;">
            Exhibit #${escapeHtml(item.id)} · ${escapeHtml(item.tag)} · ${
          item.correct ? "Forgery Caught" : "Missed"
        }
          </p>
          <p style="font-weight:600;margin-top:0.2rem;">${escapeHtml(
            item.title
          )}</p>
          <p style="margin-top:0.35rem;font-size:0.95rem;">${escapeHtml(
            item.ruleSummary
          )}</p>
        </li>`
      )
      .join("");

    mount.innerHTML = `
      <article class="debrief-card">
        <div class="debrief-top">
          <div>
            <p class="stage-kicker">Game 02 Complete · Paper Trail</p>
            <h2 style="margin-top:0.35rem;">Audit Report: ${escapeHtml(
              rank
            )}</h2>
          </div>
          <p class="case-stamp">Verified</p>
        </div>

        <dl class="debrief-score-grid">
          <div class="debrief-stat">
            <dt>Forgeries Caught</dt>
            <dd>${correctDecisions} / ${STAGES.length}</dd>
          </div>
          <div class="debrief-stat">
            <dt>Audit Shield Remaining</dt>
            <dd>${auditScore}%</dd>
          </div>
          <div class="debrief-stat">
            <dt>Clues Flagged</dt>
            <dd>${cluesFoundTotal}</dd>
          </div>
        </dl>

        <h3>Exhibit-by-Exhibit Review</h3>
        <ol class="debrief-list">
          ${logHtml}
        </ol>

        <div class="actions">
          <button type="button" class="btn" id="restart-game-btn">Play Game 02 Again</button>
          <a class="btn btn--solid" href="/game/impersonation">Play Game 01: Echo Chamber (Deepfakes &amp; Voice Clones) →</a>
        </div>
      </article>
    `;

    const restartBtn = document.getElementById("restart-game-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        currentStageIdx = 0;
        auditScore = 100;
        cluesFoundTotal = 0;
        correctDecisions = 0;
        stageFlagged = new Set();
        stageOpenedTools = new Set();
        stageAnswered = null;
        historyLog = [];
        render();
      });
    }
  }

  render();
})();
