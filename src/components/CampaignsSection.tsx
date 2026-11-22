import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { featuredCampaigns, siteCopy } from "@/content/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import type { LocalizedText } from "@/lib/language";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/assets";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import cafeCampaign from "@/assets/campaign-rashfh-cafe.png.asset.json";
import teamTraining from "@/assets/initiative-team-training.png.asset.json";
import kidsActivity from "@/assets/initiative-kids-activity.jpg.asset.json";
import communitySession from "@/assets/initiative-community-session.jpg.asset.json";
import { tx } from "@/lib/language";

type CampaignPhoto = {
  src: string;
  alt: LocalizedText;
};

const photos = {
  cafe: {
    src: assetUrl(cafeCampaign),
    alt: tx(
      "Bank of Palestine field campaign at Rashfh Cafe in Tulkarm",
      "حملة بنك فلسطين الميدانية في مقهى رشفة بطولكرم",
    ),
  },
  training: {
    src: assetUrl(teamTraining),
    alt: tx(
      "Local team preparation and psychological first aid training session",
      "جلسة إعداد وتدريب الفريق المحلي على الإسعاف النفسي الأولي",
    ),
  },
  activity: {
    src: assetUrl(kidsActivity),
    alt: tx(
      "Children participating in an interactive community activity",
      "أطفال يشاركون في نشاط مجتمعي تفاعلي",
    ),
  },
  community: {
    src: assetUrl(communitySession),
    alt: tx(
      "Children and facilitators gathered during the community session",
      "الأطفال والميسرون خلال اللقاء المجتمعي",
    ),
  },
} satisfies Record<string, CampaignPhoto>;

const PhotoButton = ({
  photo,
  className,
  onOpen,
}: {
  photo: CampaignPhoto;
  className?: string;
  onOpen: (photo: CampaignPhoto) => void;
}) => {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      aria-label={`${t(siteCopy.campaigns.openPhoto)}: ${t(photo.alt)}`}
      onClick={() => onOpen(photo)}
      className={cn(
        "group relative block w-full overflow-hidden rounded-xl border border-campaign-border bg-campaign-background text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-campaign-accent focus-visible:ring-offset-2",
        className,
      )}
    >
      <img
        src={photo.src}
        alt={t(photo.alt)}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute end-3 top-3 rounded-full bg-campaign-card/90 p-2 text-campaign-accent shadow-sm transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        <Expand className="h-4 w-4" aria-hidden="true" />
      </span>
    </button>
  );
};

const CampaignsSection = () => {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<CampaignPhoto | null>(null);
  const [bankCampaign, communityCampaign] = featuredCampaigns;

  return (
    <section
      id="campaigns"
      className="border-y border-campaign-border bg-campaign-background px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase text-campaign-accent">
            {t(siteCopy.campaigns.eyebrow)}
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight text-campaign-foreground md:text-5xl">
            {t(siteCopy.campaigns.title)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-campaign-muted md:text-lg">
            {t(siteCopy.campaigns.description)}
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="flex h-full flex-col rounded-2xl border border-campaign-border bg-campaign-card p-5 shadow-sm md:p-6"
          >
            <p className="text-sm font-semibold text-campaign-accent">
              {t(bankCampaign.organization)}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-campaign-foreground">
              {t(bankCampaign.title)}
            </h3>
            <p className="mt-4 leading-relaxed text-campaign-muted">
              {t(bankCampaign.description)}
            </p>
            {bankCampaign.metric && (
              <div className="my-6 flex items-center gap-4 rounded-xl border border-campaign-border bg-campaign-accent-soft p-4">
                <strong className="font-serif text-5xl leading-none text-campaign-accent">
                  {bankCampaign.metric.value}
                </strong>
                <span className="text-sm font-semibold leading-relaxed text-campaign-foreground">
                  {t(bankCampaign.metric.label)}
                </span>
              </div>
            )}
            <PhotoButton
              photo={photos.cafe}
              onOpen={setSelectedPhoto}
              className="mt-auto aspect-[4/3]"
            />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex h-full flex-col rounded-2xl border border-campaign-border bg-campaign-card p-5 shadow-sm md:p-6"
          >
            <p className="text-sm font-semibold text-campaign-accent">
              {t(communityCampaign.organization)}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-campaign-foreground">
              {t(communityCampaign.title)}
            </h3>
            <p className="mb-6 mt-4 leading-relaxed text-campaign-muted">
              {t(communityCampaign.description)}
            </p>
            <div className="mt-auto grid grid-cols-2 gap-3">
              <PhotoButton
                photo={photos.training}
                onOpen={setSelectedPhoto}
                className="col-span-2 aspect-[16/8]"
              />
              <PhotoButton
                photo={photos.activity}
                onOpen={setSelectedPhoto}
                className="aspect-[4/3]"
              />
              <PhotoButton
                photo={photos.community}
                onOpen={setSelectedPhoto}
                className="aspect-[4/3]"
              />
            </div>
          </motion.article>
        </div>
      </div>

      <Dialog
        open={Boolean(selectedPhoto)}
        onOpenChange={(open) => {
          if (!open) setSelectedPhoto(null);
        }}
      >
        {selectedPhoto && (
          <DialogContent
            closeLabel={t(siteCopy.campaigns.closePreview)}
            className="max-w-5xl gap-3 border-campaign-border bg-campaign-card p-4 text-campaign-foreground sm:rounded-2xl"
          >
            <DialogTitle className="px-8 text-campaign-foreground">
              {t(selectedPhoto.alt)}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {t(siteCopy.campaigns.previewDescription)}
            </DialogDescription>
            <img
              src={selectedPhoto.src}
              alt={t(selectedPhoto.alt)}
              className="max-h-[75vh] w-full rounded-xl bg-campaign-background object-contain"
            />
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default CampaignsSection;
