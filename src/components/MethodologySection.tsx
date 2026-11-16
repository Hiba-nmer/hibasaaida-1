import { methodologyPillars, siteCopy } from "@/content/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";
const MethodologySection = () => {
 const { t } = useLanguage();
 return <section id="methodology" className="px-6 py-24"><div className="mx-auto max-w-6xl"><SectionHeading {...siteCopy.methodology} /><div className="grid gap-8 md:grid-cols-2">{methodologyPillars.map(p => <article key={p.num} className="border-t border-primary/40 py-6"><span className="text-4xl font-serif text-primary/50">{p.num}</span><h3 className="mt-4 text-2xl text-foreground">{t(p.title)}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{t(p.description)}</p></article>)}</div></div></section>;
};
export default MethodologySection;
