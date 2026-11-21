"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { defaultLocale, isLocale } from "../../i18n/resources";

const pages = [
    { href: "/", label: "navigation.home" },
    { href: "/sobre-mi", label: "navigation.about" },
    { href: "/proyectos", label: "navigation.projects" },
    { href: "/contacto", label: "navigation.contact" },
];

export default function MobilePageNavigation() {
    const { t } = useTranslation("common");

    const pathname = usePathname();
    const languageSegment = pathname.split("/")[1];
    const lang = isLocale(languageSegment) ? languageSegment : defaultLocale;

    const currentIndex = pages.findIndex(
        (page) => `/${lang}${page.href === "/" ? "" : page.href}` === pathname
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
            aria-label={t("navigation.pageNavigation")}
            className="mx-auto flex w-full max-w-360 items-center justify-between gap-3 px-4 py-6 md:hidden"
        >
            <Link
                href={`/${lang}${previousPage.href === "/" ? "" : previousPage.href}`}
                className="action-button border-muted bg-muted text-background"
                aria-label={t("navigation.previousPage", { page: t(previousPage.label) })}
            >
                <ArrowLeft size={16} aria-hidden="true" />
                {t(previousPage.label)}
            </Link>

            <Link
                href={`/${lang}${nextPage.href === "/" ? "" : nextPage.href}`}
                className="action-button border-gold bg-gold text-background"
                aria-label={t("navigation.nextPage", { page: t(nextPage.label) })}
            >
                {t(nextPage.label)}
                <ArrowRight size={16} aria-hidden="true" />
            </Link>
        </nav>
    );

}
