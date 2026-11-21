import { createInstance } from "i18next";
import { defaultLocale, resources, type Locale } from "./resources";

export function createTranslation(locale: Locale) {
    const instance = createInstance();

    instance.init({
        // Inicializa de forma síncrona, sin esperar una carga asíncrona.
        // En este caso, los recursos ya están importados en el proyecto.
        initAsync: false,

        // Traducciones registradas para cada idioma y namespace.
        resources,

        // Idioma activo con el que se inicia la instancia: "es" o "en".
        lng: locale,

        // Idioma de respaldo si no se encuentra una traducción.
        fallbackLng: defaultLocale,

        // Idiomas que admite esta configuración.
        supportedLngs: ["es", "en"],

        // Namespace que se usa por defecto si no se indica otro.
        defaultNS: "common",

        // Lista de namespaces configurados para esta instancia.
        ns: ["common"],

        interpolation: {
            // Evita que i18next escape los valores interpolados.
            // React ya escapa el texto que muestra normalmente en JSX.
            escapeValue: false,
        },
    });

    return instance;
}