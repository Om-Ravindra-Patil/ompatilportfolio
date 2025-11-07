import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "MSc Data Science",
    institution: "Newcastle University",
    period: "Expected 2027",
    grade: "In Progress",
    level: 3,
  },
  {
    degree: "B.E Artificial Intelligence and Data Science",
    institution: "Rajiv Gandhi Institute of Technology",
    period: "2025",
    grade: "7.14 / 10 CGPA",
    level: 2,
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Pravin Patil College of Diploma Engineering and Technology",
    period: "2022",
    grade: "86%",
    level: 1,
  },
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF1744] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FF9100] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#FFC107] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Academic Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through rigorous academic training
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-primary to-accent hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12 relative group">
                <div className="glass-effect p-6 rounded-2xl hover-lift border-2 border-transparent hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <GraduationCap className="w-10 h-10 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-accent mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      {edu.grade}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-4 inline-block px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-semibold">
                    {edu.degree === "MSc Data Science" ? "In Progress" : "Completed"}
                  </div>
                </div>
              </div>

              {/* Center Node */}
              <div className="hidden md:flex w-2/12 justify-center my-4 md:my-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="w-6 h-6 rounded-full bg-accent shadow-[0_0_20px_hsl(var(--accent)/0.8)] border-4 border-background"
                />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
