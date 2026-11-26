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
        <article className={`style-section grid grid-cols-1 items-center gap-6 rounded-xl ${compact ? "grid-rows-[auto_1fr]" : "lg:grid-cols-2"}`}>
            <div className={`flex min-w-0 flex-col items-start gap-3 ${compact ? "h-full" : ""}`}>
                <div className="flex flex-wrap items-center gap-2 text-xs lg:text-sm font-semibold tracking-wide">
                    <span className="uppercase text-gold-light">{translation.t("projectCard.featured")}</span>
                    <span aria-hidden="true" className="text-subtle">·</span>
                    <time dateTime={project.date} className="text-muted">
                        {project.date.slice(0, 4)}
                    </time>
                </div>

                <h3 className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    {title}
                </h3>

                <p className="text-sm lg:text-lg leading-relaxed text-muted md:text-base">
                    {description}
                </p>

                <ul className="flex flex-wrap gap-2 pt-1" aria-label={translation.t("projectCard.technologiesLabel", { title })}>
                    {project.technologies.map((technology) => (
                        <li key={technology} className="rounded border border-gold/20 bg-outline px-2.5 py-1 text-xs lg:text-sm font-medium text-gold-light shadow-sm">
                            {technology}
                        </li>
                    ))}
                </ul>

                <div className={`flex items-center gap-2 sm:gap-3 ${compact ? "mt-auto self-center" : "mt-3"}`}>
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button action-primary"
                        aria-label={translation.t("projectCard.demoLabel", { title })}
                    >
                        {translation.t("projectCard.viewProject")}
                        <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button action-social"
                        aria-label={translation.t("projectCard.repositoryLabel", { title })}
                    >
                        <FaGithub size={22} aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className={`mx-auto w-full max-w-md overflow-hidden rounded-lg border border-outline ${compact ? "-order-1" : "lg:w-9/10"}`}>
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
