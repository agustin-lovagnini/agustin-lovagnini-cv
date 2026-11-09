import ScrollPrompt from "../../components/ScrollPrompt";
import Link from "next/link";
import { ArrowUpRight, } from "lucide-react";
import { projects } from "../../data/projects";
import FeaturedProjectCard from "../../components/FeaturedProjectCard";


export default function Proyectos() {

    const featuredProjects = projects.filter(
        (project) => project.featured
    );
    return (
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
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
                    Una selección de proyectos donde aplico mis conocimientos en desarrollo Frontend y Backend,
                    combinando interfaces responsivas, lógica de aplicaciones, integración de APIs y bases de datos.
                    Cada proyecto representa una oportunidad para resolver desafíos técnicos y seguir mejorando mis habilidades.
                </p>
            </header>

            {/* ITEM - Invitación a explorar */}
            <ScrollPrompt href="#proyectos-destacados" />

            <hr className="section-divider" />

            {/* SECTION - proyectos destacados */}
            <section
                id="proyectos-destacados"
                aria-labelledby="titulo-proyectos-destacados"
                className="flex flex-col gap-6"
            >
                <h2 id="titulo-proyectos-destacados">
                    Selección de proyectos
                </h2>

                {featuredProjects.map((project) => (
                    <FeaturedProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>

            {/* SECTION - proyectos destacados */}
            <section aria-labelledby="mi-evolución-desarrollador"></section>

            {/* SECTION - llamada a la accion */}
            <section aria-labelledby="llamado-accion" className="mx-auto w-full max-w-[1440px] style-section">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="mb-2 block border-l-2 border-gold pl-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                            Tu próximo proyecto empieza acá
                        </span>
                        <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
                            ¿Tenés un proyecto en mente o buscás sumar un desarrollador a tu equipo?
                        </h2>

                        <p className="text-sm md:text-base font-normal leading-relaxed text-muted">
                            Estoy abierto a oportunidades laborales como desarrollador Frontend o Full Stack, así como a proyectos freelance. Me interesa aportar mis conocimientos, colaborar en nuevos desafíos y participar en el desarrollo de soluciones digitales que generen valor.                        </p>
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
