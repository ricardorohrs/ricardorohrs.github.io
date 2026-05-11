import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/context";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "PHP", "REST APIs", "PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    title: "Frontend",
    skills: ["Vue.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "React.js", "TypeScript", "React Native"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Linux", "Supabase", "Firebase", "AWS", "WordPress", "IA"],
  },
];

const SkillsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section id="skills" aria-labelledby="skills-titulo" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {t("skills.kicker")}
          </span>
          <h2 id="skills-titulo" className="text-3xl md:text-4xl font-bold font-mono mt-3">
            {t("skills.title")}
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-3xl leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.15,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group"
            >
              <h3 className="font-mono font-semibold text-primary mb-5 text-sm tracking-wider uppercase">
                {`{${cat.title}}`}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.3,
                      delay: shouldReduceMotion ? 0 : ci * 0.15 + si * 0.05,
                    }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.1, y: -2 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                    className="px-3 py-1.5 rounded-md text-sm font-mono bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
