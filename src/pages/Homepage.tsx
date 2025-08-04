import { useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/ui/navbar";
import { NeomorphicButton } from "@/components/ui/neomorphic-button";
import { GlassCard } from "@/components/ui/glass-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { BlogPreviewCard } from "@/components/ui/blog-preview-card";
import { InteractivePricing } from "@/components/ui/interactive-pricing";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Lightbulb,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary-foreground" />,
    title: "AI Copywriting",
    description: "Generate compelling ad copy, emails, and content that converts with our advanced AI writing engine."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-foreground" />,
    title: "Campaign Automation",
    description: "Set up complete marketing funnels that run on autopilot, optimizing performance in real-time."
  },
  {
    icon: <Target className="w-8 h-8 text-primary-foreground" />,
    title: "Personalized Outreach",
    description: "Craft personalized messages at scale using AI-driven insights about your prospects."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary-foreground" />,
    title: "Performance Analytics",
    description: "Deep insights into campaign performance with predictive analytics and optimization suggestions."
  },
  {
    icon: <Users className="w-8 h-8 text-primary-foreground" />,
    title: "Audience Segmentation",
    description: "Automatically segment your audience based on behavior, demographics, and engagement patterns."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary-foreground" />,
    title: "Real-time Suggestions",
    description: "Get AI-powered recommendations to improve your campaigns as they run."
  }
];

const testimonials = [
  {
    photo: "https://images.unsplash.com/photo-1494790108755-2616b9b0c143?w=100&h=100&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Marketing Director at TechFlow",
    quote: "ADmyBRAND AI transformed our marketing overnight. The AI copywriting alone saved us 20 hours per week.",
    result: "Increased conversions by 47%"
  },
  {
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Marcus Rivera",
    role: "Founder at GrowthHack",
    quote: "The automation features are incredible. Our campaigns now run themselves while we focus on strategy.",
    result: "3x ROI improvement"
  },
  {
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Emily Watson",
    role: "CMO at ScaleUp Inc",
    quote: "Finally, an AI tool that actually understands marketing. The personalization features are game-changing.",
    result: "85% increase in engagement"
  }
];

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    period: "month",
    features: [
      "Up to 1,000 AI-generated words",
      "Basic campaign templates",
      "Email support",
      "2 automation workflows"
    ],
    ctaText: "Get Started Free"
  },
  {
    title: "Pro",
    price: "$49",
    period: "month",
    features: [
      "Unlimited AI copywriting",
      "Advanced automation workflows",
      "A/B testing tools",
      "Priority support",
      "Custom integrations",
      "Advanced analytics"
    ],
    ctaText: "Start Pro Trial",
    isRecommended: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "month",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI model training",
      "White-label options",
      "SLA guarantee",
      "Advanced security"
    ],
    ctaText: "Contact Sales"
  }
];

const faqs = [
  {
    question: "How does the AI copywriting work?",
    answer: "Our AI analyzes your brand voice, target audience, and campaign goals to generate compelling copy that matches your style and converts better than traditional methods."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! We support integrations with over 50 popular marketing platforms including HubSpot, Mailchimp, Google Ads, Facebook Ads, and more."
  },
  {
    question: "Is there a learning curve?",
    answer: "ADmyBRAND AI is designed to be intuitive. Most users are up and running in under 30 minutes, and we provide comprehensive onboarding and support."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our users typically see 30-50% improvements in conversion rates, 60% reduction in content creation time, and 3x ROI on their marketing spend within the first month."
  }
];

const blogPosts = [
  {
    title: "10 AI Copywriting Prompts That Convert",
    excerpt: "Master the art of AI copywriting with these proven prompts that have generated millions in revenue for our clients.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    slug: "ai-copywriting-prompts"
  },
  {
    title: "Marketing Automation Workflows That Work",
    excerpt: "Step-by-step guide to building automation workflows that nurture leads and convert them into customers.",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    slug: "automation-workflows"
  },
  {
    title: "Personalizing at Scale with AI",
    excerpt: "Learn how to create personalized marketing campaigns for thousands of customers using AI-driven insights.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    slug: "personalization-at-scale"
  }
];

export default function Homepage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center space-y-8 mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-primary leading-tight">
              AI-Powered Marketing
              <br />
              <span className="text-foreground">That Actually Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform your marketing with intelligent automation, AI copywriting, and predictive analytics. 
              ADmyBRAND AI Suite helps you create campaigns that convert while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NeomorphicButton variant="default" size="xl">
                Start Free Trial
              </NeomorphicButton>
              <NeomorphicButton variant="ghost" size="xl" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:text-primary transition-smooth" />
                Watch Demo
              </NeomorphicButton>
            </div>
          </motion.div>
          
          <ParallaxSection speed={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-8 animate-float">
                  <img 
                    src={heroImage} 
                    alt="ADmyBRAND AI Dashboard" 
                    className="w-full rounded-xl shadow-2xl"
                  />
                </GlassCard>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to 
              <span className="text-gradient-primary"> Dominate Marketing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered suite provides all the tools you need to create, automate, and optimize 
              your marketing campaigns for maximum impact.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient-primary">Marketing Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how top marketing teams are using ADmyBRAND AI to drive unprecedented results.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <TestimonialCard {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Interactive <span className="text-gradient-primary">Pricing Calculator</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize your plan based on your needs. See real-time pricing updates as you adjust features.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <InteractivePricing />
          </ScrollReveal>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest <span className="text-gradient-primary">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with the latest AI marketing strategies, tips, and insights from our experts.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <BlogPreviewCard {...post} />
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <NeomorphicButton 
                variant="ghost" 
                size="lg"
                onClick={() => window.location.href = '/blog'}
              >
                View All Articles
              </NeomorphicButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <GlassCard className="overflow-hidden">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-glass/50 transition-smooth"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-foreground">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="px-6 pb-6 overflow-hidden"
                      >
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-glass-border glass-subtle">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
                <span className="text-xl font-bold text-gradient-primary">ADmyBRAND AI</span>
              </div>
              <p className="text-muted-foreground">
                AI-powered marketing automation that drives real results for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#features" className="block text-muted-foreground hover:text-foreground transition-smooth">Features</a>
                <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-smooth">Pricing</a>
                <a href="/blog" className="block text-muted-foreground hover:text-foreground transition-smooth">Blog</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2">
                <a href="/contact" className="block text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">About</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Careers</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:hello@admybrand.ai" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-glass-border text-center">
            <p className="text-muted-foreground">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}