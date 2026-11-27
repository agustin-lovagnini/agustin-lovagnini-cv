import type { Project } from "../../data/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Locale } from "../../translations/i18n/resources";
import { createTranslation } from "../../translations/i18n/createTranslation";

interface FeaturedProjectCardProps {
    project: Project;
    compact?: boolean;
    locale: Locale;
}

export default function FeaturedProjectCard({
    project,
    compact = false,
    locale,
}: FeaturedProjectCardProps) {
    const translation = createTranslation(locale);

    const title = translation.t(`projects.${project.id}.title`, {
        defaultValue: project.title,
    });

    const description = translation.t(`projects.${project.id}.description`, {
        defaultValue: project.description,
    });

    return (
        <article
            className={`grid grid-cols-1 rounded-xl ${compact
                ? "grid-rows-[auto_1fr] overflow-hidden border border-outline bg-surface"
                : "style-section items-center gap-6 lg:grid-cols-2"
                }`}
        >
            <div
                className={`flex min-w-0 flex-col items-start gap-3 ${compact ? "h-full p-4" : ""
                    }`}
            >
                <div className="flex flex-wrap items-center gap-2 text-xs lg:text-sm font-semibold tracking-wide">
                    <span className="uppercase text-gold-light">{translation.t("projectCard.featured")}</span>
                    <span aria-hidden="true" className="text-subtle">·</span>
                    <time dateTime={project.date} className="text-muted">
                        {project.date.slice(0, 4)}
                    </time>
                </div>

                <h3
                    className={`font-heading font-bold leading-tight tracking-tight ${compact ? "text-xl" : "text-2xl md:text-3xl"
                        }`}
                >
                    {title}
                </h3>

                <p
                    className={`leading-relaxed text-muted ${compact ? "text-base" : "text-sm md:text-base lg:text-lg"
                        }`}
                >
                    {description}
                </p>

                <ul className="flex flex-wrap gap-2 pt-1" aria-label={translation.t("projectCard.technologiesLabel", { title })}>
                    {project.technologies.map((technology) => (
                        <li key={technology} className="rounded border border-gold/20 bg-outline px-2.5 py-1 text-xs lg:text-sm font-medium text-gold-light shadow-sm">
                            {technology}
                        </li>
                    ))}
                </ul>

                <div
                    className={`flex gap-3 ${compact
                        ? "mt-auto w-full flex-col pt-3 lg:flex-row lg:flex-wrap"
                        : "mt-3 items-center"
                        }`}
                >
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`action-button action-primary ${compact ? "w-full lg:w-auto" : ""
                            }`}
                        aria-label={translation.t("projectCard.demoLabel", { title })}
                    >
                        {translation.t("projectCard.viewProject")}
                        <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                            compact
                                ? "action-button w-full border-muted bg-background text-foreground hover:border-gold hover:text-gold-light lg:w-auto"
                                : "action-button action-social"
                        }
                        aria-label={translation.t("projectCard.repositoryLabel", { title })}
                    >
                        <FaGithub size={22} aria-hidden="true" />
                        {compact && <span>GitHub</span>}
                    </a>
                </div>
            </div>
            <div
                className={
                    compact
                        ? "-order-1 w-full overflow-hidden"
                        : "mx-auto w-full max-w-md overflow-hidden rounded-lg border border-outline lg:w-9/10"
                }
            >
                <Image
                    src={project.image}
                    alt={translation.t("projectCard.previewAlt", { title })}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    sizes="(min-width: 1024px) 448px, (min-width: 480px) 448px, 100vw"
                    className="block h-auto w-full"
                />
            </div>
        </article>
    );
}
