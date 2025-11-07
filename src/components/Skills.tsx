import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Wrench, Zap } from "lucide-react";

const skillsData = {
  languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 88 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 82 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 88 },
    { name: "scikit-learn", level: 87 },
    { name: "Jupyter", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "MS-Excel", level: 78 },
  ],
};

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-sm text-accent font-bold">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
        >
          <motion.div
            animate={{
              x: [-20, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set in modern data science technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl hover-lift"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                Programming Languages
              </h3>
            </div>

            {skillsData.languages.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl hover-lift"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-[0_0_20px_hsl(var(--accent)/0.5)]">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                Tools & Technologies
              </h3>
            </div>

            {skillsData.tools.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
