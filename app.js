/* =====================================================================
   GERMAN B1 LEARNING PLATFORM — app.js
   ===================================================================== */

// ─── BUILT-IN THEMES & VERBS ──────────────────────────────────────────────────
const BUILTIN_THEMES = [
  {
    id: "verben-praep-akk",
    name: "Verben + Präposition + Akkusativ",
    color: "#c2603d",
    builtin: true,
  },
];

const BUILTIN_VERBS = [
  { verb: "achten auf",            prep: "auf",   es: "prestar atención a",           en: "to pay attention to",        example: "Ich achte beim Fahrradfahren auf den Verkehr.",              example_en: "I always pay attention to traffic while cycling.",                    example_en2: "You should pay attention to your diet.",                   example_es: "Siempre presto atención al tráfico cuando voy en bicicleta.", example_es2: "Debes fijarte en lo que comes.",                            theme: "verben-praep-akk" },
  { verb: "sich anmelden für",     prep: "für",   es: "inscribirse en",                en: "to register for",            example: "Ich melde mich für den nächsten Kurs an.",                   example_en: "I'm registering for the next course.",                               example_en2: "Have you registered for the workshop yet?",                example_es: "Me inscribo en el próximo curso.",                           example_es2: "¿Ya te has inscrito en el taller?",                         theme: "verben-praep-akk" },
  { verb: "antworten auf",         prep: "auf",   es: "responder a",                   en: "to reply to",                example: "Wann antwortest du auf meine E-Mail?",                       example_en: "When will you reply to my email?",                                   example_en2: "She never replies to messages on time.",                   example_es: "¿Cuándo vas a responder a mi correo?",                       example_es2: "Ella nunca responde a los mensajes a tiempo.",              theme: "verben-praep-akk" },
  { verb: "aufpassen auf",         prep: "auf",   es: "cuidar de / tener cuidado con", en: "to take care of",            example: "Wer passt morgen auf die Kinder auf?",                       example_en: "Who will take care of the children tomorrow?",                        example_en2: "Please take care of the dog while I'm away.",              example_es: "¿Quién cuida a los niños mañana?",                          example_es2: "Por favor cuida al perro mientras estoy fuera.",            theme: "verben-praep-akk" },
  { verb: "sich ärgern über",      prep: "über",  es: "enfadarse por",                 en: "to be annoyed about",        example: "Ich ärgere mich über den Stau.",                             example_en: "I'm annoyed about the traffic jam.",                                  example_en2: "He gets annoyed about every little mistake.",              example_es: "Me enfado por el atasco.",                                   example_es2: "Él se enfada por cada pequeño error.",                     theme: "verben-praep-akk" },
  { verb: "sich beschweren über",  prep: "über",  es: "quejarse de",                   en: "to complain about",          example: "Ich beschwere mich über den Lärm.",                          example_en: "I'm complaining about the noise.",                                    example_en2: "They complained about the poor service.",                  example_es: "Me quejo del ruido.",                                        example_es2: "Se quejaron del mal servicio.",                             theme: "verben-praep-akk" },
  { verb: "sich bewerben um",      prep: "um",    es: "solicitar / postularse a",      en: "to apply for",               example: "Ich bewerbe mich um die Stelle.",                            example_en: "I'm applying for the position.",                                     example_en2: "She applied for a scholarship last month.",                example_es: "Me postulo para el puesto.",                                 example_es2: "Ella solicitó una beca el mes pasado.",                     theme: "verben-praep-akk" },
  { verb: "bitten um",             prep: "um",    es: "pedir / solicitar",             en: "to ask for / to request",    example: "Ich bitte um Entschuldigung.",                               example_en: "I'm asking for an apology.",                                         example_en2: "Could you ask for more time on the project?",              example_es: "Pido disculpas.",                                            example_es2: "¿Podrías pedir más tiempo para el proyecto?",              theme: "verben-praep-akk" },
  { verb: "denken an",             prep: "an",    es: "pensar en",                     en: "to think of / about",        example: "Er denkt an seine Familie.",                                 example_en: "He thinks about his family.",                                         example_en2: "I often think about our trip to Berlin.",                  example_es: "Él piensa en su familia.",                                   example_es2: "A menudo pienso en nuestro viaje a Berlín.",               theme: "verben-praep-akk" },
  { verb: "diskutieren über",      prep: "über",  es: "discutir / debatir sobre",      en: "to discuss",                 example: "Wir diskutieren über Politik.",                              example_en: "We discuss politics.",                                               example_en2: "The class discussed the results of the experiment.",       example_es: "Debatimos sobre política.",                                  example_es2: "La clase debatió los resultados del experimento.",          theme: "verben-praep-akk" },
  { verb: "sich engagieren für",   prep: "für",   es: "comprometerse con",             en: "to be committed to",         example: "Sie engagieren sich für den Umweltschutz.",                  example_en: "They are committed to environmental protection.",                     example_en2: "He's very committed to helping refugees.",                 example_es: "Se comprometen con la protección del medio ambiente.",       example_es2: "Él se compromete mucho con ayudar a los refugiados.",      theme: "verben-praep-akk" },
  { verb: "sich entscheiden für",  prep: "für",   es: "decidirse por",                 en: "to decide on",               example: "Sie entscheidet sich für den Job in einer anderen Stadt.",   example_en: "She decides on the job in another city.",                            example_en2: "In the end they decided on the cheaper option.",           example_es: "Ella se decide por el trabajo en otra ciudad.",              example_es2: "Al final se decidieron por la opción más barata.",         theme: "verben-praep-akk" },
  { verb: "sich entschuldigen für",prep: "für",   es: "disculparse por",               en: "to apologize for",           example: "Er entschuldigt sich für seine Verspätung.",                 example_en: "He apologizes for his delay.",                                        example_en2: "You should apologize for what you said.",                  example_es: "Él se disculpa por su retraso.",                             example_es2: "Deberías disculparte por lo que dijiste.",                  theme: "verben-praep-akk" },
  { verb: "sich erinnern an",      prep: "an",    es: "recordar / acordarse de",       en: "to remember",                example: "Sie erinnern sich an ihre Kindheit.",                        example_en: "They remember their childhood.",                                      example_en2: "Do you remember the first day of school?",                 example_es: "Recuerdan su infancia.",                                     example_es2: "¿Recuerdas el primer día de escuela?",                     theme: "verben-praep-akk" },
  { verb: "sich freuen auf",       prep: "auf",   es: "alegrarse por (algo futuro)",   en: "to look forward to",         example: "Wir freuen uns auf das Fest.",                               example_en: "We're looking forward to the party.",                                example_en2: "I'm really looking forward to the summer holidays.",       example_es: "Estamos emocionados por la fiesta.",                         example_es2: "Tengo muchas ganas de las vacaciones de verano.",          theme: "verben-praep-akk" },
  { verb: "sich freuen über",      prep: "über",  es: "alegrarse por (algo pasado)",   en: "to be happy about",          example: "Ich freue mich über das Geschenk.",                          example_en: "I'm happy about the gift.",                                          example_en2: "She was delighted about her exam results.",                example_es: "Me alegra el regalo.",                                       example_es2: "Ella estaba encantada con sus resultados del examen.",     theme: "verben-praep-akk" },
  { verb: "sich gewöhnen an",      prep: "an",    es: "acostumbrarse a",               en: "to get used to",             example: "Er gewöhnt sich an das Leben in Deutschland.",               example_en: "He's getting used to life in Germany.",                              example_en2: "It takes time to get used to a new routine.",              example_es: "Se acostumbra a la vida en Alemania.",                       example_es2: "Lleva tiempo acostumbrarse a una nueva rutina.",           theme: "verben-praep-akk" },
  { verb: "sich informieren über", prep: "über",  es: "informarse sobre",              en: "to get information about",   example: "Du informierst dich über die Preise.",                       example_en: "You're getting information about the prices.",                        example_en2: "I always inform myself about the news before travelling.", example_es: "Te informas sobre los precios.",                             example_es2: "Siempre me informo sobre las noticias antes de viajar.",   theme: "verben-praep-akk" },
  { verb: "sich interessieren für",prep: "für",   es: "interesarse por",               en: "to be interested in",        example: "Ich interessiere mich für Politik.",                         example_en: "I'm interested in politics.",                                         example_en2: "She has always been interested in art history.",           example_es: "Me interesa la política.",                                   example_es2: "Siempre le ha interesado la historia del arte.",           theme: "verben-praep-akk" },
  { verb: "sich kümmern um",       prep: "um",    es: "encargarse de / ocuparse de",   en: "to take care of",            example: "Die Großeltern kümmern sich in den Ferien um die Kinder.",  example_en: "The grandparents take care of the children during holidays.",         example_en2: "Who takes care of the finances in your family?",          example_es: "Los abuelos se ocupan de los niños en las vacaciones.",     example_es2: "¿Quién se encarga de las finanzas en tu familia?",         theme: "verben-praep-akk" },
  { verb: "lachen über",           prep: "über",  es: "reírse de",                     en: "to laugh about",             example: "Sie lachen über den Witz.",                                  example_en: "They laugh about the joke.",                                          example_en2: "We still laugh about that awkward moment.",               example_es: "Se ríen del chiste.",                                        example_es2: "Todavía nos reímos de ese momento tan incómodo.",          theme: "verben-praep-akk" },
  { verb: "nachdenken über",       prep: "über",  es: "reflexionar sobre",             en: "to think about / ponder",    example: "Du musst über deine Zukunft nachdenken.",                    example_en: "You need to think about your future.",                               example_en2: "I need to ponder this decision carefully.",                example_es: "Debes reflexionar sobre tu futuro.",                         example_es2: "Necesito reflexionar sobre esta decisión con cuidado.",    theme: "verben-praep-akk" },
  { verb: "reden über",            prep: "über",  es: "hablar sobre",                  en: "to talk about",              example: "Wir reden über den neuen Film.",                             example_en: "We're talking about the new film.",                                   example_en2: "Can we talk about what happened last night?",              example_es: "Hablamos sobre la nueva película.",                          example_es2: "¿Podemos hablar sobre lo que pasó anoche?",                theme: "verben-praep-akk" },
  { verb: "sprechen über",         prep: "über",  es: "hablar de",                     en: "to speak about",             example: "Wir sprechen über unsere Nachbarn.",                         example_en: "We're speaking about our neighbours.",                               example_en2: "The doctor spoke about the risks of the surgery.",         example_es: "Hablamos de nuestros vecinos.",                              example_es2: "El médico habló de los riesgos de la operación.",          theme: "verben-praep-akk" },
  { verb: "sich streiten über",    prep: "über",  es: "discutir / pelearse por",       en: "to argue about",             example: "Sie streiten sich über Geld.",                               example_en: "They're arguing about money.",                                        example_en2: "The siblings always argue about who does the dishes.",     example_es: "Discuten por dinero.",                                       example_es2: "Los hermanos siempre discuten por quién friega los platos.", theme: "verben-praep-akk" },
  { verb: "sich unterhalten über", prep: "über",  es: "conversar sobre",               en: "to chat / talk about",       example: "Wir unterhalten uns über Mode.",                             example_en: "We're chatting about fashion.",                                       example_en2: "They talked about their travel plans for hours.",          example_es: "Conversamos sobre moda.",                                    example_es2: "Estuvieron horas hablando de sus planes de viaje.",        theme: "verben-praep-akk" },
  { verb: "sich verlassen auf",    prep: "auf",   es: "confiar en / depender de",      en: "to rely on",                 example: "Ich verlasse mich auf dich.",                                example_en: "I rely on you.",                                                     example_en2: "You can always rely on her in a crisis.",                  example_es: "Confío en ti.",                                              example_es2: "Siempre puedes contar con ella en una crisis.",            theme: "verben-praep-akk" },
  { verb: "sich verlieben in",     prep: "in",    es: "enamorarse de",                 en: "to fall in love with",       example: "Er hat sich in seine neue Kollegin verliebt.",               example_en: "He fell in love with his new colleague.",                            example_en2: "She fell in love with the city the moment she arrived.",   example_es: "Se enamoró de su nueva compañera.",                          example_es2: "Se enamoró de la ciudad en cuanto llegó.",                 theme: "verben-praep-akk" },
  { verb: "sich vorbereiten auf",  prep: "auf",   es: "prepararse para",               en: "to prepare for",             example: "Wir bereiten uns auf die Prüfung vor.",                      example_en: "We're preparing for the exam.",                                      example_en2: "How did you prepare for the job interview?",               example_es: "Nos preparamos para el examen.",                             example_es2: "¿Cómo te preparaste para la entrevista de trabajo?",       theme: "verben-praep-akk" },
  { verb: "warten auf",            prep: "auf",   es: "esperar",                       en: "to wait for",                example: "Wir warten auf den Bus.",                                    example_en: "We're waiting for the bus.",                                         example_en2: "I've been waiting for this moment for years.",             example_es: "Esperamos el autobús.",                                      example_es2: "Llevo años esperando este momento.",                       theme: "verben-praep-akk" },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let customThemes = JSON.parse(localStorage.getItem("custom_themes") || "[]");
let customVerbs  = JSON.parse(localStorage.getItem("custom_verbs")  || "[]");
let activeThemeId = "verben-praep-akk";
let activeSection = "flashcards";

function allThemes() { return [...BUILTIN_THEMES, ...customThemes]; }
function allVerbs()  { return [...BUILTIN_VERBS, ...customVerbs]; }
function verbsForTheme(themeId) { return allVerbs().filter(v => v.theme === themeId); }
function activeVerbs() { return verbsForTheme(activeThemeId); }

function saveState() {
  localStorage.setItem("custom_themes", JSON.stringify(customThemes));
  localStorage.setItem("custom_verbs",  JSON.stringify(customVerbs));
}

// ─── SECTION NAVIGATION ───────────────────────────────────────────────────────
function activateSection(sectionId) {
  activeSection = sectionId;
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(`.nav-btn[data-section="${sectionId}"]`).forEach(b => b.classList.add("active"));

  if (sectionId === "verbs")   renderVerbTable();
  if (sectionId === "upload")  { renderThemeVerbs(); updateUploadThemeBar(); }
  if (sectionId === "writing") pickWritingVerb();
}

document.querySelectorAll(".nav-btn[data-section]").forEach(btn => {
  btn.addEventListener("click", () => activateSection(btn.dataset.section));
});

// ─── THEME MANAGEMENT ─────────────────────────────────────────────────────────
function activateTheme(themeId) {
  activeThemeId = themeId;

  document.querySelectorAll(".theme-item").forEach(el => {
    el.classList.toggle("active", el.dataset.theme === themeId);
  });

  // update flashcard section title to active theme name
  const titleEl = document.getElementById("fc-section-title");
  if (titleEl) {
    const theme = allThemes().find(t => t.id === themeId);
    if (theme) titleEl.textContent = theme.name;
  }

  shuffleDeck();
  if (activeSection === "verbs")   renderVerbTable();
  if (activeSection === "writing") pickWritingVerb();
  if (activeSection === "upload")  { renderThemeVerbs(); updateUploadThemeBar(); }
}

function renderSidebarThemes() {
  const container = document.getElementById("custom-themes-list");
  container.innerHTML = customThemes.map(t => {
    const count = verbsForTheme(t.id).length;
    return `
      <div class="theme-item" data-theme="${t.id}">
        <span class="theme-dot" style="background:${t.color}"></span>
        <span class="theme-name">${escHtml(t.name)}</span>
        <span class="theme-count">${count}</span>
      </div>`;
  }).join("");

  // re-bind theme clicks (built-in + custom)
  document.querySelectorAll(".theme-item").forEach(el => {
    el.addEventListener("click", () => activateTheme(el.dataset.theme));
  });

  // Update count on built-in theme
  const builtinCountEl = document.getElementById("count-verben-praep-akk");
  if (builtinCountEl) builtinCountEl.textContent = verbsForTheme("verben-praep-akk").length;

  // Re-mark active
  document.querySelectorAll(".theme-item").forEach(el => {
    el.classList.toggle("active", el.dataset.theme === activeThemeId);
  });
}

// Built-in theme click
document.getElementById("theme-verben-praep-akk").addEventListener("click", () => activateTheme("verben-praep-akk"));

// ─── ADD THEME MODAL ──────────────────────────────────────────────────────────
let selectedColor = "#c2603d";

document.getElementById("add-theme-btn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("modal-overlay").style.display = "flex";
  document.getElementById("new-theme-name").value = "";
  selectedColor = "#c2603d";
  document.querySelectorAll(".color-swatch").forEach(s => {
    s.classList.toggle("active", s.dataset.color === selectedColor);
  });
});

document.querySelectorAll(".color-swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    selectedColor = swatch.dataset.color;
    document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
    swatch.classList.add("active");
  });
});

document.getElementById("modal-cancel").addEventListener("click", () => {
  document.getElementById("modal-overlay").style.display = "none";
});
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modal-overlay")) {
    document.getElementById("modal-overlay").style.display = "none";
  }
});

document.getElementById("modal-confirm").addEventListener("click", () => {
  const name = document.getElementById("new-theme-name").value.trim();
  if (!name) { document.getElementById("new-theme-name").focus(); return; }
  const id = "theme-" + Date.now();
  customThemes.push({ id, name, color: selectedColor, builtin: false });
  saveState();
  renderSidebarThemes();
  document.getElementById("modal-overlay").style.display = "none";
  activateTheme(id);
});

// ─── FLASHCARDS ───────────────────────────────────────────────────────────────
let fcIndex = 0;
let fcGrades = { 1: 0, 2: 0, 3: 0, 4: 0 }; // again / hard / good / easy
let fcDeck = [];

const GRADE_CONFIG = {
  1: { id: "fc-again", statId: "stat-again", pulse: "pulse-again",  label: "Forgot" },
  2: { id: "fc-hard",  statId: "stat-hard",  pulse: "pulse-hard",   label: "Hard"  },
  3: { id: "fc-good",  statId: "stat-good",  pulse: "pulse-good",   label: "Good"  },
  4: { id: "fc-easy",  statId: "stat-easy",  pulse: "pulse-easy",   label: "Easy"  },
};

function shuffleDeck() {
  const verbs = activeVerbs();
  if (!verbs.length) {
    fcDeck = [];
    document.getElementById("fc-verb").textContent = "—";
    document.getElementById("fc-example").textContent = "No words in this theme yet.";
    document.getElementById("fc-counter").textContent = "0 / 0";
    return;
  }
  fcDeck = [...verbs].sort(() => Math.random() - .5);
  fcIndex = 0;
  fcGrades = { 1: 0, 2: 0, 3: 0, 4: 0 };
  document.getElementById("flashcard").classList.remove("flipped");
  renderFlashcard();
}

function renderFlashcard() {
  if (!fcDeck.length) return;
  const card = fcDeck[fcIndex];
  document.getElementById("fc-verb").textContent = card.verb;
  document.getElementById("fc-example").textContent = card.example;
  document.getElementById("fc-trans-es").textContent = card.es;
  document.getElementById("fc-trans-en").textContent = card.en;
  // render example lines under each language
  const exEl = document.getElementById("fc-examples-en");
  const esEl = document.getElementById("fc-examples-es");
  const exampleLine = txt => `<div class="fc-example-line">${txt}</div>`;
  exEl.innerHTML = [card.example_en, card.example_en2].filter(Boolean).map(exampleLine).join("") || (card.example ? exampleLine(card.example) : "");
  esEl.innerHTML = [card.example_es, card.example_es2].filter(Boolean).map(exampleLine).join("");
  document.getElementById("fc-counter").textContent = `${fcIndex + 1} / ${fcDeck.length}`;
  document.getElementById("fc-progress-bar").style.width = `${((fcIndex + 1) / fcDeck.length) * 100}%`;
  document.getElementById("stat-remaining").textContent = fcDeck.length - fcIndex;
  Object.values(GRADE_CONFIG).forEach(g => {
    document.getElementById(g.statId).textContent = fcGrades[Object.keys(GRADE_CONFIG).find(k => GRADE_CONFIG[k] === g)];
  });
  document.getElementById("flashcard").classList.remove("flipped");

  // Grade buttons only visible after flipping — hide initially
  setGradeBtnsVisible(false);
  if (window.lucide) lucide.createIcons();
}

function setGradeBtnsVisible(visible) {
  document.getElementById("fc-actions").style.opacity = visible ? "1" : "0.25";
  document.getElementById("fc-actions").style.pointerEvents = visible ? "auto" : "none";

}

// ── Voice pronunciation ───────────────────────────────────────────────────────
function speakVerb() {
  if (!window.speechSynthesis) return;
  const card = fcDeck[fcIndex];
  if (!card) return;

  window.speechSynthesis.cancel();

  const btn = document.getElementById("fc-speak-btn");
  const utterance = new SpeechSynthesisUtterance(card.verb);
  utterance.lang = "de-DE";
  utterance.rate = 0.9;

  utterance.onstart = () => btn && btn.classList.add("speaking");
  utterance.onend   = () => btn && btn.classList.remove("speaking");
  utterance.onerror = () => btn && btn.classList.remove("speaking");

  // voices load async — pick German voice when ready
  function doSpeak() {
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith("de"));
    if (deVoice) utterance.voice = deVoice;
    window.speechSynthesis.speak(utterance);
  }

  const voices = window.speechSynthesis.getVoices();
  if (voices.length) {
    doSpeak();
  } else {
    window.speechSynthesis.onvoiceschanged = () => { doSpeak(); window.speechSynthesis.onvoiceschanged = null; };
  }
}

// ── Flashcard actions ──────────────────────────────────────────────────────────
function fcFlip() {
  const card = document.getElementById("flashcard");
  card.classList.toggle("flipped");
  setGradeBtnsVisible(card.classList.contains("flipped"));
}

function fcGrade(grade) {
  if (!fcDeck.length) return;
  // Require card to be flipped before grading
  const isFlipped = document.getElementById("flashcard").classList.contains("flipped");
  if (!isFlipped) { fcFlip(); return; }

  fcGrades[grade]++;
  const cfg = GRADE_CONFIG[grade];
  pulseBtn(cfg.id, cfg.pulse);
  document.getElementById(cfg.statId).textContent = fcGrades[grade];

  // Cards graded Again (1) go back into the deck at a random later position
  if (grade === 1) {
    const card = fcDeck.splice(fcIndex, 1)[0];
    const insertAt = fcIndex + 2 + Math.floor(Math.random() * Math.max(1, fcDeck.length - fcIndex));
    fcDeck.splice(Math.min(insertAt, fcDeck.length), 0, card);
    // don't advance index — new card is now at same position
    renderFlashcard();
    return;
  }

  if (fcIndex < fcDeck.length - 1) {
    fcIndex++;
    renderFlashcard();
  } else {
    renderFlashcard();
    showFCComplete();
  }
}

function pulseBtn(id, cls) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 350);
}

document.getElementById("flashcard").addEventListener("click", fcFlip);
document.getElementById("fc-prev").addEventListener("click", () => {
  if (fcIndex > 0) { fcIndex--; renderFlashcard(); }
});
document.getElementById("fc-next").addEventListener("click", () => {
  if (fcIndex < fcDeck.length - 1) { fcIndex++; renderFlashcard(); }
});

Object.keys(GRADE_CONFIG).forEach(g => {
  document.getElementById(GRADE_CONFIG[g].id).addEventListener("click", () => fcGrade(Number(g)));
});

// ── Keyboard shortcuts ─────────────────────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (activeSection !== "flashcards") return;
  if (["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) return;

  switch (e.key) {
    case " ":
    case "f":
      e.preventDefault(); fcFlip(); break;
    case "1": e.preventDefault(); fcGrade(1); break;
    case "2": e.preventDefault(); fcGrade(2); break;
    case "3": e.preventDefault(); fcGrade(3); break;
    case "4": e.preventDefault(); fcGrade(4); break;
    case "ArrowLeft":
    case "ArrowUp":
      e.preventDefault();
      if (fcIndex > 0) { fcIndex--; renderFlashcard(); } break;
    case "ArrowRight":
    case "ArrowDown":
      e.preventDefault();
      if (fcIndex < fcDeck.length - 1) { fcIndex++; renderFlashcard(); } break;
  }
});

function showFCComplete() {
  const total = Object.values(fcGrades).reduce((a, b) => a + b, 0);
  const pct = total ? Math.round(((fcGrades[3] + fcGrades[4]) / total) * 100) : 0;
  setTimeout(() => {
    alert(
      `Runde abgeschlossen! 🎉\n\n` +
      `😵 Again: ${fcGrades[1]}   🤔 Hard: ${fcGrades[2]}\n` +
      `🙂 Good: ${fcGrades[3]}    😎 Easy: ${fcGrades[4]}\n\n` +
      `Good + Easy: ${pct}% — Die Karten werden neu gemischt.`
    );
    shuffleDeck();
  }, 200);
}

// ─── VERB TABLE ───────────────────────────────────────────────────────────────
function renderVerbTable() {
  const search = document.getElementById("verb-search").value.toLowerCase();
  const filter = document.getElementById("verb-filter").value;
  const verbs = activeVerbs().filter(v => {
    const matchSearch = !search || v.verb.toLowerCase().includes(search) || v.es.toLowerCase().includes(search) || v.en.toLowerCase().includes(search);
    const matchFilter = filter === "all" || v.prep === filter;
    return matchSearch && matchFilter;
  });
  const tbody = document.getElementById("verb-tbody");
  tbody.innerHTML = verbs.map(v => `
    <tr>
      <td><span class="verb-chip">${escHtml(v.verb)}</span></td>
      <td>${escHtml(v.es)}</td>
      <td>${escHtml(v.en)}</td>
      <td class="verb-example">${escHtml(v.example)}</td>
    </tr>
  `).join("");
  if (!verbs.length) tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--gray-400);padding:2rem">No results found.</td></tr>`;
}

document.getElementById("verb-search").addEventListener("input", renderVerbTable);
document.getElementById("verb-filter").addEventListener("change", renderVerbTable);

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
let quizQuestions = [], quizCurrent = 0, quizScore = 0, quizAnswered = false;
const QUIZ_TOTAL = 10;

document.getElementById("quiz-start").addEventListener("click", startQuiz);
document.getElementById("quiz-next").addEventListener("click", nextQuestion);
document.getElementById("quiz-restart").addEventListener("click", () => {
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-area").style.display = "none";
});

function startQuiz() {
  const verbs = activeVerbs();
  if (verbs.length < 4) { alert("You need at least 4 words in this theme to start a quiz."); return; }
  const mode = document.getElementById("quiz-mode").value;
  const pool = [...verbs].sort(() => Math.random() - .5).slice(0, Math.min(QUIZ_TOTAL, verbs.length));
  quizQuestions = pool.map(v => buildQuestion(v, mode, verbs));
  quizCurrent = 0; quizScore = 0; quizAnswered = false;
  document.getElementById("quiz-area").style.display = "block";
  document.getElementById("quiz-result").style.display = "none";
  renderQuestion();
}

function buildQuestion(v, mode, pool) {
  let question, correct, wrongPool;
  if (mode === "de-es") {
    question = v.verb; correct = v.es; wrongPool = pool.filter(x => x.verb !== v.verb).map(x => x.es);
    return { q: question, correct, options: shuffleArr([correct, ...wrongPool.slice(0,3)]), label: "What does this verb mean in Spanish?" };
  } else if (mode === "de-en") {
    question = v.verb; correct = v.en; wrongPool = pool.filter(x => x.verb !== v.verb).map(x => x.en);
    return { q: question, correct, options: shuffleArr([correct, ...wrongPool.slice(0,3)]), label: "What does this verb mean in English?" };
  } else if (mode === "es-de") {
    question = v.es; correct = v.verb; wrongPool = pool.filter(x => x.verb !== v.verb).map(x => x.verb);
    return { q: question, correct, options: shuffleArr([correct, ...wrongPool.slice(0,3)]), label: "What is this in German?" };
  } else {
    question = v.en; correct = v.verb; wrongPool = pool.filter(x => x.verb !== v.verb).map(x => x.verb);
    return { q: question, correct, options: shuffleArr([correct, ...wrongPool.slice(0,3)]), label: "What is this in German?" };
  }
}

function renderQuestion() {
  quizAnswered = false;
  const q = quizQuestions[quizCurrent];
  document.getElementById("quiz-qcounter").textContent = `Question ${quizCurrent + 1}/${quizQuestions.length}`;
  document.getElementById("quiz-score").textContent = quizScore;
  document.getElementById("quiz-progress-fill").style.width = `${((quizCurrent + 1) / quizQuestions.length) * 100}%`;
  document.getElementById("quiz-qlabel").textContent = q.label;
  document.getElementById("quiz-question").textContent = q.q;
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-feedback").className = "quiz-feedback";
  document.getElementById("quiz-next").style.display = "none";

  const opts = document.getElementById("quiz-options");
  opts.innerHTML = q.options.map(opt => `<button class="quiz-option" data-opt="${escHtml(opt)}">${escHtml(opt)}</button>`).join("");
  opts.querySelectorAll(".quiz-option").forEach(btn => btn.addEventListener("click", () => selectOption(btn)));
}

function selectOption(btn) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizQuestions[quizCurrent];
  const chosen = btn.dataset.opt;
  const fb = document.getElementById("quiz-feedback");
  document.getElementById("quiz-options").querySelectorAll(".quiz-option").forEach(b => {
    b.disabled = true;
    if (b.dataset.opt === q.correct) b.classList.add("correct");
  });
  if (chosen === q.correct) {
    quizScore++;
    btn.classList.add("correct");
    fb.textContent = "✓ Correct! Well done!";
    fb.className = "quiz-feedback correct";
  } else {
    btn.classList.add("wrong");
    fb.textContent = `✗ Wrong. Correct answer: "${q.correct}"`;
    fb.className = "quiz-feedback wrong";
  }
  document.getElementById("quiz-score").textContent = quizScore;
  document.getElementById("quiz-next").style.display = "inline-flex";
}

function nextQuestion() {
  quizCurrent++;
  if (quizCurrent >= quizQuestions.length) showQuizResult();
  else renderQuestion();
}

function showQuizResult() {
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("quiz-result").style.display = "flex";
  const total = quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);
  const iconMap = { trophy: pct >= 90, "thumbs-up": pct >= 70 && pct < 90, "smile": pct >= 50 && pct < 70, "book-open": pct < 50 };
  const iconName = Object.entries(iconMap).find(([,v]) => v)?.[0] || "book-open";
  document.getElementById("result-emoji").innerHTML = `<i data-lucide="${iconName}"></i>`;
  if (typeof lucide !== "undefined") lucide.createIcons();
  document.getElementById("result-title").textContent  = pct >= 90 ? "Excellent!" : pct >= 70 ? "Well done!" : pct >= 50 ? "Not bad!" : "Keep practicing!";
  document.getElementById("result-text").textContent   = `You got ${quizScore} out of ${total} correct! (${pct}%)`;
}

// ─── WRITING ──────────────────────────────────────────────────────────────────
let writingHistory = [];
let currentWritingVerb = null;

// ── API key management (Groq — free tier) ──
let openAIKey = localStorage.getItem("groq_key") || "";
function updateKeyBar() {
  const bar      = document.getElementById("ai-key-bar");
  const input    = document.getElementById("ai-key-input");
  const saveBtn  = document.getElementById("ai-key-save");
  const clearBtn = document.getElementById("ai-key-clear");
  // also sync the Upload tab bar
  const bar2      = document.getElementById("ai-key-bar-upload");
  const input2    = document.getElementById("ai-key-input-upload");
  const saveBtn2  = document.getElementById("ai-key-save-upload");
  const clearBtn2 = document.getElementById("ai-key-clear-upload");
  const msg2      = document.getElementById("ai-key-bar-upload-msg");

  if (openAIKey) {
    bar.className = "ai-key-bar has-key";
    bar.querySelector("span").textContent = "✓ AI correction enabled (Groq — free)";
    input.style.display = "none";
    saveBtn.style.display = "none";
    clearBtn.style.display = "";
    bar.style.display = "none";  // hide when key is set

    bar2.style.display = "none";  // hide upload bar when key is set
  } else {
    bar.style.display = "";
    bar.className = "ai-key-bar";
    bar.querySelector("span").innerHTML = 'Paste your free <a href="https://console.groq.com/keys" target="_blank">Groq API key</a> to enable AI correction — free, no credit card needed';
    input.style.display = "";
    saveBtn.style.display = "";
    clearBtn.style.display = "none";

    bar2.style.display = "";  // show upload bar when no key
    bar2.className = "ai-key-bar";
    msg2.innerHTML = 'Paste your free <a href="https://console.groq.com/keys" target="_blank">Groq API key</a> to enable smart AI image extraction';
    input2.style.display = "";
    saveBtn2.style.display = "";
    clearBtn2.style.display = "none";
  }
}
document.getElementById("ai-key-save").addEventListener("click", () => {
  const val = document.getElementById("ai-key-input").value.trim();
  if (!val) { alert("Please paste your Groq API key first."); return; }
  if (!val.startsWith("gsk_")) { alert("That doesn't look like a valid Groq key. It should start with 'gsk_'. Get one free at console.groq.com"); return; }
  openAIKey = val;
  localStorage.setItem("groq_key", val);
  updateKeyBar();
});
document.getElementById("ai-key-clear").addEventListener("click", () => {
  openAIKey = "";
  localStorage.removeItem("groq_key");
  document.getElementById("ai-key-input").value = "";
  updateKeyBar();
});
// Upload tab key bar — same key, synced
document.getElementById("ai-key-save-upload").addEventListener("click", () => {
  const val = document.getElementById("ai-key-input-upload").value.trim();
  if (!val) { alert("Please paste your Groq API key first."); return; }
  if (!val.startsWith("gsk_")) { alert("That doesn't look like a valid Groq key. It should start with 'gsk_'. Get one free at console.groq.com"); return; }
  openAIKey = val;
  localStorage.setItem("groq_key", val);
  updateKeyBar();
});
document.getElementById("ai-key-clear-upload").addEventListener("click", () => {
  openAIKey = "";
  localStorage.removeItem("groq_key");
  document.getElementById("ai-key-input-upload").value = "";
  updateKeyBar();
});
updateKeyBar();

let writingVerbIndex = 0;
let writingVerbList  = [];

function loadWritingVerbs() {
  writingVerbList = activeVerbs();
  writingVerbIndex = Math.min(writingVerbIndex, Math.max(0, writingVerbList.length - 1));
}

function pickWritingVerb(index) {
  loadWritingVerbs();
  const verbs = writingVerbList;
  if (!verbs.length) {
    document.getElementById("writing-verb").textContent = "—";
    document.getElementById("writing-hint").textContent = "No words in this theme yet.";
    document.getElementById("writing-verb-counter").textContent = "0 / 0";
    currentWritingVerb = null;
    return;
  }
  if (index !== undefined) writingVerbIndex = ((index % verbs.length) + verbs.length) % verbs.length;
  currentWritingVerb = verbs[writingVerbIndex];
  document.getElementById("writing-verb").textContent = currentWritingVerb.verb;
  document.getElementById("writing-hint").textContent = `Hint: ${currentWritingVerb.example}`;
  document.getElementById("writing-verb-counter").textContent = `${writingVerbIndex + 1} / ${verbs.length}`;
  document.getElementById("writing-feedback-area").style.display = "none";
  document.getElementById("writing-input").value = "";
}

document.getElementById("writing-prev-verb").addEventListener("click", () => pickWritingVerb(writingVerbIndex - 1));
document.getElementById("writing-next-verb").addEventListener("click", () => pickWritingVerb(writingVerbIndex + 1));
document.getElementById("writing-clear").addEventListener("click", () => {
  document.getElementById("writing-input").value = "";
  document.getElementById("writing-feedback-area").style.display = "none";
});

document.getElementById("writing-check").addEventListener("click", async () => {
  const text = document.getElementById("writing-input").value.trim();
  if (!text || !currentWritingVerb) return;

  const btn = document.getElementById("writing-check");
  btn.textContent = "Checking…";
  btn.classList.add("loading");

  let feedback;
  if (openAIKey) {
    feedback = await analyzeWithAI(text, currentWritingVerb);
  } else {
    feedback = analyzeWritingLocal(text, currentWritingVerb);
  }

  btn.textContent = "Check my sentence →";
  btn.classList.remove("loading");
  renderFeedback(feedback);
  writingHistory.unshift({ verb: currentWritingVerb.verb, text, score: feedback.score });
  renderHistory();
});

// ── AI analysis ──
async function analyzeWithAI(text, verbObj) {
  const prompt = `You are a strict but encouraging German B1 language teacher. Carefully analyze this student sentence for ALL errors.

Verb being practiced: "${verbObj.verb}" (${verbObj.es} / ${verbObj.en})
Correct preposition: "${verbObj.prep}" + Akkusativ
Example correct sentence: "${verbObj.example}"

Student wrote: "${text}"

Check ALL of the following rigorously:
1. Is the correct verb used? Is it conjugated correctly for the subject?
2. Is the correct preposition "${verbObj.prep}" present and in the right position?
3. Is the case after the preposition correct? (this verb takes Akkusativ)
4. Is word order correct (verb-second rule, separable verbs split correctly)?
5. Is the sentence capitalised correctly and does it end with punctuation?
6. Are articles, adjective endings, and noun genders correct?
7. If the verb is reflexive (starts with "sich"), is the reflexive pronoun present and correct?

Be SPECIFIC about every error found — name the wrong form and give the right form.
If the sentence is already correct, say so clearly.

Respond ONLY with valid JSON (no markdown, no extra text):
{
  "status": "great" | "ok" | "needs_work",
  "summary": "1–2 sentence comment acknowledging what the student got right",
  "corrected": "the fully corrected German sentence, or empty string if no correction needed",
  "what_to_fix": "numbered list of every specific issue found, or empty string if none. Be explicit: say what is wrong and what the correct form is.",
  "tip": "one practical tip or an alternative example sentence using the same verb"
}`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openAIKey}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 600,
        temperature: 0.2
      })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || "API error");
    }

    const data = await res.json();
    const raw  = data.choices[0].message.content.trim();
    // Strip markdown code fences if present
    const cleaned = raw.replace(/^```json?\s*/i, "").replace(/```\s*$/i, "").trim();
    const json = JSON.parse(cleaned);

    // If there are things to fix, never show "great" — enforce consistency
    const hasIssues = json.what_to_fix && json.what_to_fix.trim().length > 0;
    const status = hasIssues && json.status === "great" ? "ok" : (json.status || "ok");

    const scoreMap = { great: 92, ok: 62, needs_work: 28 };
    return {
      status,
      summary: json.summary || "",
      corrected: json.corrected || "",
      whatToFix: json.what_to_fix || "",
      tip: json.tip || "",
      score: scoreMap[status] ?? 62
    };
  } catch (e) {
    console.error("AI error:", e);
    const local = analyzeWritingLocal(text, verbObj);
    // Show the real error so the user can diagnose it
    const errMsg = e.message || "Unknown error";
    const hint = errMsg.includes("401") ? "Invalid Groq key — clear it and re-paste from console.groq.com." :
                 errMsg.includes("429") ? "Rate limit hit — wait a moment and try again." :
                 errMsg.includes("Failed to fetch") ? "Network error — open via http://localhost:8080 (run: python3 -m http.server 8080)." :
                 errMsg;
    return {
      ...local,
      summary: `⚠ AI error: ${hint}`,
      status: "needs_work"
    };
  }
}

// ── Local fallback analysis ──
function analyzeWritingLocal(text, verbObj) {
  const lower = text.toLowerCase();
  const issues = [];
  let score = 40;

  const verbBase  = verbObj.verb.replace("sich ", "").split(" ")[0].toLowerCase();
  const verbForms = generateVerbForms(verbBase);
  if (verbForms.some(f => lower.includes(f))) { score += 20; }
  else { issues.push(`Verb "${verbBase}" not found in your sentence.`); }

  const prep = verbObj.prep;
  if (prep && (lower.includes(` ${prep} `) || lower.endsWith(` ${prep}`) || lower.startsWith(`${prep} `))) { score += 20; }
  else if (prep) { issues.push(`Preposition "${prep}" is missing or misplaced.`); }

  if (!/^[A-ZÄÖÜ]/.test(text)) issues.push("Sentences start with a capital letter in German.");
  if (!/[.!?]$/.test(text))     issues.push("Don't forget the punctuation at the end (. ! ?).");

  if (verbObj.verb.startsWith("sich")) {
    const pronouns = ["mich","dich","sich","uns","euch"];
    if (!pronouns.some(p => lower.includes(` ${p}`))) {
      issues.push("Reflexive pronoun missing (mich / dich / sich / uns / euch).");
    }
  }

  score = Math.min(score, 100);
  const status = score >= 75 ? "great" : score >= 45 ? "ok" : "needs_work";

  return {
    status,
    summary: score >= 75
      ? "Good effort! Your sentence looks structurally correct."
      : "Good try! A few things to review below.",
    corrected: "",
    whatToFix: issues.length ? issues.join(" ") : "",
    tip: `Example: ${verbObj.example}`,
    score
  };
}

function generateVerbForms(base) {
  const stems = [base];
  if (base.endsWith("en"))  stems.push(base.slice(0,-2), base.slice(0,-2)+"e", base.slice(0,-2)+"st", base.slice(0,-2)+"t");
  if (base.endsWith("ern")) stems.push(base.slice(0,-3), base.slice(0,-3)+"ere", base.slice(0,-3)+"erst");
  return stems;
}

function renderFeedback({ status, summary, corrected, whatToFix, tip }) {
  const statusMap = {
    great:      { dot: "good",  label: "GREAT JOB" },
    ok:         { dot: "ok",    label: "GOOD EFFORT" },
    needs_work: { dot: "bad",   label: "NEEDS WORK" }
  };
  const { dot, label } = statusMap[status] || statusMap.ok;

  document.getElementById("fb-status-dot").className   = `fb-status-dot ${dot}`;
  document.getElementById("fb-status-label").className = `fb-status-label ${dot}`;
  document.getElementById("fb-status-label").textContent = label;
  document.getElementById("fb-summary").textContent    = summary;

  const corrBlock = document.getElementById("fb-correction-block");
  if (corrected) {
    corrBlock.style.display = "";
    document.getElementById("fb-corrected").textContent = corrected;
  } else {
    corrBlock.style.display = "none";
  }

  const fixBlock = document.getElementById("fb-fix-block");
  if (whatToFix) {
    fixBlock.style.display = "";
    document.getElementById("fb-fix-text").textContent = whatToFix;
  } else {
    fixBlock.style.display = "none";
  }

  const tipBlock = document.getElementById("fb-tip-block");
  if (tip) {
    tipBlock.style.display = "";
    document.getElementById("fb-tip-text").textContent = tip;
  } else {
    tipBlock.style.display = "none";
  }

  const area = document.getElementById("writing-feedback-area");
  area.style.display = "flex";
  // re-init lucide icons inside the feedback card
  lucide.createIcons();
}

function renderHistory() {
  const list = document.getElementById("history-list");
  if (!writingHistory.length) { list.innerHTML = `<p class="history-empty">No entries yet.</p>`; return; }
  list.innerHTML = writingHistory.slice(0, 8).map(h => `
    <div class="history-item">
      <div class="h-verb">${escHtml(h.verb)}</div>
      <div class="h-text">${escHtml(h.text)}</div>
      <div class="h-score">Score: ${h.score}/100</div>
    </div>
  `).join("");
}

// ─── UPLOAD ───────────────────────────────────────────────────────────────────
let pendingCSVVerbs = [];

const dropZone  = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");

dropZone.addEventListener("dragover", e => { e.preventDefault(); dropZone.classList.add("drag-over"); });
dropZone.addEventListener("dragleave", () => dropZone.classList.remove("drag-over"));
dropZone.addEventListener("drop", e => {
  e.preventDefault(); dropZone.classList.remove("drag-over");
  if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener("change", () => { if (fileInput.files[0]) processFile(fileInput.files[0]); });

function processFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const lines = e.target.result.split("\n").filter(l => l.trim());
    pendingCSVVerbs = [];
    const errors = [];
    lines.forEach((line, i) => {
      if (i === 0 && line.toLowerCase().startsWith("verb")) return;
      const parts = line.split(",").map(p => p.trim().replace(/^"|"$/g, ""));
      if (parts.length < 4) { errors.push(`Row ${i+1}: too few fields`); return; }
      const [verb, prep, es, en, example, theme] = parts;
      if (!verb || !es || !en) { errors.push(`Row ${i+1}: required fields missing`); return; }
      pendingCSVVerbs.push({ verb, prep: prep || "", es, en, example: example || "", theme: theme || activeThemeId });
    });
    const preview = document.getElementById("upload-preview");
    preview.innerHTML = `<strong>${pendingCSVVerbs.length} verbs detected.</strong>` +
      (errors.length ? `<br><span style="color:var(--danger)">${errors.join("<br>")}</span>` : "") +
      (pendingCSVVerbs.length ? `<br>${pendingCSVVerbs.slice(0,3).map(v => escHtml(v.verb)).join(", ")}${pendingCSVVerbs.length > 3 ? "…" : ""}` : "");
    document.getElementById("upload-apply").style.display = pendingCSVVerbs.length ? "inline-flex" : "none";
  };
  reader.readAsText(file);
}

document.getElementById("upload-apply").addEventListener("click", () => {
  customVerbs = [...customVerbs, ...pendingCSVVerbs];
  saveState();
  renderSidebarThemes();
  shuffleDeck();
  document.getElementById("upload-preview").innerHTML = `<span style="color:var(--success)">✓ ${pendingCSVVerbs.length} verbs added!</span>`;
  document.getElementById("upload-apply").style.display = "none";
  pendingCSVVerbs = [];
  renderCustomVerbs();
});

// manual section toggle
document.getElementById("manual-toggle").addEventListener("click", () => {
  const body    = document.getElementById("manual-collapsible");
  const chevron = document.getElementById("manual-chevron");
  const open    = body.style.display === "none";
  body.style.display   = open ? "block" : "none";
  chevron.style.transform = open ? "rotate(180deg)" : "";
});

document.getElementById("manual-add").addEventListener("click", () => {
  const verb    = document.getElementById("m-verb").value.trim();
  const prep    = document.getElementById("m-prep").value.trim();
  const es      = document.getElementById("m-es").value.trim();
  const en      = document.getElementById("m-en").value.trim();
  const example = document.getElementById("m-example").value.trim();
  const themeId = activeThemeId;
  const fb      = document.getElementById("manual-feedback");

  if (!verb || !es || !en) {
    fb.textContent = "Please fill in verb, Spanish and English fields.";
    fb.className = "manual-feedback error";
    return;
  }
  const entry = { verb: prep ? `${verb} ${prep}` : verb, prep, es, en, example, theme: themeId };
  customVerbs.push(entry);
  saveState();
  renderSidebarThemes();
  if (themeId === activeThemeId) { shuffleDeck(); if (activeSection === "verbs") renderVerbTable(); }
  renderCustomVerbs();
  ["m-verb","m-prep","m-es","m-en","m-example"].forEach(id => document.getElementById(id).value = "");
  fb.textContent = `✓ "${entry.verb}" added to "${allThemes().find(t=>t.id===themeId)?.name || themeId}"!`;
  fb.className = "manual-feedback success";
  setTimeout(() => { fb.textContent = ""; }, 3000);
});

// ─── THEME BAR in Upload ──────────────────────────────────────────────────────
function updateUploadThemeBar() {
  const theme = allThemes().find(t => t.id === activeThemeId);
  if (!theme) return;
  const dot = document.getElementById("upload-theme-dot");
  const name = document.getElementById("upload-theme-name");
  if (dot)  dot.style.background = theme.color || "#c2603d";
  if (name) name.textContent = theme.name;
  // sync manual form theme selector
  const mThemeSel = document.getElementById("m-theme");
  if (mThemeSel) mThemeSel.value = activeThemeId;
}

// ─── THEME VERB LIST (replaces renderCustomVerbs) ────────────────────────────
function renderCustomVerbs() { renderThemeVerbs(); } // keep old callers working

function renderThemeVerbs() {
  const verbs   = verbsForTheme(activeThemeId);
  const listEl  = document.getElementById("theme-verb-list");
  const countEl = document.getElementById("theme-verbs-count");
  if (!listEl) return;

  countEl.textContent = `(${verbs.length})`;

  if (!verbs.length) {
    listEl.innerHTML = `<p class="history-empty">No verbs in this theme yet. Upload or add some above.</p>`;
    document.getElementById("theme-select-all-btn").style.display = "none";
    return;
  }
  document.getElementById("theme-select-all-btn").style.display = "";

  // Map each verb back to its index in the correct source array
  listEl.innerHTML = verbs.map((v, i) => {
    const isBuiltin = BUILTIN_VERBS.includes(v);
    const srcIdx = isBuiltin
      ? BUILTIN_VERBS.indexOf(v)
      : customVerbs.indexOf(v);
    return `
    <div class="theme-verb-row" data-src="${isBuiltin ? "builtin" : "custom"}" data-idx="${srcIdx}">
      <input type="checkbox" class="theme-verb-check custom-item-check" />
      <div class="theme-verb-fields" id="tvf-${i}">
        <span class="tvf-verb">${escHtml(v.verb)}</span>
        <span class="tvf-sep">·</span>
        <span class="tvf-en">${escHtml(v.en)}</span>
        <span class="tvf-sep">·</span>
        <span class="tvf-es">${escHtml(v.es)}</span>
        ${v.example ? `<span class="tvf-example">${escHtml(v.example)}</span>` : ""}
      </div>
      <div class="theme-verb-actions">
        ${!isBuiltin ? `<button class="tvf-edit-btn btn btn-ghost btn-sm" data-i="${i}"><i data-lucide="pencil" style="width:12px;height:12px"></i></button>` : `<span class="tvf-builtin-badge">built-in</span>`}
        ${!isBuiltin ? `<button class="tvf-delete-btn custom-item-delete" data-src="custom" data-idx="${srcIdx}">×</button>` : ""}
      </div>
    </div>`;
  }).join("");

  lucide.createIcons();

  // Single delete
  listEl.querySelectorAll(".tvf-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      customVerbs.splice(idx, 1);
      saveState(); renderSidebarThemes(); renderThemeVerbs();
      if (activeSection === "verbs") renderVerbTable();
      shuffleDeck();
    });
  });

  // Inline edit
  listEl.querySelectorAll(".tvf-edit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const i   = Number(btn.dataset.i);
      const row = listEl.querySelectorAll(".theme-verb-row")[i];
      const v   = verbs[i];
      const srcIdx = customVerbs.indexOf(v);
      if (srcIdx === -1) return;
      const fieldsEl = row.querySelector(".theme-verb-fields");
      fieldsEl.innerHTML = `
        <input class="text-input tvf-inp" id="tvf-ev"  value="${escHtml(v.verb)}"    placeholder="Verb + prep" style="flex:1.2"/>
        <input class="text-input tvf-inp" id="tvf-een" value="${escHtml(v.en)}"      placeholder="English" style="flex:1"/>
        <input class="text-input tvf-inp" id="tvf-ees" value="${escHtml(v.es)}"      placeholder="Spanish" style="flex:1"/>
        <input class="text-input tvf-inp" id="tvf-eex" value="${escHtml(v.example)}" placeholder="Example (optional)" style="flex:2"/>
        <button class="btn btn-success btn-sm tvf-save-btn">Save</button>
        <button class="btn btn-ghost btn-sm tvf-cancel-btn">Cancel</button>
      `;
      row.querySelector(".tvf-save-btn").addEventListener("click", () => {
        customVerbs[srcIdx] = {
          ...customVerbs[srcIdx],
          verb:    row.querySelector("#tvf-ev").value.trim(),
          en:      row.querySelector("#tvf-een").value.trim(),
          es:      row.querySelector("#tvf-ees").value.trim(),
          example: row.querySelector("#tvf-eex").value.trim()
        };
        saveState(); renderSidebarThemes(); renderThemeVerbs();
        if (activeSection === "verbs") renderVerbTable();
        shuffleDeck();
      });
      row.querySelector(".tvf-cancel-btn").addEventListener("click", () => renderThemeVerbs());
    });
  });

  // Checkbox batch select/delete
  function updateBatchBtn() {
    const checked = listEl.querySelectorAll(".theme-verb-check:checked");
    const delBtn  = document.getElementById("theme-delete-selected-btn");
    delBtn.style.display = checked.length ? "" : "none";
    delBtn.textContent = `🗑 Delete ${checked.length} selected`;
  }
  listEl.querySelectorAll(".theme-verb-check").forEach(cb => cb.addEventListener("change", updateBatchBtn));

  document.getElementById("theme-select-all-btn").onclick = () => {
    const all     = listEl.querySelectorAll(".theme-verb-check");
    const allChecked = [...all].every(c => c.checked);
    all.forEach(c => c.checked = !allChecked);
    updateBatchBtn();
  };

  document.getElementById("theme-delete-selected-btn").onclick = () => {
    const toDelete = [...listEl.querySelectorAll(".theme-verb-check:checked")]
      .map(cb => cb.closest(".theme-verb-row"))
      .filter(row => row.dataset.src === "custom")
      .map(row => Number(row.dataset.idx))
      .sort((a, b) => b - a); // delete from end to keep indices stable
    toDelete.forEach(idx => customVerbs.splice(idx, 1));
    saveState(); renderSidebarThemes(); renderThemeVerbs();
    if (activeSection === "verbs") renderVerbTable();
    shuffleDeck();
  };
}

document.getElementById("download-template").addEventListener("click", () => {
  const csv = `verb,preposition,spanish,english,example,theme\nachten,auf,prestar atención a,to pay attention to,Ich achte beim Fahrradfahren auf den Verkehr.,verben-praep-akk\n`;
  const a = document.createElement("a");
  a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
  a.download = "german_verbs_template.csv";
  a.click();
});

// ─── IMAGE OCR UPLOAD ─────────────────────────────────────────────────────────
let pendingOCRVerbs = [];

const imgInput    = document.getElementById("img-input");
const imgDropZone = document.getElementById("img-drop-zone");

imgDropZone.addEventListener("dragover",  e => { e.preventDefault(); imgDropZone.classList.add("drag-over"); });
imgDropZone.addEventListener("dragleave", () => imgDropZone.classList.remove("drag-over"));
imgDropZone.addEventListener("drop", e => {
  e.preventDefault(); imgDropZone.classList.remove("drag-over");
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) handleImageOCR(file);
});
imgInput.addEventListener("change", () => { if (imgInput.files[0]) handleImageOCR(imgInput.files[0]); });

async function handleImageOCR(file) {
  const previewWrap = document.getElementById("img-preview-wrap");
  const previewImg  = document.getElementById("img-preview");
  const statusEl    = document.getElementById("ocr-status");
  const resultWrap  = document.getElementById("ocr-result-wrap");
  const ocrPreview  = document.getElementById("ocr-preview");
  const applyBtn    = document.getElementById("ocr-apply");

  // Reset
  resultWrap.style.display = "none";
  ocrPreview.innerHTML = "";
  applyBtn.style.display = "none";
  pendingOCRVerbs = [];

  // Show image preview
  const dataURL = await fileToDataURL(file);
  previewImg.src = dataURL;
  previewWrap.style.display = "block";

  // Step 1 — Tesseract OCR
  statusEl.textContent = "Reading image… 0%";
  statusEl.className = "ocr-status processing";

  let rawText = "";
  try {
    const result = await Tesseract.recognize(dataURL, "eng+deu+spa", {
      logger: m => {
        if (m.status === "recognizing text") {
          statusEl.textContent = `Reading image… ${Math.round(m.progress * 100)}%`;
        }
      }
    });
    rawText = result.data.text.trim();
  } catch (err) {
    statusEl.textContent = "✗ Could not read image. Try a clearer, well-lit photo.";
    statusEl.className = "ocr-status error";
    return;
  }

  if (rawText.length < 5) {
    statusEl.textContent = "⚠ Very little text found. Try a clearer image.";
    statusEl.className = "ocr-status error";
    return;
  }

  // Show raw text for reference
  document.getElementById("ocr-text").value = rawText;
  resultWrap.style.display = "block";

  // Step 2 — AI extraction (if key available) or manual parse
  if (openAIKey) {
    statusEl.textContent = "AI is extracting vocabulary…";
    statusEl.className = "ocr-status processing";
    try {
      pendingOCRVerbs = await extractVerbsWithAI(rawText);
      statusEl.textContent = `✓ ${pendingOCRVerbs.length} verb${pendingOCRVerbs.length !== 1 ? "s" : ""} extracted by AI`;
      statusEl.className = "ocr-status success";
      showOCRPreview(pendingOCRVerbs, []);
    } catch (e) {
      statusEl.textContent = `⚠ AI extraction failed: ${e.message}`;
      statusEl.className = "ocr-status error";
      // Still show the text so user can re-try
      document.getElementById("ocr-parse-btn").textContent = "Re-extract with AI →";
    }
  } else {
    statusEl.innerHTML = `⚠ No Groq key found — go to the <strong>Writing</strong> tab first, paste your key and click Save. Then come back here and upload again.`;
    statusEl.className = "ocr-status error";
  }
  lucide.createIcons();
}

async function extractVerbsWithAI(rawText) {
  const prompt = `You are a German language expert. The following text was extracted via OCR from an image of a German vocabulary list or textbook page.

OCR text:
"""
${rawText}
"""

Your job:
1. Identify every German verb entry (with or without preposition, e.g. "achten auf", "sich erinnern an", "warten auf")
2. For each verb, find or infer:
   - The verb + preposition (e.g. "achten auf")
   - The preposition alone (e.g. "auf")
   - The Spanish translation — always provide the correct one
   - The English translation — always provide the correct one
   - An example sentence in German — use one from the text if present, otherwise generate a natural B1-level sentence using the verb correctly.
3. Fix any OCR errors in the German text (e.g. "vvarten" → "warten", "aul" → "auf")
4. Skip any lines that are clearly headers, page numbers, or non-vocabulary content

Return ONLY a JSON array (no markdown, no extra text):
[
  {
    "verb": "achten auf",
    "prep": "auf",
    "es": "prestar atención a",
    "en": "to pay attention to",
    "example": "Ich achte beim Fahrradfahren auf den Verkehr."
  }
]`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openAIKey}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
      temperature: 0.1
    })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "API error");
  }

  const data = await res.json();
  const raw  = data.choices[0].message.content.trim();
  const cleaned = raw.replace(/^```json?\s*/i, "").replace(/```\s*$/i, "").trim();
  const parsed = JSON.parse(cleaned);

  return parsed.map(v => ({
    verb:    (v.verb    || "").trim(),
    prep:    (v.prep    || "").trim(),
    es:      (v.es      || "").trim(),
    en:      (v.en      || "").trim(),
    example: (v.example || "").trim(),
    theme:   activeThemeId
  })).filter(v => v.verb && v.en);
}

function showOCRPreview(verbs, errors) {
  const preview = document.getElementById("ocr-preview");
  if (!verbs.length) {
    preview.innerHTML = `<span style="color:var(--danger)">No verbs found. Try editing the text above and click Parse.</span>`;
    document.getElementById("ocr-apply").style.display = "none";
    return;
  }
  preview.innerHTML =
    `<strong>${verbs.length} verb${verbs.length !== 1 ? "s" : ""} ready to add:</strong><br>` +
    `<span style="font-size:.8rem;color:var(--text-secondary)">${verbs.slice(0, 6).map(v =>
      `<strong>${escHtml(v.verb)}</strong> — ${escHtml(v.en)}`
    ).join(" &nbsp;·&nbsp; ")}${verbs.length > 6 ? ` &nbsp;+${verbs.length - 6} more` : ""}</span>` +
    (errors.length ? `<br><span style="color:var(--danger);font-size:.8rem">${errors.slice(0,3).join("<br>")}</span>` : "");
  document.getElementById("ocr-apply").style.display = "inline-flex";
}

document.getElementById("ocr-parse-btn").addEventListener("click", () => {
  const raw = document.getElementById("ocr-text").value;
  if (openAIKey) {
    // Re-run AI extraction on edited text
    const statusEl = document.getElementById("ocr-status");
    statusEl.textContent = "AI is extracting vocabulary…";
    statusEl.className = "ocr-status processing";
    extractVerbsWithAI(raw).then(verbs => {
      pendingOCRVerbs = verbs;
      statusEl.textContent = `✓ ${verbs.length} verb${verbs.length !== 1 ? "s" : ""} extracted`;
      statusEl.className = "ocr-status success";
      showOCRPreview(verbs, []);
    }).catch(e => {
      statusEl.textContent = `AI error: ${e.message}`;
      statusEl.className = "ocr-status error";
    });
  } else {
    const { verbs, errors } = parseOCRText(raw);
    pendingOCRVerbs = verbs;
    showOCRPreview(verbs, errors);
  }
});

function fileToDataURL(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = e => res(e.target.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

function parseOCRText(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 2);
  const verbs = [], errors = [];
  lines.forEach((line, i) => {
    if (/^(verb|deutsch|german|english|spanish|español|wort|prep)/i.test(line)) return;
    let parts = null;
    for (const sep of ["\t", "|", ";", ","]) {
      const split = line.split(sep).map(p => p.trim()).filter(p => p);
      if (split.length >= 3) { parts = split; break; }
    }
    if (!parts) {
      const spaceSplit = line.split(/\s{2,}/).map(p => p.trim()).filter(p => p);
      if (spaceSplit.length >= 3) parts = spaceSplit;
    }
    if (!parts || parts.length < 3) {
      if (line.length > 5) errors.push(`Line ${i + 1}: couldn't parse — "${line.substring(0, 45)}"`);
      return;
    }
    let verb = "", prep = "", es = "", en = "", example = "";
    if (parts.length >= 4) { [verb, prep, es, en, example = ""] = parts; }
    else { [verb, es, en] = parts; }
    if (!verb || (!es && !en)) { errors.push(`Line ${i + 1}: missing fields`); return; }
    verbs.push({ verb: verb.trim(), prep: prep?.trim()||"", es: es?.trim()||"", en: en?.trim()||"", example: example?.trim()||"", theme: activeThemeId });
  });
  return { verbs, errors };
}

let lastAddedOCRVerbs = [];  // for undo

document.getElementById("ocr-apply").addEventListener("click", () => {
  if (!pendingOCRVerbs.length) return;
  lastAddedOCRVerbs = [...pendingOCRVerbs];
  customVerbs = [...customVerbs, ...pendingOCRVerbs];
  saveState();
  renderSidebarThemes();
  shuffleDeck();
  document.getElementById("ocr-preview").innerHTML =
    `<span style="color:var(--success)">✓ ${lastAddedOCRVerbs.length} verb${lastAddedOCRVerbs.length !== 1 ? "s" : ""} added!</span> ` +
    `<button class="btn btn-ghost btn-sm" id="ocr-undo" style="margin-left:.5rem;color:var(--danger);border-color:var(--danger)">↩ Undo</button>`;
  document.getElementById("ocr-apply").style.display = "none";
  pendingOCRVerbs = [];
  renderCustomVerbs();

  document.getElementById("ocr-undo").addEventListener("click", () => {
    // Remove exactly the verbs from the last batch by matching verb+theme
    const toRemove = new Set(lastAddedOCRVerbs.map(v => v.verb + "||" + v.theme));
    customVerbs = customVerbs.filter(v => !toRemove.has(v.verb + "||" + v.theme));
    saveState();
    renderSidebarThemes();
    shuffleDeck();
    renderCustomVerbs();
    document.getElementById("ocr-preview").innerHTML =
      `<span style="color:var(--text-muted)">↩ Undone — ${lastAddedOCRVerbs.length} verb${lastAddedOCRVerbs.length !== 1 ? "s" : ""} removed.</span>`;
    lastAddedOCRVerbs = [];
  });
});

// ─── UTILS ────────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function shuffleArr(arr) { return arr.sort(() => Math.random() - .5); }

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderSidebarThemes();
shuffleDeck();
renderHistory();
lucide.createIcons();
// set initial title to active theme name
const _initTheme = allThemes().find(t => t.id === activeThemeId);
if (_initTheme) { const el = document.getElementById("fc-section-title"); if (el) el.textContent = _initTheme.name; }
