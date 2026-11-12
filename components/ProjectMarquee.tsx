"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";

interface ProjectMarqueeProps {
    projects: Project[];
}

export default function ProjectMarquee({
    projects,
}: ProjectMarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);
    // NOTE - Guarda hasta cuándo se pausa el avance sin provocar un renderizado al cambiar el plazo.
    const pauseUntilRef = useRef(0);
    const [scrollEdges, setScrollEdges] = useState({
        atStart: true,
        atEnd: false,
    });
    // NOTE - El temporizador mueve el scroll solo en móvil y si no se solicita reducir el movimiento.
    useEffect(() => {
        const marquee = marqueeRef.current;

        if (!marquee) return;

        const mobile = window.matchMedia("(width < 40rem)");
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

    return (
        // NOTE - El marco comunica al CSS qué línea mostrar y queda fuera del contenedor que se desliza.
        <div
            className="project-marquee-frame"
            data-at-start={scrollEdges.atStart}
            data-at-end={scrollEdges.atEnd}
        >
            <div
                ref={marqueeRef}
                onTouchStart={pauseOnTouch}
                onTouchEnd={resumeAfterTouch}
                onTouchCancel={resumeAfterTouch}
                onScroll={updateScrollEdges}
                className="marquee project-marquee overflow-hidden py-3"
            >
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
        </div>
    );
}
