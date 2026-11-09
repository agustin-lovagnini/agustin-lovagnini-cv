import type { Project } from "../data/projects";
import Image from "next/image";

interface ProjectMarqueeProps {
    projects: Project[];
}

export default function ProjectMarquee({
    projects,
}: ProjectMarqueeProps) {
    return (
        <div className="marquee overflow-hidden py-3">
            <div className="marquee-track flex w-max [animation-duration:90s]">

                <ul className="flex w-max shrink-0 gap-4 pr-4">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="w-72 shrink-0"
                        >
                            <article className="style-section flex h-full flex-col rounded-xl">
                                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-outline bg-background">
                                    <Image
                                        src={project.image}
                                        alt={`Vista previa de ${project.title}`}
                                        fill
                                        sizes="246px"
                                        className="object-contain"
                                    />
                                </div>
                                <time
                                    dateTime={project.date}
                                    className="mb-2 text-xs font-medium text-gold-light"
                                >
                                    {project.date.split("-").reverse().join("/")}
                                </time>

                                <h3 className="font-heading text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                                    {project.description}
                                </p>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded border border-gold/20 bg-outline px-2 py-1 text-xs font-medium text-gold-light"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-button action-primary mt-5"
                                >
                                    Ver proyecto
                                </a>
                            </article>
                        </li>
                    ))}
                </ul>
                {/* NOTE - La copia mantiene la continuidad visual sin repetir contenido para lectores de pantalla o navegación con Tab. */}
                <ul aria-hidden="true" className="flex w-max shrink-0 gap-4 pr-4">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="w-72 shrink-0"
                        >
                            <article className="style-section flex h-full flex-col rounded-xl">
                                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-outline bg-background">
                                    <Image
                                        src={project.image}
                                        alt={`Vista previa de ${project.title}`}
                                        fill
                                        sizes="246px"
                                        className="object-contain"
                                    />
                                </div>
                                <time
                                    dateTime={project.date}
                                    className="mb-2 text-xs font-medium text-gold-light"
                                >
                                    {project.date.split("-").reverse().join("/")}
                                </time>

                                <h3 className="font-heading text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                                    {project.description}
                                </p>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded border border-gold/20 bg-outline px-2 py-1 text-xs font-medium text-gold-light"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-button action-primary mt-5"
                                    tabIndex={-1}
                                >
                                    Ver proyecto
                                </a>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
