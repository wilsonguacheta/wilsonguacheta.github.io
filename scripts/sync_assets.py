"""
Sincroniza los assets interactivos HTML desde cada proyecto al portafolio.

Uso:
    python scripts/sync_assets.py

Prerequisitos (ejecutar primero en cada proyecto):
    PROYECTO_1 — re-ejecutar notebooks/himalayan_analysis.ipynb
    PROYECTO_2 — python scripts/visualizacion/export_html_maps.py
                 python scripts/visualizacion/export_html_charts.py
    PROYECTO_3 — los mapas se generan desde el notebook Olist (outputs/maps/)
"""
import shutil
from pathlib import Path

PORTAFOLIO = Path(__file__).resolve().parents[1]
PROJECTS   = PORTAFOLIO.parent

COPIES = [
    # (origen,                                          destino,                        patrón)
    (PROJECTS / 'PROYECTO_1/output/figures/html',      PORTAFOLIO / 'assets/charts/p1', '*.html'),
    (PROJECTS / 'PROYECTO_2/docs/maps',                PORTAFOLIO / 'assets/maps/p2',   '*.html'),
    (PROJECTS / 'PROYECTO_2/docs/charts',              PORTAFOLIO / 'assets/charts/p2', '*.html'),
    (PROJECTS / 'PROYECTO_3/outputs/maps',             PORTAFOLIO / 'assets/maps/p3',   '*.html'),
]


def sync():
    for src, dst, pattern in COPIES:
        if not src.exists():
            print(f'  ⚠  Origen no encontrado, omitiendo: {src.relative_to(PROJECTS)}')
            continue
        dst.mkdir(parents=True, exist_ok=True)
        files = list(src.glob(pattern))
        if not files:
            print(f'  ⚠  Sin archivos {pattern} en: {src.relative_to(PROJECTS)}')
            continue
        for f in files:
            shutil.copy2(f, dst / f.name)
        print(f'  ✓  {len(files)} archivo(s)  {src.relative_to(PROJECTS)} → {dst.relative_to(PORTAFOLIO)}')


if __name__ == '__main__':
    print(f'Sincronizando assets → {PORTAFOLIO.name}/')
    sync()
    print('Listo.')
