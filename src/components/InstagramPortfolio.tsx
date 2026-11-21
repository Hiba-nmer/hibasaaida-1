import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/content/portfolio";
import { tx, type LocalizedText } from "@/lib/language";
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
  height: string;
};

// Victorian / vintage cluster — the requested pairs stay side by side on desktop.
const victorianPosts: Post[] = [
  { type: "video", src: spanishWhisper.url, caption: tx("Spanish Whisper", "همسة إسبانية"), height: "h-[420px]" },
  { type: "image", src: imgHorse.url, caption: tx("Victorian Garden", "حديقة فيكتورية"), height: "h-[420px]" },
  { type: "image", src: imgApples.url, caption: tx("Heart of Nature", "قلب الطبيعة"), height: "h-[380px]" },
  { type: "image", src: imgFruit.url, caption: tx("Royal Still Life", "مشهد ملكي"), height: "h-[380px]" },
  { type: "video", src: vNew2.url, caption: tx("Victorian Elegance", "أناقة فيكتورية"), height: "h-[420px]" },
  {
    type: "image",
    src: timelessMood.url,
    caption: tx("Timeless Mood", "أجواء خالدة"),
    details: tx("This image is composed of the perfume's ingredients.", "هذه الصورة مكوّنة من مكونات العطر."),
    height: "h-[420px]",
  },
];

// Elegant / golden cluster — kept on its own
const elegantPosts: Post[] = [
  {
    type: "video",
    src: vNew3.url,
    caption: tx("Khaleeji Soul", "روح خليجية"),
    details: tx("This video is composed of the perfume's ingredients.", "هذا الفيديو مكوّن من مكونات العطر."),
    height: "h-[380px]",
  },
  { type: "image", src: img1.url, caption: tx("Spicy Weather", "Spicy Weather"), height: "h-[340px]" },
];

const PostCard = ({ post, i }: { post: Post; i: number }) => {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((visible) => !visible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4) }}
      className={`group relative mb-5 break-inside-avoid overflow-hidden border border-[hsl(var(--journal-border))] ${post.height}`}
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
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
        className={`journal-overlay pointer-events-none absolute inset-x-0 bottom-0 p-5 text-center backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 ${showDetails ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-lg italic text-[hsl(var(--journal-accent))]">{t(post.caption)}</p>
        {post.details && showDetails && (
          <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--journal-accent))]">{t(post.details)}</p>
        )}
      </div>
    </motion.div>
  );
};

const ClusterLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5 border-b border-[hsl(var(--journal-border))] pb-3 text-sm text-[hsl(var(--journal-accent))]">{children}</div>
);

const InstagramPortfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="instagram-portfolio" className="journal-bg relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12">
              <p className="text-sm text-[hsl(var(--journal-accent))]">{t(siteCopy.reels.eyebrow)}</p>
              <h2 className="mt-6 text-4xl leading-tight text-[hsl(var(--journal-accent))] md:text-5xl">{t(siteCopy.reels.title)}</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{t(siteCopy.reels.description)}</p>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{t(siteCopy.reels.immersion)}</p>
              <p className="mt-5 max-w-md border-s-2 border-[hsl(var(--journal-accent))] ps-4 text-sm italic leading-relaxed text-[hsl(var(--journal-accent))]">{t(siteCopy.reels.credit)}</p>
              <Button asChild variant="outline" className="mt-8 border-[hsl(var(--journal-border))] text-[hsl(var(--journal-accent))]">
                <a href="https://instagram.com/lasoriee.ps" target="_blank" rel="noopener noreferrer">
                  <Instagram className="me-2 h-4 w-4" />
                  {t(siteCopy.reels.instagramCta)}
                </a>
              </Button>
            </div>
            <ClusterLabel>{t(siteCopy.reels.victorian)}</ClusterLabel>
            <div className="grid items-start gap-5 sm:grid-cols-2">
              {victorianPosts.map((post, i) => <PostCard key={post.src} post={post} i={i} />)}
            </div>
          </div>
          <div>
            <ClusterLabel>{t(siteCopy.reels.elegant)}</ClusterLabel>
            <div className="columns-1 gap-5 sm:columns-2">
              {elegantPosts.map((post, i) => <PostCard key={post.src} post={post} i={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPortfolio;
