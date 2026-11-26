import { spanishTranslations } from "../locales/es";
import { englishTranslations } from "../locales/en";

export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export function isLocale(value: string): value is Locale {
    return value === "es" || value === "en";
}

export const resources = {
    es: {
        common: spanishTranslations,
    },
    en: {
        common: englishTranslations,
    },
};
