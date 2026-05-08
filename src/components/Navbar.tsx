import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { useTheme } from "@/theme/context";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navItems = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projetos" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  return (
    <nav
      aria-label={t("nav.main")}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#conteudo" className="font-mono font-bold text-lg" aria-label={t("nav.goTop")}>
          <span className="text-primary">&lt;</span>RR
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
            aria-label={resolvedTheme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setLocale(locale === "pt-BR" ? "en" : "pt-BR")}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
            aria-label={locale === "pt-BR" ? "Switch language to English" : "Mudar idioma para português"}
          >
            <Languages className="w-5 h-5 text-muted-foreground" />
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                  {resolvedTheme === "dark" ? "Light" : "Dark"}
                </button>

                <button
                  type="button"
                  onClick={() => setLocale(locale === "pt-BR" ? "en" : "pt-BR")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  <Languages className="w-4 h-4" />
                  {locale === "pt-BR" ? "EN" : "PT"}
                </button>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
