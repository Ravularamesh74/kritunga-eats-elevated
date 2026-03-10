import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/kritunga-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ambience", href: "#ambience" },
  { label: "Menu", href: "/menu", isRoute: true },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNavSolid = scrolled || !isHome;

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;

      setProgress(scrollProgress);
      setScrolled(scrollTop > 40);

      const sections = ["home", "about", "ambience", "locations", "contact"];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;

        if (scrollTop >= top && scrollTop < bottom) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[70]"
        style={{ scaleX: progress, transformOrigin: "0%" }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavSolid
            ? "bg-background/90 backdrop-blur-xl shadow-2xl border-b border-border/50"
            : "bg-transparent"
          }`}
      >

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 inline-block"
            >
              <img
                src={logo}
                alt="Kritunga"
                className="h-14 w-14 object-contain"
              />

              <div
                className={`transition-colors ${isNavSolid ? "text-primary" : "text-white"
                  }`}
              >
                <span className="font-display text-xl font-bold">
                  KRITUNGA
                </span>

                <p className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                  Rayalaseema Cuisine
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 relative">

              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative text-lg font-medium hover:text-primary transition ${location.pathname === link.href ? "text-primary" : (isNavSolid ? "text-foreground" : "text-white")}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  isHome ? (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative text-lg font-medium transition ${active === link.href.replace("#", "")
                          ? "text-primary"
                          : (isNavSolid ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")
                        }`}
                    >
                      {link.label}

                      {/* animated underline */}
                      <motion.span
                        layoutId="nav-underline-desktop"
                        className="absolute left-0 -bottom-1 h-[2px] bg-primary"
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            active === link.href.replace("#", "")
                              ? "100%"
                              : "0%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={`/${link.href}`}
                      className={`relative text-lg font-medium transition ${isNavSolid ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                        }`}
                    >
                      {link.label}
                    </Link>
                  )
                )
              )}

              {/* Reservation Button */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(255,80,0,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919640059577"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold"
              >
                <Phone size={16} />
                Reserve
              </motion.a>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-t"
            >

              <div className="flex flex-col items-center py-10 gap-7 text-lg">

                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`hover:text-primary ${location.pathname === link.href ? "text-primary font-bold" : "text-foreground"}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    isHome ? (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`hover:text-primary ${active === link.href.replace("#", "") ? "text-primary font-bold" : "text-foreground"}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        to={`/${link.href}`}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-primary text-foreground"
                      >
                        {link.label}
                      </Link>
                    )
                  )
                )}

                <a
                  href="tel:+919640059577"
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md"
                >
                  <Phone size={16} />
                  Reserve Table
                </a>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  );
}