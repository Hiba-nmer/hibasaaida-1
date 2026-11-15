import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LANGUAGE_STORAGE_KEY,
  directionFor,
  normalizeLanguage,
  type Language,
  type LocalizedText,
} from "@/lib/language";

type LanguageContextValue = {
  language: Language;
  direction: "ltr" | "rtl";
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (text: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const direction = directionFor(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title =
      language === "ar"
        ? "هبة سعايدة | أخصائية نمو العلامات التجارية ومسوقة استراتيجية"
        : "Heba Al-Sayda | Brand Growth Specialist & Strategic Marketer";

    const description =
      language === "ar"
        ? "أعمال هبة سعايدة في نمو العلامات التجارية، تحليل الأعمال، أبحاث السوق، الذكاء الاصطناعي، والتدريب وإدارة الأعمال."
        : "Heba Al-Sayda's portfolio in brand growth, business diagnostics, market research, AI-driven insights, training, and business management.";

    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }, [direction, language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback((text: LocalizedText) => text[language], [language]);

  const value = useMemo(
    () => ({ language, direction, setLanguage, toggleLanguage, t }),
    [direction, language, t, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
