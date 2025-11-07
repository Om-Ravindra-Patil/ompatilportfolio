import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Brain, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "Code Summarizer",
    description: "Full-stack Code Summarization Tool using AutoCoder_6.7B model",
    icon: Code2,
    tags: ["React.js", "Transformers", "MongoDB", "NLP"],
    features: [
      "Built web-based application for code summarization",
      "Implemented AutoCoder_6.7B model with Hugging Face",
      "Designed intuitive React.js interface",
      "Secure MongoDB storage for prompts and summaries",
    ],
    gradient: "from-pink-500 via-red-500 to-orange-500",
  },
  {
    title: "Heart Disease Prediction System",
    description: "ML-powered web application for health risk assessment",
    icon: Brain,
    tags: ["Python", "Machine Learning", "Flask/Django", "Random Forest"],
    features: [
      "Predicts heart disease likelihood from user symptoms",
      "Data preprocessing and feature scaling implementation",
      "Logistic Regression and Random Forest models",
      "Interactive interface with real-time predictions",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF1744] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5722] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#FFC107] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Technical Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions leveraging AI, ML, and data science
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl hover-lift border-2 border-transparent hover:border-primary/50 transition-all h-full relative overflow-hidden">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <Database className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
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
