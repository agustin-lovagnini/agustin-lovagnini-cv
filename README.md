## Punto de continuidad — 12 de noviembre de 2026

**Rama de trabajo:** `estructura-proyecto`.

### Dónde quedamos

- Las cuatro páginas tienen contenido y diseño implementados: `/`, `/sobre-mi`, `/proyectos` y `/contacto`. Se utiliza `app/` en la raíz con Next.js, React, TypeScript y Tailwind CSS v4.
- Header y Footer se comparten desde `app/layout.tsx`. Hay navegación de escritorio, panel móvil con cierre mediante X y Escape, y navegación anterior/siguiente visible solo en móvil.
- La identidad visual utiliza fondo oscuro, detalles dorados, Inter y Space Grotesk. El documento tiene `lang="es"` y metadatos generales.
- Sobre mí incluye perfil profesional, certificaciones desplegables, tecnologías y competencias profesionales. Los catálogos se mantienen en `data/`; `technologyGroups` y `competencies` se importan desde sus archivos.
- Proyectos utiliza un único array con 11 proyectos: tres destacados y ocho secundarios. Los secundarios se ordenan por fecha y se muestran en una marquesina. Las imágenes están en `public/images/projects/`.
- Contacto envía directamente a Formspree. Se probaron la recepción del correo y rechazos del proveedor por nombre vacío, nombre de más de 100 caracteres, mensaje de más de 5000 y correo con formato inválido. Hay CAPTCHA y Formshield habilitados, honeypot y aviso sobre el uso de datos.
- Los retratos de Inicio y Sobre mí usan `next/image` con importación estática. El logo SVG usa `Image` con `unoptimized`; las tarjetas de proyectos también usan `Image`.
- La última auditoría aportada por el propietario informó 0 vulnerabilidades conocidas tras fijar `minimatch` a `11.0.1` mediante un override limitado a `@typescript-eslint/typescript-estree`.
- Se comprobaron tres cabeceras en `/contacto`, en desarrollo y producción local: `X-Content-Type-Options: nosniff`, `Content-Security-Policy: frame-ancestors 'none'` y `Referrer-Policy: strict-origin-when-cross-origin`.
- Últimas comprobaciones del propietario: `npm run lint` sin errores ni advertencias y `npm run build` correcto, incluido TypeScript. `npm run start` también se probó localmente; esto no implica que el sitio esté publicado.
- `AGENTS.md`, sección 11, contiene el seguimiento de las 12 etapas, con avances, evidencia y pendientes. El propietario programa y Codex acompaña como mentor.

### Próximo paso y pendientes

1. Retomar el registro de `AGENTS.md` y cerrar los hallazgos de código que se acuerden con el propietario. La conservación del estado del menú al cambiar de ancho se dejó como está por decisión del propietario.
2. Comprobar visualmente los retratos y el logo tras migrar a `Image`, tanto en móvil como en escritorio; completar la revisión responsive y de navegación de las cuatro páginas.
3. Resolver o evaluar la pausa accesible de las marquesinas y completar las pruebas de teclado, foco, zoom al 200 % y lector de pantalla. El movimiento reducido ya tiene reglas implementadas.
4. Ejecutar Lighthouse en producción local e inspeccionar las interacciones con React Developer Tools. Medir antes de agregar optimizaciones.
5. Completar SEO: metadatos por página, Open Graph, URL definitiva, sitemap y robots.
6. Antes de publicar, revisar parches vigentes de Next.js y React, el override temporal, información de privacidad, archivos incluidos y configuración del hosting. Confirmar el proveedor y autorizar el despliegue con el propietario.
7. En la web publicada, verificar HTTPS, cabeceras, formulario, enlaces y errores, y repetir Lighthouse. La revisión local no sustituye estas pruebas.

### Para retomar desde casa

Antes de cambiar de computadora, revisar `git status` y el diff. El propietario debe guardar mediante commit y push los avances que decida compartir en `estructura-proyecto`; no se realizan automáticamente. No asumir que los cambios locales ya están en GitHub.

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

### Ver desde el celular

Conectar el celular y la computadora a la misma red Wi-Fi. Si el servidor ya está ejecutándose, detenerlo con `Ctrl + C` y luego iniciarlo permitiendo conexiones desde la red local:

```bash
npm run dev -- --hostname 0.0.0.0
```

Abrir en el navegador del celular la dirección **Network** que muestre Next.js, por ejemplo `http://192.168.0.129:3000`. La IP y el puerto pueden variar.

Si Next.js bloquea los recursos de desarrollo, comprobar que la IP actual esté incluida en `allowedDevOrigins` dentro de `next.config.ts` y reiniciar el servidor.

Para detener el servidor y cortar el acceso, presionar `Ctrl + C` en esa terminal. Este comando permite acceso desde la red local; por sí solo no publica el sitio en Internet.

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

### Certificaciones académicas — Coderhouse

| Certificación | Área de formación |
|---|---|
| [Desarrollo Web Flex](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/435541435/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | HTML, CSS, Sass/SCSS, Bootstrap y diseño responsive. |
| [JavaScript](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/54933819/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | DOM, eventos, estructuras de datos, asincronismo y APIs. |
| [React JS](https://app.coderhouse.com/certificates/CERT-MOZ6JCR6-BB4B7477) | Componentes, props, hooks, estado y navegación. |
| [SQL — Bases de Datos](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/1395359304/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | Bases relacionales, consultas y procedimientos almacenados. |
| [Programación Backend I — Desarrollo Avanzado de Backend](https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/825450174/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw) | Node.js, Express, APIs REST y organización de aplicaciones. |
| [Programación Backend II — Diseño y Arquitectura Backend Flex](https://app.coderhouse.com/certificates/CERT-MQLCIQVM-F7EA4E3F) | Arquitectura, patrones, persistencia y separación de responsabilidades. |
| [Programación Backend III — Testing y Escalabilidad](https://app.coderhouse.com/certificates/CERT-MUPQ7CWN-90006A33) | Testing, escalabilidad y buenas prácticas de backend. |

### Certificaciones complementarias — freeCodeCamp

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
