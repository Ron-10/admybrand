import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <GlassCard className={cn("p-8 group", className)}>
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 rounded-xl bg-gradient-primary group-hover:animate-glow-pulse">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-primary transition-smooth">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}