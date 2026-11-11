// Game 01: Echo Chamber (Deepfakes, Voice Cloning & Personalised Messaging at Scale)
// Loaded exclusively by /game/impersonation (game/impersonation.html)
(() => {
  const mount = document.getElementById("impersonation-app");
  if (!mount) return;

  const STAGES = [
    {
      id: "01",
      tag: "Voice Cloning",
      title: "The 3-Second Emergency Call",
      context:
        "It is 10:42 PM. You receive a WhatsApp voice note from an unsaved mobile number claiming to be your older sister, Aina. Scammers only need a few seconds of a voice recording from social media to create an AI voice clone.",
      artifactType: "VOICENOTE · WHATSAPP",
      artifactMeta: "22:42 · Unsaved Number",
      hasAudio: true,
      audioSrc: "/assets/audio/clone-sister.mp3",
      audioLabel: "clone-sister.mp3",
      audioFreqs: [260, 295, 240, 310, 225, 280, 190],
      sender: "+60 11-3902 8841 (New number — not in contacts)",
      recipient: "You",
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "“[Voice sounds exactly like Aina, breathing fast] Hey, I dropped my phone in a taxi and I'm borrowing a stranger's number.”",
          note: "New number claiming to be family in distress — classic setup to stop you calling their real phone."
        },
        {
          type: "text",
          text: " “I'm at the clinic counter right now and my card is blocked.” "
        },
        {
          type: "clue",
          id: "c2",
          text: "“Please DuitNow RM850 to this driver's account immediately so they let me leave. Don't call my old number or tell Mum yet!”",
          note: "Urgent appeal for money to a third-party account + secrecy demand ('don't call my old number')."
        }
      ],
      tools: [
        {
          label: "Check Contacts Book",
          result:
            "Saved contact 'Kak Aina' is +60 12-441 9082. The message came from +60 11-3902 8841 (never seen before)."
        },
        {
          label: "Inspect Public Social Media",
          result:
            "Aina posted a 12-second public Instagram story yesterday speaking clearly at a café — more than enough audio for an AI voice clone."
        },
        {
          label: "Call Aina's Real Saved Number (+60 12-441 9082)",
          result:
            "RINGING... Aina answers on her real phone! She is at home studying, her phone is fine, and she never sent a voice note."
        }
      ],
      prompt: "What is the safest immediate action when a voice note from a new number claims to be family in trouble?",
      choices: [
        {
          key: "A",
          text: "Reply to the new number asking her to send another voice note saying your childhood nickname.",
          correct: false,
          feedback:
            "Don't reply to a message from a new number claiming it's your friend or family member. Engaging gives scammers more data and keeps you in their script."
        },
        {
          key: "B",
          text: "Do not reply to the new number. Call Aina back directly on her real number already saved in your phone.",
          correct: true,
          feedback:
            "Spot on. Always take the time to call your friend or family member back on their real number to check. A few seconds of online audio is enough for AI to clone a voice."
        },
        {
          key: "C",
          text: "Send half the money (RM400) first since the voice sounds 100% identical to hers.",
          correct: false,
          feedback:
            "AI voice clones sound remarkably real. Relying on how familiar the voice sounds will cost you RM400."
        }
      ],
      ruleSummary:
        "Scammers can use a few seconds of a voice recording to create AI clones and fake emergency scenarios. Always call your family member back on their real number."
    },
    {
      id: "02",
      tag: "Personalised Messaging at Scale",
      title: "The 'Someone From Your School' Text",
      context:
        "AI helps scammers create thousands of personalised emails, texts, and social media messages using basic personal information found online. A message arrives referencing your exact school, hobby, and weekend tournament.",
      artifactType: "SMS · DIRECT MESSAGE",
      artifactMeta: "14:15 · +60 17-882 1094",
      hasAudio: false,
      sender: "+60 17-882 1094 (Unknown caller ID)",
      recipient: "You",
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "Hey! Congrats on making the Petaling Jaya District Badminton quarter-finals with SMK Damansara Jaya last Saturday!",
          note: "Personalised hook scraped by AI from public school sports posts and social media."
        },
        {
          type: "text",
          text: " I'm Daniel from the youth sports committee — my phone died so I'm texting from a backup SIM. "
        },
        {
          type: "clue",
          id: "c2",
          text: "We're reimbursing RM300 equipment allowances today, but I need you to transfer a RM45 processing deposit to confirm your player slot right now.",
          note: "Uses scraped familiarity to push an upfront payment from an unverified number."
        }
      ],
      tools: [
        {
          label: "Search Your Public Profile Footprint",
          result:
            "Your school's public Facebook page posted the badminton bracket, your name, school, and district 3 days ago. Anyone (or any AI scraper) can read it."
        },
        {
          label: "Call Your Real Coach / Daniel's Saved Number",
          result:
            "Your school coach confirms there is no RM45 deposit and Daniel's real number hasn't changed."
        }
      ],
      prompt: "This text knows your school, your sport, and last Saturday's tournament. Does that prove it is legitimate?",
      choices: [
        {
          key: "A",
          text: "No — scammers find basic information about you online and use AI to generate thousands of personalised messages. Verify on a real number instead.",
          correct: true,
          feedback:
            "Correct! A personalised message doesn't make it legitimate. AI can scrape public posts and tailor thousands of messages referencing your location and interests."
        },
        {
          key: "B",
          text: "Yes — a scammer wouldn't know you played in the Petaling Jaya quarter-finals last weekend.",
          correct: false,
          feedback:
            "Scammers can easily find basic information about you online (school pages, tags, bios) and feed it into AI to write hyper-specific texts at scale."
        },
        {
          key: "C",
          text: "Reply to the text and ask which court number you played on before paying the RM45.",
          correct: false,
          feedback:
            "Don't reply to a new number claiming to be someone you know, and never pay a fee to receive an allowance."
        }
      ],
      ruleSummary:
        "A personalised message doesn't make it legitimate. Scammers find basic information about you online and use AI to personalise thousands of messages at scale."
    },
    {
      id: "03",
      tag: "Deepfake Technology",
      title: "The Celebrity Investment Clip",
      context:
        "While scrolling social media, you see a video clip that looks and sounds exactly like a famous Malaysian badminton legend and a prominent news anchor endorsing an 'AI Youth Wealth Fund'.",
      artifactType: "VIDEO TRANSCRIPT · SOCIAL FEED",
      artifactMeta: "Sponsored Clip · 0:28",
      hasAudio: true,
      audioSrc: "/assets/audio/clone-endorsement.mp3",
      audioLabel: "clone-endorsement.mp3",
      audioFreqs: [210, 215, 208, 212, 210, 214, 209],
      sender: "@MY_Wealth_Official_AI (Promoted Account)",
      recipient: "Public Feed (Targeted: Ages 15–22, Malaysia)",
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "[Video: Famous athlete's face & voice] “Every Malaysian student can now turn RM100 into RM1,500 weekly using this government-backed AI platform.”",
          note: "Deepfake celebrity endorsement promising guaranteed, unrealistic investment returns."
        },
        {
          type: "text",
          text: " [Lower-third banner: 'LIVE NATIONAL BROADCAST — LIMITED TO 200 STUDENTS TODAY'] "
        },
        {
          type: "clue",
          id: "c2",
          text: "[Audio cadence is flat; lip edges blur slightly when the head turns. Caption says: 'Message our Telegram manager to deposit now.']",
          note: "AI video/audio synthesis artifacts + steering victims off-platform to pay."
        }
      ],
      tools: [
        {
          label: "Run Deepfake Frame & Audio Analyzer",
          result:
            "ALERT: Lip-sync landmarks show AI frame interpolation around the jaw, and the voice pitch has zero natural breath variation — cloned from a 2024 interview."
        },
        {
          label: "Check Athlete's Verified Official Page",
          result:
            "The athlete's real page has a pinned warning: 'I do NOT endorse any investment or crypto schemes. Videos claiming I do are AI deepfakes.'"
        }
      ],
      prompt: "How do scammers use deepfake technology in clips like this?",
      choices: [
        {
          key: "A",
          text: "They use AI to create fake videos and audio that look and sound like celebrities, politicians, or family endorsing investments or asking for money.",
          correct: true,
          feedback:
            "Exactly right. Deepfake videos and audio recordings look and sound convincing, making it appear as if trusted figures are endorsing products or investments."
        },
        {
          key: "B",
          text: "If both the face and the voice match the celebrity on video, the clip must have been filmed by them.",
          correct: false,
          feedback:
            "Deepfake technology combines AI-generated video and cloned audio so both the face and voice appear real even though the person never said a word of it."
        },
        {
          key: "C",
          text: "Deposit RM100 first to test if the payout works before telling friends.",
          correct: false,
          feedback:
            "Never test a suspected scam with real money. Scammers use deepfakes specifically to steal that initial deposit."
        }
      ],
      ruleSummary:
        "Scammers use AI deepfake technology to create fake videos and audio recordings that make celebrities, politicians, or family members appear to endorse investments."
    },
    {
      id: "04",
      tag: "Deepfake Video + Voice Clone",
      title: "The 8-Second Video Call From 'Cousin Amir'",
      context:
        "You get an unexpected video call from a new account using your cousin Amir's profile photo. When you answer, you see Amir's face on screen for 8 seconds before the call 'freezes' and drops.",
      artifactType: "VIDEO CALL LOG & FOLLOW-UP TEXT",
      artifactMeta: "19:05 · Video Call (0:08)",
      hasAudio: true,
      audioSrc: "/assets/audio/clone-amir.mp3",
      audioLabel: "clone-amir.mp3",
      audioFreqs: [240, 260, 180, 300, 175, 255, 200],
      sender: "amir_kl_temp99 (New account — not in your contacts)",
      recipient: "You",
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "[0:08 Video Call]: Amir's face appears in dim lighting: “Bro, my wallet and phone were stolen at KL Sentral—” [Video glitches and disconnects]",
          note: "Short, low-light deepfake video loop that disconnects before you can ask an unscripted question."
        },
        {
          type: "text",
          text: " [Immediate text message after call drops]: “Line is terrible here. You saw it's really me on video right?” "
        },
        {
          type: "clue",
          id: "c2",
          text: "“Don't call my normal number, the thief has it! Just transfer RM600 to this QR account so I can get home.”",
          note: "Uses the brief deepfake video as 'proof' and warns you not to call his real number."
        }
      ],
      tools: [
        {
          label: "Call Amir's Real Saved Phone Number",
          result:
            "Amir picks up immediately on his real number! He is in Penang with his family, still has his wallet and phone, and never video-called you."
        },
        {
          label: "Inspect Video Call Stream Metadata",
          result:
            "Camera feed came from a virtual webcam playing a pre-rendered AI deepfake loop generated from Amir's TikTok videos."
        }
      ],
      prompt: "You saw Amir's face and heard his voice for 8 seconds on a video call from a new account. What should you do?",
      choices: [
        {
          key: "A",
          text: "Trust the video call because AI can only fake text, not video and audio together.",
          correct: false,
          feedback:
            "Scammers use deepfake technology to fake both video and audio recordings that look and sound like family members asking for money."
        },
        {
          key: "B",
          text: "Stop replying to the new account and call Amir directly on his real phone number to check.",
          correct: true,
          feedback:
            "Right call! Even when a video or voice clip looks and sounds like family in distress, always verify by calling them back on their real number."
        },
        {
          key: "C",
          text: "Reply to the text message asking him what colour shirt he is wearing.",
          correct: false,
          feedback:
            "Never rely on texting a new number to verify identity. Call your relative on the real number you already have."
        }
      ],
      ruleSummary:
        "Deepfake videos and voice clones can impersonate family members asking for money. Always pause and call your family member back on their real number."
    },
    {
      id: "05",
      tag: "Personalised Scale + Voice Note",
      title: "The Targeted Coding Competition DM",
      context:
        "Your group just posted online about joining a national coding competition in Kuala Lumpur. Within an hour, every member of your team receives a personalised email and voice clip tailored to their exact project role.",
      artifactType: "EMAIL + VOICE ATTACHMENT",
      artifactMeta: "16:50 · Batch AI Spear-Phishing",
      hasAudio: false,
      sender: "committee-update@my-youth-hackathon-portal.net",
      recipient: "You (and 1,400 other student participants)",
      segments: [
        {
          type: "clue",
          id: "c1",
          text: "Hi! We loved your team's 'Smart Canteen Queue' submission from Selangor and your role as UI lead.",
          note: "AI merged public participant lists and project titles to send thousands of personalised messages at once."
        },
        {
          type: "text",
          text: " Attached is a voice note from your school mentor confirming your finals pass. "
        },
        {
          type: "clue",
          id: "c2",
          text: "Reply to this message with your IC copy and pay the RM80 finalist insurance fee within 20 minutes, or your team is disqualified.",
          note: "Urgency + personal data/money demand relying on scraped details and a cloned voice clip."
        }
      ],
      tools: [
        {
          label: "Compare With Teammates' Inboxes",
          result:
            "All 4 teammates got the exact same message template at 16:50, with only their name, role, and town swapped in automatically by AI."
        },
        {
          label: "Call Your School Mentor on Their Real Number",
          result:
            "Your mentor says: 'I never recorded that voice note! The organisers never charge an RM80 insurance fee or ask for IC copies by email.'"
        }
      ],
      prompt: "Why were the scammers able to include your exact project title, role, and state in thousands of messages at once?",
      choices: [
        {
          key: "A",
          text: "AI helps scammers create thousands of personalised emails, texts, and DMs using basic personal information found online.",
          correct: true,
          feedback:
            "Nailed it. AI automates personalised messaging at scale using public details (location, interests, school projects). Personalisation is not proof of legitimacy."
        },
        {
          key: "B",
          text: "Because the message must have been written by someone inside your school.",
          correct: false,
          feedback:
            "No insider needed — scammers scrape public posts and participant lists, then use AI to personalise thousands of messages in seconds."
        },
        {
          key: "C",
          text: "Reply to the email with your IC first so your team doesn't miss the 20-minute deadline.",
          correct: false,
          feedback:
            "Never let a countdown force you into sending personal documents or money. Call your mentor or organiser on their real number first."
        }
      ],
      ruleSummary:
        "AI enables personalised messaging at scale using your location, interests, and online footprint. Verify independently on a real phone number before acting."
    }
  ];

  let currentStageIdx = 0;
  let trustScore = 100;
  let cluesFoundTotal = 0;
  let correctDecisions = 0;
  let stageFlagged = new Set();
  let stageOpenedTools = new Set();
  let stageAnswered = null;
  let historyLog = [];
  let isPlayingAudio = false;
  let activeAudioEl = null;
  let audioTimer = null;

  function stopActiveAudio() {
    clearTimeout(audioTimer);
    if (activeAudioEl) {
      try {
        activeAudioEl.pause();
        activeAudioEl.currentTime = 0;
      } catch {
        // ignore
      }
      activeAudioEl = null;
    }
    isPlayingAudio = false;
  }

  function playFallbackSynthesizedVoiceClone(freqs) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      isPlayingAudio = false;
      render();
      return;
    }

    try {
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const step = 0.22;

      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
        osc.frequency.setValueAtTime(f, now + idx * step);
        osc.frequency.exponentialRampToValueAtTime(
          f * 0.88,
          now + idx * step + step * 0.85
        );

        gain.gain.setValueAtTime(0.001, now + idx * step);
        gain.gain.linearRampToValueAtTime(0.06, now + idx * step + 0.03);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          now + idx * step + step * 0.9
        );

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * step);
        osc.stop(now + idx * step + step);
      });

      clearTimeout(audioTimer);
      audioTimer = setTimeout(() => {
        isPlayingAudio = false;
        ctx.close().catch(() => {});
        render();
      }, freqs.length * step * 1000 + 150);
    } catch {
      isPlayingAudio = false;
      render();
    }
  }

  function toggleStageAudio(stage) {
    if (isPlayingAudio) {
      stopActiveAudio();
      render();
      return;
    }

    isPlayingAudio = true;
    render();

    if (stage.audioSrc) {
      try {
        const audio = new Audio(stage.audioSrc);
        if (stage.audioPlaybackRate) {
          audio.playbackRate = stage.audioPlaybackRate;
        }
        activeAudioEl = audio;

        audio.addEventListener("ended", () => {
          activeAudioEl = null;
          isPlayingAudio = false;
          render();
        });

        audio.addEventListener("error", () => {
          activeAudioEl = null;
          playFallbackSynthesizedVoiceClone(stage.audioFreqs || [240, 280, 220]);
        });

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            activeAudioEl = null;
            playFallbackSynthesizedVoiceClone(
              stage.audioFreqs || [240, 280, 220]
            );
          });
        }
        return;
      } catch {
        activeAudioEl = null;
      }
    }

    playFallbackSynthesizedVoiceClone(stage.audioFreqs || [240, 280, 220]);
  }

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
        }" title="Tap to flag suspicious detail">
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
          `<div class="tool-result"><strong>Flagged clue:</strong> ${escapeHtml(
            s.note
          )}</div>`
      )
      .join("");

    const audioPlayerHtml = stage.hasAudio
      ? `<div class="voice-player ${isPlayingAudio ? "is-playing" : ""}">
          <button type="button" class="voice-btn" id="play-voice-btn">
            ${isPlayingAudio ? "■ Stop Audio" : "▶ Play Cloned Audio"}
          </button>
          <div class="voice-bars" aria-hidden="true">
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
            <span class="voice-bar"></span>
          </div>
          <span class="voice-status">${
            isPlayingAudio
              ? "Playing AI Clone..."
              : escapeHtml(stage.audioLabel || "Audio Evidence")
          }</span>
        </div>`
      : "";

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
                ? "Verified · Safe Call"
                : "Scam Triggered · Warning"
            }</span>
            <span class="mono">${
              stageAnswered.isCorrect ? "+200 pts" : "−25 Shield"
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
                  ? `Next Case (${currentStageIdx + 2} of ${STAGES.length}) →`
                  : "View Final Debrief Report →"
              }
            </button>
          </div>
        </div>`
      : "";

    mount.innerHTML = `
      <dl class="game-hud" aria-label="Game status">
        <div class="hud-item">
          <dt>Case File</dt>
          <dd>${stage.id} / 0${STAGES.length}</dd>
        </div>
        <div class="hud-item ${trustScore <= 50 ? "hud-item--danger" : ""}">
          <dt>Safety Shield</dt>
          <dd>${trustScore}%</dd>
        </div>
        <div class="hud-item">
          <dt>Red Flags Tagged</dt>
          <dd>${cluesFoundTotal}</dd>
        </div>
        <div class="hud-item">
          <dt>Scams Blocked</dt>
          <dd>${correctDecisions} / ${currentStageIdx + (stageAnswered ? 1 : 0)}</dd>
        </div>
        <div class="game-progress-bar" aria-hidden="true">
          <div class="game-progress-fill" style="width: ${progressPct}%"></div>
        </div>
      </dl>

      <article class="game-stage">
        <div class="stage-header">
          <span class="stage-kicker">Case #${stage.id} · ${escapeHtml(
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
                <span class="artifact-bar-title">Intercepted Exhibit</span>
                <span class="artifact-bar-meta">${escapeHtml(
                  stage.artifactMeta
                )}</span>
              </div>
              <div class="artifact-content">
                <dl class="msg-meta">
                  <div>
                    <dt>From</dt>
                    <dd>${escapeHtml(stage.sender)}</dd>
                  </div>
                  <div>
                    <dt>To</dt>
                    <dd>${escapeHtml(stage.recipient)}</dd>
                  </div>
                </dl>

                ${audioPlayerHtml}

                <div class="bubble">
                  ${segmentsHtml}
                </div>

                <p class="flagged-counter">
                  <span>Red flags spotted in exhibit: <strong>${
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
                <span>Verification Desk</span>
                <span>Run checks</span>
              </p>
              <p class="exhibit-foot" style="margin-top:0;margin-bottom:0.5rem;">
                Don't trust the message at face value. Use your phone book and verification tools before deciding:
              </p>
              ${toolsHtml}
            </div>
          </div>
        </div>

        <div class="decision-section">
          <h3 class="decision-prompt">${escapeHtml(stage.prompt)}</h3>
          <p class="decision-hint">Tip: Tag the red flags and run a verification check above, then lock in your response.</p>
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
    const playBtn = document.getElementById("play-voice-btn");
    if (playBtn && stage.hasAudio) {
      playBtn.addEventListener("click", () => {
        toggleStageAudio(stage);
      });
    }

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
          trustScore = Math.max(0, trustScore - 25);
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
        stopActiveAudio();
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
    stopActiveAudio();
    const rank =
      correctDecisions === STAGES.length
        ? "Senior Voice & Deepfake Verifier"
        : correctDecisions >= 3
        ? "Field Analyst — Solid Instincts"
        : "Trainee — Keep Your Callback Habit Sharp";

    const logHtml = historyLog
      .map(
        (item) => `
        <li class="${item.correct ? "" : "is-missed"}">
          <p class="mono" style="font-size:0.75rem;color:var(--ink-muted);text-transform:uppercase;">
            Case #${escapeHtml(item.id)} · ${escapeHtml(item.tag)} · ${
          item.correct ? "Blocked" : "Fell for lure"
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
            <p class="stage-kicker">Game 01 Complete · Echo Chamber</p>
            <h2 style="margin-top:0.35rem;">Debrief Report: ${escapeHtml(
              rank
            )}</h2>
          </div>
          <p class="case-stamp">Cleared</p>
        </div>

        <dl class="debrief-score-grid">
          <div class="debrief-stat">
            <dt>Scams Blocked</dt>
            <dd>${correctDecisions} / ${STAGES.length}</dd>
          </div>
          <div class="debrief-stat">
            <dt>Safety Shield Remaining</dt>
            <dd>${trustScore}%</dd>
          </div>
          <div class="debrief-stat">
            <dt>Red Flags Tagged</dt>
            <dd>${cluesFoundTotal}</dd>
          </div>
        </dl>

        <h3>Case-by-Case Review</h3>
        <ol class="debrief-list">
          ${logHtml}
        </ol>

        <div class="actions">
          <button type="button" class="btn" id="restart-game-btn">Play Game 01 Again</button>
          <a class="btn btn--solid" href="/game/forgeries">Continue to Game 02: Mirror Sites &amp; Fake Docs →</a>
        </div>
      </article>
    `;

    const restartBtn = document.getElementById("restart-game-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        stopActiveAudio();
        currentStageIdx = 0;
        trustScore = 100;
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
