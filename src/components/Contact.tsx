import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const subject = `Portfolio Contact from ${data.name}`;
    const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(data.message)}`;
    
    window.location.href = `mailto:ompatil.uk@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your default email application will open with the message.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ompatil.uk@gmail.com",
      href: "mailto:ompatil.uk@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7719555315",
      href: "tel:+447719555315",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Newcastle Upon Tyne",
      href: "https://www.google.com/maps/place/Newcastle+upon+Tyne",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF1744] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC107] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#FF5722] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-accent text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to collaboration, research opportunities, and professional connections
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground">
                  Follow Me
                </h4>
                <div className="flex gap-4">
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
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send Message
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background/50 border-border focus:border-accent transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">
                          Your Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-background/50 border-border focus:border-accent transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="bg-background/50 border-border focus:border-accent transition-colors resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 pt-10 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2025 Om Ravindra Patil. All rights reserved.
         </p>
          {/* <p className="text-sm text-muted-foreground mt-2">
            by Suraj Nate
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};
