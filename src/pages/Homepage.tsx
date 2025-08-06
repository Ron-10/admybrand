import { useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { NeomorphicButton } from "@/components/ui/neomorphic-button";
import { GlassCard } from "@/components/ui/glass-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { BlogPreviewCard } from "@/components/ui/blog-preview-card";
import { InteractivePricing } from "@/components/ui/interactive-pricing";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxSection } from "@/components/ui/parallax-section";

import ContainerScrollAnimationDemo from "@/components/ui/container-scroll-animation-demo";
import InfiniteMovingCardsDemo from "@/components/ui/infinite-moving-cards-demo";
import TextGenerateEffectDemo from "@/components/ui/text-generate-effect-demo";
import { UnicornStudio } from "@/components/ui/unicorn-studio";
import { Footer } from "@/components/ui/footer";

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
  ArrowRight,
  Play
} from "lucide-react";

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
    answer: "Our advanced AI analyzes your brand voice, target audience, campaign goals, and historical performance data to generate compelling copy that matches your unique style. The AI learns from your brand guidelines, tone preferences, and successful campaigns to create content that converts better than traditional methods. It considers factors like audience psychology, conversion triggers, and industry best practices to deliver copy that drives results."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Absolutely! We support seamless integrations with over 50 popular marketing platforms including HubSpot, Mailchimp, Google Ads, Facebook Ads, LinkedIn Ads, Twitter Ads, Klaviyo, ActiveCampaign, ConvertKit, and many more. Our API allows for custom integrations with any platform, and we provide dedicated support for enterprise-level integrations. All data syncs in real-time, ensuring your campaigns stay coordinated across all channels."
  },
  {
    question: "Is there a learning curve?",
    answer: "ADmyBRAND AI is designed to be incredibly intuitive. Most users are up and running in under 30 minutes, and we provide comprehensive onboarding, video tutorials, and live training sessions. Our AI handles the complexity while you focus on strategy. We also offer personalized onboarding for enterprise customers, including dedicated training sessions and custom workflow setup to ensure you get maximum value from day one."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our users typically see 30-50% improvements in conversion rates, 60% reduction in content creation time, and 3x ROI on their marketing spend within the first month. Many customers report 40-70% increases in email open rates, 25-45% higher click-through rates, and significant improvements in customer acquisition costs. The AI continuously optimizes based on performance data, so results typically improve over time."
  },
  {
    question: "How does the AI ensure content quality and brand consistency?",
    answer: "Our AI is trained on millions of high-performing marketing campaigns and incorporates your specific brand guidelines, tone of voice, and style preferences. It uses advanced natural language processing to maintain consistency across all content while adapting to different channels and audiences. The system includes built-in quality checks, plagiarism detection, and brand compliance monitoring to ensure every piece of content meets your standards."
  },
  {
    question: "What about data security and privacy?",
    answer: "We take data security extremely seriously. All data is encrypted in transit and at rest using enterprise-grade encryption. We're SOC 2 Type II compliant, GDPR compliant, and follow industry best practices for data protection. Your brand data and customer information are never shared with third parties, and you maintain full ownership of all content generated. We also offer on-premise deployment options for enterprise customers with strict security requirements."
  },
  {
    question: "Can the AI handle multiple languages and international markets?",
    answer: "Yes! Our AI supports over 25 languages and can create culturally appropriate content for international markets. It understands local nuances, cultural references, and market-specific best practices. The system can automatically translate and localize content while maintaining your brand voice, and it adapts to regional marketing regulations and consumer preferences. Perfect for global brands looking to scale their marketing efforts internationally."
  },
  {
    question: "How does the automation workflow feature work?",
    answer: "Our automation workflows allow you to create sophisticated marketing sequences that trigger based on user behavior, time delays, or specific events. You can set up multi-channel campaigns that automatically send emails, social media posts, and personalized content based on customer actions. The AI optimizes these workflows in real-time, adjusting timing, content, and targeting to maximize engagement and conversions. You can start with simple sequences and gradually build complex, multi-touch campaigns."
  },
  {
    question: "What kind of analytics and reporting do you provide?",
    answer: "We provide comprehensive analytics including real-time performance tracking, A/B testing results, conversion attribution, and predictive analytics. Our dashboard shows detailed insights into campaign performance, audience behavior, content effectiveness, and ROI metrics. You get automated reports, custom dashboards, and AI-powered recommendations for optimization. Enterprise customers also receive advanced analytics including customer lifetime value analysis, predictive modeling, and custom reporting."
  },
  {
    question: "Do you offer customer support and training?",
    answer: "Yes! We provide multiple levels of support including 24/7 live chat, email support with 2-hour response times, and priority phone support for Pro and Enterprise customers. We offer comprehensive training resources including video tutorials, webinars, documentation, and personalized onboarding sessions. Enterprise customers get dedicated account managers, custom training programs, and strategic consulting to ensure they achieve their marketing goals."
  },
  {
    question: "Can I customize the AI for my specific industry or niche?",
    answer: "Absolutely! Our AI can be trained on your industry-specific data, terminology, and best practices. We offer custom model training for enterprise customers, allowing the AI to understand your unique market, competitors, and customer behavior patterns. This results in more relevant, industry-specific content that resonates with your target audience and drives better results than generic AI solutions."
  },
  {
    question: "What's included in the free trial and how long does it last?",
    answer: "Our free trial includes full access to all Pro features for 14 days, including unlimited AI copywriting, automation workflows, integrations, and analytics. No credit card required to start. You can create real campaigns, test integrations, and see actual results. At the end of the trial, you can choose to upgrade to a paid plan or continue with our free tier which includes 1,000 AI words per month and basic features."
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={[
            { name: "Features", link: "#features" },
            { name: "Pricing", link: "#pricing" },
            { name: "Resources", link: "#blog" },
            { name: "Contact", link: "/contact" },
          ]} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {[
              { name: "Features", link: "#features" },
              { name: "Pricing", link: "#pricing" },
              { name: "Resources", link: "#blog" },
              { name: "Contact", link: "/contact" },
            ].map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 w-full text-left"
              >
                <span className="block font-medium">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
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
          
          {/* UnicornStudio Interactive Component */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center mb-12"
          >
            <UnicornStudio 
              projectId="Biyz4PKMeIV7bwlIS9Pg"
              width="100%"
              height="900px"
              className="max-w-7xl"
            />
          </motion.div>
           {/* Text Generate Effect Demo */}
      <TextGenerateEffectDemo />

          {/* Hero CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NeomorphicButton 
              variant="default" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </NeomorphicButton>
            <NeomorphicButton 
              variant="ghost" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const demoSection = document.getElementById('demo-video');
                demoSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2" />
            </NeomorphicButton>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              See AI Marketing in <span className="text-gradient-primary">Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how our AI-powered platform transforms marketing campaigns and drives real results
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="AI Marketing Demo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Overlay gradient for better visual appeal */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

     

      {/* Container Scroll Animation Demo */}
      <ContainerScrollAnimationDemo />

      {/* Features Section */}
      <section id="features" className="py-12 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-8">
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
      <section id="testimonials" className="py-12 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient-primary">Marketing Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how top marketing teams are using ADmyBRAND AI to drive unprecedented results.
            </p>
          </ScrollReveal>
          
          <InfiniteMovingCardsDemo />
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="pricing" className="py-12 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient-primary">Perfect Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core AI features with different levels of support and integrations.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <InteractivePricing />
          </ScrollReveal>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section id="blog" className="py-12 px-6">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-8">
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
      <section id="faq" className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-8">
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
      <Footer />
    </div>
  );
}