import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/i18n/context";

const projects = [
  {
    name: "AppEstat",
    descKey: "projects.appestat.desc",
    tech: ["JavaScript"],
    github: "https://github.com/ricardorohrs/AppEstat",
  },
  {
    name: "Happy",
    descKey: "projects.happy.desc",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/ricardorohrs/Happy",
  },
  {
    name: "ToDoList",
    descKey: "projects.todolist.desc",
    tech: ["PHP", "Laravel", "Vue.js"],
    github: "https://github.com/ricardorohrs/ToDoList",
  },
  {
    name: "RGB-Pattern",
    descKey: "projects.rgbpattern.desc",
    tech: ["TypeScript"],
    github: "https://github.com/ricardorohrs/RGB-Pattern",
  },
  {
    name: "Flappy Game",
    descKey: "projects.flappy.desc",
    tech: ["GDScript", "Godot"],
    github: "https://github.com/ricardorohrs/Flappy-Game",
  },
  {
    name: "Cine55",
    descKey: "projects.cine55.desc",
    tech: ["Web"],
    github: "https://github.com/ricardorohrs/cine55",
  },
] as const;

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {t("projects.kicker")}
          </span>
          <h2 id="projetos-titulo" className="text-3xl md:text-4xl font-bold font-mono mt-3">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-3xl leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("projects.openProject", { name: project.name })}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : i * 0.1,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {t(project.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
