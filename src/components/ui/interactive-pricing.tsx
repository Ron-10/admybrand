import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./glass-card";
import { NeomorphicButton } from "./neomorphic-button";
import { Check, Users, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const baseFeatures = {
  users: { name: "Team Members", prices: [0, 10, 25] },
  campaigns: { name: "Campaigns/Month", prices: [0, 20, 50] },
  aiWords: { name: "AI Words/Month", prices: [0, 15, 35] },
  integrations: { name: "Integrations", prices: [0, 5, 15] }
};

const plans = [
  {
    name: "Free",
    basePrice: 0,
    features: ["Up to 1,000 AI words", "Basic templates", "Email support"],
    limits: { users: 1, campaigns: 2, aiWords: 1000, integrations: 2 }
  },
  {
    name: "Pro",
    basePrice: 49,
    features: ["Unlimited AI words", "Advanced automation", "Priority support"],
    limits: { users: 5, campaigns: 10, aiWords: 50000, integrations: 20 },
    recommended: true
  },
  {
    name: "Enterprise",
    basePrice: 199,
    features: ["Everything in Pro", "Custom training", "Dedicated support"],
    limits: { users: 25, campaigns: 50, aiWords: 200000, integrations: 50 }
  }
];

export function InteractivePricing() {
  const [selectedFeatures, setSelectedFeatures] = useState({
    users: 0,
    campaigns: 0,
    aiWords: 0,
    integrations: 0
  });

  const calculatePrice = (planIndex: number) => {
    const plan = plans[planIndex];
    let price = plan.basePrice;
    
    Object.entries(selectedFeatures).forEach(([feature, level]) => {
      if (level > 0) {
        price += baseFeatures[feature as keyof typeof baseFeatures].prices[level];
      }
    });
    
    return price;
  };

  return (
    <div className="space-y-8">
      {/* Feature Customizer */}
      <GlassCard className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Customize Your Plan
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(baseFeatures).map(([key, feature]) => (
            <div key={key} className="space-y-3">
              <div className="flex items-center gap-2">
                {key === 'users' && <Users className="w-5 h-5 text-primary" />}
                {key === 'campaigns' && <Zap className="w-5 h-5 text-primary" />}
                {key === 'aiWords' && <Target className="w-5 h-5 text-primary" />}
                {key === 'integrations' && <Check className="w-5 h-5 text-primary" />}
                <span className="font-medium text-foreground">{feature.name}</span>
              </div>
              
              <div className="flex gap-2">
                {['Basic', 'Advanced', 'Premium'].map((level, index) => (
                  <motion.button
                    key={level}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFeatures(prev => ({ ...prev, [key]: index }))}
                    className={cn(
                      "flex-1 p-3 rounded-lg border transition-all duration-300",
                      selectedFeatures[key as keyof typeof selectedFeatures] === index
                        ? "glass-border bg-primary/20 text-primary border-primary"
                        : "glass-border hover:bg-glass/50"
                    )}
                  >
                    <div className="text-sm font-medium">{level}</div>
                    <div className="text-xs text-muted-foreground">
                      +${feature.prices[index]}/mo
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Dynamic Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const price = calculatePrice(index);
          
          return (
            <motion.div
              key={plan.name}
              layout
              className={cn(
                "relative",
                plan.recommended && "scale-105"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={price}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard 
                    className={cn(
                      "p-8 h-full",
                      plan.recommended && "ring-2 ring-primary glow-primary"
                    )}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                          Recommended
                        </span>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                        <div className="space-y-1">
                          <motion.span 
                            key={price}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-4xl font-bold text-gradient-primary"
                          >
                            ${price}
                          </motion.span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <NeomorphicButton 
                        variant={plan.recommended ? "default" : "ghost"} 
                        size="lg" 
                        className="w-full"
                      >
                        {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </NeomorphicButton>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}