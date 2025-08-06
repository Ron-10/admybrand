import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";
import { NeomorphicButton } from "./neomorphic-button";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Github, 
  Youtube,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Globe,
  Shield,
  Brain,
  Target,
  BarChart3,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
    { name: "API", href: "#" },
    { name: "Changelog", href: "#" }
  ],
  solutions: [
    { name: "Marketing Teams", href: "#" },
    { name: "Agencies", href: "#" },
    { name: "Startups", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "E-commerce", href: "#" }
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "/blog" },
    { name: "Tutorials", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Community", href: "#" }
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Live Chat", href: "#" },
    { name: "Status", href: "#" },
    { name: "Contact Support", href: "/contact" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@admybrand.ai" }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Globe, value: "150+", label: "Countries" },
  { icon: Zap, value: "99.9%", label: "Uptime" },
  { icon: Star, value: "4.9/5", label: "Rating" }
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-3xl"
        />
      </div>

             {/* Main Footer Content */}
       <div>
        {/* Newsletter Section */}
        <div className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Stay Updated</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Get the Latest <span className="text-gradient-primary">AI Marketing</span> Insights
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Join 50,000+ marketers getting weekly updates on AI trends, automation tips, and growth strategies.
                  </p>
                </motion.div>
                
                                 <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="space-y-4"
                 >
                   <form onSubmit={handleSubscribe} className="flex gap-3">
                     <input
                       type="email"
                       placeholder="Enter your email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="flex-1 px-4 py-3 bg-glass border border-glass-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                       required
                     />
                     <NeomorphicButton 
                       type="submit"
                       variant="default" 
                       size="lg"
                       disabled={isSubscribed}
                     >
                       {isSubscribed ? "Thank you for registering!" : "Subscribe"}
                       {!isSubscribed && <ArrowRight className="w-4 h-4 ml-2" />}
                     </NeomorphicButton>
                   </form>
                   <p className="text-sm text-muted-foreground">
                     No spam, unsubscribe at any time. We respect your privacy.
                   </p>
                 </motion.div>
              </div>
            </GlassCard>
          </div>
        </div>

                 {/* Stats Section */}
         <div className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gradient-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold text-gradient-primary">ADmyBRAND AI</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  AI-powered marketing automation that drives real results for modern businesses. 
                  Transform your marketing with intelligent insights and automation.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-glass border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Product</h4>
                <div className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Solutions Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
                <div className="space-y-3">
                  {footerLinks.solutions.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <div className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <div className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

                 {/* Bottom Bar */}
         <div className="py-8 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>© 2024 ADmyBRAND AI Suite. All rights reserved.</span>
                <div className="hidden md:flex items-center gap-6">
                  <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span>by ADmyBRAND AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 