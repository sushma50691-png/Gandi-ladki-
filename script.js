"use strict";

const $ = (selector) => document.querySelector(selector);

const chapters = [
  {
    title: "The Case Begins",
    world: "cosmic",
    emoji: "🔎",
    eyebrow: "CASE FILE 001 · CLASSIFIED",
    lead: "Dear Detective, we have a situation. A certain Gandi ladki has been accused of making one very soft-hearted person ridiculously fond of her.",
    caption: "The suspect looks suspiciously cute.",
    note: "Your mission: investigate the evidence. Your reward: absolutely no legal consequences for being adorable.",
    type: "start"
  },
  {
    title: "Love.exe Has Crashed",
    world: "retro",
    emoji: "💻",
    eyebrow: "SYSTEM ALERT · FILE 002",
    lead: "Our highly advanced love-detection computer has stopped working. It keeps displaying one error: SUSPECT TOO CUTE TO PROCESS.",
    caption: "Windows could not recover from feelings.exe.",
    note: "Please do not unplug the detective. He is emotionally connected to this computer.",
    type: "computer"
  },
  {
    title: "The Attention Museum",
    world: "scrapbook",
    emoji: "🖼️",
    eyebrow: "EXHIBITION A · FILE 003",
    lead: "Welcome to the museum of suspicious activities. Every exhibit documents something you allegedly did to steal someone's attention.",
    caption: "Admission is free. Emotional damage is not included.",
    note: "Museum rules: no touching the exhibits, except the detective's heart. Apparently that has already happened.",
    type: "museum"
  },
  {
    title: "Exhibit A: The Replies",
    world: "retro",
    emoji: "💬",
    eyebrow: "DIGITAL EVIDENCE · FILE 004",
    lead: "A mysterious message has arrived. The detective is now conducting a deeply scientific investigation into the art of replying.",
    caption: "Three dots. Infinite possibilities.",
    note: "This test measures absolutely nothing scientific. Please do not use it to judge a real relationship.",
    type: "replies"
  },
  {
    title: "The Missing Hug",
    world: "scrapbook",
    emoji: "🧸",
    eyebrow: "MISSING ITEM REPORT · FILE 005",
    lead: "One imaginary hug has gone missing. Last seen wandering around the general vicinity of this extremely dramatic website.",
    caption: "Reward: one imaginary hug and a tiny smile.",
    note: "This voucher is completely optional. Hugs are only for when both people want one.",
    type: "hug"
  },
  {
    title: "The Mood Scanner",
    world: "cosmic",
    emoji: "🔮",
    eyebrow: "EMOTIONAL SCIENCE · FILE 006",
    lead: "Our mood scanner can detect many things: happiness, tiredness, hunger, and the urgent need for a snack.",
    caption: "Scanning the vibes…",
    note: "This scanner is pretend. The best way to know how someone feels is to ask them kindly.",
    type: "mood"
  },
  {
    title: "The Court of Love",
    world: "retro",
    emoji: "⚖️",
    eyebrow: "THE PEOPLE VS. GANDI LADKI · FILE 007",
    lead: "The court is now in session. The suspect stands accused of being far too easy to miss.",
    caption: "The judge is a teddy bear. The legal system is questionable.",
    note: "All charges are affectionate nonsense. The accused is innocent until proven extra adorable.",
    type: "court"
  },
  {
    title: "The Excuse Generator",
    world: "scrapbook",
    emoji: "🎲",
    eyebrow: "OFFICIAL EXCUSE DEPARTMENT · FILE 008",
    lead: "The suspect has submitted several explanations for being ridiculously lovable. The investigation demands a review.",
    caption: "Professional excuse-making. Amateur romance.",
    note: "Warning: all generated excuses are fictional and legally inadmissible.",
    type: "excuses"
  },
  {
    title: "The Memory Maze",
    world: "cosmic",
    emoji: "🌀",
    eyebrow: "MEMORY ARCHIVE · FILE 009",
    lead: "Some moments are tiny. Some are silly. Some become special because of the person you shared them with.",
    caption: "Find the matching memory symbols.",
    note: "Match all three pairs to unlock the next clue. Take your time, Detective.",
    type: "memory"
  },
  {
    title: "The Constellation Code",
    world: "cosmic",
    emoji: "🌌",
    eyebrow: "STELLAR PUZZLE · FILE 010",
    lead: "Four stars are hiding a secret message. Follow the sequence to connect the dots.",
    caption: "The universe is being suspicious again.",
    note: "Hint: the correct star numbers are 2, 5, 8, 9. You can restart whenever you like.",
    type: "stars"
  },
  {
    title: "The Invisible Letter",
    world: "retro",
    emoji: "✉️",
    eyebrow: "ENCRYPTED MESSAGE · FILE 011",
    lead: "Someone left a secret letter. Unfortunately, the message was encrypted by a very dramatic potato.",
    caption: "The key is hidden in plain sight.",
    note: "Decode the message by entering the word you think completes this sentence: YOU MAKE ME ____.",
    type: "letter"
  },
  {
    title: "The Museum of Us",
    world: "scrapbook",
    emoji: "📸",
    eyebrow: "PERSONAL HISTORY · FILE 012",
    lead: "A little museum for the small things that can make a connection feel special: shared jokes, kind words, and ordinary days.",
    caption: "The best exhibits are the ones you make together.",
    note: "Choose an exhibit to see what the detective thinks belongs in a happy memory collection.",
    type: "exhibits"
  },
  {
    title: "The Compliment Vending Machine",
    world: "retro",
    emoji: "🍬",
    eyebrow: "COMPLIMENT DISPENSER · FILE 013",
    lead: "Insert one imaginary coin. Receive one completely free compliment. No subscription, no hidden fees.",
    caption: "Machine maintained by an embarrassingly fond detective.",
    note: "Compliments are not currency. You never owe someone affection in return for kindness.",
    type: "compliments"
  },
  {
    title: "The Suspicious Cat",
    world: "scrapbook",
    emoji: "🐈",
    eyebrow: "WITNESS INTERVIEW · FILE 014",
    lead: "A cat has been found sitting on the evidence. It refuses to answer questions unless bribed with imaginary snacks.",
    caption: "This witness has never paid rent a day in its life.",
    note: "Choose your interview strategy. The cat's legal representative is a second cat.",
    type: "cat"
  },
  {
    title: "The Love Language Lab",
    world: "ocean",
    emoji: "🧪",
    eyebrow: "FIELD RESEARCH · FILE 015",
    lead: "People show care in different ways. Some use kind words. Some make time. Some remember the tiny details.",
    caption: "No two hearts need the exact same instruction manual.",
    note: "Pick the gesture that feels most meaningful to you. There are no wrong answers.",
    type: "languages"
  },
  {
    title: "The Time Capsule",
    world: "ocean",
    emoji: "⏳",
    eyebrow: "SEALED FOR LATER · FILE 016",
    lead: "A time capsule has washed ashore. It contains a message for a future day when you both need a little extra kindness.",
    caption: "Open when the day is weird.",
    note: "A good connection is not about being perfect. It's about being honest, listening, and making room for each other.",
    type: "capsule"
  },
  {
    title: "The Tiny Arcade",
    world: "retro",
    emoji: "🕹️",
    eyebrow: "ARCADE CHALLENGE · FILE 017",
    lead: "Welcome to the tiniest arcade in the universe. Your challenge: collect enough hearts to prove you have excellent button-pressing skills.",
    caption: "Skill level: adorable button masher.",
    note: "Tap the heart to collect points. You have ten taps. This game is for fun, not relationship scoring.",
    type: "arcade"
  },
  {
    title: "The Jealous Moon",
    world: "cosmic",
    emoji: "🌙",
    eyebrow: "LUNAR OBSERVATION · FILE 018",
    lead: "The moon is jealous. Apparently someone has been getting more attention than it has, and the moon has filed a formal complaint.",
    caption: "A celestial body is being dramatic.",
    note: "The moon would like everyone to remember that friends, hobbies, rest, and personal space are healthy too.",
    type: "moon"
  },
  {
    title: "The Secret Garden",
    world: "ocean",
    emoji: "🌷",
    eyebrow: "GARDEN GATE · FILE 019",
    lead: "Beyond this gate is a little garden where good things grow slowly: trust, laughter, patience, and understanding.",
    caption: "Please water your relationships with kindness.",
    note: "Choose a seed to plant. The garden is metaphorical, but the reminder is real.",
    type: "garden"
  },
  {
    title: "The Unsent Messages",
    world: "scrapbook",
    emoji: "📮",
    eyebrow: "DRAFTS FOLDER · FILE 020",
    lead: "Sometimes the things we want to say are easier to write down first. These little notes are examples of honest, low-pressure communication.",
    caption: "No dramatic declarations required.",
    note: "Choose a message to reveal. You can always use your own words in real life.",
    type: "messages"
  },
  {
    title: "The Truth Detector",
    world: "retro",
    emoji: "📡",
    eyebrow: "FINAL TESTING · FILE 021",
    lead: "Our truth detector has three questions. Please remember: it cannot actually read minds, detect love, or operate as a relationship judge.",
    caption: "Accuracy: questionable. Confidence: excessive.",
    note: "Answer the silly questions to unlock the next clue.",
    type: "truth"
  },
  {
    title: "The Final Investigation",
    world: "cosmic",
    emoji: "🗂️",
    eyebrow: "CASE REVIEW · FILE 022",
    lead: "We have reviewed the evidence, interviewed the cat, consulted the moon, and asked a suspicious computer for advice.",
    caption: "The detective is ready to announce a conclusion.",
    note: "One last question remains: what was this investigation actually about?",
    type: "finalquiz"
  },
  {
    title: "The Mystery Box",
    world: "ocean",
    emoji: "🎁",
    eyebrow: "RESTRICTED ACCESS · FILE 023",
    lead: "Inside this box is the final clue. There are three locks, but don't worry. No passwords, personal details, or real secrets are required.",
    caption: "Warning: contents may cause smiling.",
    note: "Choose a box to reveal a tiny message from the detective.",
    type: "boxes"
  },
  {
    title: "Love Me, Actually",
    world: "scrapbook",
    emoji: "💗",
    eyebrow: "CASE CLOSED · FILE 024",
    lead: "Gandi ladki, after all this dramatic detective work, I have reached a conclusion.",
    caption: "The plot twist is approaching.",
    note: "You have reached the end. Take a breath, smile if you want to, and enjoy the final confession.",
    type: "ending"
  }
];

let current = 0;
let cozy = false;
let sound = false;
let memoryPicks = [];
let matchedPairs = [];
let starSequence = [];
let arcadeTaps = 0;
let arcadeScore = 0;
let truthStep = 0;
let truthScore = 0;

const memories = [
  { id: "heart", icon: "💗" },
  { id: "moon", icon: "🌙" },
  { id: "star", icon: "⭐" },
  { id: "heart", icon: "💗" },
  { id: "star", icon: "⭐" },
  { id: "moon", icon: "🌙" }
];

const compliments = [
  "You have a talent for making ordinary moments feel special. 💗",
  "Your laugh deserves its own tiny fan club.",
  "You are allowed to have bad days and still be wonderful.",
  "You make this detective forget his very important investigation.",
  "You deserve kindness even when you don't feel your best.",
  "Your presence can make a normal day feel a little brighter."
];

const excuses = [
  "The moon distracted me. It looked emotionally unavailable.",
  "I was busy investigating how you became this cute.",
  "My brain opened 47 tabs and all of them were you.",
  "The cat ate my extremely serious detective report.",
  "I tried to act normal, but the software update failed.",
  "I regret to inform you that the evidence is adorable."
];

const truthQuestions = [
  {
    q: "Can this website read someone's mind?",
    options: ["Absolutely, it is magic.", "Nope, it is just code.", "Only on Tuesdays."],
    answer: 1
  },
  {
    q: "What helps people understand each other?",
    options: ["Guessing every thought.", "Never talking about feelings.", "Kind, honest communication."],
    answer: 2
  },
  {
    q: "Does anyone owe affection as a reward?",
    options: ["No, affection should be freely given.", "Yes, always.", "Only if the moon says so."],
    answer: 0
  }
];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function button(label, action, extra = "") {
  return `<button class="choice-btn ${extra}" data-action="${action}">${label}</button>`;
}

function art(chapter) {
  return `
    <div class="art">
      <div>
        <div class="big-emoji" aria-hidden="true">${chapter.emoji}</div>
        <div class="art-caption">${chapter.caption}</div>
      </div>
    </div>`;
}

function resultBox(id = "result") {
  return `<div class="result" id="${id}" role="status" aria-live="polite"></div>`;
}

function renderSpecial(chapter) {
  switch (chapter.type) {
    case "start":
      return `
        <div class="note">SUBJECT: Gandi ladki<br>CHARGE: Being suspiciously lovable<br>DETECTIVE: A person who is definitely acting normal. Definitely.</div>
        <div class="action-row">
          ${button("Open the case file →", "start-case", "primary-btn")}
          ${button("I'm innocent, actually", "innocent")}
        </div>
        ${resultBox()}`;

    case "computer":
      return `
        <div class="note" id="computer-status">ERROR 404: COOLNESS NOT FOUND<br>USER STATUS: Thinking about someone again.</div>
        <div class="action-row">
          ${button("RESTART LOVE.EXE", "restart-computer", "primary-btn")}
          ${button("Run a vibe check", "vibe-check")}
        </div>${resultBox()}`;

    case "museum":
      return `<div class="choice-grid">
        ${button("Exhibit 1: The Smile", "museum-smile")}
        ${button("Exhibit 2: The Laugh", "museum-laugh")}
        ${button("Exhibit 3: The Mystery", "museum-mystery")}
      </div>${resultBox()}`;

    case "replies":
      return `<p>Choose the reply that sounds most like a healthy conversation.</p>
        <div class="choice-grid">
          ${button("Say what you mean kindly", "reply-kind")}
          ${button("Make them guess", "reply-guess")}
          ${button("Keep score forever", "reply-score")}
        </div>${resultBox()}`;

    case "hug":
      return `<div class="note">🎟️ OFFICIAL IMAGINARY VOUCHER<br>Redeemable for: one hug, only if both people want one.<br>Expiration: never. Pressure: zero.</div>
        <div class="action-row">${button("Redeem imaginary voucher", "hug-redeem", "primary-btn")}</div>${resultBox()}`;

    case "mood":
      return `<p>Pick the vibe that best describes your mood right now.</p>
        <div class="choice-grid">
          ${button("🌞 Happy", "mood-happy")}
          ${button("☁️ A little tired", "mood-tired")}
          ${button("🌧️ Not my best day", "mood-sad")}
          ${button("🍟 I need snacks", "mood-snack")}
        </div>${resultBox()}`;

    case "court":
      return `<div class="note">JUDGE TEDDY'S QUESTION:<br>Is it a crime to make someone smile without even trying?</div>
        <div class="choice-grid">
          ${button("Guilty of cuteness", "court-guilty")}
          ${button("Not a crime, just a vibe", "court-innocent")}
        </div>${resultBox()}`;

    case "excuses":
      return `<div class="action-row">
        ${button("Generate an excuse 🎲", "excuse", "primary-btn")}
      </div>${resultBox()}`;

    case "memory":
      memoryPicks = [];
      matchedPairs = [];
      return `<p>Tap two cards to find matching symbols. Match all three pairs!</p>
        <div class="memory-grid" id="memory-grid">
          ${memories.map((item, i) => `<button class="choice-btn memory-card" data-action="memory-card" data-index="${i}" aria-label="Hidden card ${i + 1}">?</button>`).join("")}
        </div>${resultBox()}`;

    case "stars":
      starSequence = [];
      return `<p>Tap the stars in this order: <strong>2 → 5 → 8 → 9</strong>.</p>
        <div class="star-grid">
          ${Array.from({ length: 9 }, (_, i) => `<button class="star-cell" data-action="star" data-index="${i + 1}" aria-label="Star ${i + 1}">☆</button>`).join("")}
        </div>
        <div class="action-row">${button("Restart constellation", "star-reset")}</div>${resultBox()}`;

    case "letter":
      return `<div class="note"><strong>ENCRYPTED MESSAGE</strong><br>YOU MAKE ME: <code>L _ V E</code></div>
        <div class="input-row">
          <input id="letter-answer" type="text" maxlength="20" placeholder="Enter the missing word" aria-label="Decode the message">
          <button class="primary-btn" data-action="decode-letter">Decode</button>
        </div>${resultBox()}`;

    case "exhibits":
      return `<div class="choice-grid">
        ${button("A tiny shared joke", "exhibit-joke")}
        ${button("A kind check-in", "exhibit-checkin")}
        ${button("A silly ordinary day", "exhibit-day")}
      </div>${resultBox()}`;

    case "compliments":
      return `<p>Pick a mystery button. The machine will dispense one compliment.</p>
        <div class="choice-grid">
          ${button("🍬", "compliment")}
          ${button("🍓", "compliment")}
          ${button("🍒", "compliment")}
        </div>${resultBox()}`;

    case "cat":
      return `<div class="choice-grid">
        ${button("Offer imaginary snacks", "cat-snacks")}
        ${button("Ask politely", "cat-polite")}
        ${button("Respect the cat's space", "cat-space")}
      </div>${resultBox()}`;

    case "languages":
      return `<p>Which kind gesture feels most meaningful to you?</p>
        <div class="choice-grid">
          ${button("💬 Kind words", "language-words")}
          ${button("🕰️ Quality time", "language-time")}
          ${button("🫶 Helpful actions", "language-actions")}
          ${button("🎁 Thoughtful surprises", "language-gifts")}
        </div>${resultBox()}`;

    case "capsule":
      return `<div class="note" id="capsule-note">A small note is waiting for you.</div>
        <div class="action-row">${button("Open the time capsule", "open-capsule", "primary-btn")}</div>${resultBox()}`;

    case "arcade":
      arcadeTaps = 0;
      arcadeScore = 0;
      return `<p>Tap the heart ten times. See how many points you can collect!</p>
        <div class="note">TAPS: <strong id="arcade-taps">0 / 10</strong><br>SCORE: <strong id="arcade-score">0</strong></div>
        <div class="action-row">${button("💗 TAP THE HEART", "arcade-tap", "primary-btn")}</div>
        ${button("Restart game", "arcade-reset")}${resultBox()}`;

    case "moon":
      return `<div class="choice-grid">
        ${button("Compliment the moon", "moon-compliment")}
        ${button("Tell it to take a nap", "moon-nap")}
        ${button("Remind it everyone needs space", "moon-space")}
      </div>${resultBox()}`;

    case "garden":
      return `<p>Choose a seed to plant in the imaginary garden.</p>
        <div class="choice-grid">
          ${button("🌱 Trust", "seed-trust")}
          ${button("🌷 Kindness", "seed-kindness")}
          ${button("🌻 Laughter", "seed-laughter")}
        </div>${resultBox()}`;

    case "messages":
      return `<div class="choice-grid">
        ${button("Message A: A little appreciation", "message-appreciation")}
        ${button("Message B: A gentle check-in", "message-checkin")}
        ${button("Message C: An honest feeling", "message-honest")}
      </div>${resultBox()}`;

    case "truth":
      truthStep = 0;
      truthScore = 0;
      return `<div id="truth-question"></div>
        <div class="choice-grid" id="truth-options"></div>
        ${resultBox("truth-result")}
        <div id="truth-reset-wrap"></div>`;

    case "finalquiz":
      return `<p>What is the most useful thing this investigation has taught us?</p>
        <div class="choice-grid">
          ${button("Love means keeping score", "quiz-score")}
          ${button("People should read minds", "quiz-mind")}
          ${button("Kindness and honest communication matter", "quiz-kind")}
        </div>${resultBox()}`;

    case "boxes":
      return `<p>Pick one box. All three contain a tiny, wholesome message.</p>
        <div class="choice-grid">
          ${button("🎁 Box A", "box-a")}
          ${button("🎁 Box B", "box-b")}
          ${button("🎁 Box C", "box-c")}
        </div>${resultBox()}`;

    case "ending":
      return `<div class="note">CASE CONCLUSION:<br>Gandi ladki has been found guilty of… being herself while someone has caught feelings.</div>
        <div class="action-row">${button("Reveal the confession 💌", "reveal-ending", "primary-btn")}</div>
        <div id="ending-message" class="result" aria-live="polite"></div>
        <div class="action-row">${button("Read the whole investigation again", "home")}</div>`;

    default:
      return "";
  }
}

function render() {
  const chapter = chapters[current];
  document.body.classList.remove("world-cosmic", "world-retro", "world-scrapbook", "world-ocean");
  document.body.classList.add(`world-${chapter.world}`);
  if (cozy) document.body.classList.add("cozy");
  else document.body.classList.remove("cozy");

  $("#world-label").textContent = {
    cosmic: "COSMIC FILES",
    retro: "RETRO TERMINAL",
    scrapbook: "SCRAPBOOK",
    ocean: "UNDERWATER SECRETS"
  }[chapter.world];

  $("#progress-bar").style.width = `${((current + 1) / chapters.length) * 100}%`;
  $("#chapter-count").textContent = `${String(current + 1).padStart(2, "0")} / ${chapters.length}`;
  $("#prev-button").disabled = current === 0;
  $("#next-button").textContent = current === chapters.length - 1 ? "Start again ↻" : "Next →";

  const html = chapters.map((c, i) =>
    `<option value="${i}" ${i === current ? "selected" : ""}>${String(i + 1).padStart(2, "0")} · ${escapeHTML(c.title)}</option>`
  ).join("");

  $("#chapter-select").innerHTML = html;
  $("#mobile-select").innerHTML = html;

  $("#chapter-list").innerHTML = chapters.map((c, i) => `
    <button class="chapter-link ${i === current ? "active" : ""}" data-action="jump" data-index="${i}" ${i === current ? 'aria-current="step"' : ""}>
      <span class="chapter-number">${String(i + 1).padStart(2, "0")}</span>
      <span>${escapeHTML(c.title)}</span>
    </button>`).join("");

  $("#chapter-content").innerHTML = `
    <div class="eyebrow">${chapter.eyebrow}</div>
    <h1 class="chapter-title">${escapeHTML(chapter.title).replace(/(Gandi ladki)/gi, "<em>$1</em>")}</h1>
    <p class="lead">${escapeHTML(chapter.lead)}</p>
    ${art(chapter)}
    <p class="note">${escapeHTML(chapter.note)}</p>
    ${renderSpecial(chapter)}
  `;

  if (chapter.type === "truth") showTruthQuestion();
  $("#chapter-content").focus({ preventScroll: true });
}

function goTo(index) {
  current = Math.max(0, Math.min(chapters.length - 1, index));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function say(message, id = "result") {
  const target = document.getElementById(id);
  if (target) target.textContent = message;
}

function beep() {
  if (!sound) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.frequency.value = 520;
    gain.gain.value = 0.025;
    oscillator.start();
    oscillator.stop(context.currentTime + 0.08);
    oscillator.onended = () => context.close();
  } catch (_) {
    // Sound is optional. The site still works if audio is unavailable.
  }
}

function showTruthQuestion() {
  const q = truthQuestions[truthStep];
  if (!q) {
    $("#truth-question").innerHTML = `<p class="big-quote">You scored ${truthScore} out of ${truthQuestions.length}.</p>`;
    $("#truth-options").innerHTML = "";
    $("#truth-reset-wrap").innerHTML = `<button class="choice-btn" data-action="truth-reset">Play again</button>`;
    say("The detector confirms: honest communication beats mind-reading. Case note saved.", "truth-result");
    return;
  }

  $("#truth-question").innerHTML = `<h3>${truthStep + 1}. ${escapeHTML(q.q)}</h3>`;
  $("#truth-options").innerHTML = q.options.map((option, i) =>
    `<button class="choice-btn" data-action="truth-answer" data-answer="${i}">${escapeHTML(option)}</button>`
  ).join("");
}

function act(action, buttonElement) {
  beep();

  switch (action) {
    case "home": goTo(0); break;
    case "next": goTo(current === chapters.length - 1 ? 0 : current + 1); break;
    case "previous": goTo(current - 1); break;
    case "jump": goTo(Number(buttonElement.dataset.index)); break;
    case "cozy":
      cozy = !cozy;
      buttonElement.setAttribute("aria-pressed", String(cozy));
      buttonElement.textContent = cozy ? "☀" : "☾";
      document.body.classList.toggle("cozy", cozy);
      break;
    case "sound":
      sound = !sound;
      buttonElement.setAttribute("aria-pressed", String(sound));
      buttonElement.textContent = sound ? "♫" : "♪";
      say(sound ? "Tiny sounds enabled." : "Sounds turned off.");
      break;

    case "start-case":
      say("CASE OPENED. Suspect located. Detective composure: missing.", "result");
      break;
    case "innocent":
      say("Objection noted. Unfortunately, the court has discovered this website. 😌");
      break;
    case "restart-computer":
      $("#computer-status").innerHTML = "RESTART COMPLETE<br>NEW ERROR: TOO MANY FEELINGS DETECTED";
      say("Love.exe restarted. Coolness.exe is still missing.");
      break;
    case "vibe-check":
      say("Vibe report: 40% mystery, 40% silliness, 20% tiny heart eyes.");
      break;

    case "museum-smile": say("EXHIBIT 1: One smile. Suspected of improving a very ordinary day."); break;
    case "museum-laugh": say("EXHIBIT 2: A laugh. The detective requests a replay for research purposes."); break;
    case "museum-mystery": say("EXHIBIT 3: An unsolved mystery. How can one person be so distracting?"); break;

    case "reply-kind": say("Excellent choice. Clear, kind messages help people understand each other. ⭐"); break;
    case "reply-guess": say("The detective tried guessing once. He accidentally ordered twelve samosas."); break;
    case "reply-score": say("The scoreboard has been confiscated. Relationships are not competitive sports."); break;

    case "hug-redeem": say("Voucher accepted! Sending a completely imaginary, no-pressure hug. 🧸"); break;

    case "mood-happy": say("Mood logged: sunshine. Please keep the good vibes and share them if you want. ☀️"); break;
    case "mood-tired": say("Mood logged: cloud. Rest is a perfectly good plan. ☁️"); break;
    case "mood-sad": say("Mood logged: rainy day. You don't have to pretend to be cheerful all the time. 💙"); break;
    case "mood-snack": say("URGENT: deploy snacks immediately. This is the most scientifically reliable result. 🍟"); break;

    case "court-guilty": say("VERDICT: Guilty of being adorable. Sentence: continue being yourself. No appeal necessary."); break;
    case "court-innocent": say("The teddy judge agrees. Being cute is not a crime. Court dismissed! 🧸"); break;

    case "excuse":
      say(excuses[Math.floor(Math.random() * excuses.length)]);
      break;

    case "memory-card": {
      const index = Number(buttonElement.dataset.index);
      if (matchedPairs.includes(index) || memoryPicks.includes(index)) return;
      buttonElement.textContent = memories[index].icon;
      buttonElement.classList.add("selected");
      memoryPicks.push(index);

      if (memoryPicks.length === 2) {
        const [a, b] = memoryPicks;
        const first = document.querySelector(`[data-action="memory-card"][data-index="${a}"]`);
        const second = document.querySelector(`[data-action="memory-card"][data-index="${b}"]`);
        if (memories[a].id === memories[b].id) {
          matchedPairs.push(a, b);
          first.classList.add("selected");
          second.classList.add("selected");
          say(`Match found! ${matchedPairs.length / 2} of 3 pairs matched.`);
          memoryPicks = [];
          if (matchedPairs.length === memories.length) say("All pairs matched! Your detective badge has been upgraded. 🏅");
        } else {
          say("Not a match yet. Try another pair!");
          window.setTimeout(() => {
            [a, b].forEach(i => {
              if (matchedPairs.includes(i)) return;
              const card = document.querySelector(`[data-action="memory-card"][data-index="${i}"]`);
              if (card) {
                card.textContent = "?";
                card.classList.remove("selected");
              }
            });
            memoryPicks = [];
          }, 650);
        }
      }
      break;
    }

    case "star": {
      const index = Number(buttonElement.dataset.index);
      const target = [2, 5, 8, 9];
      if (index !== target[starSequence.length]) {
        starSequence = [];
        document.querySelectorAll(".star-cell").forEach(el => {
          el.classList.remove("on");
          el.textContent = "☆";
        });
        say("The stars got mixed up! Try the sequence 2 → 5 → 8 → 9.");
        return;
      }
      starSequence.push(index);
      buttonElement.classList.add("on");
      buttonElement.textContent = "★";
      if (starSequence.length === target.length) {
        say("Constellation unlocked! The universe sends a tiny heart. 💗");
      } else {
        say(`Correct! ${starSequence.length} of 4 stars connected.`);
      }
      break;
    }
    case "star-reset":
      starSequence = [];
      document.querySelectorAll(".star-cell").forEach(el => {
        el.classList.remove("on");
        el.textContent = "☆";
      });
      say("Constellation reset. Ready when you are.");
      break;

    case "decode-letter": {
      const input = $("#letter-answer");
      const answer = input.value.trim().toLowerCase();
      if (answer === "love") {
        say("MESSAGE DECODED: YOU MAKE ME LOVE. Very suspicious. 💌");
      } else {
        say("Almost! The missing word is a four-letter feeling. Hint: L _ V E.");
      }
      break;
    }

    case "exhibit-joke": say("EXHIBIT: An inside joke. Somehow, two people can make nonsense feel like a tiny tradition."); break;
    case "exhibit-checkin": say("EXHIBIT: A kind check-in. A simple 'How are you, really?' can mean a lot."); break;
    case "exhibit-day": say("EXHIBIT: An ordinary day. Sometimes the little, unplanned moments become favourites."); break;

    case "compliment":
      say(compliments[Math.floor(Math.random() * compliments.length)]);
      break;

    case "cat-snacks": say("The cat accepts the imaginary snack and reveals one clue: MEOW. Helpful? Absolutely not."); break;
    case "cat-polite": say("The cat appreciates your manners. It responds with a slow blink. Interview concluded."); break;
    case "cat-space": say("The cat approves of personal space. It has now moved exactly three centimetres away."); break;

    case "language-words": say("Kind words chosen! Honest appreciation can be lovely when it's freely given. 💬"); break;
    case "language-time": say("Quality time chosen! Shared attention can feel meaningful—while alone time matters too. 🕰️"); break;
    case "language-actions": say("Helpful actions chosen! Little acts of care can say a lot. 🫶"); break;
    case "language-gifts": say("Thoughtful surprises chosen! The best gifts are about the thought, not the price. 🎁"); break;

    case "open-capsule":
      $("#capsule-note").innerHTML = "<strong>MESSAGE FROM FUTURE YOU:</strong><br>Be patient with yourself. Ask instead of assuming. Celebrate the little things. You deserve kindness, and so does the person beside you.";
      say("Time capsule opened. Message delivered. 💌");
      break;

    case "arcade-tap":
      if (arcadeTaps >= 10) {
        say(`Game over! Final score: ${arcadeScore}/10. Want another round?`);
        return;
      }
      arcadeTaps++;
      arcadeScore += Math.random() > 0.25 ? 1 : 0;
      $("#arcade-taps").textContent = `${arcadeTaps} / 10`;
      $("#arcade-score").textContent = arcadeScore;
      say(arcadeTaps === 10 ? `Game over! Final score: ${arcadeScore}/10. You are officially a heart-button professional. 💗` : "Heart collected! Keep going.");
      break;
    case "arcade-reset":
      arcadeTaps = 0;
      arcadeScore = 0;
      $("#arcade-taps").textContent = "0 / 10";
      $("#arcade-score").textContent = "0";
      say("Arcade reset. Ready, player one?");
      break;

    case "moon-compliment": say("The moon blushes. It will now pretend this interaction never happened. 🌙"); break;
    case "moon-nap": say("The moon has agreed to rest. Please allow one lunar cycle for processing."); break;
    case "moon-space": say("The moon acknowledges that everyone needs their own orbit. Excellent advice, moon."); break;

    case "seed-trust": say("🌱 TRUST planted. Water it with honesty, patience, and consistency."); break;
    case "seed-kindness": say("🌷 KINDNESS planted. Water it with respect, especially on difficult days."); break;
    case "seed-laughter": say("🌻 LAUGHTER planted. Water it with silly jokes and room to be yourself."); break;

    case "message-appreciation": say("“Hey, I just wanted to say I appreciate the little things you do. They make my day nicer.”"); break;
    case "message-checkin": say("“Hey, how have you been feeling lately? No pressure to answer right away—I just wanted to check in.”"); break;
    case "message-honest": say("“Sometimes I miss spending time together. Could we plan a little time to hang out soon?”"); break;

    case "truth-answer": {
      const q = truthQuestions[truthStep];
      const answer = Number(buttonElement.dataset.answer);
      if (answer === q.answer) {
        truthScore++;
        say("Correct! Good detective work.", "truth-result");
      } else {
        say("Not quite, but the investigation continues.", "truth-result");
      }
      truthStep++;
      showTruthQuestion();
      break;
    }
    case "truth-reset":
      truthStep = 0;
      truthScore = 0;
      $("#truth-reset-wrap").innerHTML = "";
      showTruthQuestion();
      say("", "truth-result");
      break;

    case "quiz-score": say("Incorrect! There is no scoreboard for caring about someone. The detective confiscates the chalk."); break;
    case "quiz-mind": say("Incorrect! Mind-reading has not been invented. Kind questions are much more reliable."); break;
    case "quiz-kind": say("Correct! The detective writes this down in glitter pen: be kind, be honest, and listen. ⭐"); break;

    case "box-a": say("INSIDE: A reminder that you can be yourself around the people who care about you. 💗"); break;
    case "box-b": say("INSIDE: One imaginary cookie. It has zero calories and infinite emotional support. 🍪"); break;
    case "box-c": say("INSIDE: A tiny note saying, 'I hope something makes you smile today.' 🌷"); break;

    case "reveal-ending":
      $("#ending-message").innerHTML = `
        <p class="big-quote">HAHAHAHA, GANDI LADKI. I CAUGHT YOU. 😭💗</p>
        <p>You made it through 24 chapters of this ridiculous investigation, and now I have to confess something.</p>
        <p><strong>Plot twist: I never wanted to prove that you don't love me.</strong></p>
        <p>I just wanted to make something silly and special for you. You make me smile, you cross my mind at random times, and I'm really glad you're in my life.</p>
        <p>So, Gandi ladki, case closed. You are officially accused of being very important to this detective.</p>
        <p>And remember: no tests, no pressure, no proving anything. Just honesty, kindness, silly moments, and being ourselves. 💌</p>
        <p class="big-quote">THE END. NOW GO DRINK SOME WATER, YOU MENACE. 🫶</p>`;
      buttonElement.disabled = true;
      buttonElement.textContent = "Confession revealed ✓";
      break;

    default:
      say("The detective is still investigating this clue.");
  }
}

/* One delegated click handler keeps dynamically created buttons working. */
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target || target.disabled) return;
  act(target.dataset.action, target);
});

$("#chapter-select").addEventListener("change", event => goTo(Number(event.target.value)));
$("#mobile-select").addEventListener("change", event => goTo(Number(event.target.value)));

document.addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
  if (event.key === "ArrowRight") goTo(current === chapters.length - 1 ? 0 : current + 1);
  if (event.key === "ArrowLeft") goTo(current - 1);
});

render();
