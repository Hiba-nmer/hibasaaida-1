import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/content/portfolio";
const HeroSection = () => {
  const { t } = useLanguage();
  const c = siteCopy.hero;
  return <section id="home" className="relative flex min-h-[85svh] items-center justify-center px-6 pb-16 pt-32">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="relative z-10 max-w-4xl text-center">
      <p className="mb-6 text-sm text-primary">{t(c.eyebrow)}</p>
      <h1 className="text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">{t(c.name)}</h1>
      <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-primary md:text-2xl">{t(c.roles)}</p>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{t(c.bio)}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg"><a href="#work">{t(c.primaryCta)}<ArrowUpRight className="ms-2 h-4 w-4" /></a></Button>
        <Button asChild variant="outline" size="lg"><a href="#contact">{t(c.secondaryCta)}</a></Button>
      </div>
      <a href="#about" className="mt-12 inline-flex items-center gap-3 text-sm text-muted-foreground">{t(c.scroll)}<ArrowDown className="h-4 w-4" /></a>
    </motion.div>
  </section>;
};
export default HeroSection;
