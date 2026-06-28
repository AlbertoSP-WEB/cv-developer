# CV de una página en Next.js — Diseño

## Contexto

El usuario tiene un diseño de currículum hecho en Canva, exportado a HTML/Tailwind por una herramienta externa de "diseño a código". Ese HTML de origen incluía scripts de telemetría y edición de la plataforma externa (`/_sdk/telemetry_sdk.js`, `data_sdk.js`, `resizing_sdk.js`, `editing_sdk.js`) y un script ofuscado que inyectaba un iframe oculto con un challenge de Cloudflare. Ninguno de esos scripts pertenece al proyecto y no se incluyen.

## Objetivo

Recrear el diseño visual del CV (no la plataforma de edición) como una página estática dentro de un proyecto Next.js, para que el usuario pueda editar sus datos reales directamente en el código.

## Alcance

- Una sola página (sin rutas adicionales, sin backend, sin CMS).
- No es base para un sitio más grande — proyecto autocontenido.
- Los datos del CV quedan como placeholders (los del HTML original: nombre, puesto, contacto, experiencia, educación, habilidades, idiomas) para que el usuario los edite después.
- La foto de perfil mantiene la URL de stock (Pexels) que traía el HTML original, como placeholder.

## Stack

- Next.js (App Router), JavaScript (sin TypeScript), ya scaffoldeado con `create-next-app --js --tailwind --eslint --app --no-src-dir`.
- Tailwind CSS instalado de forma nativa vía PostCSS (no el script `cdn.tailwindcss.com` del HTML original).
- Fuente DM Sans cargada con `next/font/google` en lugar del `<link>` a Google Fonts.
- Sin librerías de iconos (el HTML de origen cargaba `lucide` pero no llegó a usar ningún icono en el contenido proporcionado).

## Estructura

- `app/layout.js`: metadata básica (title) y carga de la fuente DM Sans.
- `app/page.js`: componente único que renderiza el CV completo:
  - `<aside>` sidebar (fondo oscuro `#1e293b`): foto, nombre, puesto, bloque de contacto, bloque de habilidades, bloque de idiomas.
  - `<main>` área blanca: sección Perfil, sección Experiencia (2 entradas), sección Educación (1 entrada).
  - Contenedor centrado con proporción A4 (`210mm` x `297mm`), en columna en móvil y en fila en escritorio, replicando el layout del HTML original.
- `app/globals.css`: directivas de Tailwind ya generadas por el scaffold; se mantiene el fondo gris (`bg-gray-100`) de la página fuera de la hoja A4.

## Fuera de alcance

- No se añade lógica de impresión a PDF, modo oscuro, ni más páginas — no se pidió y no forma parte del alcance acordado.
- No se sustituyen los datos de ejemplo por datos reales del usuario.

## Pruebas

- `npm run build` debe completar sin errores.
- Verificación visual rápida con `npm run dev` para confirmar que el layout sidebar/main se ve igual que el HTML de origen en escritorio y en móvil.
