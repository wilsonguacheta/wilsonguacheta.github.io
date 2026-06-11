/* ============================================================
   TRANSLATIONS — populated in Phase 2 with real content
   ============================================================ */
const translations = {
  es: {
    /* Nav */
    "nav.about":    "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact":  "Contacto",
    /* Hero */
    "hero.eyebrow":      "Data Analyst · GIS & BI · Colombia",
    "hero.title":        "Wilson Guacheta",
    "hero.subtitle":     "Transformo datos geoespaciales complejos en insights accionables para infraestructura, medio ambiente y logística.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.cv":       "Descargar CV",
    /* About */
    "about.title": "Sobre mí",
    "about.body":  "Soy analista de datos con base en ingeniería ambiental y especialización en Sistemas de Información Geográfica. Combino Python, SQL y herramientas de BI con análisis geoespacial para resolver preguntas analíticas en proyectos de infraestructura, medio ambiente y logística. Me motiva convertir datos ruidosos y heterogéneos en decisiones claras y basadas en evidencia. Actualmente trabajo como GIS Specialist en AECOM, Bogotá.",
    /* Skills */
    "skills.title": "Habilidades",
    /* Projects */
    "projects.title": "Proyectos",
    "projects.cta":   "Ver caso",
    /* Project descriptions */
    "p1.title": "Expediciones Himaláyicas (1905–2024)",
    "p1.desc":  "Análisis de 120 años de montañismo: 11 562 expediciones, 481 picos y tendencias históricas de éxito en el Himalaya.",
    "p2.title": "Expansión Urbana Colombia (1975–2030)",
    "p2.desc":  "Pipeline geoespacial end-to-end: 85 ciudades colombianas, 8 fuentes de datos y 6 módulos analíticos sobre crecimiento, sprawl y riesgos ambientales.",
    "p3.title": "E-Commerce Geoespacial — Olist",
    "p3.desc":  "Estadística espacial avanzada sobre 100 000 órdenes brasileñas: clustering, regresión ponderada y autocorrelación integradas en un dashboard interactivo.",
    /* Contact */
    "contact.title": "Contacto",
    /* Footer */
    "footer.copy": "Diseñado y desarrollado por Wilson Guacheta",
    /* Case studies — shared */
    "case.back":        "← Proyectos",
    "case.summary":     "Resumen ejecutivo",
    "case.context":     "Contexto / Problema",
    "case.data":        "Datos",
    "case.tools":       "Herramientas y tecnologías",
    "case.method":      "Metodología / Proceso",
    "case.role":        "Mi rol y contribución",
    "case.results":     "Resultados e insights",
    "case.conclusions": "Conclusiones",
    "case.links":       "Ver repositorio",
    "case.demo":        "Ver demo",
  },
  en: {
    /* Nav */
    "nav.about":    "About",
    "nav.projects": "Projects",
    "nav.contact":  "Contact",
    /* Hero */
    "hero.eyebrow":      "Data Analyst · GIS & BI · Colombia",
    "hero.title":        "Wilson Guacheta",
    "hero.subtitle":     "I turn complex geospatial data into actionable insights for infrastructure, environmental, and logistics projects.",
    "hero.cta.projects": "View projects",
    "hero.cta.cv":       "Download CV",
    /* About */
    "about.title": "About me",
    "about.body":  "I'm a data analyst with a background in environmental engineering and a GIS specialization. I combine Python, SQL, and BI tools with spatial analysis to answer analytical questions in infrastructure, environmental, and logistics projects. I'm driven by turning noisy, heterogeneous data into clear, evidence-based decisions. Currently working as a GIS Specialist at AECOM, Bogotá.",
    /* Skills */
    "skills.title": "Skills",
    /* Projects */
    "projects.title": "Projects",
    "projects.cta":   "View case",
    /* Project descriptions */
    "p1.title": "Himalayan Expeditions (1905–2024)",
    "p1.desc":  "120 years of mountaineering history: 11,562 expeditions, 481 peaks, and historical success trends across the Himalayas.",
    "p2.title": "Colombia Urban Growth (1975–2030)",
    "p2.desc":  "End-to-end geospatial pipeline: 85 Colombian cities, 8 data sources, and 6 analytical modules on growth, sprawl, and environmental risk.",
    "p3.title": "Geospatial E-Commerce — Olist",
    "p3.desc":  "Advanced spatial statistics on 100k Brazilian orders: clustering, geographically weighted regression, and autocorrelation in an interactive dashboard.",
    /* Contact */
    "contact.title": "Contact",
    /* Footer */
    "footer.copy": "Designed and developed by Wilson Guacheta",
    /* Case studies — shared */
    "case.back":        "← Projects",
    "case.summary":     "Executive summary",
    "case.context":     "Context / Problem",
    "case.data":        "Data",
    "case.tools":       "Tools & technologies",
    "case.method":      "Methodology / Process",
    "case.role":        "My role & contribution",
    "case.results":     "Results & insights",
    "case.conclusions": "Conclusions",
    "case.links":       "View repository",
    "case.demo":        "View demo",
  }
};

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
let currentLang = localStorage.getItem("lang") || "es";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";

  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-href]").forEach(el => {
    const key = el.getAttribute("data-i18n-href");
    if (t[key] !== undefined) el.setAttribute("href", t[key]);
  });
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("nav-hamburger");
  if (!nav || !btn) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    btn.setAttribute("aria-expanded", String(open));
  });

  /* Close on link click */
  nav.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   DYNAMIC YEAR
   ============================================================ */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   SMOOTH SCROLL (fallback for older browsers)
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initYear();
  initSmoothScroll();
  setLanguage(currentLang);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      setLanguage(currentLang === "es" ? "en" : "es");
    });
  }
});
