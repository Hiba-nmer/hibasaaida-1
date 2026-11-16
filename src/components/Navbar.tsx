import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import logo from "@/assets/logo-large.webp";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";
import { useLanguage } from "@/context/LanguageContext";
import { navItems, siteCopy } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    const item = navItems.find(item => item.id === id || item.label.en.toLowerCase() === id.toLowerCase());
    if (!item) throw new Error("Unknown section");
    const el = document.getElementById(item.id);
    if (!el) throw new Error("Section unavailable");
    setActive(item.id); setMenuOpen(false); el.scrollIntoView({ behavior: "smooth" });
  };
  useWebMCP({ name: "list_portfolio_sections", description: "List available portfolio sections.", annotations: { readOnlyHint: true }, execute: () => runWebMCPTool("list_portfolio_sections", () => navItems.map(i => `${i.id}: ${t(i.label)}`).join(", ")) });
  useWebMCP({ name: "navigate_portfolio", description: "Navigate to a portfolio section.", annotations: { readOnlyHint: false }, inputSchema: { type: "object", properties: { section: { type: "string", enum: navItems.map(i => i.id) } }, required: ["section"], additionalProperties: false }, execute: ({ section }: { section: string }) => runWebMCPTool("navigate_portfolio", () => { scrollTo(section); return `Navigated to ${section}`; }) });
  const links = navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => scrollTo(item.id)} className={active === item.id ? "text-primary" : "text-muted-foreground"}>{t(item.label)}</Button>);
  return <><nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-2 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md lg:px-8">
    <a href="#home" aria-label={t(siteCopy.hero.name)}><img src={logo} alt={t(siteCopy.hero.name)} className="h-12 w-12 rounded-full border border-primary/40 object-cover" /></a>
    <div className="hidden items-center lg:flex">{links}</div>
    <div className="flex items-center gap-2"><Button variant="outline" onClick={toggleLanguage} aria-label={t(siteCopy.languageSwitcher)}><Languages className="me-2 h-4 w-4" /><span>{language === "en" ? "العربية" : "English"}</span></Button>
    <Button size="icon" variant="ghost" className="lg:hidden" aria-expanded={menuOpen} aria-label={t(menuOpen ? siteCopy.menuClose : siteCopy.menuOpen)} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
  </nav><AnimatePresence>{menuOpen && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed inset-x-0 top-[73px] z-40 grid border-b border-border bg-background/95 p-4 backdrop-blur-md lg:hidden">{links}</motion.div>}</AnimatePresence></>;
};
export default Navbar;
