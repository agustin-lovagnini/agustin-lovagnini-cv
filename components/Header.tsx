"use client";

import ShareButton from "./ShareButton";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="px-8 py-2.5 flex items-center justify-between bg-surface relative">
            <Link href="/"><img
                src="/images/logo.svg"
                alt="Agustín Lovagnini"
                className="w-10 h-10"
            /></Link>

            <button
                type="button"
                aria-label="Abrir menú"
                className="md:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="menu-mobile"
            >
                <Menu size={24} />
            </button>


            <nav
                id="menu-mobile"
                aria-label="Navegación móvil"
                inert={!isMenuOpen}
                className={`fixed top-0 right-0 z-50 h-dvh w-72 max-w-full flex flex-col gap-6 bg-surface p-6 md:hidden transition-transform duration-300 motion-reduce:transition-none ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}>

                <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={() => setIsMenuOpen(false)}
                    className="self-end cursor-pointer"
                >
                    Cerrar
                </button>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                <Link href="/sobre-mi" onClick={() => setIsMenuOpen(false)}>Sobre mí</Link>
                <Link href="/proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
                <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                <ShareButton />
            </nav>


            <nav
                aria-label="Navegación principal"
                className="hidden md:flex items-center gap-6 text-foreground"
            >
                <Link href="/">Inicio</Link>
                <Link href="/sobre-mi">Sobre mí</Link>
                <Link href="/proyectos">Proyectos</Link>
                <Link href="/contacto">Contacto</Link>
            </nav>

            <div className="hidden md:block">
                <ShareButton />
            </div>
        </header>
    );
}