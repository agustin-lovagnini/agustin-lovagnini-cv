import type { Project } from "../data/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface FeaturedProjectCardProps {
    project: Project;
}

export default function FeaturedProjectCard({
    project,
}: FeaturedProjectCardProps) {
    return (
        <article className="style-section grid grid-cols-1 items-center gap-6 rounded-xl lg:grid-cols-2">
            <div className="flex min-w-0 flex-col items-start gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide">
                    <span className="uppercase text-gold-light">Proyecto destacado</span>
                    <span aria-hidden="true" className="text-subtle">·</span>
                    <time dateTime={project.date} className="text-muted">
                        {project.date.slice(0, 4)}
                    </time>
                </div>

                <h3 className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                </p>

                <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button action-primary mt-3"
                    aria-label={`Ver proyecto: ${project.title} (abre en otra pestaña)`}
                >
                    Ver proyecto
                    <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                </a>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-md overflow-hidden rounded-lg border border-outline bg-background lg:w-[90%]">
                <Image
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 448px, (min-width: 480px) 448px, 100vw"
                    className="object-contain"
                />
            </div>
        </article>
    );
}
