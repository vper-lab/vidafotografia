# ViDa Fotografía

Landing estática, responsive y sin dependencias. HTML, CSS y JavaScript. Preparada para Vercel.

## Vista local

Desde esta carpeta: `npm run dev`. Abrir http://127.0.0.1:4173.

## Publicar en Vercel

Subir esta carpeta a un repositorio e importarlo en Vercel. Si forma parte de un repositorio mayor, elegir esta carpeta como Root Directory. Framework Preset: Other. El archivo vercel.json configura `npm run build` y la salida `dist`. No necesita variables de entorno ni servidor de aplicaciones.

También se puede publicar desde esta carpeta con la CLI autenticada de Vercel.

## Antes de publicar

- Sustituir `+34 000000000` en app.js por vuestro número real. Un móvil español válido activa automáticamente el enlace de WhatsApp. Actualmente aparece como próximamente.
- Confirmar que existe y recibe mensajes `hola@vidafotografia.com`. La web abre el programa de correo del visitante; no almacena ni envía formularios por sí misma.
- La imagen externa de Bin Thieu se utiliza como referencia visual, con atribución y aviso visible. Sustituirla por fotografías propias autorizadas cuando estén disponibles. No es un portfolio propio.
- Las fuentes se sirven desde Google Fonts y la fotografía desde Unsplash; necesitan conexión. No se incluyen analítica, cookies publicitarias ni almacenamiento de consultas.
- Añadir los datos legales reales del titular que correspondan antes del lanzamiento comercial. No se han inventado identidad fiscal, dirección ni políticas.

## Imagen

Bin Thieu / Unsplash: https://unsplash.com/photos/groom-and-bride-standing-on-green-grass-field-while-cuddling-and-with-mountain-and-trees-at-the-distance-during-daytime-owjuDIIzUbQ

Licencia: https://unsplash.com/license

## Archivos

index.html: textos y secciones. style.css: diseño y móvil. app.js: WhatsApp y año. scripts/build.mjs: genera dist. scripts/serve.mjs: vista local.
