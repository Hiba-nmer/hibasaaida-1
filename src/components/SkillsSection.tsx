import { motion } from "framer-motion";
import { skillGroups, siteCopy } from "@/content/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";
import flowersSky from "@/assets/flowers-sky.png";

const SkillsSection = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Flowers background - fully visible like original */}
      <div className="absolute inset-0">
        <img src={flowersSky} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading {...siteCopy.skills} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{t(group.title)}</h3>
              <div className="space-y-3">
                {group.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
                    <span className="text-sm text-muted-foreground">{t(skill)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
