import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa";
import {
    SiHtml5,
    SiCss,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiGithub,
} from "react-icons/si";


// ITEM - Estructura de una tecnología
export interface Technology {
    id: string,
    name: string,
    icon: IconType;
}
// ITEM - Catálogo de tecnologías e iconos
export const technologies: Technology[] = [
    { id: "html", name: "HTML5", icon: SiHtml5 },
    { id: "css", name: "CSS3", icon: SiCss },
    { id: "sass", name: "Sass", icon: SiSass },
    { id: "javascript", name: "JavaScript", icon: SiJavascript },
    { id: "typescript", name: "TypeScript", icon: SiTypescript },
    { id: "react", name: "React", icon: SiReact },
    { id: "nextjs", name: "Next.js", icon: SiNextdotjs },
    { id: "tailwindcss", name: "Tailwind CSS", icon: SiTailwindcss },
    { id: "bootstrap", name: "Bootstrap", icon: SiBootstrap },
    { id: "nodejs", name: "Node.js", icon: SiNodedotjs },
    { id: "express", name: "Express", icon: SiExpress },
    { id: "mongodb", name: "MongoDB", icon: SiMongodb },
    { id: "sql", name: "SQL", icon: FaDatabase },
    { id: "git", name: "Git", icon: SiGit },
    { id: "github", name: "GitHub", icon: SiGithub },
];

