import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experienceData = [
  {
    role: "Data Science Intern",
    company: "Prodigy Infotech",
    period: "Nov 2023 - Dec 2023",
    location: "Remote",
    highlights: [
      "Conducted data visualization and exploratory data analysis (EDA) on datasets like the Titanic dataset",
      "Built machine learning models, including a decision tree classifier for customer behavior prediction",
      "Analyzed sentiment analysis of social media data and traffic accident patterns with interactive dashboards",
    ],
    color: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    role: "Data Analytics and Visualization Simulation",
    company: "Forage by Accenture",
    period: "June 2024 - July 2024",
    location: "Virtual",
    highlights: [
      "Learned to break down projects and understand client needs for aligned analysis",
      "Cleaned and prepared messy data, built models to uncover insights",
      "Created clear visualizations and presented findings to stakeholders effectively",
    ],
    color: "from-orange-500 via-amber-500 to-yellow-400",
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Professional Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical experience in data science and analytics
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl hover-lift border-2 border-transparent hover:border-primary/50 transition-all relative overflow-hidden">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-accent text-lg font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 inline-block px-3 py-1 bg-accent/20 rounded-full text-xs text-accent font-semibold">
                    {exp.period}
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
