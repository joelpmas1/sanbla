# Sanbla Finance — sitio web

Sitio estático multipágina con dos propuestas de diseño y los hubs de categoría. No necesita compilación: archivos HTML/CSS/JS que se sirven tal cual. La página de inicio (`index.html`) es el **Comparador**, que centraliza todas las landings.

## Estructura

**Comparador**
- `index.html` / `Comparador.html` — hub central; abre cada página y compara v1/v2

**v1 — versión actual** (sobria y directa)
- `Inicio.html` · `Poliza.html` · `Factoring.html` · `Sobre-nosotros.html` · `Contacto.html`
- Estilos: `styles.css` · Scripts: `site.js`

**v2 — versión Premium** (serif editorial, mono para datos, capas, motivo de marca, movimiento)
- `Inicio-v2.html` · `Poliza-v2.html` · `Factoring-v2.html` · `Sobre-nosotros-v2.html` · `Contacto-v2.html`
- Hubs de categoría (diseñados directamente en v2): `Liquidez-v2.html` · `Inversion-v2.html`
- Estilos: `styles-premium.css` · Scripts: `premium.js`

**Compartidos**
- `image-slot.js` — huecos de imagen arrastrables
- `tweaks-panel.jsx` / `tweaks-app.jsx` — panel de variantes (solo en el editor; inertes en la web publicada)

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en github.com (público).
2. Sube **todos** los archivos de esta carpeta (Add file → Upload files → arrastra todo, incluido el `.nojekyll`).
3. Settings → Pages → Source: rama `main` / carpeta `/root` → Save.
4. En ~1 minuto: `https://<usuario>.github.io/<repo>/` (abrirá el Comparador).

## Notas

- Las **imágenes** son huecos (se rellenan arrastrando fotos, se guardan en el navegador). Para fotos fijas en producción, sustituye los `<image-slot>` por `<img src="...">`.
- **Fuentes** (Google Fonts vía CDN): Schibsted Grotesk + Hanken Grotesk (v1) · Newsreader + Hanken Grotesk + Geist Mono (v2).
- Los hubs **Liquidez** e **Inversión** son nuevos y solo existen en v2 (aún sin equivalente v1).
- Cifras de los hero (35 M€, 28+, 40 M€, etc.) y slugs de producto **a confirmar con cliente** antes de publicar.
