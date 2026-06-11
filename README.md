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

---

## Estructura del repositorio

```
.
├── index.html                 # Landing page
├── projects/
│   ├── proyecto-1.html        # Himalayan Climbing
│   ├── proyecto-2.html        # Urban Growth Colombia
│   └── proyecto-3.html        # Olist E-Commerce
├── assets/
│   ├── css/styles.css         # Tokens, reset, layout, responsive
│   ├── js/main.js             # Hamburger, año dinámico, scroll, toggle ES/EN
│   └── img/
│       ├── p1/                # Visualizaciones Himalayan
│       ├── p2/                # Mapas y gráficos Urban Growth
│       └── p3/                # Screenshot dashboard Olist
├── assets/maps/               # Mapas interactivos Folium (Olist)
│   ├── seller_clusters.html
│   ├── gwr_coefficients.html
│   └── lisa_satisfaction.html
├── cv/
│   └── cv.pdf                 # CV descargable
├── .nojekyll                  # Desactiva Jekyll en GitHub Pages
└── README.md
```

**Nota**: El archivo `.nojekyll` en la raíz evita errores de procesamiento Jekyll con la carpeta `assets/`.

---

## Cómo agregar un nuevo proyecto

1. **Copiar plantilla:** `projects/proyecto-3.html` → `projects/proyecto-4.html`
2. **Editar el nuevo HTML:** reemplazar título, tagline, datos, secciones y enlace del repositorio.
3. **Agregar imágenes:** copiar visualizaciones a `assets/img/p4/`.
4. **Agregar card en `index.html`:** duplicar uno de los `<article class="card">` dentro de `#projects` y actualizar imagen, título, tags, descripción y enlace.
5. **Actualizar este README** con el nuevo proyecto en la tabla.
6. **Commit y push:**
   ```bash
   git add .
   git commit -m "Agrega proyecto 4: [nombre]"
   git push
   ```

---

## Stack del sitio

HTML5 + CSS3 (custom properties, mobile-first) + JavaScript vanilla. Sin frameworks, sin build pipeline. Editar y hacer push es suficiente para actualizar el sitio.
