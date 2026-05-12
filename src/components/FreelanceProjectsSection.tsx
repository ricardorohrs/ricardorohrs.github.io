import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n/context";
import rmAutomotiveImg from "@/assets/projects/rmautomotive.png";
import sudoesteImg from "@/assets/projects/sudoeste.png";

const freelanceProjects = [
  {
    name: "RM Automotive",
    descKey: "freelance.rmautomotive.desc",
    category: "Site",
    url: "https://rmautomotive.com.br/",
    tech: ["Web Design", "Frontend", "HTML", "CSS", "JavaScript"],
    image: rmAutomotiveImg,
  },
  {
    name: "Sudoeste Engenharia",
    descKey: "freelance.sudoeste.desc",
    category: "Site",
    url: "https://sudoeste.eng.br/",
    tech: ["Web Design", "WordPress", "Elementor", "Frontend"],
    image: sudoesteImg,
  },
] as const;

const FreelanceProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section
      id="freelas"
      aria-labelledby="freelas-titulo"
      className="py-24 px-6 border-t border-border bg-card/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase flex items-center gap-2">
            {t("freelance.kicker")}
          </span>
          <h2 id="freelas-titulo" className="text-3xl md:text-4xl font-bold font-mono mt-3">
            {t("freelance.title")}
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-3xl leading-relaxed">
            {t("freelance.subtitle")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {freelanceProjects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("freelance.openProject", { name: project.name })}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : i * 0.1,
              }}
              // whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
              // whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="group relative p-0 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden bg-secondary">
                <motion.img
                  src={project.image}
                  alt={`Screenshot do site ${project.name}`}
                  className="w-full h-full object-cover object-top"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
                />
                {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />*/}
              </div>

              {/* Animating background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                  opacity: 0.05,
                }}
              />
              <div className="relative z-10 p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-mono font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {t(project.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <motion.span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary/80 group-hover:bg-primary/20 transition-colors"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.6 }}
                      whileHover={shouldReduceMotion ? undefined : { opacity: 1, scale: 1.05 }}
                      transition={shouldReduceMotion ? undefined : { delay: ti * 0.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FreelanceProjectsSection;
