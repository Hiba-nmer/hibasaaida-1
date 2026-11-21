import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import { experiences, siteCopy } from "@/content/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { X } from "lucide-react";
import bankCertificate from "@/assets/bank-certificate.png";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [showCertificate, setShowCertificate] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading {...siteCopy.experience} />

        {/* CV-style timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
                >
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background transform -translate-x-1.5 md:-translate-x-1.5 mt-8 z-10" />

                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t(exp.period)}</span>
                        <span className="text-3xl font-serif font-bold text-primary/15">{exp.num}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{t(exp.company)}</h3>
                      <p className="text-primary text-sm mt-1">{t(exp.role)}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.map((tag) => (
                          <span key={tag.en} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                            {t(tag)}
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{t(exp.desc)}</p>
                      {exp.certificate && (
                        <Button
                          onClick={() => setShowCertificate(bankCertificate)}
                          className="mt-4 text-sm text-primary-foreground hover:text-primary-foreground/80 font-medium transition-colors underline underline-offset-4"
                        >
                          {t(siteCopy.experience.viewCertificate)}
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Certificate Popup */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setShowCertificate(null)}
          >
            <Button variant="ghost" size="icon" aria-label={t(siteCopy.achievements.close)} onClick={() => setShowCertificate(null)} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
              <X className="w-8 h-8" />
            </Button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={showCertificate}
              alt={t(siteCopy.experience.certificateAlt)}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
