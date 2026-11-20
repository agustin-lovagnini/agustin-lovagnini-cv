import { createInstance } from "i18next";
import { defaultLocale, resources, type Locale } from "./resources";

export function createTranslation(locale: Locale) {
    const instance = createInstance();

    instance.init({
        initAsync: false,
        resources,
        lng: locale,
        fallbackLng: defaultLocale,
        supportedLngs: ["es", "en"],
        defaultNS: "common",
        ns: ["common"],
        interpolation: {
            escapeValue: false,
        },
    });

    return instance;
}