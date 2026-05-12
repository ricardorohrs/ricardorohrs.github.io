import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown, LucideGitlab } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import heroBg from "@/assets/bg-hero.png";
import { useI18n } from "@/i18n/context";

const socials = [
  { icon: Github, href: "https://github.com/ricardorohrs", label: "GitHub" },
  { icon: LucideGitlab, href: "https://gitlab.com/ricardoerohrs", label: "GitLab" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ricardorohrs/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rerohrs@inf.ufsm.br", label: "Email" },
];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-6"
        >
		  <TypeAnimation
			sequence={[
		      'Desenvolvedor Full Stack', 2500,
			  'Desenvolvedor Backend', 2500,
			  'Desenvolvedor Frontend', 2500,
			]}
			wrapper="span"
			speed={shouldReduceMotion ? 75 : 25}
			repeat={Infinity}
			className="font-mono text-sm tracking-widest text-primary uppercase"
		  />
        </motion.div>

        <motion.h1
          id="hero-titulo"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6"
        >
          Ricardo{" "}
          <span className="text-gradient">Röhrs</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          {t("hero.summary")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>{t("hero.location")}</span>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-secondary-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="font-mono text-sm">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#sobre"
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
