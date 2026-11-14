import type { Metadata } from "next";
import ScrollPrompt from "../../components/ui/ScrollPrompt/ScrollPrompt";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import FeaturedProjectCard from "../../components/projects/FeaturedProjectCard";
import ProjectMarquee from "../../components/projects/ProjectMarquee/ProjectMarquee";

// ITEM - Metadatos de Proyectos
export const metadata: Metadata = {
    title: "Proyectos",
    description:
        "Explorá los proyectos de desarrollo web de Agustín Lovagnini, sus tecnologías, repositorios y demostraciones.",
    alternates: {
        canonical: "/proyectos",
    },
};

export default function ProjectsPage() {

    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    const secondaryProjects = projects
        .filter((project) => project.featured === false)
        .sort((a, b) => a.date.localeCompare(b.date));

    return (
        <main className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            {/* SECTION - Presentación de los proyectos destacados */}
            <header className="flex flex-col items-start gap-5 md:gap-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-wide">
                    <span className="eyebrow-badge self-center">
                        <span aria-hidden="true" className="eyebrow-dot" />
                        Portfolio seleccionado
                    </span>
                    <span className="text-subtle">/ Frontend y Backend</span>
                </div>

                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    Proyectos <span className="text-gold">Destacados</span>
                </h1>

                <p className="max-w-3xl font-heading text-lg text-gold-light opacity-90 leading-snug md:text-xl">
                    Explorá algunos de los proyectos que desarrollé, desde interfaces web hasta aplicaciones Full Stack. Cada uno refleja diferentes desafíos, tecnologías y soluciones que fui implementando a lo largo de mi recorrido como desarrollador.
                </p>
            </header>

            {/* ITEM - Invitación a explorar */}
            <ScrollPrompt href="#proyectos-destacados" />

            <hr className="section-divider" />

            {/* SECTION - Proyectos destacados */}
            <section
                id="proyectos-destacados"
                aria-labelledby="titulo-proyectos-destacados"
                className="flex flex-col gap-6"
            >
                <h2
                    id="titulo-proyectos-destacados"
                    className="text-center font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                >
                    Proyectos que representan mi trabajo<span className="text-gold-light">.</span>
                </h2>

                {featuredProjects.map((project) => (
                    <FeaturedProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>

            <hr className="section-divider my-3" />

            {/* SECTION - Evolución como desarrollador */}
            <section
                aria-labelledby="titulo-evolucion"
                className="flex min-w-0 flex-col gap-6"
            >
                <div>
                    <h2
                        id="titulo-evolucion"
                        className="font-heading text-2xl font-bold md:text-3xl"
                    >
                        Mi evolución como desarrollador
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-muted">
                        Un recorrido por mis primeras prácticas y proyectos,
                        ordenados desde los más antiguos hasta los más recientes.
                    </p>
                </div>

                <ProjectMarquee projects={secondaryProjects} />
            </section>

            <hr className="section-divider my-3" />

            {/* SECTION - Llamada a la acción */}
            <section aria-labelledby="llamado-accion" className="mx-auto w-full max-w-360 style-section">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="mb-2 block border-l-2 border-gold pl-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                            Tu próximo proyecto empieza acá
                        </span>
                        <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
                            ¿Tenés un proyecto en mente o buscás sumar un desarrollador a tu equipo?
                        </h2>

                        <p className="text-sm md:text-base font-normal leading-relaxed text-muted">
                            Estoy abierto a oportunidades laborales y colaboraciones freelance, tanto en Frontend como en Full Stack. Si buscás alguien con iniciativa, compromiso y ganas de aportar soluciones, me encantaría conocer tu propuesta.
                        </p>
                    </div>
                    <Link href="/contacto" className="action-button action-primary self-start md:self-center">
                        <span>Contactame</span>
                        <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
