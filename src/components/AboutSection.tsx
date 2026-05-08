import { motion, useReducedMotion } from "framer-motion";
import { Code2, Globe, Layers } from "lucide-react";
import { useI18n } from "@/i18n/context";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    desc: "Desenvolvimento completo do backend ao frontend com tecnologias modernas.",
  },
  {
    icon: Globe,
    title: "Web Moderno",
    desc: "Aplicações responsivas, performáticas e com ótima experiência de usuário.",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    desc: "Código limpo, escalável e seguindo as melhores práticas do mercado.",
  },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 px-6">
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

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16"
        >
          {t("about.body")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : i * 0.15,
              }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(165_80%_48%/0.5)] transition-all" />
              <h3 className="font-mono font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
