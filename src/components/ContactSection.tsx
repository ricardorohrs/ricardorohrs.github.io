import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, LucideGitlab } from "lucide-react";
import { useI18n } from "@/i18n/context";

const links = [
  { icon: Github, href: "https://github.com/ricardorohrs", label: "GitHub" },
  { icon: LucideGitlab, href: "https://gitlab.com/ricardoerohrs", label: "GitLab" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ricardorohrs/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ricardoerohrs", label: "Instagram" },
  { icon: Mail, href: "mailto:rerohrs@inf.ufsm.br", label: "rerohrs@inf.ufsm.br" },
];

const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {t("contact.kicker")}
          </span>
          <h2 id="contato-titulo" className="text-3xl md:text-4xl font-bold font-mono mt-3 mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("contact.body")}
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="font-mono text-sm">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
