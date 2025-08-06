import { motion } from "framer-motion";
import { useState } from "react";
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
import { GlassCard } from "@/components/ui/glass-card";
import { NeomorphicButton } from "@/components/ui/neomorphic-button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Marketing: 10 Trends to Watch in 2024",
    excerpt: "Discover how artificial intelligence is reshaping marketing strategies and what trends will dominate the landscape this year.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "AI Trends"
  },
  {
    id: 2,
    title: "How to Write Converting Copy with AI: A Complete Guide",
    excerpt: "Learn proven strategies for using AI to create compelling copy that drives conversions and engages your audience.",
    author: "Marcus Rivera",
    date: "December 12, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Copywriting"
  },
  {
    id: 3,
    title: "Marketing Automation ROI: How to Measure Success",
    excerpt: "Understand the key metrics and KPIs that matter when measuring the return on investment of your marketing automation efforts.",
    author: "Emily Watson",
    date: "December 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Analytics"
  },
  {
    id: 4,
    title: "Personalization at Scale: Advanced Segmentation Strategies",
    excerpt: "Master the art of audience segmentation and deliver personalized experiences that convert at scale using AI-driven insights.",
    author: "David Park",
    date: "December 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Personalization"
  }
];

function BlogCard({ post, index }: { post: typeof blogPosts[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard className="group overflow-hidden">
        <div className="relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-primary transition-smooth">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          
          <NeomorphicButton variant="ghost" className="group/btn">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
          </NeomorphicButton>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Blog() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={[
            { name: "Features", link: "/#features" },
            { name: "Pricing", link: "/#pricing" },
            { name: "Resources", link: "/blog" },
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
              { name: "Features", link: "/#features" },
              { name: "Pricing", link: "/#pricing" },
              { name: "Resources", link: "/blog" },
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
              Marketing <span className="text-gradient-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead of the curve with the latest strategies, trends, and best practices 
              in AI-powered marketing automation.
            </p>
          </motion.div>
          
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="group overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured • {blogPosts[0].category}
                    </span>
                    <h2 className="text-3xl font-bold text-foreground group-hover:text-gradient-primary transition-smooth">
                      {blogPosts[0].title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  
                  <NeomorphicButton variant="default" className="group/btn">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                  </NeomorphicButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
          
          {/* Recent Posts */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground"
            >
              Recent Articles
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <GlassCard className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated with <span className="text-gradient-primary">AI Marketing</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest insights, strategies, and case studies delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl glass border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <NeomorphicButton variant="default">
                  Subscribe
                </NeomorphicButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}