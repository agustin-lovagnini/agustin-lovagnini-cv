import { Code2, Database, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ITEM - Estructura de un grupo de tecnologías
export interface TechnologyGroup {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    technologies: string[];
}

// ITEM - Tecnologías agrupadas por área de trabajo
export const technologyGroups: TechnologyGroup[] = [
    {
        id: "frontend",
        title: "Frontend",
        icon: Code2,
        description: "Interfaces responsivas y accesibles, con componentes reutilizables y atención a la experiencia de usuario.",
        technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Bootstrap"],
    },
    {
        id: "backend",
        title: "Backend",
        icon: Server,
        description: "Aplicaciones del lado del servidor, APIs REST, autenticación y organización del código por responsabilidades.",
        technologies: ["Node.js", "Express", "APIs REST", "Autenticación", "Swagger / OpenAPI"],
    },
    {
        id: "databases",
        title: "Bases de datos",
        icon: Database,
        description: "Persistencia de información, modelado de datos y consultas en bases relacionales y no relacionales.",
        technologies: ["MongoDB", "Mongoose", "SQL", "Firebase"],
    },
    {
        id: "workflow",
        title: "Herramientas de trabajo",
        icon: Wrench,
        description: "Control de versiones, pruebas de APIs y herramientas para desarrollar, organizar y compartir mis proyectos.",
        technologies: ["Git", "GitHub", "VS Code", "npm", "Postman", "Docker"],
    },
];
