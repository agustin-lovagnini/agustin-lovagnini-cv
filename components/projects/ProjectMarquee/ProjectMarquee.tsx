"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "../../../data/projects";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AutoScroll from "embla-carousel-auto-scroll";
import { useTranslation } from "react-i18next";

interface ProjectMarqueeProps {
    projects: Project[];
}

export default function ProjectMarquee({
    projects,
}: ProjectMarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // NOTE - Guarda hasta cuándo se pausa el avance sin provocar un renderizado al cambiar el plazo.
    const pauseUntilRef = useRef(0);

    const { t } = useTranslation("common");

    // NOTE - Evita que salir con el mouse anule la pausa manual.
    const manuallyPausedRef = useRef(false);

    const [scrollEdges, setScrollEdges] = useState({
        atStart: true,
        atEnd: false,
    });

    // NOTE - El temporizador mueve el scroll solo en móvil y si no se solicita reducir el movimiento.
    useEffect(() => {
        const marquee = marqueeRef.current;

        if (!marquee) return;

        const mobile = window.matchMedia("(width < 48rem)");

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const intervalId = window.setInterval(() => {
            if (!mobile.matches || reducedMotion.matches) return;
            if (Date.now() < pauseUntilRef.current) return;

            // NOTE - El ancho total menos el visible indica cuánto puede desplazarse la fila hasta el final.
            const maximumScroll = marquee.scrollWidth - marquee.clientWidth;

            if (marquee.scrollLeft < maximumScroll) {
                marquee.scrollLeft += 1;
            }
        }, 30);

        // NOTE - React cancela este temporizador al limpiar el efecto, por ejemplo al retirar el componente.
        return () => window.clearInterval(intervalId);
    }, []);

    // NOTE - Mientras el dedo está apoyado, ningún momento actual alcanza el plazo Infinity.
    function pauseOnTouch() {
        pauseUntilRef.current = Infinity;
    }

    // NOTE - Al terminar o cancelarse el gesto, espera tres segundos antes de permitir el avance automático.
    function resumeAfterTouch() {
        pauseUntilRef.current = Date.now() + 3000;
    }

    // NOTE - Cada desplazamiento actualiza los extremos con un píxel de tolerancia para posiciones decimales.
    function updateScrollEdges() {
        const marquee = marqueeRef.current;

        if (!marquee) return;

        const maximumScroll = marquee.scrollWidth - marquee.clientWidth;

        setScrollEdges({
            atStart: marquee.scrollLeft <= 1,
            atEnd:
                maximumScroll > 1 &&
                marquee.scrollLeft >= maximumScroll - 1,
        });
    }

    // SUBSECTION - Carrusel para tablets y escritorio
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            active: false,
            loop: true,
            align: "start",
            breakpoints: {
                "(min-width: 768px)": {
                    active: true,
                },
            },
        },
        [
            AutoScroll({
                speed: 1,
                startDelay: 1000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
                breakpoints: {
                    "(prefers-reduced-motion: reduce)": {
                        active: false,
                    },
                },
            }),
        ]
    );

    // NOTE - Sincroniza el botón con el estado real del movimiento automático.
    useEffect(() => {
        if (!emblaApi) return;

        function updatePlayingState() {
            queueMicrotask(() => {
                const autoScroll = emblaApi?.plugins()?.autoScroll;
                setIsPlaying(autoScroll?.isPlaying() ?? false);
            });
        }

        updatePlayingState();

        emblaApi.on("autoScroll:play", updatePlayingState);
        emblaApi.on("autoScroll:stop", updatePlayingState);
        emblaApi.on("reInit", updatePlayingState);

        return () => {
            emblaApi.off("autoScroll:play", updatePlayingState);
            emblaApi.off("autoScroll:stop", updatePlayingState);
            emblaApi.off("reInit", updatePlayingState);
        };
    }, [emblaApi]);

    // NOTE - Conecta el mismo contenedor con la lógica móvil y con Embla.
    const setMarqueeRef = useCallback(
        (node: HTMLDivElement | null) => {
            marqueeRef.current = node;
            emblaRef(node);
        },
        [emblaRef]
    );

    function toggleAutoScroll() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const autoScroll = emblaApi?.plugins()?.autoScroll;

        if (!autoScroll) return;

        if (autoScroll.isPlaying()) {
            manuallyPausedRef.current = true;
            autoScroll.stop();
        } else {
            manuallyPausedRef.current = false;
            autoScroll.play(0);
        }
    }

    function resumeAfterMouseLeave() {
        if (manuallyPausedRef.current) return;

        const canAutoScroll = window.matchMedia(
            "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
        ).matches;

        if (!canAutoScroll) return;

        if (marqueeRef.current?.matches(":focus-within")) return;

        emblaApi?.plugins()?.autoScroll?.play(0);
    }

    return (
        // NOTE - El marco comunica al CSS qué línea mostrar y queda fuera del contenedor que se desliza.
        <div
            className="project-marquee-frame"
            data-at-start={scrollEdges.atStart}
            data-at-end={scrollEdges.atEnd}
        >
            <div
                ref={setMarqueeRef}
                onMouseLeave={resumeAfterMouseLeave}
                onTouchStart={pauseOnTouch}
                onTouchEnd={resumeAfterTouch}
                onTouchCancel={resumeAfterTouch}
                onScroll={updateScrollEdges}
                className="project-marquee overflow-hidden py-3"
            >
                <ul className="project-marquee-list flex w-max gap-4 pr-4 md:w-auto">
                    {projects.map((project) => {
                        const title = t(`projects.${project.id}.title`, {
                            defaultValue: project.title,
                        });

                        return (
                            <li
                                key={project.id}
                                className="w-72 shrink-0"
                            >
                                <article className="style-section flex h-full flex-col rounded-xl">
                                    <div className="mb-4 overflow-hidden rounded-lg border border-outline">
                                        <Image
                                            src={project.image}
                                            alt={t("projectCard.previewAlt", { title })}
                                            width={project.imageWidth}
                                            height={project.imageHeight}
                                            sizes="246px"
                                            className="block h-auto w-full"
                                        />
                                    </div>
                                    <time
                                        dateTime={project.date}
                                        className="mb-2 text-xs lg:text-sm font-medium text-gold-light"
                                    >
                                        {project.date.split("-").reverse().join("/")}
                                    </time>

                                    <h3 className="font-heading text-xl font-semibold">
                                        {title}
                                    </h3>

                                    <p className="mt-3 flex-1 text-sm lg:text-lg leading-relaxed text-muted">
                                        {t(`projects.${project.id}.description`, {
                                            defaultValue: project.description,
                                        })}
                                    </p>
                                    <ul className="mt-3 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <li
                                                key={technology}
                                                className="rounded border border-gold/20 bg-outline px-2 py-1 text-xs lg:text-sm font-medium text-gold-light"
                                            >
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-5 flex items-center justify-center gap-2 sm:gap-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-button action-primary"
                                            aria-label={t("projectCard.demoLabel", { title })}
                                        >
                                            {t("projectCard.viewProject")}
                                            <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                                        </a>
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-button action-social"
                                            aria-label={t("projectCard.repositoryLabel", { title })}
                                        >
                                            <FaGithub size={22} aria-hidden="true" />
                                        </a>
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* SUBSECTION - Controles del carrusel */}
            <div className="mt-4 hidden gap-3 md:flex">
                <button
                    type="button"
                    aria-label={t("projectMarquee.previous")}
                    onClick={() => {
                        const autoScroll = emblaApi?.plugins()?.autoScroll;

                        manuallyPausedRef.current = false;
                        autoScroll?.stop();
                        emblaApi?.scrollPrev();
                        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                            autoScroll?.play(3000);
                        }
                    }}
                    className="action-button action-secondary"
                >
                    <ChevronLeft size={20} aria-hidden="true" />
                </button>

                <button
                    type="button"
                    aria-label={t("projectMarquee.next")}
                    onClick={() => {
                        const autoScroll = emblaApi?.plugins()?.autoScroll;

                        manuallyPausedRef.current = false;
                        autoScroll?.stop();
                        emblaApi?.scrollNext();
                        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                            autoScroll?.play(3000);
                        }
                    }}
                    className="action-button action-secondary"
                >
                    <ChevronRight size={20} aria-hidden="true" />
                </button>

                <button
                    type="button"
                    onClick={toggleAutoScroll}
                    className="action-button action-secondary ml-auto"
                    aria-label={
                        isPlaying
                            ? t("projectMarquee.pauseLabel")
                            : t("projectMarquee.resumeLabel")
                    }
                >
                    {isPlaying ? t("projectMarquee.pause") : t("projectMarquee.resume")}
                </button>
            </div>
        </div>
    );
}
