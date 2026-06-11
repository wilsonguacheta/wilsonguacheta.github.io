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
    /* Shared table headers */
    "table.characteristic": "Característica",
    "table.detail":         "Detalle",
    "table.analysis":       "Análisis",
    "table.finding":        "Hallazgo",
    "table.source":         "Fuente",
    "table.product":        "Producto",
    "table.period":         "Período",
    "table.type":           "Tipo",
    "table.module":         "Módulo",
    "table.key-finding":    "Hallazgo clave",
    /* Skills groups (index.html) */
    "skills.group.languages": "Lenguajes",
    "skills.group.data":      "Datos / EDA",
    "skills.group.geo":       "Geoespacial",
    "skills.group.stats":     "Estadística espacial",
    "skills.group.bi":        "BI / Visualización",
    "skills.group.db":        "Bases de datos",
    "skills.group.tools":     "Herramientas",
    /* Project taglines */
    "p1.tagline": "120 años de alpinismo: conquista de picos, escaladores de élite, tendencias históricas y el Everest bajo la lupa.",
    "p2.tagline": "Pipeline geoespacial end-to-end: 85 ciudades colombianas, 8 fuentes heterogéneas, 6 módulos analíticos sobre crecimiento, sprawl, deforestación y riesgos naturales.",
    "p3.tagline": "Estadística espacial avanzada sobre 100 000 órdenes brasileñas (2016–2018): clustering de vendedores, variación regional en tiempos de entrega y autocorrelación espacial de satisfacción.",
    /* P1 step labels */
    "p1.step.load":     "Carga",
    "p1.step.clean":    "Limpieza",
    "p1.step.merge":    "Merge",
    "p1.step.analysis": "Análisis y visualización",
    /* P2 tool groups */
    "p2.tools.geo-raster": "Geoespacial raster",
    "p2.tools.geo-vector": "Geoespacial vector",
    "p2.tools.db":         "Base de datos",
    "p2.tools.analysis":   "Análisis y visualización",
    /* P2 step labels */
    "p2.step.0": "Estandarización",
    "p2.step.1": "Carga en base de datos",
    "p2.step.2": "Módulos analíticos (M1–M6)",
    "p2.step.3": "Reporte narrativo",
    /* P3 tool groups */
    "p3.tools.geo-stats": "Geoespacial y estadística espacial",
    "p3.tools.viz":       "Visualización",
    "p3.tools.dashboard": "Dashboard",
    "p3.tools.data-env":  "Datos y entorno",
    /* P3 step labels */
    "p3.step.1": "EDA",
    "p3.step.2": "Calidad geoespacial",
    "p3.step.3": "Clustering DBSCAN",
    "p3.step.4": "GWR (Regresión Geográficamente Ponderada)",
    "p3.step.5": "Moran's I / LISA",
    "p3.step.6": "Dashboard Power BI",
    /* P3 map/results labels */
    "p3.results.maps":      "Mapas interactivos",
    "p3.results.dashboard": "Dashboard Power BI",
    "p3.map.dbscan":        "Clusters DBSCAN de vendedores",
    "p3.map.gwr":           "Coeficientes GWR: efecto local de la distancia sobre la entrega",
    "p3.map.lisa":          "LISA — autocorrelación espacial de satisfacción",
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
    /* Shared table headers */
    "table.characteristic": "Characteristic",
    "table.detail":         "Detail",
    "table.analysis":       "Analysis",
    "table.finding":        "Finding",
    "table.source":         "Source",
    "table.product":        "Product",
    "table.period":         "Period",
    "table.type":           "Type",
    "table.module":         "Module",
    "table.key-finding":    "Key finding",
    /* Skills groups (index.html) */
    "skills.group.languages": "Languages",
    "skills.group.data":      "Data / EDA",
    "skills.group.geo":       "Geospatial",
    "skills.group.stats":     "Spatial Statistics",
    "skills.group.bi":        "BI / Visualization",
    "skills.group.db":        "Databases",
    "skills.group.tools":     "Tools",
    /* Project taglines */
    "p1.tagline": "120 years of mountaineering: peak conquests, elite climbers, historical trends, and Everest in the spotlight.",
    "p2.tagline": "End-to-end geospatial pipeline: 85 Colombian cities, 8 heterogeneous sources, 6 analytical modules on growth, sprawl, deforestation, and natural hazards.",
    "p3.tagline": "Advanced spatial statistics on 100,000 Brazilian orders (2016–2018): seller clustering, regional delivery time variation, and spatial autocorrelation of satisfaction.",
    /* P1 step labels */
    "p1.step.load":     "Load",
    "p1.step.clean":    "Cleaning",
    "p1.step.merge":    "Merge",
    "p1.step.analysis": "Analysis & visualization",
    /* P2 tool groups */
    "p2.tools.geo-raster": "Geospatial raster",
    "p2.tools.geo-vector": "Geospatial vector",
    "p2.tools.db":         "Database",
    "p2.tools.analysis":   "Analysis and visualization",
    /* P2 step labels */
    "p2.step.0": "Standardization",
    "p2.step.1": "Database load",
    "p2.step.2": "Analytical modules (M1–M6)",
    "p2.step.3": "Narrative report",
    /* P3 tool groups */
    "p3.tools.geo-stats": "Geospatial and spatial statistics",
    "p3.tools.viz":       "Visualization",
    "p3.tools.dashboard": "Dashboard",
    "p3.tools.data-env":  "Data and environment",
    /* P3 step labels */
    "p3.step.1": "EDA",
    "p3.step.2": "Geospatial quality",
    "p3.step.3": "DBSCAN Clustering",
    "p3.step.4": "GWR (Geographically Weighted Regression)",
    "p3.step.5": "Moran's I / LISA",
    "p3.step.6": "Power BI Dashboard",
    /* P3 map/results labels */
    "p3.results.maps":      "Interactive maps",
    "p3.results.dashboard": "Power BI Dashboard",
    "p3.map.dbscan":        "DBSCAN seller clusters",
    "p3.map.gwr":           "GWR Coefficients: local distance effect on delivery",
    "p3.map.lisa":          "LISA — spatial autocorrelation of satisfaction",
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
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initYear();
  setLanguage(currentLang);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      setLanguage(currentLang === "es" ? "en" : "es");
    });
  }
});
