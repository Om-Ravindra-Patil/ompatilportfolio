import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Users, Calendar, ExternalLink, FileText } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title: "Transformer-based Models in Code Summarization",
    authors: ["Om R. Patil"],
    conference: "ICFTSEM-2025",
    year: "2025",
    status: "Published",
    abstract: "Presented first survey paper on Transformer-based Models in Code Summarization at ICFTSEM-2025. This comprehensive survey explores the application of transformer architectures in automated code understanding and summarization.",
    tags: ["Transformers", "Code Summarization", "Survey Paper"],
    link: "https://irjaeh.com/index.php/journal/article/view/593",
  },
  {
    title: "CODE SUMMARIZER: A TRANSFORMER – BASED APPROACH FOR AUTOMATED CODE UNDERSTANDING",
    authors: ["Om R. Patil"],
    journal: "IJRAR",
    year: "2025",
    status: "Published",
    abstract: "Published research paper in IJRAR, April 2025 Edition. This paper presents a novel transformer-based approach for automated code understanding, leveraging state-of-the-art NLP techniques to generate human-readable summaries of source code.",
    tags: ["Transformers", "NLP", "Code Understanding"],
    link: "https://ijrar.org/viewfull.php?&p_id=IJRAR25B1024",
  },
];

export const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF5722] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-[#FF9100] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Research & Publications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Academic Contributions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contributing to the advancement of Data Science and AI through research
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl hover-lift border-2 border-transparent hover:border-primary/50 transition-all relative overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full font-semibold">
                    {pub.status}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {pub.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{pub.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span className="text-accent font-semibold">
                          {pub.conference || pub.journal}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        View Paper
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
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
