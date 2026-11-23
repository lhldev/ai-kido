document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pathway-modal");
  const changeButton = document.getElementById("change-pathway");
  const studentButton = document.getElementById("student-pathway");
  const olderButton = document.getElementById("elderly-pathway");
  const skipButton = document.getElementById("skip-pathway");

  if (!modal || !studentButton || !olderButton || !skipButton) {
    return;
  }

  const storageKey = "aiKidoLearningPathway";

  // Update the pathway indicator in the top navigation.
  function updateNavPathway(pathway) {
    const label = document.getElementById("nav-pathway-label");
    const indicator = document.querySelector(".nav-pathway");

    const names = {
      student: "STUDENTS",
      older: "OLDER ADULTS",
      skipped: "GENERAL"
    };

    const displayName = names[pathway] || "GENERAL";

    if (label) {
      label.textContent = displayName;
    }

    if (indicator) {
      indicator.setAttribute(
        "aria-label",
        `Current learning pathway: ${displayName}`
      );
    }
  }



  // Personalized content for Lesson 1: Phishing
  const phishingContent = {
    student: {
      description:
        "A message promises a scholarship, gaming reward or school account update. It may look official, but scammers use convincing writing and fake login pages to steal passwords. Always check where a link really leads.",

      flags: [
        "An unexpected <mark>scholarship or gaming reward</mark> asks you to sign in.",
        "A message creates pressure with a <mark>short deadline</mark>.",
        "The link leads to an <mark>unverified login page</mark> instead of an official school or service website."
      ],

      specimen:
        "[Student scholarship email]\n" +
        "Subject: RM1,000 scholarship approved\n\n" +
        "Congratulations! You have been selected.\n" +
        "Claim your scholarship within 30 minutes.\n" +
        "Sign in through our verification portal.\n\n" +
        "This offer expires today.",

      caption: "Specimen 01 · fake scholarship email · invented", 

sender: "Student Scholarship Office",
address: "awards@student-grants.example",
subject: "RM1,000 Scholarship Approved",
message:
  "Congratulations! You have been selected for a RM1,000 student scholarship. Verify your student account within 30 minutes to claim your award.",
link: "student-grants.example/claim",
button: "Claim Scholarship"

      
    },

    older: {
      description:
        "Scammers may impersonate banks, delivery companies or government agencies. They use official-looking messages and urgent warnings to convince people to reveal passwords or financial information through fraudulent websites.",

      flags: [
        "A message claims your <mark>bank account is blocked</mark> or will be suspended.",
        "It demands immediate action within <mark>minutes</mark>.",
        "It asks you to enter personal or banking details through an <mark>unfamiliar link</mark>."
      ],

      specimen:
        "[Bank security notification]\n" +
        "Subject: Urgent account verification\n\n" +
        "Your account has been temporarily restricted.\n" +
        "Verify your identity within 30 minutes\n" +
        "to restore access.\n\n" +
        "Use the link provided in this message.",

      caption: "Specimen 01 · fake banking alert · invented",

sender: "Bank Maju Security",
address: "alert@bankmaju-secure.example",
subject: "Urgent Account Verification",
message:
  "Your bank account has been temporarily restricted. Verify your identity within 30 minutes to restore access.",
link: "bankmaju-secure.example/verify",
button: "Verify Account"

    }
  };


  // Update the phishing lesson based on the selected pathway

  // ==========================================
  // LESSON 2 — AI IMPERSONATION CONTENT
  // ==========================================

  const voiceContent = {
    student: {
      contact: "Unknown Number",
      number: "+60 1X-XXX XXXX",
      transcript:
        "Hey, it's your classmate. My phone broke, so I'm using a new number. I need the verification code that was just sent to you. Please send it now. Don't tell anyone yet."
    },

    older: {
      contact: "Unknown Number",
      number: "+60 1X-XXX XXXX",
      transcript:
        "Mum, I dropped my phone. This is my new number. Don't call the old one. I need RM1,500 today. Please don't tell Dad yet."
    }
  };

  // Update Lesson 2 based on the selected pathway.


  // ==========================================
  // LESSON 3 — FAKE JOB OFFER CONTENT
  // ==========================================

  const jobContent = {
    student: {
      sender: "Campus Job Recruitment",
      handle: "@campus.work.example",
      message:
        "Hi! Looking for a part-time job? Earn RM250 daily by completing simple online tasks. No experience needed! Pay a RM40 registration fee to secure your position. Limited slots — apply today!",
      highlights: [
        "Earn RM250 daily",
        "Pay a RM40 registration fee",
        "Limited slots"
      ]
    },

    
older: {
  sender: "Investment Opportunity Centre",
  handle: "@investment.offer.example",
  message:
    "Good afternoon! You've been invited to join an exclusive investment programme. Earn guaranteed returns of 20% every month with zero risk. Start with just RM500 to activate your investment account. Limited places available — join today!",
  highlights: [
    "guaranteed returns of 20% every month",
    "Start with just RM500",
    "Limited places available"
  ]
}

  };


  // Update Lesson 3 based on the selected learning pathway.
  function updateJobLesson(pathway) {
    const content = jobContent[pathway];

    if (!content) return;

    // Personalize Lesson 04's explanation and warning signs.
    const lessonText = {
      student: {
        description:
          "Fake job offers often arrive through social media or messaging apps. Scammers promise easy work and high earnings, then request an upfront payment or access to your bank account.",
        flags: [
          ["Pay a registration fee", " before you can start working."],
          ["Unverified recruiters", " contact you through messaging apps without providing legitimate company details."],
          ["Urgent job offers", " pressure you to accept without checking the employer."]
        ]
      },

      older: {
        description:
          "Investment scams may promise unusually high profits with little or no risk. Scammers impersonate financial organizations and pressure people to transfer money before verifying whether the opportunity is genuine.",
        flags: [
          ["Guaranteed high returns", " with little or no investment risk."],
          ["Unverified investment companies", " provide no reliable evidence of their legitimacy."],
          ["Pressure to invest immediately", " before you can independently check the offer."]
        ]
      }
    };

    const selectedLesson = lessonText[pathway];
    const description = document.getElementById("job-description");
    const flags = document.querySelectorAll("#job-flags li");

    if (selectedLesson) {
      if (description) {
        description.textContent = selectedLesson.description;
      }

      flags.forEach((flag, index) => {
        const parts = selectedLesson.flags[index];
        if (!parts) return;

        const mark = document.createElement("mark");
        mark.textContent = parts[0];

        flag.replaceChildren(
          mark,
          document.createTextNode(parts[1])
        );
      });

    // Update Lesson 04's safety advice and analysis.
    const safetyContent = {
      student: {
        check:
          "Never pay to start a job. Verify the employer and never lend your bank account to someone else.",
        explanations: [
          "Unusually high earnings for simple tasks should be verified independently.",
          "Legitimate employers should not require an upfront payment to secure a job.",
          "Pressure to apply immediately can stop you from checking whether the employer is genuine."
        ]
      },

      older: {
        check:
          "Never invest based on guaranteed-return claims. Verify the company independently before transferring money.",
        explanations: [
          "Promises of guaranteed high returns with zero risk are a major investment scam warning sign.",
          "Requests to transfer an initial deposit to an unverified organization can put your savings at risk.",
          "Limited-time investment offers pressure you to send money before checking the facts."
        ]
      }
    };

    const safety = safetyContent[pathway];

    if (safety) {
      const takeaway = document.querySelector(
        "#lesson-job .takeaway"
      );

      if (takeaway) {
        const label = takeaway.querySelector(".takeaway-label");
        takeaway.replaceChildren();

        if (label) {
          takeaway.appendChild(label);
        }

        takeaway.appendChild(
          document.createTextNode(" " + safety.check)
        );
      }

      const analysisItems = document.querySelectorAll(
        ".job-analysis-list li"
      );

      analysisItems.forEach((item, index) => {
        const explanation = item.querySelector("p");

        if (explanation && safety.explanations[index]) {
          explanation.textContent = safety.explanations[index];
        }
      });
    }

    }


    const sender = document.getElementById("job-sender");
    const handle = document.getElementById("job-handle");
    const message = document.getElementById("job-message-text");

    if (sender) sender.textContent = content.sender;
    if (handle) handle.textContent = content.handle;

    if (!message) return;

    // Start with the complete message as plain text.
    let nodes = [document.createTextNode(content.message)];

    // Highlight the suspicious phrases.
    content.highlights.forEach((phrase) => {
      const updatedNodes = [];

      nodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) {
          updatedNodes.push(node);
          return;
        }

        const text = node.textContent;
        const index = text.toLowerCase().indexOf(
          phrase.toLowerCase()
        );

        if (index === -1) {
          updatedNodes.push(node);
          return;
        }

        const before = text.slice(0, index);
        const match = text.slice(index, index + phrase.length);
        const after = text.slice(index + phrase.length);

        if (before) {
          updatedNodes.push(document.createTextNode(before));
        }

        const mark = document.createElement("mark");
        mark.textContent = match;
        updatedNodes.push(mark);

        if (after) {
          updatedNodes.push(document.createTextNode(after));
        }
      });

      nodes = updatedNodes;
    });

    message.replaceChildren(...nodes);

    // Match each analysis point to highlighted evidence.

    // Match analysis headings to the selected pathway.
    const analysisTitles = {
      student: [
        "Unverified earnings",
        "Upfront payment",
        "Artificial urgency"
      ],
      older: [
        "Unrealistic returns",
        "Suspicious investment deposit",
        "Pressure to invest"
      ]
    };

    const analysisHeadings = document.querySelectorAll(
      ".job-analysis-list li strong"
    );

    const highlightedPhrases = Array.from(
      message.querySelectorAll("mark")
    ).map((mark) => mark.textContent.trim());

    analysisHeadings.forEach((heading, index) => {
      // Remove the previous quote when switching pathways.
      heading.querySelector(".analysis-evidence")?.remove();
      heading.textContent = analysisTitles[pathway][index];

      const phrase = highlightedPhrases[index];
      if (!phrase) return;

      const quote = document.createElement("span");
      quote.className = "analysis-evidence";
      quote.textContent = `“${phrase}”`;

      heading.appendChild(quote);
    });

  }

function updateAiScamLesson(pathway) {
  const steps = document.querySelectorAll(
    "#lesson-ai-scam .ai-scam-step p"
  );

  const examples = {
    student: [
      "A fake account pretends to be a classmate or influencer.",
      "A limited-time giveaway creates pressure to act quickly.",
      "The scammer asks for your password, OTP, or money."
    ],

    older: [
      "A message or voice pretends to be a family member or bank.",
      "A fake emergency or account warning creates urgency.",
      "The scammer asks for banking details, security codes, or money."
    ]
  };

  if (!examples[pathway] || steps.length !== 3) {
    return;
  }

  steps.forEach((step, index) => {
    step.textContent = examples[pathway][index];
  });
}

function updateDeepfakeLesson(pathway) {
  const content = {
    student: {
      description:
        "Deepfake videos use AI to make creators appear to say things they never said. Scammers may use fake influencer giveaways to steal your login details.",
      account: "Gaming Creator Giveaway",
      type: "Influencer giveaway",
      quote:
        "I'm giving away 500 limited-edition skins! Tap the link in my bio and log in to claim!",
      caption:
        "An unverified giveaway asks viewers to visit a link and enter their account details."
    },

    older: {
      description:
        "Deepfake videos can make trusted experts or public figures appear to endorse investments they never supported. Scammers use these clips to encourage risky financial decisions.",
      account: "Investment News Update",
      type: "Investment endorsement",
      quote:
        "This government-backed investment guarantees high returns with zero risk. Join now!",
      caption:
        "An unverified investment video promises guaranteed returns and pressures viewers to act."
    }
  };

  const selected = content[pathway];

  if (!selected) return;

  document.getElementById("deepfake-description").textContent =
    selected.description;

  document.getElementById("deepfake-account").textContent =
    selected.account;

  document.getElementById("deepfake-type").textContent =
    selected.type;

  
const quoteElement = document.getElementById("deepfake-quote");

const highlightPhrases = {
  student: [
    "500 limited-edition skins",
    "log in to claim"
  ],
  older: [
    "guarantees high returns with zero risk",
    "Join now"
  ]
};

const phrases = highlightPhrases[pathway] || [];
const text = selected.quote;
const parts = [];
let position = 0;

while (position < text.length) {
  const matches = phrases
    .map((phrase) => ({
      phrase,
      index: text.indexOf(phrase, position)
    }))
    .filter((match) => match.index !== -1)
    .sort((a, b) => a.index - b.index);

  if (matches.length === 0) {
    parts.push(document.createTextNode(text.slice(position)));
    break;
  }

  const match = matches[0];

  parts.push(
    document.createTextNode(text.slice(position, match.index))
  );

  const mark = document.createElement("mark");
  mark.textContent = match.phrase;
  parts.push(mark);

  position = match.index + match.phrase.length;
}

quoteElement.replaceChildren(...parts);


  document.getElementById("deepfake-caption").textContent =
    selected.caption;

  // Evidence quotes matching the selected pathway.
  const evidence = {
    student: [
      "500 limited-edition skins",
      "Check the lip-sync and lighting",
      "log in to claim"
    ],
    older: [
      "guarantees high returns with zero risk",
      "Check the face, voice and lighting",
      "Join now"
    ]
  };

  const analysisHeadings = document.querySelectorAll(
    ".deepfake-analysis-list li strong"
  );

  analysisHeadings.forEach((heading, index) => {
    // Remove the previous pathway's quote.
    heading.querySelector(".analysis-evidence")?.remove();

    const quote = document.createElement("span");
    quote.className = "analysis-evidence";
    quote.textContent = `“${evidence[pathway][index]}”`;

    heading.appendChild(quote);
  });
}
function updateProtectionLesson(pathway) {
  const content = {
    student: {
      description:
        "Protecting yourself online means building simple habits that keep your accounts, money, and identity safe.",
      flags: [
        "Unexpected login alerts may mean someone is trying to access your account.",
        "Never share passwords, one-time codes, or school login details.",
        "Be cautious of suspicious links and messages that pressure you to act immediately."
      ],
      check:
        "Use unique passwords, turn on 2FA, and verify links before clicking.",
      guideTitle: "Small habits. Stronger protection.",
      riskyTitle: "✕ Risky habits",
      safeTitle: "✓ Safer habits",
      risky: [
        "Reusing the same password everywhere",
        "Sharing verification codes",
        "Clicking unfamiliar links from messages"
      ],
      safe: [
        "Using unique passwords and enabling 2FA",
        "Keeping verification codes private",
        "Opening official websites independently"
      ]
    },

    older: {
      description:
        "You don't need to be a technology expert to stay safe online. Simple habits can help protect your money, accounts, and personal information.",
      flags: [
        "Be cautious when someone pressures you to act immediately or keep a secret.",
        "Never share banking PINs, verification codes, or allow unexpected remote access.",
        "Verify unexpected calls or messages asking for money, even if the person sounds familiar."
      ],
      check:
        "Pause, contact a trusted person or organization using a number you find yourself, and keep security details private.",
      guideTitle: "Pause. Verify. Protect.",
      riskyTitle: "✕ What to avoid",
      safeTitle: "✓ What to do",
      risky: [
        "Responding immediately to urgent messages",
        "Calling the number provided in a suspicious message",
        "Sharing passwords, security codes, or banking details"
      ],
      safe: [
        "Pause before responding to pressure",
        "Verify using an independently found official number",
        "Protect your security codes and financial information"
      ]
    }
  };

  const selected = content[pathway];
  if (!selected) return;

  document.getElementById("protection-description").textContent =
    selected.description;

  const flags = document.querySelectorAll("#protection-flags li");

  
const protectionHighlights = {
  student: [
    "Unexpected login alerts",
    "Never share passwords",
    "suspicious links"
  ],
  older: [
    "act immediately",
    "banking PINs",
    "asking for money"
  ]
};

flags.forEach((flag, index) => {
  const text = selected.flags[index];
  const phrase = protectionHighlights[pathway][index];
  const start = text.toLowerCase().indexOf(
    phrase.toLowerCase()
  );

  if (start === -1) {
    flag.textContent = text;
    return;
  }

  const mark = document.createElement("mark");
  mark.textContent = text.slice(start, start + phrase.length);

  flag.replaceChildren(
    document.createTextNode(text.slice(0, start)),
    mark,
    document.createTextNode(text.slice(start + phrase.length))
  );
});


  const takeaway = document.getElementById("protection-takeaway");

  takeaway.replaceChildren();

  const label = document.createElement("span");
  label.className = "takeaway-label";
  label.textContent = "The check";

  takeaway.append(label, document.createTextNode(" " + selected.check));

  document.getElementById("protection-guide-title").textContent =
    selected.guideTitle;

  document.getElementById("protection-risky-title").textContent =
    selected.riskyTitle;

  document.getElementById("protection-safe-title").textContent =
    selected.safeTitle;

  const riskyItems = document.querySelectorAll(
    "#protection-risky-list li"
  );

  const safeItems = document.querySelectorAll(
    "#protection-safe-list li"
  );

  riskyItems.forEach((item, index) => {
    item.textContent = selected.risky[index];
  });

  safeItems.forEach((item, index) => {
    item.textContent = selected.safe[index];
  });
}





  function updateVoiceLesson(pathway) {
    const content = voiceContent[pathway];

    if (!content) return;

    const contact = document.getElementById("voice-contact");
    const number = document.getElementById("voice-number");
    const transcript = document.getElementById("voice-transcript");

    if (contact) contact.textContent = content.contact;
    if (number) number.textContent = content.number;

    if (transcript) {
      transcript.textContent = content.transcript;

      // Highlight warning signs in the fictional message.
      const phrases = pathway === "student"
        ? ["new number", "verification code", "Don't tell anyone yet"]
        : ["new number", "RM1,500 today", "don't call the old one"];

      let nodes = [document.createTextNode(content.transcript)];

      phrases.forEach((phrase) => {
        const updatedNodes = [];

        nodes.forEach((node) => {
          if (node.nodeType !== Node.TEXT_NODE) {
            updatedNodes.push(node);
            return;
          }

          const text = node.textContent;
          const index = text.toLowerCase().indexOf(phrase.toLowerCase());

          if (index === -1) {
            updatedNodes.push(node);
            return;
          }

          const before = text.slice(0, index);
          const match = text.slice(index, index + phrase.length);
          const after = text.slice(index + phrase.length);

          if (before) updatedNodes.push(document.createTextNode(before));

          const mark = document.createElement("mark");
          mark.textContent = match;
          updatedNodes.push(mark);

          if (after) updatedNodes.push(document.createTextNode(after));
        });

        nodes = updatedNodes;
      });

      transcript.replaceChildren(...nodes);


      // Show matching evidence in the Lesson 2 analysis.
      const analysisHeadings = document.querySelectorAll(
        ".voice-analysis-list li strong"
      );

      const highlightedPhrases = Array.from(
        transcript.querySelectorAll("mark")
      ).map((mark) => mark.textContent.trim());

      analysisHeadings.forEach((heading, index) => {
        // Remove previous evidence when switching pathways.
        heading.querySelector(".analysis-evidence")?.remove();

        const phrase = highlightedPhrases[index];
        if (!phrase) return;

        const quote = document.createElement("span");
        quote.className = "analysis-evidence";
        quote.textContent = `“${phrase}”`;

        heading.appendChild(quote);
      });

    }
  }


  function updatePhishingLesson(pathway) {
    const description = document.getElementById("phishing-description");
    const flags = document.getElementById("phishing-flags");
    const specimen = document.getElementById("phishing-specimen");

    if (!description || !flags || !specimen) {
      console.warn("Phishing lesson elements not found.");
      return;
    }

    // Keep the original lesson for visitors who skip.
    if (pathway !== "student" && pathway !== "older") {
      return;
    }

    const content = phishingContent[pathway];

    // Change the explanation.
    description.textContent = content.description;

    // Change the three warning signs.
    flags.replaceChildren();

    content.flags.forEach((flag) => {
      const item = document.createElement("li");
      item.innerHTML = flag;
      flags.appendChild(item);
    });

    // Change the fictional scam message.
    
    // Update the realistic email specimen.
    const sender = document.getElementById("phishing-sender");
    const address = document.getElementById("phishing-address");
    const subject = document.getElementById("phishing-subject");
    const message = document.getElementById("phishing-message");
    const link = document.getElementById("phishing-link");
    const button = specimen.querySelector(".email-fake-button");
    const caption = specimen.querySelector("figcaption");

    if (sender) sender.textContent = content.sender;
    if (address) address.textContent = content.address;
    if (subject) subject.textContent = content.subject;
    if (message) message.textContent = content.message;
    if (link) link.textContent = content.link;

// Highlight suspicious details in the simulated email.
function highlightText(element, phrase) {
  if (!element) return;

  const fullText = element.textContent;
  const start = fullText.toLowerCase().indexOf(phrase.toLowerCase());

  if (start === -1) return;

  const before = fullText.slice(0, start);
  const highlighted = fullText.slice(start, start + phrase.length);
  const after = fullText.slice(start + phrase.length);

  const mark = document.createElement("mark");
  mark.textContent = highlighted;

  element.replaceChildren(
    document.createTextNode(before),
    mark,
    document.createTextNode(after)
  );
}

highlightText(sender, content.sender);
highlightText(message, "within 30 minutes");
highlightText(link, content.link);

    // Show the exact highlighted evidence in the analysis.
    const analysisHeadings = document.querySelectorAll(
      ".specimen-analysis-list li strong"
    );

    const evidence = [
      sender?.textContent.trim() || "",
      message?.querySelector("mark")?.textContent.trim() || "",
      link?.textContent.trim() || ""
    ];

    analysisHeadings.forEach((heading, index) => {
      // Remove old evidence before changing pathways.
      heading.querySelector(".analysis-evidence")?.remove();

      if (!evidence[index]) return;

      const quote = document.createElement("span");
      quote.className = "analysis-evidence";
      quote.textContent = ` — "${evidence[index]}"`;

      heading.appendChild(quote);
    });


    if (button) button.textContent = content.button;
    if (caption) caption.textContent = content.caption;

  }



  // Check whether this visitor previously selected a pathway.
  let savedPathway = null;

  try {
    savedPathway = localStorage.getItem(storageKey);
  } catch (error) {
    console.warn("Browser storage unavailable:", error);
  }

  // Only show the pop-up if no pathway has been selected.
  if (!["student", "older", "skipped"].includes(savedPathway)) {
    modal.showModal();
  }


  // Restore the saved learning pathway after refreshing.
  if (savedPathway === "student" || savedPathway === "older") {
    updatePhishingLesson(savedPathway);
    updateVoiceLesson(savedPathway);
    updateJobLesson(savedPathway);
    updateAiScamLesson(savedPathway);
    updateDeepfakeLesson(savedPathway);
    updateProtectionLesson(savedPathway);
  }
  updateNavPathway(localStorage.getItem(storageKey));


  
  function savePathway(pathway) {
    try {
      localStorage.setItem(storageKey, pathway);

if (pathway === "skipped") {
  sessionStorage.setItem("aiKidoScrollToTop", "true");
  window.location.reload();
  return;
}

    } catch (error) {
      console.warn("Could not save learning pathway:", error);
    }

    // Update Lesson 1 immediately.
    updatePhishingLesson(pathway);
    updateVoiceLesson(pathway);
    updateJobLesson(pathway);
    updateAiScamLesson(pathway);
    updateDeepfakeLesson(pathway);
    updateProtectionLesson(pathway);
    updateNavPathway(pathway);

    // Return to the top after changing learning pathways.
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    modal.close();
    console.log("Selected learning pathway:", pathway);
  }


  studentButton.addEventListener("click", () => {
    savePathway("student");
  });

  olderButton.addEventListener("click", () => {
    savePathway("older");
  });

  skipButton.addEventListener("click", () => {
    savePathway("skipped");
  });


  // Let visitors change their learning pathway.
  if (changeButton) {
    changeButton.addEventListener("click", () => {
      modal.showModal();
    });
  }

});



/* ==========================================
   AI-KIDO — REPLAYABLE SCROLL ANIMATIONS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  // Animate elements individually, not entire lessons.
  const selector = [
    ".reading-guide",
    ".modules > .module h2",
    ".modules > .module h3",
    ".modules > .module .module-main > p",
    ".modules > .module .flags li",
    ".modules > .module .specimen",
    ".modules > .module .takeaway",
    ".modules > .module .specimen-analysis li",
    ".modules > .module .voice-analysis-list li",
    ".modules > .module .job-analysis-list li"
  ].join(", ");

  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-visible");
      } else {
        entry.target.classList.remove("scroll-visible");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach((element) => observer.observe(element));

  // Keep the lesson-level class for existing highlight pulses.
  const lessonObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const lesson = entry.target;

      if (entry.isIntersecting) {
        lesson.classList.add("is-revealed");

        lesson.querySelectorAll("mark").forEach((mark) => {
          mark.classList.remove("highlight-active");
          void mark.offsetWidth;
          mark.classList.add("highlight-active");
        });
      } else {
        lesson.classList.remove("is-revealed");

        lesson.querySelectorAll("mark").forEach((mark) => {
          mark.classList.remove("highlight-active");
        });
      }
    });
  }, {
    threshold: 0.08
  });

  document.querySelectorAll(".modules > .module").forEach(
    (lesson) => lessonObserver.observe(lesson)
  );
});

window.addEventListener("load", () => {
  if (sessionStorage.getItem("aiKidoScrollToTop") === "true") {
    sessionStorage.removeItem("aiKidoScrollToTop");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }
});

/* Prevent the browser from restoring the old
   scroll position when changing learning modes. */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
