# Plan de desarrollo — Portfolio V2

## Objetivo

Completar v2.0.0 con contenido simplificado, español e inglés mediante i18next y rediseño visual con ayuda temporal de Impeccable. Conservar la información profesional y las funcionalidades existentes, incluido Formspree. Desarrollar y probar los cambios por etapas sin afectar la versión publicada.

## Versiones y orden acordado

- **v1.0.0:** versión actualmente publicada. Se mantiene en producción hasta que v2.0.0 esté terminada, probada y aprobada.
- **v2.0.0:** simplificación del contenido, idiomas y rediseño. El formulario continúa utilizando Formspree.
- **v2.1.0:** backend propio del formulario, como funcionalidad nueva compatible con el portfolio existente. Se comienza después de publicar v2.0.0; en v2.0.0 se conserva el formulario actual con Formspree.
- `develop-v2` es la rama de integración de v2.0.0. La etapa `feature/i18next` está terminada e integrada. `feature/rediseno` ya existe y contiene el rediseño de Inicio en desarrollo; probarla e integrarla a `develop-v2` solo con autorización.
- El propietario confirmó la eliminación de `feature/i18next` localmente y en GitHub. Comprobar la existencia de `feature/rediseno` antes de crearla.

```text
develop-v2
  → feature/i18next → terminada e integrada
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

- **Estado:** terminada e integrada en `develop-v2`. El propietario confirmó el cierre de todo lo relacionado con idiomas el 2026-11-26. Esta actualización documental no incluye nuevas pruebas técnicas.
- [x] Acordar rutas con prefijo de idioma, español de respaldo y estructura de traducciones.
- [x] Trabajar en la rama `feature/i18next` con i18next y su proveedor de traducción.
- [x] Conectar traducciones de las cuatro páginas, componentes, textos accesibles y campos del formulario.
- [x] Incorporar el selector ES / EN y la preferencia manual mediante cookie. El propietario confirmó el cambio de idioma y la preferencia en el navegador.
- [x] Adaptar metadatos, idioma del documento, canónicas, alternativas por idioma y sitemap; comprobar localmente el sitemap y las redirecciones permanentes de las tres rutas antiguas.
- [x] Ejecutar lint, TypeScript y build de producción correctamente; el build requirió acceso a Google Fonts.
- [x] Confirmar un envío del formulario en inglés mediante Formspree y la recepción del mensaje; comprobado por el propietario.
- [x] Organizar las traducciones por idioma, páginas y componentes, y comprobar ambos idiomas, lint, TypeScript y build.
- [x] Comprobar localmente los metadatos generados de las ocho rutas y conservar la consulta en la redirección inicial y al cambiar el idioma.
- [x] Integrar `feature/i18next` a `develop-v2` mediante avance directo y subir `develop-v2` a GitHub.
- [x] Cerrar la etapa de idiomas por confirmación del propietario el 2026-11-26; los pendientes anteriores de esta etapa quedan superados. Mantener las comprobaciones generales posteriores al rediseño en la revisión final de V2.

## v2.0.0 — Etapa 3: rediseño con Impeccable

- [x] Crear `feature/rediseno`; comprobada como rama activa el 2026-11-27. No se verificó de nuevo su ascendencia ni se hizo fetch en esta actualización.
- [x] Preparar el uso temporal de Impeccable, explicando y autorizando su incorporación: skill 4.11.1 y hooks locales al proyecto; contexto aprobado en `PRODUCT.md`.
- [x] Aprobar las propuestas de Inicio: A para escritorio y segunda revisión móvil. Referencias en `docs/design/inicio-propuesta-a.png` (panel de escritorio) y `docs/design/inicio-mobile-aprobado.png`. Las otras páginas todavía no tienen propuestas aprobadas.
- [ ] Trabajar Inicio, Sobre mí, Proyectos y Contacto de a una página por vez.
- [ ] Conservar proyectos destacados y secundarios, certificados, tecnologías, enlaces y funcionalidades existentes.
- [ ] Mantener ambos idiomas, accesibilidad, responsive y SEO.
- [ ] Conservar Formspree y comprobar que continúa enviando mensajes.
- [ ] Revisar e integrar la rama a `develop-v2` con autorización.

### Punto de continuidad — 2026-11-27

El propietario implementa personalmente Inicio con guía por archivo y línea. Están adaptados presentación, retrato, acciones, orden de secciones, tarjetas compactas y parte del cierre de contacto. El botón Pausar/Reanudar está traducido y el propietario confirmó su funcionamiento visual, incluido el estado dorado persistente de pausa.

**Retomar aquí:** terminar el aspecto compacto de `components/ui/TechnologiesMarquee.tsx`. Solo cambió el contenedor exterior a `bg-surface px-4 py-3`; faltan tecnologías en horizontal sin tarjetas individuales, iconos de 28px y nombres `text-sm font-medium`, aplicados igual a ambas listas. La última propuesta no se completó; no asumirla realizada. También sigue presente la etiqueta «Contacto» del cierre que se propuso quitar.

Controles del avance antes del commit autorizado: TypeScript pasó (`npx.cmd tsc --noEmit --incremental false`); lint terminó con 0 errores y 93 advertencias en scripts de terceros de Impeccable. No se ejecutó build. Pendiente comparar el sitio real con las previews, revisar móvil/escritorio y ambos idiomas, verificar Proyectos por el componente compartido, y completar controles técnicos al finalizar el rediseño. No hay revisión visual completa confirmada. Los resultados de idiomas anteriores no certifican estos cambios nuevos. Sobre mí, Proyectos y Contacto todavía no fueron rediseñados. El propietario autorizó commit y push del avance a `feature/rediseno`; no autorizó integración ni publicación. Ver el registro del 27 de noviembre en `AGENTS.md` para el detalle y la continuidad entre computadoras.

## v2.0.0 — Revisión final y publicación

- [ ] Revisar responsive, accesibilidad, SEO, rendimiento y seguridad básica.
- [ ] Probar ambos idiomas, formulario con Formspree, enlaces, navegación, CV y certificados.
- [ ] Ejecutar lint y compilación de producción.
- [ ] Actualizar README, CHANGELOG y este plan con el estado real.
- [ ] Revisar v2.0.0 terminada y autorizar su integración a `main` y publicación.
- [ ] Confirmar el commit de publicación y autorizar la creación del tag `v2.0.0`.
- [ ] Comprobar la versión publicada antes de comenzar v2.1.0.

## v2.1.0 — Formulario con backend propio (versión futura)

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
