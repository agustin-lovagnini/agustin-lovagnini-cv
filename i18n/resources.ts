import es from "../locales/es/common.json";
import en from "../locales/en/common.json";

export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export const resources = {
    es: {
        common: es,
    },
    en: {
        common: en,
    },
};

