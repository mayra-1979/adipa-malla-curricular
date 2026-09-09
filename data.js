// Datos de ejemplo (ficticios) — NO son alumnos, docentes ni programas reales de ADIPA.
// Sirven solo para demostrar el funcionamiento del flujo.

const DIPLOMADOS = {
  "Diplomado en Abordaje Psicosocial en Contextos de Vulneración de Derechos": [
    { modulo: "Módulo I", clase: "Clase 1", contenido: "Fundamentos normativos de protección de derechos de niños, niñas y adolescentes.", docente: "Dr. Docente Ejemplo Uno" },
    { modulo: "Módulo I", clase: "Clase 2", contenido: "Marco institucional y modelos de intervención psicosocial.", docente: "Mg. Docente Ejemplo Dos" },
    { modulo: "Módulo II", clase: "Clase 1", contenido: "Evaluación psicosocial y diagnóstico de casos.", docente: "Mg. Docente Ejemplo Tres" },
    { modulo: "Módulo II", clase: "Clase 2", contenido: "Intervención clínica y seguimiento de casos.", docente: "Ps. Docente Ejemplo Cuatro" },
  ],
  "Diplomado en Primeros Auxilios Psicológicos": [
    { modulo: "Módulo I", clase: "Clase 1", contenido: "Introducción a la intervención en crisis.", docente: "Ps. Docente Ejemplo Cinco" },
    { modulo: "Módulo I", clase: "Clase 2", contenido: "Técnicas de contención emocional.", docente: "Mg. Docente Ejemplo Seis" },
    { modulo: "Módulo II", clase: "Clase 1", contenido: "Autocuidado del interviniente y derivación a redes de apoyo.", docente: "Ps. Docente Ejemplo Siete" },
  ],
};

// Bandeja de solicitudes de ejemplo. Se reinicia cada vez que se recarga la página
// (no hay backend real: "Fuera de alcance" según BRIEF.md).
let SOLICITUDES = [
  {
    id: 1,
    canal: "Correo (Zendesk)",
    alumno: "Alumna Ejemplo 1",
    correo: "alumna1@ejemplo.com",
    diplomado: "Diplomado en Abordaje Psicosocial en Contextos de Vulneración de Derechos",
    fecha: "2026-09-05",
    estado: "Pendiente",
  },
  {
    id: 2,
    canal: "WhatsApp (Treble)",
    alumno: "Alumno Ejemplo 2",
    correo: "correo-invalido-sin-arroba",
    diplomado: "Diplomado en Primeros Auxilios Psicológicos",
    fecha: "2026-09-06",
    estado: "Pendiente",
  },
  {
    id: 3,
    canal: "Correo (Zendesk)",
    alumno: "Alumna Ejemplo 3",
    correo: "alumna3@ejemplo.com",
    diplomado: "Diplomado que no existe en el sistema",
    fecha: "2026-09-07",
    estado: "Pendiente",
  },
  {
    id: 4,
    canal: "WhatsApp (Treble)",
    alumno: "Alumno Ejemplo 4",
    correo: "alumno4@ejemplo.com",
    diplomado: "Diplomado en Primeros Auxilios Psicológicos",
    fecha: "2026-09-08",
    estado: "Pendiente",
  },
];
