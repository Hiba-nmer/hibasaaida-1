import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import crownImage from "@/assets/crown.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/content/portfolio";
import SectionHeading from "./SectionHeading";
const ContactSection = () => {
 const { t } = useLanguage(); const c = siteCopy.contact;
 return <section id="contact" className="relative overflow-hidden px-6 py-24"><div className="absolute inset-0"><img src={crownImage} alt="" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-background/80" /></div><div className="relative mx-auto max-w-5xl"><SectionHeading {...c} />
 <div className="grid gap-8 border-y border-border py-8 md:grid-cols-3">
 <div className="min-w-0"><Mail className="mb-3 text-primary" /><p className="text-sm text-muted-foreground">{t(c.email)}</p><a dir="ltr" className="break-all" href="mailto:hibanmers@gmail.com">hibanmers@gmail.com</a></div>
 <div><Phone className="mb-3 text-primary" /><p className="text-sm text-muted-foreground">{t(c.phone)}</p><a dir="ltr" href="tel:+972598349117">+972 59 834 9117</a></div>
 <div><MapPin className="mb-3 text-primary" /><p className="text-sm text-muted-foreground">{t(c.location)}</p><p>{t(c.locationValue)}</p></div></div>
 <div className="mt-10 flex flex-wrap justify-center gap-4"><Button asChild size="lg"><a href="https://www.linkedin.com/in/hiba-saaidah" target="_blank" rel="noopener noreferrer"><Linkedin className="me-2 h-4 w-4" />{t(c.linkedinCta)}</a></Button><Button asChild size="lg" variant="outline"><a href="mailto:hibanmers@gmail.com"><Mail className="me-2 h-4 w-4" />{t(c.emailCta)}</a></Button></div></div></section>;
};
export default ContactSection;
