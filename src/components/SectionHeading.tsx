import { motion } from "framer-motion";
import type { LocalizedText } from "@/lib/language";
import { useLanguage } from "@/context/LanguageContext";

type SectionHeadingProps = {
  eyebrow?: LocalizedText;
  title: LocalizedText;
  description?: LocalizedText;
  align?: "center" | "start";
};

const SectionHeading = ({ eyebrow, title, description, align = "center" }: SectionHeadingProps) => {
  const { t } = useLanguage();
  const alignment = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`mb-12 max-w-3xl ${alignment}`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {t(eyebrow)}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
        {t(title)}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {t(description)}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
