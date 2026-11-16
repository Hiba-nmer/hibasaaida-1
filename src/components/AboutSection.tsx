import { motion } from "framer-motion";
import { siteCopy } from "@/content/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";
import watercolorPainting from "@/assets/watercolor-painting.webp";

const AboutSection = () => {
  const { t } = useLanguage();
  const cards = siteCopy.about.cards;
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading {...siteCopy.about} />

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="w-80 h-[420px] rounded-2xl overflow-hidden glow-pink border border-border">
              <img src={watercolorPainting} alt={t(siteCopy.about.imageAlt)} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-1 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors shrink-0">{card.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t(card.title)}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{t(card.desc)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
