import es from "../locales/es/common.json";
import en from "../locales/en/common.json";

export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export function isLocale(value: string): value is Locale {
    return value === "es" || value === "en";
}

export const resources = {
    es: {
        common: es,
    },
    en: {
        common: en,
    },
};

