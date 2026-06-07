import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import v1 from "@/assets/gemini_generated_video_4dc3a9c4.mp4.asset.json";
import v2 from "@/assets/gemini_generated_video_6fca0afa.mp4.asset.json";
import v3 from "@/assets/gemini_generated_video_07374afb.mp4.asset.json";
import v4 from "@/assets/gemini_generated_video_c97403c1.mp4.asset.json";
import v5 from "@/assets/gemini_generated_video_785e0908.mp4.asset.json";

// Easy to replace — swap src + caption for each post
const posts = [
  { src: v1.url, caption: "Victorian Elegance", height: "h-[420px]" },
  { src: v2.url, caption: "Every drop tells a story...", height: "h-[280px]" },
  { src: v3.url, caption: "Spanish Whisper", height: "h-[320px]" },
  { src: v4.url, caption: "Oud & Amber", height: "h-[380px]" },
  { src: v5.url, caption: "Khaleeji Soul", height: "h-[260px]" },
];


const GOLD = "#D4AF37";

const InstagramPortfolio = () => {
  return (
    <section
      id="instagram-portfolio"
      className="relative py-24 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Sticky panel (40%) */}
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
                style={{ color: GOLD, fontFamily: "'Inter', sans-serif" }}
              >
                Instagram Portfolio
              </span>
              <h2
                className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: GOLD,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                Not loud.
                <br />
                <em className="italic font-normal" style={{ color: "#E8D69A" }}>
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
                <span style={{ color: GOLD }}>Spanish elegance</span>
                <span className="mx-2 opacity-50">|</span>
                <span style={{ color: GOLD }}>Khaleeji soul</span>
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
                  border: `1px solid ${GOLD}`,
                  color: GOLD,
                  fontFamily: "'Inter', sans-serif",
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0) 100%)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0) 100%)")
                }
              >
                <Instagram size={14} strokeWidth={1.5} />
                <span>Visit @lasoriee.ps</span>
              </a>
            </div>
          </motion.div>

          {/* Right — Masonry grid (60%) */}
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
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <img
                    src={post.src}
                    alt={post.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  {/* Glassmorphism overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.55) 100%)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <div
                        className="mx-auto w-10 h-px mb-4"
                        style={{ backgroundColor: GOLD }}
                      />
                      <p
                        className="italic text-lg md:text-2xl leading-snug"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: GOLD,
                        }}
                      >
                        {post.caption}
                      </p>
                      <div
                        className="mx-auto w-10 h-px mt-4"
                        style={{ backgroundColor: GOLD }}
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
