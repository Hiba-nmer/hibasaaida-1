import { useState } from "react";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";
import { Download, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import workLaundry from "@/assets/work-laundry.jpg";
import workLogo from "@/assets/work-logo.jpg";
import workKarmolPlan from "@/assets/work-karmol-plan.jpg";

import designLvBag from "@/assets/design-lv-bag.jpg";
import designYoyoso from "@/assets/design-yoyoso.jpg";
import designLibre from "@/assets/design-libre.jpg";
import designBoeing from "@/assets/design-boeing.jpg";
import designChanel from "@/assets/design-chanel.png";
import designFlowers from "@/assets/design-flowers.jpg";
import designBurger from "@/assets/design-burger.jpg";

import { caseStudies, supportingProjects, siteCopy } from "@/content/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import SectionHeading from "./SectionHeading";
const supportingImages: Record<string, string> = { logo: workLogo };
const designImages = [designLvBag, designYoyoso, designLibre, designBoeing, designChanel, designFlowers, designBurger];
const designTitles = [tx("LV Capucines — Product Ad", "LV Capucines — إعلان منتج"), tx("YOYOSO — Product Promotion", "YOYOSO — ترويج منتج"), tx("YSL Libre — Perfume Ad", "YSL Libre — إعلان عطر"), tx("Boeing — Vintage Poster (Photoshop)", "بوينغ — ملصق كلاسيكي (Photoshop)"), tx("Chanel Coco Noir — Ad Design", "Chanel Coco Noir — تصميم إعلاني"), tx("Flowers — Photography (Photoshop)", "زهور — تصوير (Photoshop)"), tx("Delicious Burger — Food Ad (Photoshop)", "برغر — إعلان طعام (Photoshop)")];
const WorkSection = () => {
 const { t } = useLanguage();
 const [showDesigns, setShowDesigns] = useState(false);
 const [currentDesign, setCurrentDesign] = useState(0);
 useWebMCP({ name: "read_portfolio_work", description: "Read the case studies and designs displayed on the page.", annotations: { readOnlyHint: true, untrustedContentHint: true }, execute: () => runWebMCPTool("read_portfolio_work", () => caseStudies.map(p => `${t(p.title)}: ${t(p.overview)}`).join("\n")) });
 return <><section id="work" className="px-6 py-24"><div className="mx-auto max-w-6xl"><SectionHeading {...siteCopy.work} />
 <div className="space-y-16">{caseStudies.map((project, i) => <article key={project.id} className="grid items-start gap-8 border-t border-border pt-8 lg:grid-cols-2">
 <div><span className="font-serif text-4xl text-primary/50">{project.number}</span><h3 className="mt-4 text-3xl leading-tight text-foreground">{t(project.title)}</h3><p className="mt-3 text-primary">{t(project.subtitle)}</p><p className="mt-5 leading-relaxed text-muted-foreground">{t(project.overview)}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag.en} className="rounded border border-border px-3 py-1 text-xs text-muted-foreground">{t(tag)}</span>)}</div></div>
 <div><img src={i === 0 ? workKarmolPlan : workLaundry} alt={t(project.title)} className="aspect-[4/3] w-full rounded-lg object-cover" /><h4 className="mb-3 mt-6 text-lg text-foreground">{t(siteCopy.work.deliverables)}</h4><div className="flex flex-col items-start gap-3">{project.deliverables.map(d => <Button asChild variant="outline" key={d.file} className="h-auto max-w-full justify-start whitespace-normal py-3 text-start"><a href={d.file} download={d.file.split('/').pop()}><Download className="me-3 h-4 w-4 shrink-0" /><span>{t(d.label)} · {d.format}</span></a></Button>)}</div></div>
 </article>)}</div>
 <div className="mt-20"><h3 className="mb-8 text-2xl">{t(siteCopy.work.supportingTitle)}</h3><div className="grid gap-6 md:grid-cols-2">{supportingProjects.map((p) => <article key={p.id} className="overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm"><img src={supportingImages[p.id]} alt={t(p.title)} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h4 className="text-lg">{t(p.title)}</h4><p className="mt-3 text-sm text-muted-foreground">{t(p.desc)}</p><Button asChild variant="link" className="mt-4 px-0"><a href={p.file || p.link} download={p.file ? p.file.split('/').pop() : undefined} target={p.link ? "_blank" : undefined} rel="noopener noreferrer">{p.file ? <Download className="me-2 h-4 w-4" /> : <ExternalLink className="me-2 h-4 w-4" />}{t(p.file ? siteCopy.work.download : siteCopy.work.viewPresentation)}</a></Button></div></article>)}</div></div>
 </div></section>
 <section id="creative" className="px-6 py-24"><div className="mx-auto max-w-6xl"><SectionHeading {...siteCopy.creative} /><div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-border bg-card/80"><img src={designLvBag} alt={t(siteCopy.creative.title)} className="aspect-[4/3] w-full object-cover" /><div className="flex flex-wrap items-center justify-between gap-4 p-6"><p className="text-muted-foreground">{t(siteCopy.creative.designsCount)}</p><Button onClick={() => {setCurrentDesign(0);setShowDesigns(true);}}>{t(siteCopy.creative.openGallery)}</Button></div></div></div></section>
 <Dialog open={showDesigns} onOpenChange={setShowDesigns}><DialogContent className="max-w-4xl" closeLabel={t(siteCopy.creative.close)}><DialogTitle>{t(designTitles[currentDesign])}</DialogTitle><img src={designImages[currentDesign]} alt={t(designTitles[currentDesign])} className="mx-auto max-h-[65vh] w-full object-contain" /><div className="flex items-center justify-between"><Button variant="outline" size="icon" title={t(siteCopy.creative.previous)} aria-label={t(siteCopy.creative.previous)} onClick={() => setCurrentDesign(p => (p-1+designImages.length)%designImages.length)}><ChevronLeft /></Button><span>{currentDesign+1} / {designImages.length}</span><Button variant="outline" size="icon" title={t(siteCopy.creative.next)} aria-label={t(siteCopy.creative.next)} onClick={() => setCurrentDesign(p => (p+1)%designImages.length)}><ChevronRight /></Button></div></DialogContent></Dialog></>;
};
export default WorkSection;
