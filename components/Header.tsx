"use client";
import { usePathname } from "next/navigation";
import ShareButton from "./ShareButton";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    function alternarMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="px-8 py-2.5 flex items-center justify-between bg-surface relative">
            <Link href="/">
                <img
                    src="/images/logo.svg"
                    alt="Agustín Lovagnini"
                    className="w-10 h-10"
                />
            </Link>

            <button
                type="button"
                aria-label="Abrir menú"
                className="md:hidden cursor-pointer"
                onClick={alternarMenu}
                aria-expanded={isMenuOpen}
                aria-controls="menu-mobile"
            >
                <Menu size={24} />
            </button>

            {/* nav mobile */}
            <nav
                id="menu-mobile"
                aria-label="Navegación móvil"
                inert={!isMenuOpen}
                className={`fixed top-0 right-0 z-50 h-dvh w-72 max-w-full flex flex-col items-center gap-6 bg-surface p-6 md:hidden transition-transform duration-300 motion-reduce:transition-none text-xl  ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={alternarMenu}
                    className="self-end cursor-pointer"
                >
                    <X size={24} />
                </button>
                <Link href="/" onClick={alternarMenu}>
                    Inicio
                </Link>
                <Link href="/sobre-mi" onClick={alternarMenu}>
                    Sobre mí
                </Link>
                <Link href="/proyectos" onClick={alternarMenu}>
                    Proyectos
                </Link>
                <Link href="/contacto" onClick={alternarMenu}>
                    Contacto
                </Link>
                <ShareButton />
            </nav>

            {/* nav desktop */}
            <nav
                aria-label="Navegación principal"
                className="hidden md:flex items-center gap-6 text-foreground"
            >
                <Link href="/" className="nav-link" aria-current={pathname === "/" ? "page" : undefined}>
                    Inicio
                </Link>
                <Link href="/sobre-mi" className="nav-link" aria-current={pathname === "/sobre-mi" ? "page" : undefined}>
                    Sobre mí
                </Link>
                <Link href="/proyectos" className="nav-link" aria-current={pathname === "/proyectos" ? "page" : undefined}>
                    Proyectos
                </Link>
                <Link href="/contacto" className="nav-link" aria-current={pathname === "/contacto" ? "page" : undefined}>
                    Contacto
                </Link>
            </nav>

            <div className="hidden md:block p-1 hover:drop-shadow-[0_0_10px_#fff] transition-[filter] duration-300">
                <ShareButton />
            </div>
        </header>
    );
}
