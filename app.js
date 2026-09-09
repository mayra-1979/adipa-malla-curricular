// Lógica del flujo "Entrega de malla curricular a solicitud del alumno".
// Sigue BRIEF.md. Sin backend real: todo vive en memoria (variable SOLICITUDES en data.js).

let solicitudActualId = null;

function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function badgeClass(estado) {
  if (estado === "Pendiente") return "pendiente";
  if (estado === "Pendiente de aclaración") return "aclaracion";
  return "respondido";
}

function renderBandeja() {
  const tbody = document.getElementById("bandeja-body");
  tbody.innerHTML = "";
  SOLICITUDES.forEach((s) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.canal}</td>
      <td>${s.alumno}</td>
      <td>${s.diplomado}</td>
      <td>${s.fecha}</td>
      <td><span class="badge ${badgeClass(s.estado)}">${s.estado}</span></td>
      <td><button class="link" data-id="${s.id}">Ver solicitud →</button></td>
    `;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll("button[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => abrirDetalle(Number(btn.dataset.id)));
  });
}

function abrirDetalle(id) {
  solicitudActualId = id;
  const s = SOLICITUDES.find((x) => x.id === id);
  document.getElementById("detalle-canal").textContent = s.canal;
  document.getElementById("detalle-alumno").textContent = s.alumno;
  document.getElementById("detalle-correo").textContent = s.correo;
  document.getElementById("detalle-diplomado").textContent = s.diplomado;
  document.getElementById("detalle-alerta").style.display = "none";
  showView("view-detalle");
}

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

function validar() {
  const s = SOLICITUDES.find((x) => x.id === solicitudActualId);
  const alerta = document.getElementById("detalle-alerta");

  if (!validarCorreo(s.correo)) {
    alerta.textContent = "El correo indicado por el alumno no tiene un formato válido. No se puede continuar hasta aclarar este dato.";
    alerta.style.display = "block";
    s.estado = "Pendiente de aclaración";
    renderBandeja();
    return;
  }

  if (!DIPLOMADOS[s.diplomado]) {
    alerta.textContent = `No encontramos "${s.diplomado}" entre los programas registrados. Hay que confirmar el nombre exacto con el alumno.`;
    alerta.style.display = "block";
    s.estado = "Pendiente de aclaración";
    renderBandeja();
    return;
  }

  // Datos válidos: avanzar directo a la búsqueda de la malla.
  buscarMalla(s);
}

function solicitarDeNuevo() {
  showView("view-bandeja");
}

function buscarMalla(s) {
  const cont = document.getElementById("malla-items");
  cont.innerHTML = "";
  DIPLOMADOS[s.diplomado].forEach((item) => {
    const div = document.createElement("div");
    div.className = "malla-item";
    div.innerHTML = `
      <div class="mod">${item.modulo} · ${item.clase}</div>
      <div class="contenido">${item.contenido}</div>
      <div class="docente">Docente: ${item.docente}</div>
    `;
    cont.appendChild(div);
  });
  document.getElementById("malla-diplomado-nombre").textContent = s.diplomado;
  showView("view-malla");
}

function generarPreview() {
  const s = SOLICITUDES.find((x) => x.id === solicitudActualId);
  const doc = document.getElementById("preview-doc");
  const items = DIPLOMADOS[s.diplomado];
  doc.innerHTML = `
    <h3 style="margin-top:0">Malla Curricular — ${s.diplomado}</h3>
    <p class="muted">Preparado para: ${s.alumno} (${s.correo})</p>
    <table>
      <thead><tr><th>Módulo</th><th>Clase</th><th>Contenido</th><th>Docente</th></tr></thead>
      <tbody>
        ${items.map((i) => `<tr><td>${i.modulo}</td><td>${i.clase}</td><td>${i.contenido}</td><td>${i.docente}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
  showView("view-preview");
}

function enviarRespuesta() {
  const s = SOLICITUDES.find((x) => x.id === solicitudActualId);
  s.estado = "Respondido";
  document.getElementById("confirmacion-canal").textContent = s.canal;
  renderBandeja();
  showView("view-confirmacion");
}

function volverABandeja() {
  showView("view-bandeja");
}

document.addEventListener("DOMContentLoaded", () => {
  renderBandeja();
  showView("view-bandeja");

  document.getElementById("btn-validar").addEventListener("click", validar);
  document.getElementById("btn-solicitar-de-nuevo").addEventListener("click", solicitarDeNuevo);
  document.getElementById("btn-volver-bandeja-detalle").addEventListener("click", volverABandeja);
  document.getElementById("btn-generar-preview").addEventListener("click", generarPreview);
  document.getElementById("btn-volver-malla").addEventListener("click", () => showView("view-detalle"));
  document.getElementById("btn-enviar").addEventListener("click", enviarRespuesta);
  document.getElementById("btn-volver-preview").addEventListener("click", () => {
    const s = SOLICITUDES.find((x) => x.id === solicitudActualId);
    buscarMalla(s);
  });
  document.getElementById("btn-finalizar").addEventListener("click", volverABandeja);
});
