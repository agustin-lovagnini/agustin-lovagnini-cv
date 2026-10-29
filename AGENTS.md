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

**Objetivo principal: construir un portfolio profesional mientras el desarrollador aprende y mantiene el control de todas las decisiones y modificaciones.**