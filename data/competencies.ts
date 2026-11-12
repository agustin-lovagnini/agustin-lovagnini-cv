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
            "Me gusta investigar, analizar problemas y comprender sus causas antes de implementar una solución. Busco resolver cada desafío con criterio propio, evaluando alternativas y priorizando soluciones funcionales y mantenibles.",
    },
    {
        id: "organizacion-metodologias",
        title: "Organización y metodologías",
        icon: ListChecks,
        description:
            "Organizo mis proyectos mediante la planificación de tareas, la separación de responsabilidades y el control de versiones con Git y GitHub. Valoro la documentación, el seguimiento del trabajo y una estructura clara que facilite el desarrollo y mantenimiento.",
    },
    {
        id: "trabajo-equipo",
        title: "Trabajo en equipo y comunicación",
        icon: Users,
        description:
            "Valoro la comunicación clara, la escucha activa y el intercambio de ideas. Me interesa colaborar con otros desarrolladores, compartir conocimientos, recibir devoluciones constructivas y aportar diferentes perspectivas para alcanzar objetivos comunes.",
    },
    {
        id: "aprendizaje-continuo",
        title: "Adaptabilidad y aprendizaje continuo",
        icon: Lightbulb,
        description:
            "Disfruto explorar nuevas herramientas, comprender cómo funcionan y ponerlas en práctica. Me adapto a diferentes desafíos y tecnologías, buscando ampliar mis capacidades y mantenerme actualizado en un entorno que evoluciona constantemente.",
    },
];
