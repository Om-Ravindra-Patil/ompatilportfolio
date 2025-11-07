import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    title: "Certification in Data Science",
    issuer: "ACMEgrade",
    period: "Oct 2023 - Nov 2023",
    description: "Comprehensive training covering data analysis, machine learning, and statistical modeling",
    skills: [
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Predictive Modeling",
      "Data Storytelling",
    ],
    badge: "🏆",
  },
];

export const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#FF5722] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-[#FF9100] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Professional Development
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional certifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 md:p-10 rounded-2xl hover-lift border-2 border-transparent hover:border-primary/50 transition-all relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Badge */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl shadow-[0_0_30px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all flex-shrink-0"
                    >
                      {cert.badge}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-lg text-accent font-semibold mb-3">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        {cert.period}
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills Learned */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Skills Acquired:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                              className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-semibold"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
