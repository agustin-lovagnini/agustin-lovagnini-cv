"use client";
import { usePathname } from "next/navigation";
import ShareButton from "../../ui/ShareButton";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
    // ITEM - Estado y control del menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isMenuOpen) {
            closeButtonRef.current?.focus();
        }
    }, [isMenuOpen]);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
    }

    function handleMenuKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        if (event.key === "Escape") {
            closeMenu();
        }
    }

    return (
        <header className="px-8 py-2.5 flex items-center justify-between bg-surface relative">
            <span aria-hidden="true" className="edge-line bottom-0" />
            {/* ITEM - Logo y acceso a Inicio */}
            <Link href="/">
                <Image
                    src="/images/logo.svg"
                    alt="Agustín Lovagnini"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10"
                />
            </Link>

            {/* ITEM - Botón de apertura del menú móvil */}
            <button
                type="button"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                ref={menuButtonRef}
                className="flex size-11 items-center justify-center md:hidden cursor-pointer"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="menu-mobile"
            >
                <Menu size={24} />
            </button>

            {/* SUBSECTION - Panel de navegación móvil */}
            {/* NOTE - El panel permanece montado para animar su salida; inert desactiva su contenido al cerrarse. */}
            <nav
                id="menu-mobile"
                onKeyDown={handleMenuKeyDown}
                aria-label="Navegación móvil"
                inert={!isMenuOpen}
                className={`fixed top-0 right-0 z-50 h-dvh overflow-y-auto w-72 max-w-full flex flex-col items-center gap-6 bg-surface p-6 md:hidden transition-transform duration-300 motion-reduce:transition-none text-xl font-medium tracking-tight ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={closeMenu}
                    className="flex size-11 shrink-0 self-end items-center justify-center cursor-pointer"
                >
                    <X size={24} />
                </button>
                <Link href="/" onClick={toggleMenu}>
                    Inicio
                </Link>
                <Link href="/sobre-mi" onClick={toggleMenu}>
                    Sobre mí
                </Link>
                <Link href="/proyectos" onClick={toggleMenu}>
                    Proyectos
                </Link>
                <Link href="/contacto" onClick={toggleMenu}>
                    Contacto
                </Link>
                <ShareButton />
            </nav>

            {/* SUBSECTION - Navegación de escritorio */}
            <nav
                aria-label="Navegación principal"
                className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground"
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

            {/* ITEM - Compartir desde escritorio */}
            <div className="hidden md:block p-1 hover:drop-shadow-[0_0_10px_#fff] transition-[filter] duration-300">
                <ShareButton />
            </div>
        </header>
    );
}
