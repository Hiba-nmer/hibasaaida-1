import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import v1 from "@/assets/gemini_generated_video_4dc3a9c4.mp4.asset.json";
import v4 from "@/assets/gemini_generated_video_c97403c1.mp4.asset.json";
import vNew1 from "@/assets/gemini_generated_video_78c159f4.mp4.asset.json";
import vNew2 from "@/assets/gemini_generated_video_979fcb94.mp4.asset.json";
import vNew3 from "@/assets/gemini_generated_video_e52ccfe2.mp4.asset.json";
import img1 from "@/assets/perfume_img_20260526_100701_579.jpg.asset.json";
import img2 from "@/assets/instagram_books_roses.png.asset.json";
import img3 from "@/assets/instagram_base_notes.png.asset.json";
import img4 from "@/assets/instagram_heart_notes.png.asset.json";
import img5 from "@/assets/instagram_top_notes.png.asset.json";
import img6 from "@/assets/instagram_vintage_card.png.asset.json";
import imgHorse from "@/assets/insta_horse_arch.png.asset.json";
import imgApples from "@/assets/insta_apples_music.png.asset.json";
import imgFruit from "@/assets/insta_fruit_bowl.png.asset.json";

type Post = {
  type: "video" | "image";
  src: string;
  caption: string;
  height: string;
};

// Victorian / vintage cluster — kept together
const victorianPosts: Post[] = [
  { type: "video", src: vNew2.url, caption: "Victorian Elegance", height: "h-[420px]" },
  { type: "image", src: imgHorse.url, caption: "Victorian Garden", height: "h-[360px]" },
  { type: "image", src: img6.url, caption: "Crafted to Last", height: "h-[400px]" },
  { type: "image", src: img2.url, caption: "Timeless Mood", height: "h-[380px]" },
  { type: "video", src: v4.url, caption: "Midnight Bloom", height: "h-[300px]" },
];

// Elegant / golden cluster — kept on its own
const elegantPosts: Post[] = [
  { type: "video", src: vNew1.url, caption: "Spanish Whisper", height: "h-[420px]" },
  { type: "image", src: imgApples.url, caption: "Heart of Nature", height: "h-[360px]" },
  { type: "image", src: imgFruit.url, caption: "Royal Still Life", height: "h-[400px]" },
  { type: "video", src: vNew3.url, caption: "Khaleeji Soul", height: "h-[380px]" },
  { type: "image", src: img1.url, caption: "Spicy Weather", height: "h-[340px]" },
  { type: "image", src: img3.url, caption: "Base Notes", height: "h-[380px]" },
  { type: "image", src: img4.url, caption: "Heart Notes", height: "h-[360px]" },
  { type: "image", src: img5.url, caption: "Top Notes", height: "h-[380px]" },
  { type: "video", src: v1.url, caption: "Every drop tells a story...", height: "h-[280px]" },
];

const ACCENT = "#1F3A2B";
const ACCENT_SOFT = "#7BA17C";
const ACCENT_BORDER = "rgba(123, 161, 124, 0.32)";

const PostCard = ({ post, i }: { post: Post; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4) }}
    className={`group relative overflow-hidden break-inside-avoid mb-5 ${post.height} cursor-pointer`}
    style={{
      border: `1px solid ${ACCENT_BORDER}`,
      boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
    }}
  >
    {post.type === "video" ? (
      <video
        src={post.src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
    ) : (
      <img
        src={post.src}
        alt={post.caption}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
    )}

    <div
      className="absolute inset-0 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
      style={{
        background:
          "linear-gradient(135deg, rgba(10,20,14,0.78) 0%, rgba(16,30,22,0.58) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        <div className="mx-auto w-10 h-px mb-4" style={{ backgroundColor: ACCENT_SOFT }} />
        <p
          className="italic text-lg md:text-2xl leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: ACCENT_SOFT }}
        >
          {post.caption}
        </p>
        <div className="mx-auto w-10 h-px mt-4" style={{ backgroundColor: ACCENT_SOFT }} />
      </div>
    </div>
  </motion.div>
);

const ClusterLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="h-px w-8" style={{ backgroundColor: ACCENT_BORDER }} />
    <span
      className="text-[10px] tracking-[0.4em] uppercase"
      style={{ color: ACCENT_SOFT, fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </span>
  </div>
);

const InstagramPortfolio = () => {
  return (
    <section
      id="instagram-portfolio"
      className="relative py-24 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN — text + Victorian cluster underneath */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-12">
              <span
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: ACCENT_SOFT, fontFamily: "'Inter', sans-serif" }}
              >
                Instagram Portfolio
              </span>
              <h2
                className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: ACCENT,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                Not loud.
                <br />
                <em className="italic font-normal" style={{ color: ACCENT_SOFT }}>
                  Just unforgettable.
                </em>
              </h2>
              <p
                className="mt-8 text-base md:text-lg leading-relaxed max-w-md"
                style={{
                  color: "rgba(245, 240, 230, 0.7)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span style={{ color: ACCENT_SOFT }}>Spanish elegance</span>
                <span className="mx-2 opacity-50">|</span>
                <span style={{ color: ACCENT_SOFT }}>Khaleeji soul</span>
                <br />
                <span className="block mt-3">
                  Explore the visual journal of our timeless compositions.
                </span>
              </p>

              <a
                href="https://instagram.com/lasoriee.ps"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-3 px-8 py-4 transition-all duration-500 hover:tracking-[0.25em] tracking-[0.2em] text-xs uppercase"
                style={{
                  border: `1px solid ${ACCENT}`,
                  color: ACCENT_SOFT,
                  fontFamily: "'Inter', sans-serif",
                  background:
                    "linear-gradient(135deg, rgba(31,58,43,0.05) 0%, rgba(31,58,43,0.01) 100%)",
                }}
              >
                <Instagram size={14} strokeWidth={1.5} />
                <span>Visit @lasoriee.ps</span>
              </a>
            </div>

            <ClusterLabel>Victorian Chapter</ClusterLabel>
            <div className="columns-1 sm:columns-2 gap-5 space-y-5">
              {victorianPosts.map((post, i) => (
                <PostCard key={`v-${i}`} post={post} i={i} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — elegant / golden cluster on its own */}
          <div className="lg:pt-2">
            <ClusterLabel>Elegant · Golden</ClusterLabel>
            <div className="columns-1 sm:columns-2 gap-5 space-y-5">
              {elegantPosts.map((post, i) => (
                <PostCard key={`e-${i}`} post={post} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPortfolio;
