// ITEM - Estructura de una formación o certificación
export interface Certification {
    id: string;
    institution: string;
    status: string;
    title: string;
    description: string;
    certificateUrl: string;
}

// ITEM - Catálogo de certificaciones
export const certifications: Certification[] = [
    {
        id: "coderhouse-fullstack",
        institution: "Coderhouse",
        status: "Carrera completada",
        title: "Carrera de Desarrollo Full Stack",
        description:
            "Formación integral en desarrollo web Frontend y Backend, abarcando HTML, CSS, JavaScript, React, Node.js, Express, APIs REST, autenticación y bases de datos. Carrera completada en 53 semanas, con 106 horas de clases.",
        certificateUrl:
            "https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/914704506/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw",
    },
    {
        id: "backend-3",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "Backend III — Testing y Escalabilidad",
        description:
            "Formación avanzada en desarrollo backend, testing, escalabilidad y buenas prácticas para construir aplicaciones robustas y mantenibles.",
        certificateUrl:
            "https://app.coderhouse.com/certificates/CERT-MUPQ7CWN-90006A33",
    },
    {
        id: "backend-2",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "Backend II — Diseño y Arquitectura",
        description:
            "Desarrollo de aplicaciones backend con Node.js, Express y MongoDB, implementando autenticación, autorización, arquitectura por capas y APIs REST.",
        certificateUrl:
            "https://app.coderhouse.com/certificates/CERT-MQUCIQVM-E7EA4E3F",
    },
    {
        id: "backend-1",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "Backend I — Desarrollo Avanzado",
        description:
            "Fundamentos del desarrollo backend con Node.js y Express, creación de servidores, gestión de rutas, WebSockets y persistencia de datos.",
        certificateUrl:
            "https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/825450174/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw",
    },
    {
        id: "react-js",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "React JS",
        description:
            "Desarrollo de aplicaciones SPA con componentes reutilizables, hooks, Context API, React Router e integración con Firebase.",
        certificateUrl:
            "https://app.coderhouse.com/certificates/CERT-MOZ6JCR6-BB4B7477",
    },
    {
        id: "sql",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "SQL y Bases de Datos",
        description:
            "Diseño y modelado de bases de datos relacionales, consultas SQL, vistas, procedimientos almacenados, funciones y triggers.",
        certificateUrl:
            "https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/1395359304/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw",
    },
    {
        id: "javascript",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "JavaScript",
        description:
            "Programación con JavaScript ES6+, manipulación del DOM, eventos, asincronía, consumo de APIs y desarrollo de aplicaciones interactivas.",
        certificateUrl:
            "https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/54933819/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw",
    },
    {
        id: "desarrollo-web",
        institution: "Coderhouse",
        status: "Certificado oficial",
        title: "Desarrollo Web",
        description:
            "Desarrollo de sitios web responsivos utilizando HTML5, CSS3, Sass, Bootstrap, Flexbox, Grid y buenas prácticas de maquetación.",
        certificateUrl:
            "https://www.linkedin.com/in/agustinlovagnini/overlay/Certifications/435541435/treasury/?profileId=ACoAADUciO0Btx7NrzK3aqS5P6xOTskRv7LxLdw",
    },
    {
        id: "freecodecamp-javascript",
        institution: "freeCodeCamp",
        status: "Certificación",
        title: "JavaScript",
        description:
            "Fundamentos de programación con JavaScript, estructuras de datos, algoritmos, funciones y resolución de desafíos prácticos.",
        certificateUrl:
            "https://www.freecodecamp.org/certification/agustinlovagnini/javascript-v9",
    },
    {
        id: "freecodecamp-frontend-libraries",
        institution: "freeCodeCamp",
        status: "Certificación oficial",
        title: "Bibliotecas de Desarrollo Frontend",
        description:
            "Formación de aproximadamente 300 horas en React, Hooks, React Router, TypeScript, Next.js, testing y frameworks CSS. Desarrollo de proyectos prácticos con componentes reutilizables e interfaces interactivas.",
        certificateUrl:
            "https://www.freecodecamp.org/certification/agustinlovagnini/front-end-development-libraries-v9",
    },
    {
        id: "freecodecamp-responsive",
        institution: "freeCodeCamp",
        status: "Certificación",
        title: "Responsive Web Design",
        description:
            "Diseño y desarrollo de interfaces web adaptables utilizando HTML y CSS, principios de accesibilidad y diseño responsivo.",
        certificateUrl:
            "https://www.freecodecamp.org/espanol/certification/agustinlovagnini/responsive-web-design",
    },
];
