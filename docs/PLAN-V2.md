# Plan de desarrollo — Portfolio V2

## Objetivo

Completar v2.0.0 con contenido simplificado, español e inglés mediante i18next y rediseño visual con ayuda temporal de Impeccable. Conservar la información profesional y las funcionalidades existentes, incluido Formspree. Desarrollar y probar los cambios por etapas sin afectar la versión publicada.

## Versiones y orden acordado

- **v1.0.0:** versión actualmente publicada. Se mantiene en producción hasta que v2.0.0 esté terminada, probada y aprobada.
- **v2.0.0:** simplificación del contenido, idiomas y rediseño. El formulario continúa utilizando Formspree.
- **v2.1.0:** backend propio del formulario. Se comienza únicamente después de terminar y publicar v2.0.0, partiendo de su código actualizado.
- `develop-v2` es la rama de integración de v2.0.0. Primero se trabaja en `feature/i18next`, se prueba y se integra a `develop-v2`; después se crea `feature/rediseno` desde esa base actualizada, se prueba y se integra a `develop-v2`.
- Los nombres `feature/i18next` y `feature/rediseno` describen ramas previstas; comprobar su existencia antes de crearlas.

```text
develop-v2
  → feature/i18next → revisión y merge a develop-v2
  → feature/rediseno (desde develop-v2 actualizada) → revisión y merge a develop-v2
  → revisión final de v2.0.0 → publicación autorizada en main → tag v2.0.0
  → desarrollo posterior desde v2.0.0 → feature/formulario-backend
  → revisión y publicación autorizada de v2.1.0
```

Integrar una funcionalidad a `develop-v2` no significa publicarla. Los push a `main` despliegan producción; no integrar ni subir allí trabajo incompleto. No cambiar la identificación de la versión publicada ni crear tags de v2 antes del cierre aprobado.

## Preparación

- [x] Mantener `main` como rama estable.
- [x] Crear la rama local `develop-v2` desde `main`.
- [x] Identificar la V1 con el tag `v1.0.0` y subirlo a GitHub.
- [x] Crear `CHANGELOG.md` para registrar cambios importantes entre versiones.
- [x] Actualizar `AGENTS.md` para consultar este plan y el estado de Git al iniciar una sesión.
- [x] Revisar el dominio y la documentación general en `README.md`.
- [x] Revisar los cambios de documentación y guardarlos en un commit autorizado.
- [x] Subir `develop-v2` a GitHub para continuar desde ambas computadoras.

## v2.0.0 — Etapa 1: simplificación del portfolio

- **Estado:** En desarrollo, en `develop-v2`.
- [x] Revisar Inicio: presentación simplificada, retrato ajustado y proyectos destacados en tarjetas compactas. El propietario confirmó el resultado visual en móvil y escritorio.
- [x] Simplificar textos de Sobre mí, Proyectos y Contacto y las competencias profesionales, conservando formación y tecnologías.
- [x] Mejorar la legibilidad del texto en escritorio.
- [x] Simplificar los accesos a contacto de Inicio.
- [x] Agregar las doce URLs de repositorios y los botones de GitHub junto a «Ver proyecto ↗».
- [ ] Completar la revisión visual de las tarjetas y sus botones en móvil y escritorio.
- [ ] Revisar repeticiones restantes y el enlace de exploración de Sobre mí.
- [ ] Probar las cuatro páginas antes de cerrar la etapa.

## v2.0.0 — Etapa 2: español e inglés con i18next

- [x] Acordar rutas con prefijo de idioma, español de respaldo y estructura de traducciones.
- [x] Trabajar en la rama `feature/i18next` con i18next y su proveedor de traducción.
- [x] Conectar traducciones de las cuatro páginas, componentes, textos accesibles y campos del formulario.
- [x] Incorporar el selector ES / EN y la preferencia manual mediante cookie. El propietario confirmó el cambio de idioma y la preferencia en el navegador.
- [x] Adaptar metadatos, idioma del documento, canónicas, alternativas por idioma y sitemap; comprobar localmente el sitemap y las redirecciones permanentes de las tres rutas antiguas.
- [x] Ejecutar lint, TypeScript y build de producción correctamente; el build requirió acceso a Google Fonts.
- [ ] Confirmar específicamente un envío del formulario con Formspree y la recepción del mensaje tras los cambios de idioma.
- [ ] Completar la revisión específica de accesibilidad, responsive, metadatos generados y casos límite de detección de idioma. El propietario confirmó que el recorrido manual y el selector funcionaron, sin detallar cada una de estas pruebas.
- [ ] Revisar el comportamiento de caché y parámetros de la redirección inicial y la sincronización del proveedor en navegación entre idiomas sin recarga completa.
- [ ] Revisar e integrar la rama a `develop-v2` con autorización.

## v2.0.0 — Etapa 3: rediseño con Impeccable

- [ ] Crear `feature/rediseno` desde `develop-v2` después de integrar los idiomas.
- [ ] Preparar el uso temporal de Impeccable, explicando y autorizando su incorporación.
- [ ] Acordar la dirección visual y aprobar las propuestas antes de implementarlas.
- [ ] Trabajar Inicio, Sobre mí, Proyectos y Contacto de a una página por vez.
- [ ] Conservar proyectos destacados y secundarios, certificados, tecnologías, enlaces y funcionalidades existentes.
- [ ] Mantener ambos idiomas, accesibilidad, responsive y SEO.
- [ ] Conservar Formspree y comprobar que continúa enviando mensajes.
- [ ] Revisar e integrar la rama a `develop-v2` con autorización.

## v2.0.0 — Revisión final y publicación

- [ ] Revisar responsive, accesibilidad, SEO, rendimiento y seguridad básica.
- [ ] Probar ambos idiomas, formulario con Formspree, enlaces, navegación, CV y certificados.
- [ ] Ejecutar lint y compilación de producción.
- [ ] Actualizar README, CHANGELOG y este plan con el estado real.
- [ ] Revisar v2.0.0 terminada y autorizar su integración a `main` y publicación.
- [ ] Confirmar el commit de publicación y autorizar la creación del tag `v2.0.0`.
- [ ] Comprobar la versión publicada antes de comenzar v2.1.0.

## v2.1.0 — Formulario con backend propio

**No comenzar esta versión hasta publicar v2.0.0.** Mantener su diseño y ambos idiomas. No almacenar mensajes en una base de datos; las consultas deben llegar a `agustin.lovagnini.a@gmail.com`.

Las herramientas siguientes forman el plan acordado, pero cada instalación o configuración requiere explicación y autorización. Revisar condiciones, límites gratuitos y posibles costos antes de configurar servicios.

- [ ] Preparar la base de desarrollo desde el código publicado de v2.0.0 y crear `feature/formulario-backend`.
- [ ] Aprender Route Handlers y crear un endpoint de prueba `POST /api/contacto`, sin enviar correos reales.
- [ ] Conectar el formulario mediante `fetch()` y comprender JSON, async/await y respuestas HTTP.
- [ ] Validar los campos reales con Zod en el servidor.
- [ ] Configurar Resend, verificar el dominio y proteger las claves mediante variables de entorno.
- [ ] Configurar remitente autorizado, destinatario y `replyTo`; avisar antes de enviar correos reales.
- [ ] Integrar Cloudflare Turnstile con verificación del token en el backend.
- [ ] Implementar rate limiting con Upstash Redis; evaluar inicialmente tres envíos cada diez minutos por origen y revisar cómo identificarlo de forma fiable.
- [ ] Incorporar estados accesibles de carga, éxito y error, traducidos a ambos idiomas.
- [ ] Revisar tamaño de solicitudes, contenido del mensaje, secretos, errores y fallos de servicios externos.
- [ ] Probar datos válidos e inválidos, bots, límites, errores del proveedor, recepción y respuesta en Gmail.
- [ ] Conservar Formspree hasta comprobar que el reemplazo funciona; retirarlo después y revisar privacidad y CSP para la integración final.
- [ ] Configurar y probar variables de entorno y servicios en un Preview de Vercel; revisar dominio, logs y consumo.
- [ ] Ejecutar lint/build, revisar móvil y actualizar documentación.
- [ ] Aprobar integración y publicación; crear el tag `v2.1.0` sobre el commit correspondiente con autorización.

## Acuerdos de trabajo

- `main` contiene la versión estable; `develop-v2` reúne las mejoras aprobadas.
- Las funcionalidades independientes se prueban en ramas `feature/...` antes de decidir su integración.
- No hacer commits, pushes, merges ni publicaciones sin autorización.
- Actualizar este documento al cerrar etapas importantes y guardar los avances autorizados en GitHub.
- Avanzar como mentor, una etapa por vez, explicando conceptos y esperando confirmación antes de continuar. No implementar soluciones completas ni modificar archivos sin autorización.
- Para continuar desde otra computadora, guardar y subir únicamente los avances autorizados; los archivos locales sin commit/push no están disponibles automáticamente en GitHub.
