import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { useTheme } from "@/theme/context";

const localeFlag: Record<"pt-BR" | "en", string> = {
  "pt-BR": "🇧🇷",
  en: "🇺🇸",
};

type NavItem = { label: string; href: string };

type LandingNavbarProps = {
  items: NavItem[];
};

const LandingNavbar = ({ items }: LandingNavbarProps) => {
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

  return (
    <nav
      aria-label={t("nav.main")}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "glass py-3" : "py-5"}
        ${mobileOpen && scrolled ? "py-0" : ""}
      `}
    >
      <div className="max-w-5xl mx-auto px-6 pb-2 flex items-center justify-between">
        <a href="/" className="font-mono font-bold text-lg" aria-label={t("nav.goTop")}>
          <motion.span whileHover={{ scale: 1.35, textShadow: "0 0 20px rgb(26, 188, 156)" }} whileTap={{ scale: 0.95 }}>
            <span className="text-primary">&lt;</span>RR
            <span className="text-primary">/&gt;</span>
          </motion.span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"
                layoutId={item.href}
              />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
            aria-label={resolvedTheme === "dark" ? t("ui.theme.switchToLight") : t("ui.theme.switchToDark")}
            title={resolvedTheme === "dark" ? t("ui.theme.darkMode") : t("ui.theme.lightMode")}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLocale(locale === "pt-BR" ? "en" : "pt-BR")}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
            aria-label={locale === "pt-BR" ? t("ui.language.switchToEn") : t("ui.language.switchToPt")}
            title={locale === "pt-BR" ? t("ui.language.pt") : t("ui.language.en")}
          >
            <span className="text-lg leading-none" aria-hidden="true">
              {localeFlag[locale]}
            </span>
            <span className="sr-only">
              <Languages className="w-5 h-5" />
            </span>
          </motion.button>
        </div>

        <motion.button
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  type="button"
                  onClick={toggleTheme}
                  title={resolvedTheme === "dark" ? t("ui.theme.darkMode") : t("ui.theme.lightMode")}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors font-mono text-xs text-muted-foreground hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span className="hidden">{resolvedTheme === "dark" ? t("ui.theme.lightMode") : t("ui.theme.darkMode")}</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setLocale(locale === "pt-BR" ? "en" : "pt-BR")}
                  title={locale === "pt-BR" ? t("ui.language.en") : t("ui.language.pt")}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors font-mono text-xs text-muted-foreground hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span aria-hidden="true">{localeFlag[locale]}</span>
                  <span className="hidden">{locale === "pt-BR" ? "PT-BR" : "EN"}</span>
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                {items.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors pl-2 border-l-2 border-transparent hover:border-primary"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default LandingNavbar;

