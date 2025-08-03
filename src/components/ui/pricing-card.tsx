import { GlassCard } from "./glass-card";
import { NeomorphicButton } from "./neomorphic-button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isRecommended?: boolean;
  ctaText: string;
  className?: string;
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isRecommended = false, 
  ctaText,
  className 
}: PricingCardProps) {
  return (
    <GlassCard 
      className={cn(
        "p-8 relative group",
        isRecommended && "ring-2 ring-primary scale-105 glow-primary",
        className
      )}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Recommended
          </span>
        </div>
      )}
      
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <div className="space-y-1">
            <span className="text-4xl font-bold text-gradient-primary">{price}</span>
            <span className="text-muted-foreground">/{period}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <NeomorphicButton 
          variant={isRecommended ? "default" : "ghost"} 
          size="lg" 
          className="w-full"
        >
          {ctaText}
        </NeomorphicButton>
      </div>
    </GlassCard>
  );
}