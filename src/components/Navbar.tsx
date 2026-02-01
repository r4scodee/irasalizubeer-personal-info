import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Hobby", id: "hobby" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const path = id === "home" ? "/" : `/${id}`;
    window.history.pushState(null, "", path);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-2 md:p-6 transition-all duration-500 pointer-events-none">
      <div
        className={`mx-auto transition-all duration-500 rounded-xl md:rounded-2xl border pointer-events-auto ${
          isScrolled
            ? "bg-background/40 backdrop-blur-md border-border shadow-lg py-2 px-4 md:px-6 w-[95%] md:w-full max-w-5xl"
            : "bg-transparent border-transparent py-3 px-4 md:px-6 w-full max-w-5xl"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-base md:text-lg font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Iras Alizubeer
          </button>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            <AnimatePresence>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onClick={() => handleNavClick(link.id)}
                  className="relative px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-300 rounded-lg cursor-pointer z-10"
                >
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/15 rounded-lg -z-10"
                      transition={{ 
                        type: "spring", 
                        bounce: 0.25, 
                        duration: 0.35 
                      }}
                    />
                  )}
                  {link.name}
                </button>
              ))}
            </AnimatePresence>
            <div className="ml-4 pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-1.5 text-foreground relative z-[9999]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-2xl z-[105] md:hidden transition-all duration-500 pointer-events-auto ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 70}ms` : "0ms",
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
              className={`text-2xl font-bold transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              } hover:text-primary active:scale-95`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;