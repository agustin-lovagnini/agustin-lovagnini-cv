## Punto de continuidad — 29 de octubre de 2026

**Rama de trabajo:** `estructura-proyecto`.

### Dónde quedamos

- Next.js está instalado con React, TypeScript y Tailwind CSS. Se utiliza `app/` en la raíz.
- Las cuatro páginas tienen contenido mínimo: `/`, `/sobre-mi`, `/proyectos` y `/contacto`.
- `components/Header.tsx` ya se muestra desde `app/layout.tsx` en todas las páginas.
- El Header contiene el texto provisional «Header» y un único enlace a Inicio mediante `Link`.
- El aviso de hidratación observado en el navegador se resolvió desactivando ColorZilla.
- `AGENTS.md` documenta el contexto y la forma de trabajo: el propietario programa y Codex acompaña como mentor.

### Próximo paso y pendientes

1. Agregar a `components/Header.tsx` los enlaces a Sobre mí (`/sobre-mi`), Proyectos (`/proyectos`) y Contacto (`/contacto`). Probar la navegación entre las cuatro páginas.
2. Reemplazar el texto provisional del encabezado por el nombre y revisar los textos iniciales: actualmente Inicio y Sobre mí dicen «Stack Developer».
3. Crear el Footer compartido e incorporarlo al layout.
4. Cambiar `lang="en"` por el idioma del sitio y reemplazar los metadatos de ejemplo en `app/layout.tsx`.
5. Definir juntos el diseño antes de implementar estilos: colores, tipografías, distribución y responsive. Las fuentes actuales siguen siendo Geist y Geist Mono; Inter y Space Grotesk están previstas.
6. Incorporar contenido profesional, proyectos e imágenes; después resolver contacto, SEO, accesibilidad, pruebas y publicación.

### Para retomar desde casa

Antes de salir, revisar y guardar los avances mediante un commit en `estructura-proyecto`, y subir esa rama a GitHub. Al registrar esta nota, la configuración y los componentes nuevos todavía no estaban incluidos en un commit.

En casa, clonar el repositorio si todavía no existe allí. Si ya existe, comprobar primero que no haya cambios locales pendientes, ejecutar `git fetch origin`, cambiar a `estructura-proyecto` y actualizarla con `git pull --ff-only`. Si la rama solo existe en GitHub, crear su seguimiento local con `git switch --track origin/estructura-proyecto`.

Con la rama actualizada, ejecutar `npm ci` para instalar las versiones del archivo de bloqueo y `npm run dev` para abrir el sitio en `http://localhost:3000`. No copiar `node_modules/` ni `.next/` entre computadoras: se generan localmente.

Leer este resumen y `AGENTS.md` antes de continuar. Las conversaciones locales no se consideran sincronizadas entre computadoras.

---

# Portfolio Profesional | Agustín Lovagnini

> [!NOTE]
> **Estado: En desarrollo**
>
> Este repositorio contiene la nueva versión de mi portfolio profesional, desarrollada desde cero para modernizar mi anterior CV web e incorporar los conocimientos adquiridos durante mi formación como desarrollador Full Stack.

## Descripción

Portfolio web personal diseñado para presentar mi perfil profesional, formación, experiencia, habilidades técnicas y proyectos destacados.

El objetivo es ofrecer un espacio moderno, accesible y responsive donde reclutadores, empresas, desarrolladores y potenciales clientes puedan conocer mi trabajo y ponerse en contacto conmigo.

Este proyecto también forma parte de mi aprendizaje continuo, especialmente en React, Next.js y TypeScript, aplicando buenas prácticas de desarrollo frontend, arquitectura y organización del código.

## Objetivos

- Presentar mi perfil profesional como desarrollador Full Stack.
- Mostrar proyectos y tecnologías utilizadas.
- Compartir mi formación, certificaciones y experiencia.
- Facilitar el contacto para oportunidades laborales y proyectos freelance.
- Construir una interfaz moderna, responsive y accesible.
- Aplicar buenas prácticas de desarrollo y mantenimiento.
- Optimizar el rendimiento, SEO y experiencia de usuario.
- Publicar una versión estable y preparada para producción.

## Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| Next.js | Framework principal y App Router |
| React | Componentes e interfaces |
| TypeScript | Tipado estático |
| Tailwind CSS v4 | Estilos y diseño responsive |
| Git | Control de versiones |
| GitHub | Repositorio y seguimiento del proyecto |
| npm | Gestión de dependencias |

## Estructura del sitio

El portfolio contará con cuatro páginas independientes:

### Inicio — `/`

Presentación profesional, especialidad, propuesta de valor y accesos a proyectos y contacto.

### Sobre mí — `/sobre-mi`

Perfil profesional, experiencia, formación, certificaciones y conocimientos técnicos.

### Proyectos — `/proyectos`

Selección de proyectos destacados, capturas, descripciones, tecnologías, repositorios y demostraciones.

También incluirá las principales habilidades técnicas organizadas por categorías.

### Contacto — `/contacto`

Formulario para recibir consultas profesionales y enlaces a mis redes y medios de contacto.

*Las secciones se incorporarán progresivamente durante el desarrollo.*

## Diseño e identidad visual

El sitio utilizará una estética minimalista, profesional y moderna, con fondo oscuro, detalles dorados e interacciones sutiles.

### Paleta de colores

| Uso | Color |
|---|---|
| Dorado principal | `#E9B767` |
| Dorado claro | `#F5D49A` |
| Dorado oscuro | `#B88739` |
| Fondo principal | `#0D0D0D` |
| Superficies | `#1B1B1B` |
| Bordes | `#292929` |
| Texto principal | `#FFFFFF` |
| Texto secundario | `#B5B5B5` |
| Texto auxiliar | `#858585` |

### Tipografías

- **Space Grotesk:** títulos y encabezados.
- **Inter:** textos, navegación y botones.

## Instalación y ejecución local

Requisitos: Node.js compatible con la versión instalada de Next.js y npm.

Clonar el repositorio:

```bash
git clone https://github.com/agustin-lovagnini/agustin-lovagnini-cv.git
```

Entrar al proyecto:

```bash
cd agustin-lovagnini-cv
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

http://localhost:3000

## Plan de desarrollo

- [x] Crear el repositorio y configurar Git.
- [x] Inicializar Next.js con TypeScript y Tailwind CSS.
- [x] Crear las cuatro páginas independientes con contenido mínimo.
- [ ] Implementar navegación y componentes compartidos.
- [ ] Desarrollar el diseño responsive.
- [ ] Incorporar formación, experiencia y certificaciones.
- [ ] Agregar proyectos destacados.
- [ ] Implementar el formulario de contacto.
- [ ] Optimizar SEO, accesibilidad y rendimiento.
- [ ] Realizar pruebas y revisión final.
- [ ] Publicar la primera versión estable.

## Versionado

El proyecto utilizará Git y GitHub con commits descriptivos y versiones identificadas por hitos importantes.

La primera versión pública estable está prevista como **v1.0.0**.

Las versiones preliminares se identificarán mediante `v0.x.x` cuando corresponda.

## Publicación

**Estado:** Pendiente de despliegue.

El enlace público se incorporará cuando la primera versión esté terminada y revisada.

## Portfolio anterior

Este proyecto reemplazará mi anterior CV web, desarrollado con HTML, CSS y Sass (SCSS).

Conservo el repositorio original como registro de mi evolución profesional y de los conocimientos adquiridos durante mis primeras etapas de formación frontend.

[Ver portfolio anterior](https://github.com/agustin-lovagnini/agustin-lovagnini-cv-web)

## Enlaces para el contenido del portfolio

Recursos proporcionados por el autor para incorporar progresivamente al sitio. La selección de proyectos destacados se realizará durante el desarrollo.

### Redes profesionales y contacto

- [GitHub — repositorios y código fuente](https://github.com/agustin-lovagnini).
- [LinkedIn — perfil profesional](https://www.linkedin.com/in/agustinlovagnini).
- [Correo — agustin.lovagnini.v@gmail.com](mailto:agustin.lovagnini.v@gmail.com): oportunidades laborales, consultas profesionales y proyectos freelance.

### Certificaciones de Coderhouse

| Certificación | Área de formación |
|---|---|
| [Desarrollo Web Flex — Top 10](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/435541435/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | HTML, CSS, Sass/SCSS, Bootstrap y diseño responsive. |
| [JavaScript — Top 10](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/54933819/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | DOM, eventos, estructuras de datos, asincronismo y APIs. |
| [React JS](https://app.coderhouse.com/certificates/CERT-MOZ6JCR6-BB4B7477) | Componentes, props, hooks, estado y navegación. |
| [SQL — Bases de Datos](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/1395359304/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | Bases relacionales, consultas y procedimientos almacenados. |
| [Programación Backend I — Desarrollo Avanzado de Backend](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/825450174/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | Node.js, Express, APIs REST y organización de aplicaciones. |
| [Programación Backend II — Diseño y Arquitectura Backend Flex](https://app.coderhouse.com/certificates/CERT-MQLCIQVM-F7EA4E3F) | Arquitectura, patrones, persistencia y separación de responsabilidades. |
| [Programación Backend III — Testing y Escalabilidad](https://app.coderhouse.com/certificates/CERT-MUPQ7CWN-90006A33) | Testing, escalabilidad y buenas prácticas de backend. |

### Certificaciones de freeCodeCamp

- [Responsive Web Design](https://www.freecodecamp.org/espanol/certification/agustinlovagnini/responsive-web-design): HTML, CSS, accesibilidad y diseño adaptable.
- [JavaScript](https://www.freecodecamp.org/certification/agustinlovagnini/javascript-v9): lógica, estructuras de datos y resolución de problemas.

### Proyectos y portfolios anteriores

| Proyecto | Descripción |
|---|---|
| [Luzu TV — Rediseño de plataforma de streaming](https://agustin-lovagnini.github.io/proyecto-paginaweb-luzu-radio-streaming/) | Proyecto frontend sobre organización de contenido, diseño visual y navegación. |
| [Formulario de contacto](https://agustin-lovagnini.github.io/proyecto-formlario-de-contactos/) | Práctica de estructura HTML, campos de entrada y presentación visual. |
| [Primer portfolio personal](https://agustin-lovagnini.github.io/portfolio-AgustinLovagnini/) | Primera presentación web del perfil profesional. |
| [Segundo portfolio personal — HTML, CSS y Sass](https://agustin-lovagnini.github.io/agustin-lovagnini-cv-web/pages/proyectos.html) | Evolución del portfolio con secciones y presentación de proyectos. |

### Prototipos y prácticas

| Proyecto | Descripción |
|---|---|
| [ChatBox](https://agustin-lovagnini.github.io/proyecto-chatbox/) | Interfaz de chat con HTML y CSS. |
| [Flip Card](https://agustin-lovagnini.github.io/proyecto-flipCard/) | Tarjeta interactiva con giro 3D y transiciones. |
| [Menú Acordeón](https://agustin-lovagnini.github.io/proyecto-menu-acordeon/) | Organización de contenido mediante un menú acordeón. |
| [Vista Previa](https://agustin-lovagnini.github.io/proyecto-pagina-de-vista/) | Experimento con video de fondo y efectos de desplazamiento. |
| [Presentación Web](https://agustin-lovagnini.github.io/proyecto-pagina-web-presentacion-personal-ejercicio/) | Práctica de composición, tipografía y espaciado. |
| [Sidebar Menu](https://agustin-lovagnini.github.io/proyecto-sidebar-menu/) | Menú lateral y navegación con HTML y CSS. |
| [Tarjeta de Presentación](https://agustin-lovagnini.github.io/proyecto-tarjeta-de-presentacion/) | Diseño de tarjeta profesional con información de contacto. |

## Autor

**Agustín Lovagnini**

Full Stack Developer

- [GitHub](https://github.com/agustin-lovagnini)
- [LinkedIn](https://www.linkedin.com/in/agustinlovagnini/)

---

*Proyecto personal desarrollado como parte de mi crecimiento profesional y aprendizaje continuo.*
