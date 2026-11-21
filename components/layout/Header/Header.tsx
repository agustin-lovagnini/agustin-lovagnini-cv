"use client";
import { usePathname } from "next/navigation";
import ShareButton from "../../ui/ShareButton";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { defaultLocale, isLocale } from "../../../i18n/resources";

export default function Header() {
    const { t } = useTranslation("common");

    // ITEM - Estado y control del menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const languageSegment = pathname.split("/")[1];
    const lang = isLocale(languageSegment) ? languageSegment : defaultLocale;

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
            <Link href={`/${lang}`}>
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
                aria-label={isMenuOpen ? t("navigation.closeMenu") : t("navigation.openMenu")}
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
                aria-label={t("navigation.mobile")}
                inert={!isMenuOpen}
                className={`fixed top-0 right-0 z-50 h-dvh overflow-y-auto w-72 max-w-full flex flex-col items-center gap-6 bg-surface p-6 md:hidden transition-transform duration-300 motion-reduce:transition-none text-xl font-medium tracking-tight ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label={t("navigation.closeMenu")}
                    onClick={closeMenu}
                    className="flex size-11 shrink-0 self-end items-center justify-center cursor-pointer"
                >
                    <X size={24} />
                </button>
                <Link
                    href={`/${lang}`}
                    onClick={toggleMenu}
                    aria-current={pathname === `/${lang}` ? "page" : undefined}
                    className={pathname === `/${lang}` ? "text-gold-light" : undefined}
                >
                    {t("navigation.home")}
                </Link>
                <Link
                    href={`/${lang}/sobre-mi`}
                    onClick={toggleMenu}
                    aria-current={pathname === `/${lang}/sobre-mi` ? "page" : undefined}
                    className={pathname === `/${lang}/sobre-mi` ? "text-gold-light" : undefined}
                >
                    {t("navigation.about")}
                </Link>
                <Link
                    href={`/${lang}/proyectos`}
                    onClick={toggleMenu}
                    aria-current={pathname === `/${lang}/proyectos` ? "page" : undefined}
                    className={pathname === `/${lang}/proyectos` ? "text-gold-light" : undefined}
                >
                    {t("navigation.projects")}
                </Link>
                <Link
                    href={`/${lang}/contacto`}
                    onClick={toggleMenu}
                    aria-current={pathname === `/${lang}/contacto` ? "page" : undefined}
                    className={pathname === `/${lang}/contacto` ? "text-gold-light" : undefined}
                >
                    {t("navigation.contact")}
                </Link>
                <ShareButton />
            </nav>

            {/* SUBSECTION - Navegación de escritorio */}
            <nav
                aria-label={t("navigation.main")}
                className="hidden md:flex items-center gap-6 text-sm lg:text-base font-medium text-foreground"
            >
                <Link href={`/${lang}`} className="nav-link" aria-current={pathname === `/${lang}` ? "page" : undefined}>
                    {t("navigation.home")}
                </Link>
                <Link href={`/${lang}/sobre-mi`} className="nav-link" aria-current={pathname === `/${lang}/sobre-mi` ? "page" : undefined}>
                    {t("navigation.about")}
                </Link>
                <Link href={`/${lang}/proyectos`} className="nav-link" aria-current={pathname === `/${lang}/proyectos` ? "page" : undefined}>
                    {t("navigation.projects")}
                </Link>
                <Link href={`/${lang}/contacto`} className="nav-link" aria-current={pathname === `/${lang}/contacto` ? "page" : undefined}>
                    {t("navigation.contact")}
                </Link>
            </nav>

            {/* ITEM - Compartir desde escritorio */}
            <div className="hidden md:block p-1 hover:drop-shadow-[0_0_10px_#fff] transition-[filter] duration-300">
                <ShareButton />
            </div>
        </header>
    );
}
