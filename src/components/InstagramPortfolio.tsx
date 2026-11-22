import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/content/portfolio";
import { tx, type LocalizedText } from "@/lib/language";
import { assetUrl } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import spanishWhisper from "@/assets/instagram_spanish_whisper.mp4.asset.json";
import vNew2 from "@/assets/gemini_generated_video_979fcb94.mp4.asset.json";
import vNew3 from "@/assets/gemini_generated_video_e52ccfe2.mp4.asset.json";
import img1 from "@/assets/perfume_img_20260526_100701_579.jpg.asset.json";
import timelessMood from "@/assets/instagram_timeless_mood.png.asset.json";
import imgHorse from "@/assets/insta_horse_arch.png.asset.json";
import imgApples from "@/assets/insta_apples_music.png.asset.json";
import imgFruit from "@/assets/insta_fruit_bowl.png.asset.json";

type Post = {
  type: "video" | "image";
  src: string;
  caption: LocalizedText;
  details?: LocalizedText;
  // Each file's real frame ratio, so the full picture always shows (no cropping).
  aspect: string;
};

// The two strongest films lead the gallery at their native frame ratios.
const featuredVictorian: Post[] = [
  { type: "video", src: assetUrl(spanishWhisper), caption: tx("Spanish Whisper", "همسة إسبانية"), aspect: "aspect-[16/9]" },
  { type: "video", src: assetUrl(vNew2), caption: tx("Victorian Elegance", "أناقة فيكتورية"), aspect: "aspect-[9/16]" },
];

const victorianPhotos: Post[] = [
  { type: "image", src: assetUrl(imgHorse), caption: tx("Victorian Garden", "حديقة فيكتورية"), aspect: "aspect-[1078/1358]" },
  { type: "image", src: assetUrl(imgApples), caption: tx("Heart of Nature", "قلب الطبيعة"), aspect: "aspect-[1078/1350]" },
  { type: "image", src: assetUrl(imgFruit), caption: tx("Royal Still Life", "مشهد ملكي"), aspect: "aspect-[1078/1423]" },
  {
    type: "image",
    src: assetUrl(timelessMood),
    caption: tx("Timeless Mood", "أجواء خالدة"),
    details: tx("This image is composed of the perfume's ingredients.", "هذه الصورة مكوّنة من مكونات العطر."),
    aspect: "aspect-[941/1672]",
  },
];

// Elegant / golden cluster — kept on its own, stacked closely.
const elegantPosts: Post[] = [
  {
    type: "video",
    src: assetUrl(vNew3),
    caption: tx("Khaleeji Soul", "روح خليجية"),
    details: tx("This video is composed of the perfume's ingredients.", "هذا الفيديو مكوّن من مكونات العطر."),
    aspect: "aspect-[16/9]",
  },
  { type: "image", src: assetUrl(img1), caption: tx("Spicy Weather", "Spicy Weather"), aspect: "aspect-[1440/1921]" },
];

const PostCard = ({ post, i, className = "w-full" }: { post: Post; i: number; className?: string }) => {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((visible) => !visible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4) }}
      className={`group relative overflow-hidden border border-[hsl(var(--journal-border))] ${post.aspect} ${className}`}
    >
      {post.type === "video" ? (
        <video
          src={post.src}
          aria-label={t(post.caption)}
          controls
          loop
          muted
          playsInline
          preload="metadata"
          onClick={post.details ? toggleDetails : undefined}
          className="h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={toggleDetails}
          aria-expanded={showDetails}
          className="block h-full w-full cursor-pointer text-start"
        >
          <img
            src={post.src}
            alt={t(post.caption)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </button>
      )}
      <div
        aria-live="polite"
        className={`journal-overlay pointer-events-none absolute inset-x-0 bottom-0 p-4 text-center backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 ${showDetails ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-base italic text-[hsl(var(--journal-accent))]">{t(post.caption)}</p>
        {post.details && showDetails && (
          <p className="mt-1.5 text-xs leading-relaxed text-[hsl(var(--journal-accent))]">{t(post.details)}</p>
        )}
      </div>
    </motion.div>
  );
};

const ClusterLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 border-b border-[hsl(var(--journal-border))] pb-3 text-sm text-[hsl(var(--journal-accent))]">{children}</div>
);

const InstagramPortfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="instagram-portfolio" className="journal-bg relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm text-[hsl(var(--journal-accent))]">{t(siteCopy.reels.eyebrow)}</p>
          <h2 className="mt-6 text-4xl leading-tight text-[hsl(var(--journal-accent))] md:text-5xl">{t(siteCopy.reels.title)}</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{t(siteCopy.reels.description)}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t(siteCopy.reels.immersion)}</p>
          <p className="mt-5 border-s-2 border-[hsl(var(--journal-accent))] ps-4 text-sm italic leading-relaxed text-[hsl(var(--journal-accent))]">{t(siteCopy.reels.credit)}</p>
          <Button asChild variant="outline" className="mt-8 border-[hsl(var(--journal-border))] text-[hsl(var(--journal-accent))]">
            <a href="https://instagram.com/lasoriee.ps" target="_blank" rel="noopener noreferrer">
              <Instagram className="me-2 h-4 w-4" />
              {t(siteCopy.reels.instagramCta)}
            </a>
          </Button>
        </div>

        <ClusterLabel>{t(siteCopy.reels.victorian)}</ClusterLabel>
        <div className="flex flex-col items-center gap-4 md:h-[min(31rem,calc((100vw_-_5rem)/2.34))] md:flex-row md:justify-center">
          {featuredVictorian.map((post, i) => (
            <PostCard key={post.src} post={post} i={i} className="w-full md:h-full md:w-auto md:shrink-0" />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 items-start gap-3 lg:grid-cols-4">
          {victorianPhotos.map((post, i) => (
            <PostCard key={post.src} post={post} i={i + featuredVictorian.length} />
          ))}
        </div>

        <div className="mt-12">
          <ClusterLabel>{t(siteCopy.reels.elegant)}</ClusterLabel>
          <div className="flex flex-col items-center gap-4 md:h-[min(28rem,calc((100vw_-_5rem)/2.53))] md:flex-row md:justify-center">
            {elegantPosts.map((post, i) => (
              <PostCard key={post.src} post={post} i={i} className="w-full md:h-full md:w-auto md:shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPortfolio;
