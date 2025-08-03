import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { GlassCard } from "@/components/ui/glass-card";
import { NeomorphicButton } from "@/components/ui/neomorphic-button";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock,
  Users,
  Zap
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@admybrand.ai",
    action: "mailto:hello@admybrand.ai"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with support",
    contact: "Available 24/7",
    action: "#"
  }
];

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "10,000+",
    label: "Happy Customers"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "< 2hrs",
    label: "Response Time"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: "99.9%",
    label: "Uptime"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your marketing with AI? Let's discuss how ADmyBRAND AI Suite 
              can help you achieve your goals.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center group">
                <div className="inline-flex p-3 rounded-xl bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gradient-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </GlassCard>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Questions</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                      placeholder="Tell us about your marketing goals and how we can help..."
                    />
                  </div>

                  <NeomorphicButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </NeomorphicButton>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Other ways to reach us
                </h2>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <GlassCard key={index} className="p-6 group hover:scale-[1.02] transition-smooth">
                      <a href={method.action} className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-gradient-primary transition-smooth">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-1">{method.description}</p>
                          <p className="text-foreground font-medium">{method.contact}</p>
                        </div>
                      </a>
                    </GlassCard>
                  ))}
                </div>
              </div>

              <GlassCard className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Need immediate assistance?
                </h3>
                <p className="text-muted-foreground mb-4">
                  For urgent technical issues or sales inquiries, our team is available 24/7.
                </p>
                <NeomorphicButton variant="secondary" size="sm">
                  Start Live Chat
                </NeomorphicButton>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}