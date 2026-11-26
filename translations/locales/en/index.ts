// ITEM - Traducciones compartidas
import common from "./common.json";

// ITEM - Traducciones de las páginas
import home from "./pages/home.json";
import about from "./pages/about.json";
import projects from "./pages/projects.json";
import contact from "./pages/contact.json";

// ITEM - Traducciones de componentes
import header from "./components/header.json";
import footer from "./components/footer.json";

export const englishTranslations = {
    ...common,
    ...header,
    ...footer,
    home,
    ...about,
    projects: {
        ...common.projects,
        ...projects.projects,
    },
    projectMarquee: projects.projectMarquee,
    contact,
};
