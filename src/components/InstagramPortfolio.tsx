import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import v1 from "@/assets/gemini_generated_video_4dc3a9c4.mp4.asset.json";
import v2 from "@/assets/gemini_generated_video_6fca0afa.mp4.asset.json";
import v3 from "@/assets/gemini_generated_video_07374afb.mp4.asset.json";
import v4 from "@/assets/gemini_generated_video_c97403c1.mp4.asset.json";
import v5 from "@/assets/gemini_generated_video_785e0908.mp4.asset.json";
import vNew1 from "@/assets/gemini_generated_video_78c159f4.mp4.asset.json";
import vNew2 from "@/assets/gemini_generated_video_979fcb94.mp4.asset.json";
import vNew3 from "@/assets/gemini_generated_video_e52ccfe2.mp4.asset.json";
import img1 from "@/assets/perfume_img_20260526_100701_579.jpg.asset.json";
import img2 from "@/assets/instagram_books_roses.png.asset.json";
import img3 from "@/assets/instagram_base_notes.png.asset.json";
import img4 from "@/assets/instagram_heart_notes.png.asset.json";
import img5 from "@/assets/instagram_top_notes.png.asset.json";
import img6 from "@/assets/instagram_vintage_card.png.asset.json";

type Post = {
  type: "video" | "image";
  src: string;
  caption: string;
  height: string;
};

const posts: Post[] = [
  { type: "video", src: vNew1.url, caption: "Spanish Whisper", height: "h-[420px]" },
  { type: "image", src: img2.url, caption: "Timeless Mood", height: "h-[400px]" },
  { type: "video", src: vNew2.url, caption: "Victorian Elegance", height: "h-[430px]" },
  { type: "image", src: img6.url, caption: "Crafted to Last", height: "h-[410px]" },
  { type: "image", src: img5.url, caption: "Top Notes", height: "h-[430px]" },
  { type: "video", src: v1.url, caption: "Every drop tells a story...", height: "h-[280px]" },
  { type: "video", src: vNew3.url, caption: "Khaleeji Soul", height: "h-[420px]" },
  { type: "image", src: img1.url, caption: "Spicy Weather", height: "h-[400px]" },
  { type: "image", src: img4.url, caption: "Heart Notes", height: "h-[420px]" },
  { type: "video", src: v2.url, caption: "Golden Hour", height: "h-[300px]" },
  { type: "image", src: img3.url, caption: "Base Notes", height: "h-[430px]" },
  { type: "video", src: v3.url, caption: "Oud & Amber", height: "h-[280px]" },
  { type: "video", src: v4.url, caption: "Midnight Bloom", height: "h-[320px]" },
  { type: "video", src: v5.url, caption: "Eternal Echo", height: "h-[260px]" },
];

const ACCENT = "#0E1E3A";
const ACCENT_SOFT = "#5B7AAE";
const ACCENT_BORDER = "rgba(91, 122, 174, 0.32)";

const InstagramPortfolio = () => {
  return (
    <section
      id="instagram-portfolio"
      className="relative py-24 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-28">
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
                    "linear-gradient(135deg, rgba(39,68,114,0.05) 0%, rgba(39,68,114,0.01) 100%)",
                  boxShadow: "0 0 0 1px rgba(127,151,194,0.06) inset",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(39,68,114,0.18) 0%, rgba(39,68,114,0.06) 100%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(39,68,114,0.05) 0%, rgba(39,68,114,0.01) 100%)")
                }
              >
                <Instagram size={14} strokeWidth={1.5} />
                <span>Visit @lasoriee.ps</span>
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="columns-1 sm:columns-2 gap-5 space-y-5">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
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
                        "linear-gradient(135deg, rgba(7,12,24,0.78) 0%, rgba(16,22,36,0.58) 100%)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <div
                        className="mx-auto w-10 h-px mb-4"
                        style={{ backgroundColor: ACCENT_SOFT }}
                      />
                      <p
                        className="italic text-lg md:text-2xl leading-snug"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: ACCENT_SOFT,
                        }}
                      >
                        {post.caption}
                      </p>
                      <div
                        className="mx-auto w-10 h-px mt-4"
                        style={{ backgroundColor: ACCENT_SOFT }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPortfolio;
