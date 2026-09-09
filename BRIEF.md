# Brief · Entrega de malla curricular a solicitud del alumno

## Problema que resuelve
Cuando un alumno de un diplomado o postítulo solicita su malla curricular (los módulos, clases, contenidos y docentes del programa), hoy el equipo de soporte/postventa debe buscar manualmente esta información en el tablero de Monday y armarla a mano antes de responder. Esto es lento y depende de que quien responde sepa exactamente dónde buscar los datos.

## Usuario principal y roles
- **Alumno/a**: solicita su malla curricular por correo (a través de Zendesk, que crea un ticket) o por WhatsApp (a través de la plataforma Treble de HubSpot).
- **Equipo de soporte/postventa** (ej. Mayra): recibe la solicitud, valida los datos, extrae la información de la calendarización y responde al alumno.
- **Fuente de datos** (tablero de Monday / coordinación académica): mantiene la calendarización académica actualizada, de la cual se extrae la malla.

## Pantallas / piezas (en orden del journey)
1. **Bandeja de solicitudes**: lista de solicitudes entrantes (ticket de Zendesk o mensaje de WhatsApp) pendientes de responder.
2. **Detalle de la solicitud**: muestra el correo y el nombre del diplomado/postítulo indicado por el alumno, con un botón para validar.
3. **Alerta de datos incompletos/incorrectos**: si el correo o el nombre del diplomado no son válidos, se muestra un aviso con la opción "Solicitar de nuevo" (la solicitud vuelve a la bandeja como pendiente de aclaración).
4. **Buscador de malla curricular**: al validar los datos, se busca el diplomado en la calendarización (datos de ejemplo) y se muestran sus módulos, clases, contenidos y docentes.
5. **Vista previa de la malla (plantilla Modelo)**: la información extraída se arma en el formato estándar de malla curricular, lista para enviar.
6. **Confirmación de respuesta enviada**: confirma que la malla fue "enviada" al alumno por el mismo canal de origen (correo/ticket o WhatsApp) y marca la solicitud como resuelta en la bandeja.

## Datos por pantalla (qué entra, qué sale)
- **Bandeja de solicitudes**: entra el listado de solicitudes de ejemplo (canal, fecha, alumno, diplomado solicitado, estado); sale la solicitud seleccionada.
- **Detalle de la solicitud**: entra correo y nombre del diplomado indicados por el alumno; sale el resultado de la validación (correcto / incorrecto).
- **Alerta de datos incompletos**: entra el motivo (correo inválido / diplomado no reconocido); sale la solicitud marcada como "pendiente de aclaración".
- **Buscador de malla curricular**: entra el nombre del diplomado ya validado; sale la lista de módulos con: Módulo, Clase, Contenido de la clase, Docente(s).
- **Vista previa de la malla**: entra la lista anterior; sale el documento/formato final de la malla curricular.
- **Confirmación de envío**: entra la malla ya armada; sale el estado "Respondido" junto con el canal por el que se envió.

## Reglas de negocio
- Si el correo del alumno no tiene formato válido, la solicitud se marca como "datos incompletos" y no puede avanzar a la búsqueda de la malla.
- Si el nombre del diplomado/postítulo no coincide con ninguno de los programas de ejemplo, la solicitud se marca como "diplomado no encontrado" y se debe solicitar confirmación al alumno.
- Si el correo y el nombre del diplomado son válidos, se avanza automáticamente a la búsqueda de la malla curricular.
- La malla curricular entregada solo contiene: Módulo, Clase, Contenido de la clase y Docente(s) — nunca fechas, horarios de Zoom ni fechas de evaluación.
- La respuesta se entrega por el mismo canal en que llegó la solicitud (correo/ticket de Zendesk o WhatsApp/Treble).

## Fuera de alcance (qué NO se construye en esta versión)
- No se conecta de verdad con Zendesk, HubSpot/Treble ni con el tablero de Monday: las solicitudes y la calendarización son datos de ejemplo dentro de la propia app.
- No se envían correos ni mensajes de WhatsApp reales; la "respuesta" solo se muestra en pantalla como confirmación.
- No incluye inicio de sesión ni permisos de usuario (no hay login).
- No cubre otros flujos de ADIPA (inscripciones, facturación, encuestas, postulación docente): solo la entrega de malla curricular.
- No incluye reportes ni métricas sobre las solicitudes atendidas.

## Retrospectiva
_(se completa al final, en la Etapa 4, junto con Mayra)_
