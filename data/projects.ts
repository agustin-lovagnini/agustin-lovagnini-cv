// ITEM - Estructura de un proyecto
export interface Project {
    id: string;
    title: string;
    description: string;
    demoUrl: string;
    featured: boolean;
    date: string;
    image: string;
}

// ITEM - Catálogo de proyectos
export const projects: Project[] = [
    {
        id: "portfolio-html-css-sass",
        image: "/images/projects/portfolio-html-css-sass.webp",
        featured: true,
        date: "2025-04-06",
        title: "Portfolio con HTML, CSS y Sass",
        description:
            "Evolución de mi portfolio personal, con secciones dedicadas a mi perfil y la presentación de proyectos.",
        demoUrl:
            "https://agustin-lovagnini.github.io/agustin-lovagnini-cv-web/pages/proyectos.html",
    },
    {
        id: "luzu-tv",
        image: "/images/projects/luzu-tv.webp",
        featured: true,
        date: "2024-12-06",
        title: "Luzu TV",
        description:
            "Rediseño de una plataforma de streaming, enfocado en la organización del contenido, el diseño visual y la navegación.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-paginaweb-luzu-radio-streaming/",
    },
    {
        id: "formulario-contacto",
        image: "/images/projects/formulario-contacto.webp",
        featured: false,
        date: "2024-12-03",
        title: "Formulario de contacto",
        description:
            "Práctica de estructura HTML, campos de entrada y presentación visual de un formulario de contacto.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-formlario-de-contactos/",
    },
    {
        id: "primer-portfolio",
        image: "/images/projects/primer-portfolio.webp",
        featured: true,
        date: "2024-12-03",
        title: "Primer portfolio personal",
        description:
            "Primera presentación web de mi perfil profesional y mis proyectos.",
        demoUrl:
            "https://agustin-lovagnini.github.io/portfolio-AgustinLovagnini/",
    },
    {
        id: "chatbox",
        image: "/images/projects/chatbox.webp",
        featured: false,
        date: "2024-11-22",
        title: "ChatBox",
        description:
            "Interfaz de chat desarrollada con HTML y CSS.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-chatbox/",
    },
    {
        id: "flip-card",
        image: "/images/projects/flip-card.webp",
        featured: false,
        date: "2024-11-25",
        title: "Flip Card",
        description:
            "Tarjeta interactiva con giro 3D y transiciones.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-flipCard/",
    },
    {
        id: "menu-acordeon",
        image: "/images/projects/menu-acordeon.webp",
        featured: false,
        date: "2024-11-29",
        title: "Menú Acordeón",
        description:
            "Organización de contenido mediante un menú acordeón.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-menu-acordeon/",
    },
    {
        id: "vista-previa",
        image: "/images/projects/vista-previa.webp",
        featured: false,
        date: "2024-11-26",
        title: "Vista Previa",
        description:
            "Experimento visual con video de fondo y efectos de desplazamiento.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-pagina-de-vista/",
    },
    {
        id: "presentacion-web",
        image: "/images/projects/presentacion-web.webp",
        featured: false,
        date: "2024-12-03",
        title: "Presentación Web",
        description:
            "Práctica de composición, tipografía y espaciado en una presentación personal.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-pagina-web-presentacion-personal-ejercicio/",
    },
    {
        id: "sidebar-menu",
        image: "/images/projects/sidebar-menu.webp",
        featured: false,
        date: "2024-11-11",
        title: "Sidebar Menu",
        description:
            "Menú lateral y navegación desarrollados con HTML y CSS.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-sidebar-menu/",
    },
    {
        id: "tarjeta-presentacion",
        image: "/images/projects/tarjeta-presentacion.webp",
        featured: false,
        date: "2024-12-03",
        title: "Tarjeta de Presentación",
        description:
            "Diseño de una tarjeta profesional con información de contacto.",
        demoUrl:
            "https://agustin-lovagnini.github.io/proyecto-tarjeta-de-presentacion/",
    },
];
