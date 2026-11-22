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
      sender: "Home Career Recruitment",
      handle: "@home.career.example",
      message:
        "Hello! We are offering flexible work-from-home opportunities. Earn RM3,000 monthly for simple online tasks. To activate your position, pay a RM60 processing fee first. Offer closes today!",
      highlights: [
        "Earn RM3,000 monthly",
        "pay a RM60 processing fee",
        "Offer closes today"
      ]
    }
  };


  // Update Lesson 3 based on the selected learning pathway.
  function updateJobLesson(pathway) {
    const content = jobContent[pathway];

    if (!content) return;

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
    const analysisHeadings = document.querySelectorAll(
      ".job-analysis-list li strong"
    );

    const highlightedPhrases = Array.from(
      message.querySelectorAll("mark")
    ).map((mark) => mark.textContent.trim());

    analysisHeadings.forEach((heading, index) => {
      // Remove the previous quote when switching pathways.
      heading.querySelector(".analysis-evidence")?.remove();

      const phrase = highlightedPhrases[index];
      if (!phrase) return;

      const quote = document.createElement("span");
      quote.className = "analysis-evidence";
      quote.textContent = `“${phrase}”`;

      heading.appendChild(quote);
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
