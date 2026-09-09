# Contexto del proyecto

## Objetivo
Construir la web app descrita en `BRIEF.md`: el flujo de "Entrega de malla curricular a solicitud del alumno", como demo funcional desplegable en Vercel.

## Stack (ya definido, no hay que decidirlo)
- HTML, CSS y JavaScript "vanilla" (sin frameworks, sin build step), servido como sitio estático.
- Los datos (solicitudes de ejemplo y calendarización de ejemplo) viven en un archivo `data.js` dentro del propio proyecto — no hay backend ni base de datos real.
- Despliegue en Vercel como sitio estático (sin comandos de build ni configuración especial).

## Convenciones
- Todo el código vive en la raíz del proyecto (`index.html`, `style.css`, `app.js`, `data.js`) para que Vercel lo sirva directo.
- Los datos son ficticios / de ejemplo — nunca se debe usar información real de alumnos, docentes o enlaces de Zoom reales.
- Seguir estrictamente lo que dice `BRIEF.md`. Cualquier idea nueva que no esté en el brief va a la sección "Fuera de alcance" del brief, no se construye sin avisar.
