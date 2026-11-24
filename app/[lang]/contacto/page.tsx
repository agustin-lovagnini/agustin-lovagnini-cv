
import type { Metadata } from "next";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n/resources";
import { createTranslation } from "../../../i18n/createTranslation";
import { Trans } from "react-i18next";

// ITEM - Metadatos de Contacto
export async function generateMetadata({
    params,
}: PageProps<"/[lang]/contacto">): Promise<Metadata> {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const translation = createTranslation(lang);

    return {
        title: translation.t("contact.metadata.title"),
        description: translation.t("contact.metadata.description"),
        alternates: {
            canonical: `/${lang}/contacto`,
            languages: {
                es: "/es/contacto",
                en: "/en/contacto",
            },
        },
        openGraph: {
            title: translation.t("contact.metadata.socialTitle"),
            description: translation.t("contact.metadata.socialDescription"),
            url: `/${lang}/contacto`,
            siteName: translation.t("home.metadata.siteName"),
            locale: lang === "es" ? "es_AR" : "en_US",
            type: "website",
            images: [
                {
                    url: "/images/og/og-agustin-lovagnini.jpg",
                    width: 1200,
                    height: 630,
                    alt: translation.t("home.metadata.imageAlt"),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: translation.t("contact.metadata.socialTitle"),
            description: translation.t("contact.metadata.socialDescription"),
            images: [
                {
                    url: "/images/og/og-agustin-lovagnini.jpg",
                    alt: translation.t("home.metadata.imageAlt"),
                },
            ],
        },
    };
}

export default async function ContactPage({
    params,
}: PageProps<"/[lang]/contacto">) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const translation = createTranslation(lang);

    return (
        <main className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            <header className="flex flex-col items-start gap-2 md:gap-6">
                <div className="flex flex-col items-start gap-2">
                    <span className="eyebrow-badge">
                        <span aria-hidden="true" className="eyebrow-dot" />
                        {translation.t("contact.badge")}
                    </span>

                    <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                        <Trans
                            i18n={translation}
                            ns="common"
                            i18nKey="contact.heading"
                            components={{
                                highlight: <span className="block text-gold" />,
                            }}
                        />
                    </h1>
                </div>

                <p className="max-w-3xl font-heading text-lg text-gold-light opacity-90 leading-snug md:text-xl">
                    {translation.t("contact.description")}
                </p>
            </header>

            {/* SUBSECTION - Contenedor: una columna en móvil y dos en pantallas grandes */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[3fr_2fr]">
                {/* SECTION - Formulario de contacto */}
                <section className="style-section" aria-labelledby="formulario-contacto">
                    <h2 id="formulario-contacto" className="mb-1 block w-full border-b border-gold-light pb-1 font-heading text-xl font-semibold tracking-tight text-gold-light md:text-2xl">{translation.t("contact.form.title")}</h2>
                    <form action="https://formspree.io/f/mnppeqkb"
                        method="POST" className="mt-5 flex flex-col gap-5">
                        <input
                            type="text"
                            name="_gotcha"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombre">{translation.t("contact.form.nameLabel")}</label>

                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                maxLength={100}
                                placeholder={translation.t("contact.form.namePlaceholder")}
                                required
                                className="w-full rounded-lg border border-subtle bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">{translation.t("contact.form.emailLabel")}</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                maxLength={254}
                                autoComplete="email"
                                placeholder="tu@email.com"
                                required
                                className="w-full rounded-lg border border-subtle bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"

                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="asunto">{translation.t("contact.form.subjectLabel")}</label>

                            <select id="asunto" name="asunto" defaultValue="" required className="w-full rounded-lg border border-subtle bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                                <option value="" disabled>
                                    {translation.t("contact.form.subjectPlaceholder")}
                                </option>
                                <option value="oportunidad-laboral" className="bg-surface text-gold-light">
                                    {translation.t("contact.form.subjectJob")}
                                </option>
                                <option value="proyecto-freelance" className="bg-surface text-gold-light">
                                    {translation.t("contact.form.subjectFreelance")}
                                </option>
                                <option value="otra-consulta" className="bg-surface text-gold-light">
                                    {translation.t("contact.form.subjectOther")}
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mensaje">{translation.t("contact.form.messageLabel")}</label>

                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows={6}
                                maxLength={5000}
                                placeholder={translation.t("contact.form.messagePlaceholder")}
                                required
                                className="w-full resize-y rounded-lg border border-subtle bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            />
                        </div>
                        <button type="submit" className="action-button action-primary cursor-pointer">
                            {translation.t("contact.form.submit")}
                        </button>
                        <p className="text-sm lg:text-lg leading-relaxed text-muted text-center">
                            <Trans
                                i18n={translation}
                                ns="common"
                                i18nKey="contact.form.privacy"
                                components={{
                                    formspree: (
                                        <a
                                            href="https://formspree.io/legal/privacy-policy/"
                                            className="text-gold-light underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                                        />
                                    ),
                                    linkedin: (
                                        <a
                                            href="https://www.linkedin.com/in/agustinlovagnini"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={translation.t("contact.form.linkedinLabel")}
                                            className="text-gold-light underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                                        />
                                    ),
                                    email: (
                                        <a
                                            href="mailto:agustin.lovagnini.a@gmail.com"
                                            className="break-words text-gold-light underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                                        />
                                    ),
                                }}
                            />
                        </p>
                    </form>

                </section>

                {/* SUBSECTION - Columna de tarjetas apiladas con separación */}
                <div className="flex flex-col gap-4">
                    {/* SECTION - Disponibilidad actual */}
                    <section className="style-section" aria-labelledby="disponibilidad-actual">
                        <h2
                            id="disponibilidad-actual"
                            className="text-xs lg:text-sm font-semibold uppercase tracking-wide text-gold-light"
                        >
                            {translation.t("contact.availability.heading")}
                        </h2>

                        <p className="mt-4 font-heading text-xl font-semibold">
                            {translation.t("contact.availability.title")}
                        </p>

                        <p className="mt-2 text-sm lg:text-lg leading-relaxed text-muted">
                            {translation.t("contact.availability.description")}
                        </p>
                    </section>

                    {/* SECTION - Canales de contacto */}
                    <section className="style-section" aria-labelledby="canales-de-contacto">
                        <h2
                            id="canales-de-contacto"
                            className="text-xs lg:text-sm font-semibold uppercase tracking-wide text-gold-light"
                        >
                            {translation.t("contact.channels.heading")}
                        </h2>

                        <div className="mt-4 flex flex-col gap-3">
                            <a
                                href="mailto:agustin.lovagnini.a@gmail.com"
                                className="flex items-center gap-3 rounded-lg border border-outline bg-background p-4 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                                <FaEnvelope
                                    size={22}
                                    aria-hidden="true"
                                    className="shrink-0 text-gold-light"
                                />
                                <span className="min-w-0">
                                    <span className="block text-xs lg:text-sm text-gold-light">
                                        {translation.t("contact.channels.email")}
                                    </span>
                                    <span className="block break-words text-sm lg:text-base">
                                        agustin.lovagnini.a@gmail.com
                                    </span>
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/agustinlovagnini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg border border-outline bg-background p-4 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                                <FaLinkedin
                                    size={22}
                                    aria-hidden="true"
                                    className="shrink-0 text-gold-light"
                                />
                                <span>
                                    <span className="block text-xs lg:text-sm text-gold-light">
                                        {translation.t("contact.channels.linkedin")}
                                    </span>
                                    <span className="block text-sm lg:text-base">
                                        LinkedIn
                                    </span>
                                </span>
                            </a>

                            <a
                                href="https://github.com/agustin-lovagnini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg border border-outline bg-background p-4 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                                <FaGithub
                                    size={22}
                                    aria-hidden="true"
                                    className="shrink-0 text-gold-light"
                                />
                                <span>
                                    <span className="block text-xs lg:text-sm text-gold-light">
                                        {translation.t("contact.channels.github")}
                                    </span>
                                    <span className="block text-sm lg:text-base">
                                        GitHub
                                    </span>
                                </span>
                            </a>
                        </div>
                    </section>

                    {/* SECTION - Forma de trabajar */}
                    <section className="style-section" aria-labelledby="garantia-del-contrato">
                        <h2
                            id="garantia-del-contrato"
                            className="text-xs lg:text-sm font-semibold uppercase tracking-wide text-gold-light"
                        >
                            {translation.t("contact.workStyle.heading")}
                        </h2>

                        <p className="mt-4 text-sm lg:text-lg leading-relaxed text-muted">
                            {translation.t("contact.workStyle.description")}
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
