"use client";

import { useState, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { createTranslation } from "../../i18n/createTranslation";
import type { Locale } from "../../i18n/resources";

interface TranslationProviderProps {
    children: ReactNode;
    locale: Locale;
}

export default function TranslationProvider({
    children,
    locale,
}: TranslationProviderProps) {
    const [instance] = useState(() => createTranslation(locale));

    return (
        <I18nextProvider i18n={instance}>
            {children}
        </I18nextProvider>
    );
}