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

## 9. Contacto y publicación

El portfolio tendrá un formulario que permita recibir consultas por correo electrónico.

Se evaluará una solución sencilla, como Formspree, evitando implementar un backend propio sin necesidad.

El hosting todavía no está definido.

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

Registro actualizado el 2026-11-12 con las comprobaciones realizadas en esta sesión y los resultados aportados por el propietario.

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
  - [ ] Comprobar sistemáticamente navegación, enlaces externos, certificados, desplegables, menú y rutas de error.
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

- [ ] **7. Revisar seguridad — revisión local realizada; cierre previo a publicación pendiente.**
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
  - HTTPS y verificación de las protecciones en el dominio definitivo quedan para las etapas 11 y 12.

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
  - Existen metadatos generales; falta comprobar de manera integral metadata por página, Open Graph, URL definitiva, sitemap y robots.

- [x] **10. Ejecutar build de producción — comprobado el 2026-11-12.**
  - Verificación tras actualizar Node.js el 2026-11-12: Node `26.13.1`, npm `11.12.1`; lint sin errores ni advertencias y build correcto, incluida la comprobación de TypeScript y generación de páginas. La versión de Node cumple los requisitos declarados de Next.js instalado.
  - Última comprobación aportada por el propietario el 2026-11-12, tras los cambios de imágenes: lint sin errores ni advertencias.
  - Build posterior a los cambios de imágenes correcto: TypeScript y generación de páginas sin errores.
  - `npm run start` inició correctamente y se comprobaron las tres cabeceras en producción local.
  - Repetir lint y build si se realizan nuevos cambios antes de desplegar.

- [ ] **11. Publicar en Vercel — pendiente de confirmar hosting y autorizar despliegue.**
  - Confirmar el proveedor con el propietario. Revisar condiciones de uso, variables por entorno y dominio/HTTPS antes de publicar. No desplegar automáticamente.

- [ ] **12. Verificar el sitio publicado — pendiente.**
  - Probar las cuatro páginas, enlaces, formulario y respuestas de error. Comprobar HTTPS, cabeceras y recursos externos en la URL pública.
  - Repetir Lighthouse en producción y registrar los resultados. No confundir producción local con publicación en Internet.

**Objetivo principal: construir un portfolio profesional mientras el desarrollador aprende y mantiene el control de todas las decisiones y modificaciones.**
