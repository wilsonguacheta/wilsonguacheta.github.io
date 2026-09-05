# Portafolio — Wilson Guacheta · Data Analyst

Portafolio personal publicado en GitHub Pages.
**URL en vivo:** `https://wilsonguacheta.github.io`

---

## Proyectos

| # | Proyecto | Stack principal |
|---|---|---|
| 1 | Expediciones Himaláyicas (1905–2024) | Python · Pandas · Plotly |
| 2 | Expansión Urbana Colombia (1975–2030) | Python · GeoPandas · PostGIS · rasterio |
| 3 | E-Commerce Geoespacial Olist | Python · DBSCAN · GWR · Power BI |
| 4 | CallMeMaybe — Operadores Ineficaces | Python · Pandas · SciPy · Tableau |
| 5 | Test A/B — Sistema de Recomendaciones | Python · Pandas · SciPy |
| 6 | SQL — Servicio de Libros | SQL · PostgreSQL · Pandas |

---

## Estructura del repositorio

```
.
├── index.html                 # Landing page
├── projects/
│   ├── proyecto-1.html        # Himalayan Climbing
│   ├── proyecto-2.html        # Urban Growth Colombia
│   ├── proyecto-3.html        # Olist E-Commerce
│   ├── proyecto-4.html        # CallMeMaybe — Operadores Ineficaces
│   ├── proyecto-5.html        # Test A/B — Recomendaciones
│   └── proyecto-6.html        # SQL — Servicio de Libros
├── assets/
│   ├── css/styles.css         # Tokens, reset, layout, responsive
│   ├── js/main.js             # Hamburger, año dinámico, scroll, toggle ES/EN
│   ├── img/
│   │   ├── p1/                # Visualizaciones Himalayan
│   │   ├── p2/                # Mapas y gráficos Urban Growth
│   │   ├── p3/                # Screenshot dashboard Olist
│   │   ├── p4/                # Gráficos CallMeMaybe
│   │   ├── p5/                # Gráficos Test A/B
│   │   └── p6/                # Gráficos SQL
│   ├── maps/                  # Mapas interactivos Folium (Olist, Urban Growth)
│   │   ├── p2/
│   │   └── p3/
│   └── charts/                # Gráficos Plotly interactivos (Himalayan, Urban Growth)
│       ├── p1/
│       └── p2/
├── cv/
│   └── Data_Analyst_Wilson_Guacheta.pdf   # CV descargable
├── .nojekyll                  # Desactiva Jekyll en GitHub Pages
└── README.md
```

**Nota**: El archivo `.nojekyll` en la raíz evita errores de procesamiento Jekyll con la carpeta `assets/`.

---

## Cómo agregar un nuevo proyecto

1. **Copiar plantilla:** `projects/proyecto-6.html` (o cualquier caso existente) → `projects/proyecto-7.html`
2. **Editar el nuevo HTML:** reemplazar título, tagline, datos, secciones y enlace del repositorio.
3. **Agregar imágenes:** copiar visualizaciones a `assets/img/p7/`.
4. **Agregar card en `index.html`:** duplicar uno de los `<article class="card">` dentro de `#projects` y actualizar imagen, título, tags, descripción y enlace.
5. **Agregar traducciones en `assets/js/main.js`:** claves `p7.*` (`title`, `desc`, `tagline`, y las específicas de la página) en **ambos** objetos `translations.es` y `translations.en`.
6. **Actualizar este README** con el nuevo proyecto en la tabla.
7. **Commit y push:**
   ```bash
   git add .
   git commit -m "Agrega proyecto 7: [nombre]"
   git push
   ```

---

## Stack del sitio

HTML5 + CSS3 (custom properties, mobile-first) + JavaScript vanilla. Sin frameworks, sin build pipeline. Editar y hacer push es suficiente para actualizar el sitio.
