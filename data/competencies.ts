import { Puzzle, ListChecks, Users, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Competencia  {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
}

export const competencies: Competencia [] = [
    {
        id: "resolucion-problemas",
        title: "Resolución de problemas técnicos",
        icon: Puzzle,
        description:
            "Iniciativa para investigar, analizar problemas e identificar soluciones de manera autónoma. Experiencia práctica resolviendo desafíos relacionados con interfaces, lógica de aplicaciones, APIs y bases de datos, buscando comprender sus causas y mejorar cada implementación.",
    },
    {
        id: "organizacion-metodologias",
        title: "Organización y metodologías",
        icon: ListChecks,
        description:
            "Organización de proyectos mediante planificación de tareas, separación de responsabilidades y control de versiones con Git y GitHub. Interés por mantener un código claro, reutilizable y documentado, incorporando progresivamente buenas prácticas y metodologías ágiles.",
    },
    {
        id: "trabajo-equipo",
        title: "Trabajo en equipo y comunicación",
        icon: Users,
        description:
            "Comunicación clara, escucha activa y disposición para compartir conocimientos e intercambiar ideas. Valoro el trabajo colaborativo, las devoluciones constructivas y el respeto por diferentes perspectivas para encontrar soluciones y alcanzar objetivos comunes.",
    },
    {
        id: "aprendizaje-continuo",
        title: "Adaptabilidad y aprendizaje continuo",
        icon: Lightbulb,
        description:
            "Curiosidad técnica, iniciativa y compromiso con el aprendizaje autodidacta. Capacidad para investigar nuevas herramientas, profundizar en sus fundamentos y aplicar los conocimientos adquiridos en proyectos prácticos, adaptándome a nuevos desafíos y tecnologías.",
    },
];
