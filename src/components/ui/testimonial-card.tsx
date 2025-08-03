import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  photo: string;
  name: string;
  role: string;
  quote: string;
  result: string;
  className?: string;
}

export function TestimonialCard({ 
  photo, 
  name, 
  role, 
  quote, 
  result, 
  className 
}: TestimonialCardProps) {
  return (
    <GlassCard className={cn("p-8 group", className)}>
      <div className="flex flex-col space-y-6">
        <div className="flex items-start space-x-4">
          <img 
            src={photo} 
            alt={name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        
        <blockquote className="text-foreground leading-relaxed italic">
          "{quote}"
        </blockquote>
        
        <div className="pt-4 border-t border-glass-border">
          <span className="text-sm font-medium text-gradient-primary">
            {result}
          </span>
        </div>
      </div>
    </GlassCard>
  );
}