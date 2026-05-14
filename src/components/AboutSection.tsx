import { motion, useReducedMotion } from "framer-motion";
import { Code2, Globe, Layers } from "lucide-react";
import { useI18n } from "@/i18n/context";

const highlights = [
  {
    icon: Code2,
    titleKey: "about.card.fullstack.title",
    descKey: "about.card.fullstack.desc",
  },
  {
    icon: Globe,
    titleKey: "about.card.web.title",
    descKey: "about.card.web.desc",
  },
  {
    icon: Layers,
    titleKey: "about.card.arch.title",
    descKey: "about.card.arch.desc",
  },
] as const;

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  const body = t("about.body");
  const highlight = t("about.body.highlight");
  const parts = body.split("{highlight}");

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 px-6 border-t border-border bg-card/20" itemScope itemType="https://schema.org/AboutPage">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {t("about.kicker")}
          </span>
          <h2 id="sobre-titulo" className="text-3xl md:text-4xl font-bold font-mono mt-3">
            {t("about.title")}
          </h2>
        </motion.div>

        <motion.h3
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="text-muted-foreground text-lg leading-relaxed max-w-5xl mb-16"
          itemProp="description"
        >
          {parts[0]}
          <span className="font-semibold text-foreground">{highlight}</span>
          {parts[1]}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.titleKey}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : i * 0.15,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                  opacity: 0.05,
                }}
              />
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(165_80%_48%/0.5)] transition-all" />
              <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-primary">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
