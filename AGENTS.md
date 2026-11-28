<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
# AGENTS.md — Instrucciones para Codex

## 1. Contexto del proyecto

Este repositorio contiene el portfolio profesional de Agustín Lovagnini, desarrollador Full Stack Junior.

El proyecto está en desarrollo y tiene como objetivo presentar su perfil, formación, experiencia, habilidades y proyectos, además de facilitar el contacto con reclutadores y potenciales clientes.

También tiene un propósito educativo: reforzar React, TypeScript y aprender Next.js mediante la práctica.

## 2. Stack tecnológico

- Next.js con App Router.
- React.
- TypeScript.
- Tailwind CSS v4.
- npm.
- Git y GitHub.

No incorporar dependencias adicionales sin explicar previamente su necesidad y obtener autorización.

Evitar sobreingeniería y priorizar el principio KISS.

## 3. Arquitectura

El sitio tendrá cuatro páginas independientes:

- `/` — Inicio.
- `/sobre-mi` — Perfil, experiencia, formación y certificaciones.
- `/proyectos` — Proyectos destacados y habilidades técnicas.
- `/contacto` — Formulario y medios de contacto.

La aplicación utiliza actualmente la carpeta `app/` en la raíz del repositorio.

No moverla a `src/` sin una justificación técnica y aprobación previa.

Utilizar el App Router de Next.js y componentes reutilizables cuando sea conveniente.

El Header y Footer deberán compartirse mediante el layout principal.

### Organización de componentes

- `components/layout/`: `Header`, `Footer` y `MobilePageNavigation`.
- `components/projects/`: `FeaturedProjectCard` y `ProjectMarquee`.
- `components/certifications/`: `CertificationCard` y `CertificationsList`.
- `components/ui/`: `ScrollPrompt`, `ShareButton` y `TechnologiesMarquee`.
- Esta organización por responsabilidad fue acordada con el propietario. Al mover componentes, actualizar los imports de páginas, datos y componentes relacionados; no crear componentes duplicados ni archivos de reexportación sin necesidad.

- Los componentes con CSS propio se agrupan en una subcarpeta con el nombre del componente: `Header/`, `Footer/`, `ProjectMarquee/` y `ScrollPrompt/`. Cada una contiene su TSX y su CSS; los componentes sin CSS propio permanecen directamente en su grupo.

### Organización de estilos

- `app/globals.css` es el punto de entrada: importa Tailwind y las hojas CSS separadas; conserva el tema, las fuentes, la variante de hover y los estilos base.
- `styles/shared.css` contiene clases globales compartidas, como botones, tarjetas, separadores, etiquetas y decoraciones. `styles/animations.css` contiene el movimiento, pausa y reglas de movimiento reducido comunes a las marquesinas.
- Los estilos propios se guardan junto a su componente como CSS común: `components/layout/Header/header.css`, `components/layout/Footer/footer.css`, `components/projects/ProjectMarquee/project-marquee.css` y `components/ui/ScrollPrompt/scroll-prompt.css`.
- Por decisión del propietario, conservar los nombres de clase y su uso directo en `className`. No migrar esta estructura a CSS Modules ni introducir `styles.clase` sin acordarlo. La cercanía del CSS al componente no implica aislamiento: estas clases siguen siendo globales y se importan desde `globals.css`.
- Mantener las capas `@layer`, los breakpoints, los selectores y su prioridad. Las clases Tailwind permanecen en los TSX. No duplicar imports CSS en componentes ni mover reglas compartidas a un único componente.

### Organización de los proyectos

- Mantener un único array `projects` en `data/projects.ts`, respetando la estructura actual del repositorio sin crear `src/`.
- Cada proyecto debe incluir `featured: boolean` y `date: string`. `date` representa la fecha de su primer commit en GitHub, en formato `YYYY-MM-DD`.
- Antes de incorporar un proyecto nuevo, preguntar al propietario si será destacado o secundario y solicitar la fecha de su primer commit. Si ya proporcionó esos datos, utilizarlos sin volver a preguntarlos. No inventar fechas ni clasificaciones.
- La sección «Proyectos destacados» mostrará únicamente los proyectos con `featured: true`, con mayor protagonismo visual.
- La sección «Mi evolución como desarrollador» mostrará únicamente los proyectos secundarios (`featured: false`; actualmente nueve), ordenados por `date` del más antiguo al más reciente, en una marquesina horizontal infinita de tarjetas. No incluir los proyectos destacados en esta sección.
- Obtener ambas vistas desde el mismo array mediante `filter()`, `sort()` y `map()` según corresponda. Al ordenar, trabajar sobre una copia para no modificar el orden del array original.
- Estas decisiones documentan la organización prevista; la implementación visual requiere una tarea autorizada por el propietario.

## 4. Identidad visual

Estilo minimalista, profesional y tecnológico.

### Colores

- Principal: `#E9B767`.
- Dorado claro: `#F5D49A`.
- Dorado oscuro: `#B88739`.
- Fondo: `#0D0D0D`.
- Superficies: `#1B1B1B`.
- Bordes: `#292929`.
- Texto principal: `#FFFFFF`.
- Texto secundario: `#B5B5B5`.
- Texto auxiliar: `#858585`.

### Tipografías

- Space Grotesk para títulos.
- Inter para textos y navegación.

Priorizar responsive, accesibilidad, legibilidad y buen rendimiento.

No implementar diseños completos ni animaciones complejas sin aprobación.

## 5. Buenas prácticas

- Utilizar TypeScript y evitar `any` innecesarios.
- Mantener código claro, legible y mantenible.
- Respetar las convenciones de Next.js y React.
- Priorizar HTML semántico y accesibilidad.
- Utilizar Tailwind CSS v4 para los estilos.
- Evitar duplicación de código cuando sea razonable.
- Crear componentes reutilizables cuando exista una necesidad real.
- No agregar abstracciones prematuras.
- No introducir Redux, React Router ni un backend independiente sin justificación.
- Mantener las responsabilidades de los archivos bien definidas.

### Marcadores de comentarios

- `SECTION`: antes de bloques `<section>` y `<header>` para localizar secciones y encabezados de la página. Los comentarios de un `<header>` pueden conservar este marcador; no reclasificarlos como `SUBSECTION` solo por la etiqueta HTML. Reemplaza al marcador anterior `ANCHOR`.
- `SUBSECTION`: bloques internos o grupos de contenido, como una tarjeta personal, una navegación o un grupo de estilos.
- `ITEM`: elementos o declaraciones puntuales que convenga localizar, como una imagen, un botón, un estado o un tipo de datos.
- `NOTE`: explicaciones necesarias sobre un contenedor, una lógica o una decisión que no resulte evidente.
- `TODO`: tareas pendientes concretas.
- `FIXME`: errores conocidos que deben corregirse.
- `REVIEW`: aspectos que necesitan una revisión concreta.

`SECTION`, `SUBSECTION` e `ITEM` identifican y organizan; `NOTE` explica qué hace algo o por qué se tomó una decisión. Mantener el separador ` - ` y la sintaxis de comentarios correspondiente a cada archivo.

El resaltado de líneas se configura mediante `highlight.regexes` en `.vscode/settings.json`, utilizando la extensión Highlight de VS Code. Esta configuración del proyecto se versiona para mantener los mismos colores entre computadoras; no afecta los estilos del sitio.

| Marcador | Color del texto | Color del fondo |
|---|---|---|
| `SECTION` | `#79C7FF` | `#214A6B` |
| `SUBSECTION` | `#FFAB70` | `#5C3018` |
| `ITEM` | `#E6D39A` | `#403B2A` |
| `NOTE` | `#78E6AB` | `#244D3C` |
| `TODO` | `#FFD166` | `#59411E` |
| `FIXME` | `#FF7B89` | `#642B35` |
| `REVIEW` | `#C9A4FF` | `#483462` |

Respetar los comentarios existentes y reclasificarlos según su propósito cuando sea necesario. Evitar marcar cada variable, función o contenedor. No agregar marcadores sin una necesidad real ni inventar tareas o errores para utilizarlos.

## 6. Forma de trabajo con el desarrollador

**Esta es la regla más importante del proyecto: el propietario quiere aprender programando personalmente.**

Codex debe actuar como mentor técnico y compañero de desarrollo, no como un agente encargado de completar toda la aplicación de manera autónoma.

Reglas:

1. Avanzar de a un paso por vez.
2. Explicar los conceptos nuevos antes de utilizarlos.
3. No entregar soluciones completas salvo que se soliciten.
4. Priorizar preguntas y pistas para que el desarrollador resuelva los ejercicios.
5. Explicar conceptualmente por qué ocurre cada error.
6. Diferenciar errores reales, buenas prácticas y preferencias personales.
7. Revisar el código y sugerir mejoras justificadas.
8. No modificar archivos sin autorización explícita.
9. No ejecutar comandos que alteren el proyecto sin aprobación.
10. No agregar dependencias sin autorización.
11. No realizar commits, push, tags o releases automáticamente.
12. Explicar los comandos de terminal antes de ejecutarlos.
13. Consultar antes de tomar decisiones arquitectónicas importantes.
14. No desarrollar varias funcionalidades simultáneamente sin autorización.
15. Responder en español, con explicaciones claras y ejemplos prácticos.

## 7. Git y versionado

Repositorio actual:

https://github.com/agustin-lovagnini/agustin-lovagnini-cv

Repositorio histórico:

https://github.com/agustin-lovagnini/agustin-lovagnini-cv-web

No modificar el repositorio histórico.

Utilizar mensajes de commit descriptivos, preferentemente siguiendo Conventional Commits.

Versiones previstas:

- `v0.1.0` — Configuración inicial.
- `v0.2.0` — Rutas y navegación.
- `v0.3.0` — Diseño y componentes.
- `v0.4.0` — Contenido profesional.
- `v0.5.0` — Contacto.
- `v0.9.0` — Pruebas y optimización.
- `v1.0.0` — Primera versión pública estable.

Las versiones son orientativas y no deben crearse automáticamente.

## 8. Continuidad entre computadoras

El proyecto se desarrollará desde dos computadoras utilizando VS Code y Codex.

GitHub será la fuente compartida del código.

Este archivo AGENTS.md deberá mantenerse versionado para conservar las instrucciones del agente en ambas computadoras.

No asumir que el historial de conversaciones de Codex está sincronizado.

Antes de continuar una tarea, verificar el estado actual del repositorio y consultar qué se estaba desarrollando si falta contexto.

Durante el desarrollo de la V2, consultar también `docs/PLAN-V2.md` al comenzar una sesión. Mantenerlo actualizado cuando se complete una etapa importante, con autorización del propietario.

## 9. Contacto y publicación

El portfolio utiliza Formspree para recibir consultas por correo electrónico, sin backend propio.

Está publicado en Vercel en https://agustin-lovagnini-cv.vercel.app. Los push a `main` inician despliegues automáticos de producción.

Antes de publicar, verificar las condiciones del servicio elegido para uso profesional y freelance.

La primera versión estable deberá revisarse en términos de:

- Responsive.
- Accesibilidad.
- SEO.
- Rendimiento.
- Seguridad básica.
- Funcionamiento del formulario.
- Enlaces y navegación.
- Compilación de producción.

## 10. Reglas antes de realizar cambios

Antes de modificar cualquier archivo:

1. Explicar qué se quiere cambiar.
2. Justificar por qué es necesario.
3. Indicar qué archivos se verán afectados.
4. Esperar autorización explícita.
5. Realizar únicamente los cambios aprobados.
6. Explicar el resultado y cómo comprobarlo.

Se permite inspeccionar y leer archivos para comprender el proyecto, sin modificarlos.

## 11. Seguimiento de revisión y publicación

Registro actualizado el 2026-11-28. Priorizar el punto de continuidad siguiente; los registros anteriores conservan su fecha y alcance histórico.

### Continuidad V2 — 28 de noviembre de 2026: ajustes finales de Inicio

- Rama `feature/rediseno` con seguimiento de `origin/feature/rediseno`; antes de este registro había cambios sin commit en Inicio, la tarjeta destacada y la marquesina, y `.impeccable/build/config.json` sin seguimiento. No se hizo fetch. El propietario hará el commit; no hacer commit, push, merge ni publicación sin autorización concreta.
- El propietario implementó la marquesina horizontal compacta: iconos de 28 px, nombres pequeños, sin tarjetas individuales y con `py-5`. El botón Pausar permanece debajo por decisión del propietario. Inicio tiene líneas doradas bajo los títulos de proyectos y stack, y se retiró la etiqueta del cierre de contacto. Las tarjetas compactas de Inicio ocultan año, etiqueta y tecnologías; la versión completa de Proyectos conserva esos datos según el código.
- El propietario confirmó la vista móvil antes del último ajuste de altura, el recorrido en inglés y los enlaces de Inicio; después confirmó que le gusta y aprueba visualmente Inicio tras los últimos ajustes. Impeccable capturó Inicio en 1440×900 y 390×844 tras los ajustes: se revisaron la composición y la marquesina estática en ambos tamaños. La captura mostró el indicador de dos avisos de desarrollo, sin inspeccionar su contenido. Quedan por comprobar el movimiento de la marquesina y la vista de Proyectos tras los cambios compartidos. Pendientes generales: accesibilidad, movimiento reducido, responsive, SEO y rendimiento; no asumir que estén probados por el recorrido general.
- El propietario ejecutó lint con 0 errores y 93 advertencias en scripts de Impeccable, TypeScript con `npx tsc --noEmit --incremental false` sin errores y build de producción satisfactorio con las ocho rutas de idioma. El detector de Impeccable no informó advertencias en Inicio, la tarjeta ni la marquesina. Se inspeccionaron capturas con Impeccable; la crítica independiente completa quedó limitada porque los subagentes no disponían de herramientas de lectura ni se revisó la interacción en vivo.
- En esta PC Impeccable pudo ejecutar `context` y `detect`; antes falló la descarga del motor con curl 43, sin causa confirmada. Visual C++ Redistributable x64 está instalado aquí. El propietario eligió iniciar futuros diseños con una imagen y autorizó registrar `buildPath: comp` en `.impeccable/config.json`, la ubicación indicada por la guía. Se retiró la copia sin seguimiento de `.impeccable/build/config.json` con autorización; se conservó el `.gitignore` de esa carpeta. Esto no resuelve la falta de herramientas de los subagentes, que también se reprodujo en un chat nuevo.
- Próximo paso: el propietario aprobó visualmente Inicio; preparar Sobre mí con Impeccable, una página a la vez, sin olvidar las comprobaciones específicas pendientes. Mantener guía en español por archivo, ubicación, cambio y motivo; el propietario programa y aprueba modificaciones. Para continuar en otra computadora, el propietario debe guardar y subir los cambios autorizados en `feature/rediseno` y luego traer esa rama allí.

### Continuidad V2 — 27 de noviembre de 2026: rediseño de Inicio con Impeccable

- Rama comprobada: `feature/rediseno`. El propietario autorizó explícitamente guardar el avance, crear el commit y subir esta rama a GitHub para continuar desde otra computadora. Esta autorización se limita al avance actual; no autoriza merges, cambios en main ni nuevas publicaciones. Consultar Git para comprobar el commit y la sincronización resultantes; no se incorpora aquí un resultado anticipado de push.
- Impeccable 4.11.1 instalado para este proyecto en `.agents/skills/impeccable/`, con hooks en `.codex/hooks.json`; motor local v0.1.31 fuera del repositorio. `PRODUCT.md` contiene el contexto aprobado y exige conservar negro/dorado, Inter/Space Grotesk, contenido y funcionalidades. Versionar skill, hooks y PRODUCT.md; excluir `.impeccable/config.local.json`, que contiene consentimiento local. Las carpetas de ejecución de Impeccable llevan sus propios ignores; no ignorar toda `.impeccable/` porque puede contener decisiones compartidas futuras.
- Referencias aprobadas: propuesta A para escritorio y segunda revisión móvil, con retrato centrado, proyectos apilados e imagen arriba del texto y botones. Se conservan en `docs/design/inicio-propuesta-a.png` (usar solo el panel de escritorio) y `docs/design/inicio-mobile-aprobado.png`. Son maquetas orientativas, no capturas del sitio ni fuentes de textos nuevos. Mantener textos reales de los diccionarios; no transcribir afirmaciones generadas de las maquetas.
- El propietario implementa personalmente siguiendo indicaciones. Mantener la enseñanza en español, agrupar pocos cambios relacionados e indicar archivo, línea actual, reemplazo y motivo. Leer el archivo antes de citar líneas. No modificar código sin autorización explícita.
- Implementado en código de Inicio: presentación sin marco dorado, nombre con tilde, rol debajo del nombre, retrato centrado en móvil y a la derecha en escritorio, botones adaptados, proyectos antes del stack y encabezado h2 del stack con su asociación accesible corregida. Tarjetas compactas rediseñadas mediante `compact`, conservando la presentación de Proyectos; botones de demo y GitHub apilados en móvil. Cierre de contacto con superficie discreta y botón de ancho completo en móvil; verificar su etiqueta adicional al retomar.
- Marquesina: estado React de pausa, botón Pausar/Reanudar traducido, separado de la pista, cursor de mano, hover dorado y estado dorado persistente cuando está pausada. El propietario confirmó visualmente que funciona. Conserva pausa por hover/active y movimiento reducido. Esta confirmación no sustituye pruebas completas de teclado, responsive o accesibilidad.
- **Próximo paso exacto:** terminar la simplificación visual de `components/ui/TechnologiesMarquee.tsx`. El propietario indicó que no completó la última propuesta. El contenedor ya usa `bg-surface px-4 py-3`, pero ambas listas conservan tarjetas verticales, iconos de 40px y nombres sin tamaño explícito. Pendiente propuesto: li horizontal sin marco individual (`flex shrink-0 items-center gap-2 whitespace-nowrap px-3 py-1`), iconos `size-7 shrink-0 text-gold` y nombres `text-sm font-medium`, idénticos en ambas listas. Explicar y guiar, no aplicar automáticamente.
- Critique de Inicio realizado con dos asistentes independientes: revisión de fuentes y detector sobre siete TSX, sin hallazgos automáticos; la lectura encontró la asociación de título corregida después y la ausencia original del control de pausa. No hubo inspección de navegador ni overlay. Antes del commit de avance, `npx.cmd tsc --noEmit --incremental false` pasó y `npm.cmd run lint` terminó con 0 errores y 93 advertencias en scripts distribuidos de Impeccable; no modificar esos archivos de terceros solo para silenciar avisos. `git diff --cached --check` señaló espacios finales y una línea vacía adicional en guías de Impeccable. No se ejecutó build de este rediseño. Falta comparar el sitio real con ambas referencias, verificar ambos idiomas, páginas compartidas, enlaces, responsive y accesibilidad, y repetir los controles pertinentes cuando termine el trabajo antes de integrar.
- Impeccable abrió un estado local de construcción para las previews; no representa una implementación verificada ni una fase de build cerrada. Las imágenes aprobadas se conservan aparte en docs para continuidad. No afirmar que Inicio o el rediseño estén terminados. Sobre mí, Proyectos y Contacto no se rediseñaron en esta sesión.
- Para continuar en casa: traer la rama con Git, leer este registro, `docs/PLAN-V2.md` y `PRODUCT.md`. Los launchers de la skill pueden descargar el motor verificado que falte; recargar Codex para descubrir la skill y revisar confianza/consentimiento de hooks en esa computadora. Microsoft Visual C++ Redistributable x64 permitió ejecutar el instalador en esta PC tras el error de DLL; no reinstalarlo en casa salvo que sea necesario.

### Continuidad V2 — 26 de noviembre de 2026: idiomas cerrados y backend para v2.1.0

- El propietario confirmó que todo lo relacionado con idiomas está terminado. La etapa i18next queda cerrada e integrada en `develop-v2`; los pendientes de idiomas de registros anteriores quedan superados por esta confirmación. No se ejecutaron nuevas pruebas técnicas en esta actualización documental.
- `v2.0.0` conserva el formulario actual con Formspree. El backend propio queda para **`v2.1.0`**, después de publicar `v2.0.0`: se incorpora como una funcionalidad nueva compatible con el portfolio existente. Esta es la numeración final acordada con el propietario. No desarrollar ni instalar herramientas del backend durante el trabajo de `v2.0.0`.
- Próximo trabajo: rediseño con Impeccable en `feature/rediseno`, desde `develop-v2` actualizada, con propuestas e incorporaciones autorizadas y una página por vez. Después completar las revisiones restantes de simplificación y la revisión final de V2 antes de publicar. Mantener ambos idiomas y comprobar su funcionamiento tras los cambios del rediseño.
- Se comprobó `develop-v2` sin cambios locales y sincronizada con la referencia local de `origin/develop-v2` antes de editar estos documentos. El propietario confirmó la eliminación de `feature/i18next` localmente y en GitHub durante esta sesión. No se hizo un nuevo fetch en esta actualización.
- Se autorizaron únicamente estos cambios en `AGENTS.md` y `docs/PLAN-V2.md`. No hacer commit, push, merge, creación de ramas ni publicación sin autorización concreta. Continuar como mentor en español, paso a paso.

### Continuidad V2 — 25 de noviembre de 2026: i18next integrado, rediseño para la próxima sesión

- `feature/i18next` se integró a `develop-v2` mediante `git merge --ff-only`; el propietario subió `develop-v2` a GitHub. Antes de este registro la rama local estaba limpia y Git mostraba seguimiento sincronizado con `origin/develop-v2` en `b8fe4e8c`. La rama `feature/i18next` se eliminó localmente; su rama remota no se eliminó. No hacer push, merge ni publicación sin autorización concreta.
- Traducciones organizadas bajo `translations/`: configuración en `i18n/`; JSON en `locales/es/` y `locales/en/`, con `common.json`, `pages/`, `components/` e `index.ts` por idioma. Las claves se reúnen para i18next y se comprobaron contra los textos anteriores. La rama temporal de prueba se integró y se eliminó localmente.
- El propietario comprobó el recorrido general en ambos idiomas y confirmó un envío desde Contacto en inglés y la recepción del correo por Formspree. Se verificó que el selector conserva consulta y fragmento; la entrada inicial `/` conserva la consulta desde `b8fe4e8c`. El sitemap y las tres redirecciones antiguas se comprobaron localmente, al igual que títulos, canónicas, alternativas de idioma, descripciones y URLs Open Graph de las ocho rutas.
- Lint y TypeScript pasaron después del último cambio de código; el propietario ejecutó un build satisfactorio después de ese cambio y se generaron las ocho rutas. Quedan para la revisión de V2 las pruebas específicas de accesibilidad y responsive, los casos límite de detección de idioma, la caché de la redirección y la sincronización del proveedor ante cambios de ruta sin recarga completa; no atribuir pruebas no confirmadas.
- El propietario decidió dejar el rediseño para mañana. Al retomar, comprobar Git y el plan; crear `feature/rediseno` desde `develop-v2` actualizada cuando corresponda y preparar el uso temporal de Impeccable, explicando y autorizando cada incorporación. No implementar diseños completos ni instalar dependencias sin aprobación. `main` sigue como producción de V1 y el backend propio queda para v2.1.0.
- Compartir continúa usando el dominio principal por decisión del propietario. Continuar como mentor en español: guiar de a un paso y modificar archivos solo con autorización explícita.

### Continuidad V2 — 25 de noviembre de 2026: i18next implementado, revisión pendiente

- Rama comprobada: `feature/i18next`, limpia antes de actualizar esta documentación, con seguimiento de `origin/feature/i18next`; último commit local `3d42e140` (`feat: terminé las traducciones y agregué el selector/button de idioma`). No se hizo fetch. Los cambios posteriores a esta comprobación corresponden a esta actualización de documentación. No hacer commit, push, merge ni publicación sin autorización concreta.
- Las cuatro páginas, sus metadatos, el selector ES / EN y la detección inicial de idioma están implementados. El propietario confirmó que el cambio de idioma y la preferencia funcionaron en el navegador y que el recorrido manual funcionó bien; no detalló resultados específicos de cada prueba de accesibilidad, responsive o metadatos.
- `app/sitemap.ts` genera las ocho rutas con sus alternativas en español e inglés; el XML local se comprobó. `next.config.ts` redirige permanentemente `/sobre-mi`, `/proyectos` y `/contacto` a sus versiones `/es/...`; se comprobaron localmente respuestas 308 para las tres. Comprobar `SITE_URL` en producción antes de publicar.
- Lint, TypeScript (`npx tsc --noEmit --incremental false`) y build de producción pasaron el 24 de noviembre. El primer build falló por acceso a Google Fonts; se repitió con acceso de red autorizado y compiló correctamente las ocho rutas. No se hicieron nuevas pruebas de código en esta actualización documental.
- El propietario decidió conservar Compartir con el dominio principal (`window.location.origin`); no volver a proponer cambiarlo como pendiente de i18next sin una nueva solicitud.
- Pendiente: confirmar específicamente envío del formulario por Formspree y recepción del mensaje tras los cambios de idioma; completar revisión específica de accesibilidad, responsive y metadatos generados, y revisar casos límite de `Accept-Language`, caché y parámetros de la redirección inicial y sincronización del proveedor cuando cambie la ruta sin recarga completa. No inferir estos resultados de la confirmación general del recorrido.
- Revisar e integrar `feature/i18next` a `develop-v2` solo con autorización. Después crear `feature/rediseno` desde la base integrada; V1 sigue en producción y el backend propio queda para v2.1.0. `docs/PLAN-V2.md` refleja los avances y pendientes conocidos.
- Continuar como mentor en español y avanzar de a un paso; el propietario programa personalmente salvo autorización explícita para cambios concretos.

### Continuidad V2 — 24 de noviembre de 2026: i18next en revisión

- Rama comprobada: `feature/i18next`, con seguimiento de `origin/feature/i18next` y cambios locales sin commit en las páginas, componentes, diccionarios y configuración; `app/route.ts` es nuevo. No se hizo fetch. El propietario realiza el commit: no hacer commit, push, merge ni publicación automáticamente.
- Inicio, Sobre mí, Proyectos y Contacto tienen textos y metadatos conectados a los diccionarios español e inglés. Incluye certificados, competencias, nueve proyectos secundarios, etiquetas accesibles de tarjetas y controles del carrusel, campos y aviso de privacidad de Contacto. Las traducciones de certificados y competencias mantienen textos españoles en sus catálogos como respaldo; no retirar sin acordar y revisar sus usos.
- El Header tiene un botón ES / EN junto a Compartir en escritorio y en el menú móvil, con idioma activo dorado. Alterna el idioma mediante navegación completa, conserva ruta, consulta y fragmento, y guarda la elección manual en la cookie `preferred-language` por un año. Las rutas explícitas no escriben la cookie. Comprobar visualmente el último ajuste de tamaño y separación en móvil y probar teclado, selector y cookie en ambos idiomas.
- `app/route.ts` reemplaza la redirección fija de `/` retirada de `next.config.ts`: prioriza cookie válida, después idioma compatible de `Accept-Language` ordenado por prioridad, y finalmente español. En el servidor local se comprobaron redirecciones temporales 307 para preferencia inglesa, prioridad de cookie española, cookie inválida, idioma no admitido y orden por prioridad. Falta revisar casos límite de la cabecera y comprobar persistencia real en navegador y URLs explícitas. El componente `TranslationProvider` inicializa su instancia una vez; comprobar sincronización al navegar entre rutas de idioma, además del cambio mediante recarga completa del botón.
- Pendiente antes de cerrar i18next: actualizar `app/sitemap.ts`, que aún enumera `/`, `/sobre-mi`, `/proyectos` y `/contacto`, con las rutas y alternativas acordadas; implementar y probar las redirecciones permanentes de las tres URLs antiguas. Revisar el comportamiento deseado de Compartir: actualmente usa solo `window.location.origin`. Revisar que las redirecciones de `/` no se almacenen indebidamente en caché y el tratamiento de parámetros cuando corresponda.
- Falta comprobar manualmente las cuatro páginas en ambos idiomas, navegación, responsive, accesibilidad y metadatos generados; probar formulario y aviso de privacidad con Formspree; ejecutar lint, TypeScript y build completos. ESLint pasó únicamente para `Header.tsx` antes de los últimos ajustes visuales; no hay resultado final de los controles generales. No afirmar que la etapa i18next está terminada ni integrada hasta completar y revisar estos puntos.
- Después de probar i18next, integrar a `develop-v2` solo con autorización; luego crear `feature/rediseno` desde esa base. V1 sigue en producción; backend propio y v2.1.0 quedan para después de publicar v2.0.0. El plan `docs/PLAN-V2.md` todavía requiere conciliarse con los avances reales al cerrar la etapa.
- Continuar como mentor en español: explicar conceptos y señalar archivo, ubicación, cambio y motivo; avanzar paso a paso. El propietario programa personalmente salvo autorización explícita para cambios concretos.

### Continuidad V2 — 21 de noviembre de 2026: i18next, Inicio

- Rama comprobada: `feature/i18next`, con seguimiento de `origin/feature/i18next`. Hay cambios locales sin commit en validación, páginas, navegación, tarjeta destacada y diccionarios; este registro también queda modificado. El propietario realizará el commit: no hacer commit, push, merge ni publicación automáticamente. No se hizo fetch para verificar el estado remoto.
- Orden acordado: terminar idiomas en `feature/i18next`, probar e integrar a `develop-v2` con autorización; después crear `feature/rediseno` desde esa base actualizada para trabajar con Impeccable. Publicar v2.0.0 solo cuando el conjunto esté terminado, probado y aprobado. v1.0.0 continúa como versión publicada; el backend propio queda para v2.1.0, después de publicar v2.0.0. El alcance general está en `docs/PLAN-V2.md`, cuyo checklist todavía requiere conciliarse con los avances reales al cerrar la etapa.
- Decisión final de rutas: conservar `app/[lang]/` y prefijos en ambos idiomas: `/es`, `/en`, `/es/sobre-mi`, `/en/sobre-mi`, `/es/proyectos`, `/en/proyectos`, `/es/contacto` y `/en/contacto`. No traducir segmentos ni volver a proponer español sin prefijo como decisión vigente.
- Implementado: diccionarios `locales/es/common.json` y `locales/en/common.json`, recursos, `createTranslation()` con instancia independiente e inicialización síncrona (`initAsync: false`) y Provider cliente. Header, navegación móvil, Footer y avisos de Compartir ya utilizan traducciones compartidas.
- En esta sesión se agregó `isLocale(value: string): value is Locale` en `i18n/resources.ts`. Header y navegación móvil validan el segmento de idioma y usan español como respaldo; layout e Inicio, Proyectos y Sobre mí validan `lang` con `notFound()`. Los enlaces internos de esas páginas conservan el prefijo del idioma. El layout usa `lang` para el documento y el Provider.
- Inicio: textos propios, botón de CV, su etiqueta accesible y alt del retrato conectados a traducciones. El párrafo conserva el énfasis mediante `Trans`, al que se pasa explícitamente `i18n={translation}`. No agregar `use client` a la página por este motivo.
- `FeaturedProjectCard` recibe `locale: Locale` desde Inicio y Proyectos y crea su traductor. Títulos y descripciones de los tres destacados se buscan en `projects.<id>.title/description`, con el texto del catálogo como respaldo. `projectCard` contiene las etiquetas comunes; botones, lista de tecnologías y alt interpolan el título traducido mediante `{ title }`. Se comprobó que la demo usa `demoLabel` y GitHub usa `repositoryLabel`. Mantener un único catálogo en `data/projects.ts` para enlaces, imágenes, fechas y tecnologías.
- **Próximo paso exacto, todavía NO realizado:** agregar `home.metadata` en ambos diccionarios (title, description, socialDescription, siteName e imageAlt). El propietario confirmó que no hizo esa última propuesta. Después explicar y guiar el reemplazo del objeto fijo `metadata` de Inicio por `generateMetadata()` según `params.lang`, conservando la portada y adaptando canonical, alternativas por idioma, Open Graph y Twitter. Consultar la guía instalada de Next.js antes de escribir ese código. No tratar Inicio como terminado: sus metadatos siguen fijos en español y su canonical todavía apunta a `/`.
- Pendiente después de cerrar Inicio: traducir Sobre mí, luego Proyectos (incluidos nueve secundarios y controles del carrusel), y Contacto (campos, opciones y privacidad), una página por vez. Conservar Formspree durante v2.0.0.
- Pendientes generales: selector ES/EN en Header conservando página, consulta y fragmento cuando corresponda; sincronizar traductor y ruta al cambiar idioma; cookie persistente solo para elección manual; detección únicamente en `/` con prioridad cookie válida, idioma preferido del navegador y español de respaldo. Las URLs explícitas `/es/...` y `/en/...` prevalecen y no deben sobrescribir la preferencia. Actualmente `/` redirige de forma fija a `/es`; no existe aún la detección acordada. Preparar redirecciones permanentes de las tres URLs antiguas, SEO de ambas lenguas y sitemap. Compartir todavía utiliza solo el dominio: revisar el comportamiento deseado para idioma/ruta.
- Verificaciones pendientes: comprobar manualmente ambos idiomas, enlaces, tarjetas y navegación; ejecutar lint, TypeScript y build de estos avances. No se registró en esta sesión una ejecución final satisfactoria de esos controles ni una confirmación completa del propietario sobre el resultado visual. Los errores antiguos de `LayoutProps` se relacionaron con tipos generados desactualizados; se explicó `npx next typegen`, sin editar manualmente `.next` ni afirmar su resultado sin comprobarlo.
- Forma de enseñanza reiterada por el propietario: trabajar entre los dos, con palabras simples; indicar archivo, ubicación, cambio, motivo y comprobación. Explicar primero los conceptos nuevos. Guiar un paso por vez; cuando pida todos los cambios de un componente, agrupar ese componente, sin extenderse a otras funcionalidades. El propietario programa personalmente; editar archivos solo cuando lo solicite explícitamente. No asumir que «sigamos» autoriza implementación autónoma. Actualizar el seguimiento al cerrar etapas o cuando lo pida.

Los registros siguientes son históricos y no sustituyen este punto de continuidad de V2.

### Cierre de revisión CSP — 18 de noviembre de 2026

- Implementada en `next.config.ts` una CSP activa con `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'` y `form-action 'self' https://formspree.io`. El cambio de aplicación se guardó en `fc24b85`. Se conservan las demás cabeceras y la configuración de renderizado.
- Primero se probaron las tres reglas nuevas en Report-Only: el propietario recorrió las cuatro páginas sin avisos CSP visibles y confirmó envío normal a Formspree con recepción del correo. Cambió temporalmente el action solo en DevTools a `https://example.invalid/prueba-csp`, usando datos ficticios; el navegador informó la infracción sin bloquear y la navegación falló por DNS, como se esperaba.
- Después se activaron las reglas: la misma prueba negativa quedó bloqueada por form-action sin abandonar Contacto. Tras recargar para restaurar el formulario, el envío normal a Formspree volvió a funcionar y llegó el correo. No se modificó el destino del formulario en los archivos.
- El propietario aportó lint y build correctos con Next.js 16.4.6, TypeScript y generación estática de las rutas. Confirmó mediante capturas la cabecera activa tanto en desarrollo como con `npm run start`.
- Se subió la rama seguridad-csp y se abrió temporalmente al público el Preview `agustin-lovagnini-k9omcktjx.vercel.app` mediante una excepción de Deployment Protection. Se verificaron las cuatro directivas en su respuesta HTTPS. Observatory obtuvo B+ (80/100, 11/12), manteniendo la penalización por falta de restricciones de scripts. Esta puntuación no demuestra explotación ni garantiza seguridad.
- Se inspeccionó el HTML y la guía instalada de Next.js. Una simulación Report-Only con `script-src 'self'` mostró avisos para los scripts inline legítimos de Next.js, sin bloquearlos. El propietario retiró después esa cabecera y aportó nuevo lint/build correcto. La configuración final no contiene Report-Only ni script-src.
- La investigación de lectura del build encontró scripts inline por ruta: Inicio 36, Sobre mí 26, Proyectos 19 y Contacto 17. SRI para archivos externos no basta por sí solo para autorizar todos esos bloques. No se implementaron hashes, nonces, herramientas de postbuild ni cambios de arquitectura.
- Decisión del propietario: conservar las cuatro protecciones probadas y posponer una CSP estricta de scripts por su complejidad y mantenimiento. Los nonces afectarían el renderizado estático/PPR según la guía consultada; los hashes requerirían automatización y comprobaciones de builds y navegación. No proponer unsafe-inline ni copiar hashes manuales solo para subir la nota.
- Trabajo integrado y subido a `main`, incluido el registro `f8f659b`. Rama `seguridad-csp` eliminada localmente y en GitHub por autorización del propietario; el repositorio quedó en main, sin cambios pendientes al terminar esa integración.
- [x] El propietario retiró la excepción temporal del Preview: la captura de Deployment Protection Exceptions mostró la lista vacía. No se registró una comprobación posterior de autenticación en incógnito.
- README actualizado como presentación del portfolio: enlace público destacado, acceso al CV, controles del carrusel, Embla en tecnologías y resultados Lighthouse con fecha y alcance. El seguimiento de seguridad se conserva en AGENTS, no en la presentación pública del README. Estos últimos cambios de documentación requieren guardado en Git cuando el propietario lo indique.
- [ ] Mantener como mejora futura, sin implementación acordada, la autorización de scripts compatible con Next.js. El B+ esperado no obliga a cambiar la arquitectura del portfolio.
- Avisos secundarios observados en desarrollo: WebSocket/HMR, recomendación de carga eager para retrato LCP y atributo data-scroll-behavior para scroll suave. No se corrigieron en esta tarea ni se confundieron con infracciones de nuestra CSP. Los errores CSP de DoubleClick durante la navegación a Formspree pertenecían a la política del proveedor; no se añadieron sus dominios a la política del portfolio.

Las secciones siguientes conservan el contexto histórico; sus propuestas o ramas antiguas no sustituyen este cierre.

### Próxima revisión — CSP y HTTP Observatory

- El propietario quiere retomar mañana la revisión de Content Security Policy (CSP), paso a paso y sin cambiar código sin autorización. HTTP Observatory mostró B+ (80/100, 11 de 12 pruebas) y señaló que la CSP no restringe suficientemente scripts u objetos; la puntuación no es una garantía de seguridad ni demuestra una explotación.
- La configuración actual en `next.config.ts` incluye `frame-ancestors 'none'`, que limita la inserción del sitio en marcos, pero no establece restricciones para scripts u objetos. El formulario envía a Formspree y debe seguir funcionando.
- Propuesta: inspeccionar los recursos cargados en producción; diseñar una política adaptada; evaluarla primero con `Content-Security-Policy-Report-Only`; revisar la consola y probar las cuatro páginas, menú, carrusel, imágenes y formulario; ajustar y decidir con el propietario si aplicarla. Después ejecutar lint/build y volver a comprobar antes y después de publicar.
- Consultar la guía de CSP de la versión instalada de Next.js antes de proponer código. Una política con nonces requiere renderizado dinámico y es incompatible con Partial Prerendering según esa guía; evaluar el impacto antes de tomar decisiones. No cambiar la configuración solo para mejorar la puntuación.
- Estado al registrar esta nota: `main` limpia y con seguimiento de `origin/main` antes de editar este archivo; el commit `8f5c044` se subió a `main` y el propietario mostró Vercel con Ready en Production. La continuidad siguiente describe el estado anterior a esa integración; no asumir que la rama `revision-produccion` siga existiendo sin comprobarlo.

### Continuidad actualizada — 17 de noviembre de 2026: segunda computadora

- Rama `revision-produccion` con seguimiento de `origin/revision-produccion`, base local `615d2f47`. La limpieza de portada, el ajuste de estadísticas y el registro anterior ya están en ese commit. Hay cambios posteriores sin commit; no integrar a `main`, hacer push ni publicar sin autorización concreta. Las referencias remotas locales no se actualizaron mediante fetch en esta sesión.
- El propietario ejecutó `npm ci` tras liberar un archivo bloqueado; `next` y `eslint-config-next` quedaron instalados en `16.4.6`. Lint y build ejecutados por Codex terminaron correctamente después de los cambios de código de esta sesión.
- El propietario comprobó las cuatro canónicas públicas, la vista previa de Inicio en LinkedIn, desplegables, CV y certificados en incógnito, formulario y orientación horizontal en su celular. Una ruta inexistente mostró la 404 predeterminada en inglés; una 404 propia sigue siendo opcional.
- El propietario completó el recorrido con Narrador por las cuatro páginas y comprobó certificados, proyectos y Pausar/Reanudar. En local se identifican los certificados y proyectos por nombre y se aclara la acción del carrusel. El aviso de privacidad se lee con el modo de examen y las flechas; no se agregó código para forzar su lectura con Tab. La opción «Saltar al contenido» quedó para más adelante.
- El menú móvil indica la página activa con color y `aria-current`; el propietario lo probó en celular. En Sobre mí se aclaró el borde de las etiquetas de tecnologías, confirmado visualmente por el propietario. No tocar la marquesina de Tecnologías de Inicio ni las sugerencias `break-words` descartadas.
- Las páginas interiores tienen metadatos Open Graph y Twitter propios con la portada compartida. El HTML local de las cuatro rutas mostró títulos, descripciones, imágenes y URLs esperadas; `localhost` es la alternativa local. Falta verificar dominio y vistas previas en producción después de publicar.
- Imágenes: el propietario confirmó su apariencia en los tamaños probados. Los archivos de proyectos pesan aproximadamente 2–17 KiB, el retrato 12 KiB y la portada social 110 KiB; no se midió la transferencia real por visitante. Los resultados anteriores de Lighthouse describen la versión pública anterior a los cambios locales.
- Auditoría actual: `npm audit` informó 14 avisos relacionados con picomatch en dependencias de desarrollo; `npm audit --omit=dev` informó 0 vulnerabilidades conocidas. El aviso GHSA-fc5q-39xc-vjpf no indicaba parche al consultarlo. No usar `npm audit fix --force` como solución sin revisar.
- ESLint 9.39.5 está fuera de soporte. Los complementos instalados `eslint-plugin-react` 7.37.5, `eslint-plugin-import` 2.32.0 y `eslint-plugin-jsx-a11y` 6.10.2 eran las últimas versiones consultadas y no declaraban compatibilidad con ESLint 10. Volver a verificar antes de actualizar; no forzar dependencias. `cache-dir` devolvió `undefined` y no reapareció en el último `npm ci`; `unrs-resolver` tampoco mostró entonces la advertencia anterior. Mantener ambas en observación.
- Pendiente: revisar y guardar los cambios acordados con commit/push cuando el propietario lo indique; publicar solo con su indicación. Tras publicar, comprobar página activa, estadísticas, metadatos e imágenes sociales públicas. Revisar condiciones del hosting para uso profesional/freelance y seguir los avisos de dependencias. La indentación de estadísticas y la 404 propia son opcionales.

El checklist y las etapas siguientes conservan el contexto anterior; ante diferencias, prevalece esta actualización.

### Continuidad — 17 de noviembre de 2026: revisión de producción

- Rama actual: **`revision-produccion`**, creada desde `main` en `c262f35`. Al iniciar esta actualización todavía no tenía seguimiento remoto. La rama anterior `mejoras-produccion` se descartó; no usar sus antiguas instrucciones de continuidad ni repetir cherry-picks.
- Producción: https://agustin-lovagnini-cv.vercel.app. Los push a `main` despliegan automáticamente. Trabajar en `revision-produccion` y no integrar ni publicar sin indicación del propietario.
- El propietario quiere seguir desde otra computadora. Primero guardar los cambios acordados con commit/push; no asumir que archivos guardados localmente ya están en GitHub. Codex no debe hacer commits ni push automáticamente sin autorización para la acción concreta.
- Cambios locales al actualizar este registro: README referencia la portada JPEG; se eliminó `public/images/og/og-agustin-lovagnini.webp`; Sobre mí cambió la cuadrícula de estadísticas para resolver un desborde con zoom. Este registro también queda modificado. Falta lint/build posterior a este ajuste y no se hizo merge a `main`.
- **No tocar la marquesina de Tecnologías de Inicio**, por decisión expresa del propietario. Tampoco cambiar las tres sugerencias del editor de `break-words` a `wrap-break-word` (dos en Contacto y una en Sobre mí). Son sugerencias, no fallos de ejecución.
- Proyectos ya utiliza Embla con controles en tablet/escritorio, pausa por mouse y foco. No proponer reimplementarlo como si esos controles faltaran. En móvil tiene scroll manual y pausa mientras se mantiene el dedo, con reanudación diferida tras soltar.
- El usuario modificó únicamente el `<dl>` de estadísticas de Sobre mí: `grid-cols-2` pasó a `grid-cols-[repeat(auto-fit,minmax(8.5rem,1fr))]`. Confirmó que se ve bien al 200 % y 250 %. El cambio exterior de dos columnas a una depende del breakpoint existente, no de esa clase del `<dl>`. La indentación de ese bloque quedó pendiente de ordenar, sin impacto funcional identificado.

#### Checklist vigente

**Imagen al compartir**

- [x] Portada JPEG publicada y referencias de Open Graph/Twitter actualizadas en layout e Inicio; commit `c262f35` en `main`.
- [x] El propietario mostró WhatsApp móvil con la portada grande arriba, después de probar `?preview=jpg2`. No atribuir con certeza el resultado solo al formato: también cambió la URL de prueba/caché. WhatsApp decide la disposición final.
- [x] WebP de portada eliminado localmente y README actualizado al JPG. Los demás WebP se conservan.
- [ ] Guardar/subir la limpieza pendiente y verificarla al publicar.
- [ ] Probar vista previa en LinkedIn.

**Accesibilidad e interacción — pruebas manuales del propietario**

- [x] Recorrido con Tab en Proyectos, tarjetas y foco visibles.
- [x] Carrusel detenido mientras el foco está en sus enlaces; reanuda al salir del bloque. La aclaración final del propietario descarta el supuesto fallo de reanudación mientras seguía enfocado.
- [x] Anterior, Siguiente y Pausar/Reanudar funcionan con teclado.
- [x] Funcionamiento táctil del carrusel móvil confirmado por el propietario.
- [x] Menú móvil: apertura con teclado, foco inicial en Cerrar, recorrido con Tab/Shift+Tab, Escape y retorno al botón comprobados por el propietario.
- [ ] Evaluar/agregar «Saltar al contenido» si el propietario lo decide.
- [ ] Indicar página activa en el menú móvil.
- [ ] Probar con lector de pantalla. Los resultados automáticos no sustituyen esta prueba.
- Tecnologías de Inicio queda sin modificaciones por decisión del propietario; no marcar como implementado un botón de pausa que no existe.

**Zoom y responsive**

- [x] El propietario confirmó recorrido de las cuatro páginas al variar el ancho de ventana, incluidos tamaños intermedios, sin problemas observados.
- [x] Desborde de Compromiso/Certificaciones corregido localmente y confirmado al 200 % y 250 %.
- [ ] Completar una prueba específica en orientación horizontal.
- [ ] Verificar el ajuste local de estadísticas después de publicarlo. No extrapolar esta corrección a una auditoría completa de zoom de todas las páginas.

**Lighthouse — producción pública, capturas del propietario del 2026-11-17**

La primera medición móvil de Inicio dio 75 y tenía advertencia explícita de extensiones; se descartó como referencia de rendimiento. Se repitieron las pruebas en incógnito. Las siguientes son mediciones de laboratorio de la versión pública, que todavía no contiene el ajuste local del zoom; no equivalen a datos de usuarios reales ni a certificación de accesibilidad/seguridad.

| Ruta | Rendimiento Mobile | Rendimiento Desktop | Accesibilidad / Buenas prácticas / SEO en ambos |
| --- | --- | --- | --- |
| `/` | 98 | 100 | 100 / 100 / 100 |
| `/sobre-mi` | 97 | 100 | 100 / 100 / 100 |
| `/proyectos` | 97 | 100 | 100 / 100 / 100 |
| `/contacto` | 98 | 100 | 100 / 100 / 100 |

| Ruta Mobile | FCP | LCP | TBT | CLS | Speed Index |
| --- | --- | --- | --- | --- | --- |
| `/` | 1,1 s | 2,2 s | 100 ms | 0 | 1,1 s |
| `/sobre-mi` | 1,1 s | 2,2 s | 130 ms | 0 | 1,4 s |
| `/proyectos` | 1,0 s | 2,2 s | 150 ms | 0 | 1,2 s |
| `/contacto` | 1,0 s | 2,2 s | 120 ms | 0 | 1,2 s |

En Desktop las cuatro rutas mostraron FCP 0,3 s, LCP 0,5 s, TBT 0 ms y CLS 0; Speed Index entre 0,3 y 0,4 s.

- [x] Ocho mediciones completadas y revisadas, sin necesidad urgente de optimización identificada.
- Los avisos restantes de CSS bloqueante, JavaScript de compatibilidad y trabajo del hilo principal son oportunidades de diagnóstico; no modificar código solo para perseguir 100. React Developer Tools queda como herramienta si aparece una necesidad concreta.

**SEO y funcionamiento**

- [x] Capturas públicas de sitemap y robots verificadas: sitemap enumera las cuatro páginas con dominio de producción; robots contiene `User-Agent: *`, `Allow: /` y la URL correcta del sitemap. Sin localhost.
- [ ] Verificar las cuatro canónicas emitidas en producción.
- [ ] Personalizar Open Graph/Twitter de páginas interiores; actualmente heredan el bloque social general.
- [ ] Completar comprobaciones de CV/certificados sin sesión, desplegables, rutas inexistentes y errores del formulario. Las pruebas históricas de envío normal siguen registradas abajo.
- [ ] Evaluar una 404 propia, opcional; la predeterminada ya existe.

**Seguridad y mantenimiento**

- [x] Next.js y eslint-config-next actualizados a `16.4.6`; lint y build exitosos aportados por el propietario. Parche aplicado a `main` mediante cherry-pick como `2a3475a` y captura de Vercel con Ready en Production.
- [x] `npm audit --omit=dev` devolvió 0 vulnerabilidades conocidas durante esa revisión del 2026-11-17. No confundirlo con el audit completo ni con garantía absoluta de seguridad.
- [ ] Seguir los 14 avisos de desarrollo relacionados con picomatch: https://github.com/advisories/GHSA-fc5q-39xc-vjpf. Al consultarlo el 2026-11-17 no indicaba versión corregida; volver a verificar antes de proponer una solución. No usar `npm audit fix --force`, que proponía bajar eslint-config-next a 14.2.35.
- [ ] Revisar las advertencias `cache-dir` y script de unrs-resolver/allowScripts antes de cambiar configuraciones o aprobar scripts.
- [ ] Evaluar actualización compatible de ESLint por el aviso de fin de soporte mostrado durante `npm ci`.
- Las comprobaciones HTTPS/cabeceras del 14 de noviembre conservan su alcance histórico; no se repitieron todas hoy.

**Documentación y cierre**

- [x] Actualizado este punto de continuidad con pruebas y pendientes, a pedido del propietario.
- [ ] Actualizar README con enlace público, estado real y resultados; hoy solo se cambió allí la referencia de la portada.
- [ ] Ordenar indentación del bloque de estadísticas si el propietario lo autoriza; no modificar las sugerencias Tailwind descartadas.
- [ ] Ejecutar lint y build de los últimos cambios locales.
- [ ] Guardar/subir los cambios acordados en `revision-produccion`. Merge a `main` únicamente cuando lo indique el propietario.

#### Retomar en otra computadora

1. Comprobar `git status` y conservar los cambios locales antes de actualizar.
2. Ejecutar `git fetch origin`. Si no existe rama local: `git switch --track origin/revision-produccion`. Si ya existe: `git switch revision-produccion` y `git pull --ff-only`.
3. Ejecutar `npm ci` si faltan dependencias o cambiaron package.json/lockfile; `npm run dev` para desarrollar. No copiar node_modules ni .next entre computadoras.
4. Leer este registro y elegir una sola tarea pendiente. No rehacer funcionalidades ya comprobadas ni tocar Tecnologías de Inicio.

### Registro histórico anterior — no usar sus pendientes como estado actual

### Continuidad — 14 de noviembre de 2026

- El propietario quiere dejar el portfolio preparado para publicar y prefiere implementar personalmente los cambios con explicaciones por bloques y comandos explicados. Autorizó expresamente copiar la portada y reorganizar README y este registro; esto no autoriza modificaciones generales ni despliegues automáticos.
- Se incorporó la portada proporcionada por el propietario en `public/images/og/og-agustin-lovagnini.webp` (1200 × 630 px, 40430 bytes). El propietario agregó en el layout título con plantilla, descripción, Open Graph, Twitter Card e imagen, y metadatos propios en Sobre mí, Proyectos y Contacto.
- `metadataBase` lee `process.env.SITE_URL` y utiliza `http://localhost:3000` como alternativa local. Antes de publicar, configurar `SITE_URL` con el dominio público completo y volver a compilar; no presentar localhost como URL válida para las vistas previas públicas.
- El propietario aportó salida de `npm.cmd run lint` sin errores ni advertencias y `npm.cmd run build` correcto con Next.js `16.4.3`, TypeScript y generación de las cuatro páginas. Después confirmó las pruebas manuales propuestas en producción local: páginas, menú móvil, enlaces, formulario con recepción del correo y acceso a la portada.
- Se revisaron los cambios con `git status --short`, `git diff --stat` y `git diff --check`. Los metadatos y la portada quedaron en el commit `eb18b92`, subido a `estructura-proyecto`. El propietario realizó un merge fast-forward a `main` y confirmó el push de `main`.
- Estado comprobado al actualizar este registro: rama local `main`, con seguimiento de `origin/main`; `estructura-proyecto` ya no aparece entre las ramas locales ni las referencias remotas disponibles en este checkout. Para próximas tareas, crear una rama desde `main` actualizada; las ramas no se sincronizan entre sí automáticamente.
- A pedido del propietario, se reorganizó el README para visitantes de GitHub: portada, presentación, funcionalidades, páginas, capturas, tecnologías, instalación, comandos, configuración de `SITE_URL`, estructura y pendientes. Se retiró del inicio la nota antigua que indicaba continuar en `estructura-proyecto`.
- Se copiaron las ocho capturas WebP del propietario a `docs/screenshots/`, destinadas al README, sin modificar sus imágenes. Se comprobaron las referencias locales y los hashes de las ocho copias. Las capturas incluyen elementos del navegador y del entorno de desarrollo; no acreditan por sí solas una auditoría responsive completa.
- El propietario guardó y subió README, capturas y el registro anterior. La captura del despliegue mostró el commit `11239f6` en `main`. No se hicieron commits ni push automáticos.
- El propietario creó el proyecto en Vercel y realizó el primer despliegue de producción manualmente. URL pública estable: **https://agustin-lovagnini-cv.vercel.app**. Las capturas muestran estado `Ready`, `Production` y `Current`. Se explicaron las condiciones del plan Hobby para uso personal no comercial; no se documentó una resolución específica sobre el encuadre del uso freelance.
- Se configuró `SITE_URL=https://agustin-lovagnini-cv.vercel.app` para `Production` y se realizó un redeploy. La herramienta Open Graph de Vercel mostró `og:image` y `twitter:image` con el dominio público y la portada cargada.
- El propietario agregó en `app/page.tsx` la canónica `/` y `openGraph.url: "/"`, conservando los campos del bloque Open Graph. El commit `3eab86d` se desplegó automáticamente tras el push a `main`. Vercel mostró `Ready` y la vista Open Graph confirmó `og:url` con la dirección pública. No colocar la canónica de Inicio en el layout compartido, porque se heredaría en las otras páginas.
- El propietario confirmó que las cuatro páginas y el formulario funcionan desde la URL pública en incógnito. La vista previa de Vercel no equivale a comprobar el enlace directamente en WhatsApp, LinkedIn u otros servicios; esa prueba sigue pendiente.
- Se revisaron las advertencias visibles del build: configuración npm desconocida `cache-dir` y script de instalación de `unrs-resolver@1.12.2` no cubierto por `allowScripts`. No impidieron el build. No se aprobaron scripts ni se cambiaron dependencias para silenciarlas; revisar su origen si se decide abordarlas.
- Revisión básica del 2026-11-14: `npm.cmd audit --json` devolvió **0 vulnerabilidades conocidas**. Una petición HTTPS a `/contacto` devolvió `200`, HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `Content-Security-Policy: frame-ancestors 'none'` y `Referrer-Policy: strict-origin-when-cross-origin`. No aparecieron archivos versionados que coincidieran con `.env*`, `*.pem`, `*.key` o `*credentials*`. Esta comprobación por nombres no constituye un escaneo exhaustivo de secretos, y un audit sin avisos no garantiza seguridad absoluta.
- Estado local al actualizar este registro: `main` con cambios sin commit en las canónicas de Sobre mí, Proyectos y Contacto, y archivos nuevos `app/sitemap.ts` y `app/robots.ts`. Ambos usan `SITE_URL` con alternativa localhost. Sitemap enumera las cuatro rutas; robots permite rastreo y enlaza al sitemap. Se leyeron los archivos, pero todavía no se aportó lint/build posterior ni se verificaron sus respuestas generadas.
- Próximo paso concreto: ejecutar lint y build con los últimos cambios, comprobar `/sitemap.xml`, `/robots.txt` y canónicas, guardar con commit/push y verificar el despliegue público. En producción, sitemap y robots deben apuntar al dominio público, no a localhost. Actualizar después el README, que todavía indica publicación pendiente.
- Continúan pendientes la auditoría completa responsive y de accesibilidad, Lighthouse, React Developer Tools y los controles específicos detallados en las etapas siguientes. No marcar las 12 etapas como completas por haber publicado el sitio.

### Cómo mantener esta lista

- Seguir las 12 etapas con el propietario, de a un paso por vez. Esta lista no autoriza cambios, instalaciones ni publicaciones por sí sola.
- Usar `[ ]` para pendientes o etapas parciales y `[x]` únicamente para comprobaciones terminadas con evidencia. Anotar la fecha, el alcance y el resultado al actualizar una etapa.
- Se autoriza mantener este registro al corroborar los puntos junto al propietario. Conservar las reglas existentes y no marcar una etapa por haber agregado código sin verificar su comportamiento.
- Distinguir revisión del código, pruebas manuales del propietario y comprobaciones del sitio publicado. No presentar una búsqueda de patrones o un audit sin avisos como garantía absoluta de seguridad.
- Repetir las comprobaciones afectadas cuando cambien el código, las dependencias o el despliegue. Los resultados describen la versión revisada, no todas las versiones futuras.
- El propietario indicó un contador externo de 4/12 sin identificar las cuatro etapas. Confirmar cuáles son antes de trasladar esas marcas; no asumir que corresponden a las etapas 1 a 4.

### Lista de las 12 etapas

- [x] **1. Revisar código y estructura — revisión y limpieza acordada completadas el 2026-11-12.**
  - [x] El 2026-11-12 se normalizaron diez clases de medidas en seis TSX a sus formas directas de Tailwind: anchos con escala de espaciado, `z-100`, `aspect-3/4` y `w-9/10`. Revisadas las declaraciones generadas con la escala actual; lint y build correctos. Conservados los valores arbitrarios necesarios para sombras, columnas personalizadas, transiciones y cálculos.
  - [x] El 2026-11-12 se separó el CSS global en seis hojas comunes, con estilos propios junto al componente y estilos compartidos en `styles/`. Los 15 TSX se conservaron idénticos. Comparadas 423 reglas compiladas por selector, declaraciones y contexto de media queries/capas; lint sin errores ni advertencias y build correcto. La comparación visual y responsive queda pendiente de prueba manual; no se ejecutó navegador.
  - [x] El 2026-11-12 se reorganizaron los diez componentes en `layout`, `projects`, `certifications` y `ui`, según la estructura solicitada. Actualizados imports y README; lint sin errores ni advertencias y build correcto, incluido TypeScript.
  - [x] Revisadas las cuatro páginas, los componentes compartidos, los catálogos de datos y la configuración. ESLint y TypeScript no detectaron errores; IDs de datos sin duplicados e imágenes locales referenciadas presentes.
  - [x] Eliminada la lista local duplicada de tecnologías en Sobre mí: se importa `data/technologyGroups.ts`. Retirados los imports de íconos que quedaron sin uso.
  - [x] Integradas las cuatro competencias de `data/competencies.ts` en Sobre mí mediante `map()`, después de Tecnologías y antes de la llamada a la acción.
  - [x] Reutilizado `ScrollPrompt` en Sobre mí y eliminado su bloque equivalente escrito directamente en la página.
  - [x] Corregido el doble punto de «práctica..» y retirado el TODO de movimiento reducido que ya estaba implementado.
  - [x] Actualizada la nota de continuidad del README con el estado real, comprobaciones y próximos pasos.
  - [x] Acordado que `SECTION` también se permite antes de `<header>`; no reclasificar esos comentarios únicamente por la etiqueta.
  - [x] Por decisión explícita del propietario, conservar el estado actual del menú al cambiar de móvil a escritorio y volver. No agregar el efecto de `matchMedia` propuesto.
  - [x] Revisados `filter().sort()` de Proyectos y los `slice()` de certificaciones: no requieren corrección con la lógica actual; `filter()` crea una copia y las clases responsive compensan el solapamiento.
  - [x] Corregidos los márgenes de Idiomas y Modalidad en Sobre mí: `mt-[0.5]` pasó a `mt-0.5`, equivalente a 2 px y consistente con Ubicación.
  - [x] Ordenados detalles de indentación e imports, normalizados marcadores y textos de comentarios, y cambiados los comentarios de lógica de certificaciones a sintaxis TypeScript. Conservado `SECTION` en los encabezados y la lógica actual.
  - [x] Tras esta limpieza, `npm run lint` sin errores ni advertencias, `tsc --noEmit --incremental false` sin errores y `git diff --check` correcto. Las pruebas visuales, de teclado y de rendimiento siguen en sus etapas correspondientes.

- [ ] **2. Comprobar funcionalidad — parcial.**
  - [x] El propietario confirmó envío normal del formulario y recepción del correo.
  - [x] Probada pérdida de conexión: error del navegador y conservación de los campos visibles al volver atrás.
  - [x] El 2026-11-14 el propietario confirmó la prueba manual propuesta de las cuatro páginas, menú móvil, enlaces a proyectos, certificados y redes, y envío del formulario con recepción del correo, usando `npm run start` en producción local.
  - [ ] Completar la comprobación específica de desplegables y rutas de error; la confirmación anterior no documenta estos casos individualmente.
  - Mejorar los errores dentro del portfolio es una decisión de experiencia de uso pendiente; no se ha demostrado una vulnerabilidad por usar la respuesta de Formspree.

- [ ] **3. Probar responsive — parcial.**
  - Se realizaron ajustes de ancho, retrato y botones móviles. No hay evidencia suficiente de una prueba completa en celular, tablet, escritorio y tamaños intermedios.
  - Pendiente: comprobar desbordamientos, orientación horizontal y contenido en las cuatro páginas.

- [ ] **4. Revisar accesibilidad — parcial.**
  - [x] Revisados en el código landmarks, jerarquía de encabezados, etiquetas del formulario, textos alternativos y reglas de movimiento reducido.
  - [x] Reforzados los bordes de los cuatro campos del formulario con `border-subtle`.
  - [ ] Revisar pausa accesible de las marquesinas: se detectó falta de un control de pausa por teclado y de pausa al enfocar los enlaces. Volver a comprobar el estado actual antes de corregir.
  - [ ] Probar recorrido completo con Tab y Shift+Tab, foco visible, menú móvil, zoom al 200 % y lector de pantalla.

- [ ] **5. Analizar con Lighthouse — pendiente.**
  - Ejecutar sobre producción local y registrar ruta, modo móvil/escritorio, resultados y problemas relevantes. La prueba pública final corresponde a la etapa 12.

- [ ] **6. Inspeccionar con React Developer Tools — pendiente.**
  - Revisar componentes, props y estado de las interacciones. Analizar renderizados si aparece una necesidad concreta, sin optimizaciones prematuras.

- [ ] **7. Revisar seguridad — revisión básica local y pública realizada; controles complementarios pendientes.**
  - [x] El 2026-11-14, `npm.cmd audit --json` informó 0 vulnerabilidades conocidas. No se actualizaron paquetes ni se aprobaron scripts de instalación.
  - [x] Verificadas por HTTPS las tres cabeceras configuradas y HSTS en `/contacto` pública, con respuesta `200`. La comprobación no se extendió individualmente a todas las rutas.
  - [x] El propietario obtuvo 0 vulnerabilidades conocidas tras aplicar el override de `minimatch` a `11.0.1`; lint y build posteriores correctos.
  - [x] Revisados `.gitignore`, archivos versionados y el historial disponible localmente: sin indicadores de secretos encontrados. No se verificaron referencias remotas ausentes de esta PC.
  - [x] Configurados límites del navegador: nombre 100, correo 254 y mensaje 5000 caracteres; campo honeypot `_gotcha` agregado.
  - [x] El propietario mostró Formshield y CAPTCHA habilitados en Formspree, y reglas obligatorias para `nombre`, `email`, `asunto` y `mensaje`.
  - [x] Pruebas del proveedor confirmadas: nombre vacío rechazado, nombre de 101 caracteres rechazado, mensaje de 5001 rechazado y correo `hola` rechazado.
  - [x] Agregado aviso de uso de datos con enlace a privacidad de Formspree y alternativas de contacto.
  - [x] Revisión del código sin encontrar Route Handlers/Server Actions propios, inserción directa de HTML no confiable ni redirecciones programadas. Enlaces externos revisados con HTTPS y `noopener` cuando abren otra pestaña.
  - [x] El propietario comprobó en `/contacto`, en desarrollo y producción local: `X-Content-Type-Options: nosniff`, `Content-Security-Policy: frame-ancestors 'none'` y `Referrer-Policy: strict-origin-when-cross-origin`.
  - [ ] Verificar parches vigentes de Next.js y React antes de publicar; revisar el override cuando la dependencia original incorpore la corrección.
  - [ ] Revisar archivos a publicar, variables del hosting y alcance de la información de privacidad según el uso real del sitio.
  - Límites conocidos: no se configuró máximo de longitud de correo en el proveedor ni una lista de asuntos permitidos; no se probaron individualmente todas las reglas. Una CSP limitada a `frame-ancestors` no restringe scripts ni recursos.
  - HTTPS y las cabeceras se comprobaron en `/contacto` pública el 2026-11-14; conservar el alcance limitado de esta verificación.

- [ ] **8. Optimizar imágenes y recursos — parcial.**
  - [x] El 2026-11-12 se reemplazaron las capturas de Portfolio HTML/CSS/Sass y Simulador de Inversiones por los nuevos WebP proporcionados por el propietario, ambos de 600 × 233 px. Actualizadas sus dimensiones en el catálogo; las medidas anteriores quedan sustituidas por estas.
  - [x] El 2026-11-12 se extendió el ajuste de proporción original a las dos listas de `ProjectMarquee`: dimensiones del catálogo y `w-full h-auto`, sin `fill` ni marco `aspect-video`. Lint y build correctos; conservada la lógica de movimiento y controles existente.
  - [x] El 2026-11-12 las imágenes destacadas pasaron a usar sus dimensiones reales (`imageWidth` e `imageHeight` en el catálogo) y `w-full h-auto`, sin marco `aspect-video` ni `fill`. Se conserva la captura completa, sin recortarla ni añadir franjas por diferencia de proporción. Dimensiones de los 12 archivos leídas de sus metadatos; lint y build correctos tras el cambio. La marquesina conserva su diseño.
  - [x] El 2026-11-12 se incorporó la captura WebP original del Simulador de Inversiones como `public/images/projects/simulador-inversiones.webp`, vinculada en el catálogo. «Primer portfolio personal» pasó a secundario; quedan 12 proyectos, tres destacados y nueve secundarios.
  - [x] Tras incorporar el simulador, lint sin errores ni advertencias y build correcto. Verificados los recuentos, orden de destacados, secundarios cronológicos, IDs únicos, imágenes presentes y copia de la captura idéntica al original.
  - [x] Imágenes de proyectos organizadas en WebP y uso de `next/image` en sus tarjetas.
  - [x] El 2026-11-12 se migraron los retratos de Inicio y Sobre mí a `next/image` con importación estática y `sizes`; el logo SVG se sirve con `Image` y `unoptimized`.
  - [x] El propietario aportó lint sin errores ni advertencias y build correcto tras los cambios de imágenes.
  - [ ] Comprobar visualmente los recortes, dimensiones y comportamiento responsive, y medir carga y peso real de recursos según su uso.

- [ ] **9. Preparar SEO — parcial.**
  - [x] El 2026-11-14 se incorporaron título general con plantilla, descripción, Open Graph, Twitter Card y portada, además de títulos y descripciones en Sobre mí, Proyectos y Contacto. Inicio hereda los metadatos generales del layout. Lint y build posteriores correctos, aportados por el propietario.
  - [x] El propietario confirmó acceso local a la portada en producción. Esto no comprueba todavía su lectura por WhatsApp, LinkedIn o Facebook.
  - [x] Definida la URL pública y configurada `SITE_URL` en Vercel Production; redeploy completado. Canónica y `og:url` de Inicio incorporados en el commit `3eab86d` y publicados.
  - [x] La herramienta Open Graph de Vercel mostró portada y URLs públicas correctas para Inicio después del despliegue.
  - [ ] Canónicas de las otras tres páginas, sitemap y robots implementados localmente; falta lint/build, commit/push y comprobar el resultado publicado.
  - [ ] Probar la vista previa pegando el enlace en servicios externos. No confundir la previsualización de Vercel con la caché de cada red.

- [x] **10. Ejecutar build de producción — última comprobación aportada el 2026-11-14.**
  - [x] El 2026-11-14, después de los metadatos y la portada: `npm.cmd run lint` sin errores ni advertencias y `npm.cmd run build` correcto, con TypeScript y generación de páginas. `npm.cmd run start` inició correctamente; el propietario confirmó la prueba manual descrita en la etapa 2.
  - Verificación tras actualizar Node.js el 2026-11-12: Node `26.13.1`, npm `11.12.1`; lint sin errores ni advertencias y build correcto, incluida la comprobación de TypeScript y generación de páginas. La versión de Node cumple los requisitos declarados de Next.js instalado.
  - Última comprobación aportada por el propietario el 2026-11-12, tras los cambios de imágenes: lint sin errores ni advertencias.
  - Build posterior a los cambios de imágenes correcto: TypeScript y generación de páginas sin errores.
  - `npm run start` inició correctamente y se comprobaron las tres cabeceras en producción local.
  - Repetir lint y build si se realizan nuevos cambios antes de desplegar.

- [x] **11. Publicar en Vercel — despliegue realizado por el propietario el 2026-11-14.**
  - Sitio público en https://agustin-lovagnini-cv.vercel.app, conectado a GitHub y a la rama `main`. `SITE_URL` configurada para Production; redeploy realizado y Open Graph comprobado en Vercel.
  - Confirmado despliegue automático al subir el commit `3eab86d` a `main`. Advertir al explicar futuros push a esta rama que publican cambios. Codex no tiene autorización general para hacer push o desplegar por su cuenta.
  - No se compró ni configuró un dominio propio. Mantener pendiente la revisión del encuadre de uso profesional/freelance bajo las condiciones vigentes del plan elegido.

- [ ] **12. Verificar el sitio publicado — parcial.**
  - [x] El propietario confirmó funcionamiento de las cuatro páginas y del formulario en incógnito desde la URL pública.
  - [x] Comprobadas respuesta HTTPS y cabeceras de `/contacto`; portada y metadatos de Inicio mostrados correctamente por Vercel.
  - [ ] Completar casos específicos de error, recursos externos, vista previa en redes y comprobación pública de los últimos cambios SEO tras su despliegue.
  - Repetir Lighthouse en producción y registrar los resultados. No confundir producción local con publicación en Internet.

**Objetivo principal: construir un portfolio profesional mientras el desarrollador aprende y mantiene el control de todas las decisiones y modificaciones.**
