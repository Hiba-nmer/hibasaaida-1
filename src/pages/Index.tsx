import { useState, useEffect } from "react";
import MethodologySection from "@/components/MethodologySection";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/content/portfolio";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import WorkSection from "@/components/WorkSection";
import InstagramPortfolio from "@/components/InstagramPortfolio";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import StarField from "@/components/StarField";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // In-page links (#work, #contact...) must scroll, not change the hash route.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const el = document.getElementById(a.getAttribute("href")!.slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen space-bg">
      <LoadingScreen isLoading={isLoading} />
      <StarField />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <ExperienceSection />
      <AchievementsSection />
      <WorkSection />
      <InstagramPortfolio />
      <SkillsSection />
      <ContactSection />
      <footer className="relative py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {t(siteCopy.footer)}</p>
      </footer>
    </div>
  );
};

export default Index;
