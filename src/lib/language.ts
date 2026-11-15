export const LANGUAGES = ["en", "ar"] as const;

export type Language = (typeof LANGUAGES)[number];
export type LocalizedText = Record<Language, string>;

export const LANGUAGE_STORAGE_KEY = "heba-portfolio-language";

export const tx = (en: string, ar: string): LocalizedText => ({ en, ar });

export const directionFor = (language: Language): "ltr" | "rtl" =>
  language === "ar" ? "rtl" : "ltr";

export const normalizeLanguage = (value: unknown): Language =>
  value === "ar" ? "ar" : "en";
