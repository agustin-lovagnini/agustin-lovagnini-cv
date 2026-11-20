import { Puzzle, ListChecks, Users, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Competency {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
}

export const competencies: Competency[] = [
    {
        id: "resolucion-problemas",
        title: "Resolución de problemas técnicos",
        icon: Puzzle,
        description:
            "Analizo desafíos, investigo sus causas y desarrollo soluciones eficientes y mantenibles.",
    },
    {
        id: "organizacion-metodologias",
        title: "Organización y metodologías",
        icon: ListChecks,
        description:
            "Planifico mis proyectos, organizo tareas y utilizo control de versiones y buenas prácticas.",
    },
    {
        id: "trabajo-equipo",
        title: "Trabajo en equipo y comunicación",
        icon: Users,
        description:
            "Valoro la comunicación clara, el intercambio de ideas y la colaboración para alcanzar objetivos comunes.",
    },
    {
        id: "aprendizaje-continuo",
        title: "Adaptabilidad y aprendizaje continuo",
        icon: Lightbulb,
        description:
            "Me adapto a nuevas tecnologías y desafíos, buscando mejorar continuamente mis habilidades.",
    },
];
