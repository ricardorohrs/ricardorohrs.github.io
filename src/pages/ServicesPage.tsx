import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { CheckCircle2, ChevronRight, Code2, Gauge, Layers, Search, Sparkles, Workflow } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import FreelanceProjectsSection from "@/components/FreelanceProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useI18n } from "@/i18n/context";
import { buildServicesPageSeoConfig } from "@/seo/servicesPageSeo";
import { useSeo } from "@/seo/useSeo";

const ServicesPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const { locale, t } = useI18n();

  useSeo(buildServicesPageSeoConfig(locale));

  const navItems = [
    { label: t("landing.websites.nav.services"), href: "#servicos" },
    { label: t("landing.websites.nav.process"), href: "#processo" },
    { label: t("landing.websites.nav.tech"), href: "#stack" },
    { label: t("landing.websites.nav.projects"), href: "#projetos" },
    { label: t("landing.websites.nav.faq"), href: "#faq" },
    { label: t("landing.websites.nav.contact"), href: "#contato" },
  ];

  const features = [
    {
      icon: Search,
      title: t("landing.websites.features.seo.title"),
      body: t("landing.websites.features.seo.body"),
    },
    {
      icon: Gauge,
      title: t("landing.websites.features.performance.title"),
      body: t("landing.websites.features.performance.body"),
    },
    {
      icon: Layers,
      title: t("landing.websites.features.ux.title"),
      body: t("landing.websites.features.ux.body"),
    },
    {
      icon: Code2,
      title: t("landing.websites.features.code.title"),
      body: t("landing.websites.features.code.body"),
    },
  ];

  const steps = [
    {
      title: t("landing.websites.process.discovery.title"),
      body: t("landing.websites.process.discovery.body"),
    },
    {
      title: t("landing.websites.process.design.title"),
      body: t("landing.websites.process.design.body"),
    },
    {
      title: t("landing.websites.process.build.title"),
      body: t("landing.websites.process.build.body"),
    },
    {
      title: t("landing.websites.process.launch.title"),
      body: t("landing.websites.process.launch.body"),
    },
  ];

  const faqs = [
    {
      q: t("landing.websites.faq.q1.q"),
      a: t("landing.websites.faq.q1.a"),
    },
    {
      q: t("landing.websites.faq.q2.q"),
      a: t("landing.websites.faq.q2.a"),
    },
    {
      q: t("landing.websites.faq.q3.q"),
      a: t("landing.websites.faq.q3.a"),
    },
    {
      q: t("landing.websites.faq.q4.q"),
      a: t("landing.websites.faq.q4.a"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar items={navItems} />

      <main id="top" className="outline-none" tabIndex={-1}>
        {/* HERO */}
        <section
          aria-labelledby="landing-title"
          className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24"
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(800px 400px at 20% 10%, hsl(var(--primary) / 0.25), transparent), radial-gradient(700px 350px at 85% 85%, hsl(var(--accent) / 0.22), transparent)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <TypeAnimation
                  sequence={[
                    "Desenvolvimento de sites", 2500,
                    "Desenvolvimento de sistemas", 2500,
                    "Desenvolvimento de APIs", 2500,
                    "Desenvolvimento de aplicativos", 2500,
                  ]}
                  wrapper="span"
                  speed={shouldReduceMotion ? 75 : 25}
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>

              <h1 id="landing-title" className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight mt-4">
                {t("landing.websites.title.part1")} <span className="text-gradient">{t("landing.websites.title.part2")}</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
                {t("landing.websites.subtitle")}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  href="#contato"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-mono text-sm"
                >
                  {t("landing.websites.cta.primary")}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </motion.a>

                <motion.a
                  href="#freelas"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  {t("landing.websites.cta.secondary")}
                </motion.a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                {[
                  t("landing.websites.badges.fast"),
                  t("landing.websites.badges.seo"),
                  t("landing.websites.badges.accessible"),
                  t("landing.websites.badges.responsive"),
                ].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/40">
                    <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="font-mono text-xs">{badge}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES / VALUE */}
        <section id="servicos" aria-labelledby="servicos-title" className="py-24 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-mono text-sm text-primary tracking-widest uppercase">{t("landing.websites.services.kicker")}</span>
              <h2 id="servicos-title" className="text-3xl md:text-4xl font-bold font-mono mt-3">
                {t("landing.websites.services.title")}
              </h2>
              <p className="text-muted-foreground text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
                {t("landing.websites.services.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : i * 0.06 }}
                  className="group rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-background/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-mono font-semibold text-lg">{title}</h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="processo" aria-labelledby="processo-title" className="py-24 px-6 border-t border-border bg-card/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-mono text-sm text-primary tracking-widest uppercase">{t("landing.websites.process.kicker")}</span>
              <h2 id="processo-title" className="text-3xl md:text-4xl font-bold font-mono mt-3">
                {t("landing.websites.process.title")}
              </h2>
              <p className="text-muted-foreground text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
                {t("landing.websites.process.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : idx * 0.06 }}
                  className="rounded-xl border border-border bg-background/40 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-mono font-semibold text-lg">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background/40 font-mono text-xs text-muted-foreground">
                <Workflow className="w-4 h-4 text-primary" aria-hidden="true" />
                {t("landing.websites.process.badge1")}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background/40 font-mono text-xs text-muted-foreground">
                <Gauge className="w-4 h-4 text-primary" aria-hidden="true" />
                {t("landing.websites.process.badge2")}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background/40 font-mono text-xs text-muted-foreground">
                <Search className="w-4 h-4 text-primary" aria-hidden="true" />
                {t("landing.websites.process.badge3")}
              </span>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" aria-labelledby="stack-title" className="py-24 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-mono text-sm text-primary tracking-widest uppercase">{t("landing.websites.stack.kicker")}</span>
              <h2 id="stack-title" className="text-3xl md:text-4xl font-bold font-mono mt-3">
                {t("landing.websites.stack.title")}
              </h2>
              <p className="text-muted-foreground text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
                {t("landing.websites.stack.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  title: t("landing.websites.stack.box1.title"),
                  body: t("landing.websites.stack.box1.body"),
                },
                {
                  icon: Code2,
                  title: t("landing.websites.stack.box2.title"),
                  body: t("landing.websites.stack.box2.body"),
                },
                {
                  icon: Search,
                  title: t("landing.websites.stack.box3.title"),
                  body: t("landing.websites.stack.box3.body"),
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-border bg-card/50 p-6">
                  <div className="w-11 h-11 rounded-lg border border-border bg-background/50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-mono font-semibold text-lg mt-4">{title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="projetos">
          <FreelanceProjectsSection hideCTA={true} />
        </div>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="py-24 px-6 border-t border-border bg-card/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-mono text-sm text-primary tracking-widest uppercase">{t("landing.websites.faq.kicker")}</span>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold font-mono mt-3">
                {t("landing.websites.faq.title")}
              </h2>
              <p className="text-muted-foreground text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
                {t("landing.websites.faq.subtitle")}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl border border-border bg-background/40 p-6 open:border-primary/50 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="font-mono font-semibold text-base">{q}</span>
                    <span className="mt-0.5 text-muted-foreground group-open:text-primary transition-colors" aria-hidden="true">
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-mono text-sm"
              >
                {t("landing.websites.faq.cta")}
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;

