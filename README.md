# Sanbla Finance — sitio web

Sitio estático multipágina con **dos propuestas de diseño** para comparar. No necesita compilación: son archivos HTML/CSS/JS que se sirven tal cual.

La página de inicio (`index.html`) es el **Comparador**: enlaza cada página en sus dos versiones.

## Estructura

**Comparador**
- `index.html` / `Comparador.html` — hub para abrir v1 y v2 lado a lado

**v1 — versión actual** (sobria y directa)
- `Inicio.html` · `Poliza.html` · `Factoring.html` · `Sobre-nosotros.html` · `Contacto.html`
- Estilos: `styles.css` · Scripts: `site.js`

**v2 — versión Premium** (serif editorial, mono para datos, capas, motivo de marca, movimiento)
- `Inicio-v2.html` · `Poliza-v2.html` · `Factoring-v2.html` · `Sobre-nosotros-v2.html` · `Contacto-v2.html`
- Estilos: `styles-premium.css` · Scripts: `premium.js`

**Compartidos**
- `image-slot.js` — huecos de imagen arrastrables
- `tweaks-panel.jsx` / `tweaks-app.jsx` — panel de variantes (solo en el editor; inertes en la web publicada)

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en github.com (público).
2. Sube **todos** los archivos de esta carpeta (Add file → Upload files → arrastra todo, incluido el `.nojekyll`).
3. Settings → Pages → Source: rama `main` / carpeta `/root` → Save.
4. En ~1 minuto tendrás la URL pública: `https://<usuario>.github.io/<repo>/`
   - Abrirá directamente el Comparador.

## Notas

- Las **imágenes** son huecos que se rellenan arrastrando fotos (se guardan en el navegador de cada visitante). Para fotos fijas en producción, sustituye los `<image-slot>` por `<img src="...">`.
- **Fuentes** (Google Fonts vía CDN): Schibsted Grotesk + Hanken Grotesk (v1) · Newsreader + Hanken Grotesk + Geist Mono (v2).
- Cada página v2 tiene abajo a la izquierda un sello **"v2 · Premium — ver v1"** que enlaza a su equivalente v1.
