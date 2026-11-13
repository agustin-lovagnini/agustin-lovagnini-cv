"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const pages = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
];

export default function MobilePageNavigation() {
    const pathname = usePathname();

    const currentIndex = pages.findIndex(
        (page) => page.href === pathname
    );

    if (currentIndex === -1) {
        return null;
    }

    const previousPage =
        pages[(currentIndex - 1 + pages.length) % pages.length];

    const nextPage =
        pages[(currentIndex + 1) % pages.length];


    return (
        <nav
            aria-label="Navegación entre páginas"
            className="mx-auto flex w-full max-w-360 items-center justify-between gap-3 px-4 py-6 md:hidden"
        >
            <Link
                href={previousPage.href}
                className="action-button border-muted bg-muted text-background"
                aria-label={`Página anterior: ${previousPage.label}`}
            >
                <ArrowLeft size={16} aria-hidden="true" />
                {previousPage.label}
            </Link>

            <Link
                href={nextPage.href}
                className="action-button border-gold bg-gold text-background"
                aria-label={`Página siguiente: ${nextPage.label}`}
            >
                {nextPage.label}
                <ArrowRight size={16} aria-hidden="true" />
            </Link>
        </nav>
    );

}
