import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-image.jpeg";

export const Hero = () => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-40">
          {[...Array(15)].map((_, i) => {
            const colors = ['bg-[#FF1744]', 'bg-[#FF5722]', 'bg-[#FF9100]', 'bg-[#FFC107]'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            return (
              <motion.div
                key={i}
                className={`absolute rounded-full ${randomColor} blur-3xl`}
                style={{
                  width: Math.random() * 400 + 100,
                  height: Math.random() * 400 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, Math.random() * 100 - 50, 0],
                  y: [0, Math.random() * 100 - 50, 0],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 animate-pulse-glow" />
              <img
                src={profileImage}
                alt="Om Ravindra Patil"
                className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Om Ravindra Patil
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Data Science Enthusiast | AI Engineer | Full-Stack Developer
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="https://www.google.com/maps/place/Newcastle+upon+Tyne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-accent/10 transition-colors"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">Newcastle Upon Tyne</span>
            </a>
            <a
              href="mailto:ompatil.uk@gmail.com"
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-accent/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm">ompatil.uk@gmail.com</span>
            </a>
            <a
              href="tel:+447719555315"
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-accent/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm">+44 7719555315</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mt-12"
          >
            <motion.a
              href="https://github.com/Om-Ravindra-Patil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/om-patil-nu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-accent rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
