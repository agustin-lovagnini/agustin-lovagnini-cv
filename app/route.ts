import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "../translations/i18n/resources";

export function GET(request: NextRequest) {
    const preference = request.cookies.get("preferred-language")?.value;
    const acceptedLanguages = request.headers.get("accept-language");
    const languageRanges = acceptedLanguages?.split(",") ?? [];

    const candidates = languageRanges.map((range) => {
        const [languagePart, qualityPart] = range.trim().split(";");

        const language = languagePart.trim().toLowerCase().split("-")[0];

        const quality = qualityPart
            ? Number(qualityPart.trim().replace(/^q=/i, ""))
            : 1;

        return { language, quality };
    });

    const browserLanguage = candidates
    .filter(
        (candidate) =>
            isLocale(candidate.language) &&
            Number.isFinite(candidate.quality) &&
            candidate.quality > 0 &&
            candidate.quality <= 1
    )
    .sort((a, b) => b.quality - a.quality)[0]?.language;

    const lang =
    preference && isLocale(preference)
        ? preference
        : browserLanguage ?? defaultLocale;

    const destination = new URL(`/${lang}`, request.url);

    destination.search = request.nextUrl.search;

    return NextResponse.redirect(destination);
}
