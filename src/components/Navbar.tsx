import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-large.webp";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";

const navItems = ["Home", "About", "Experience", "Work", "Skills", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (typeof id !== "string" || !navItems.includes(id)) {
      throw new Error("Unknown section; expected Home, About, Experience, Work, Skills, or Contact.");
    }
    const el = document.getElementById(id.toLowerCase());
    if (!el) throw new Error("Section is unavailable.");
    setActive(id);
    setMenuOpen(false);
    el.scrollIntoView({ behavior: "smooth" });
  };

  useWebMCP({
    name: "list_portfolio_sections",
    description: "List the portfolio sections available in the navigation.",
    annotations: { readOnlyHint: true },
    execute: () => runWebMCPTool("list_portfolio_sections", () => navItems.join(", ")),
  });

  useWebMCP({
    name: "navigate_portfolio",
    description: "Scroll to a portfolio section using the page navigation.",
    annotations: { readOnlyHint: false },
    inputSchema: {
      type: "object",
      properties: { section: { type: "string", enum: navItems, description: "The portfolio section to visit." } },
      required: ["section"],
      additionalProperties: false,
    },
    execute: ({ section }: { section: string }) => runWebMCPTool("navigate_portfolio", () => {
      scrollTo(section);
      return `Navigated to ${section}.`;
    }),
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-5 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/40 glow-pink object-cover" />
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium transition-colors duration-300 ${
                active === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[57px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50 md:hidden"
          >
            <div className="flex flex-col items-center gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`w-full text-center py-3 text-sm font-medium transition-colors duration-300 ${
                    active === item ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
