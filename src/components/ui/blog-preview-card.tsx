import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPreviewCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  className?: string;
}

export function BlogPreviewCard({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  slug, 
  className 
}: BlogPreviewCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn("group", className)}
    >
      <GlassCard className="overflow-hidden h-full">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-primary transition-smooth">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {excerpt}
          </p>
          
          <motion.div 
            className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
}