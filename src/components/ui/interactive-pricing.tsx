import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./glass-card";
import { NeomorphicButton } from "./neomorphic-button";
import { Check, ChevronDown, Sparkles, Zap, Users, Target, BarChart3, Shield, Globe, Brain, MessageSquare, Star, Crown, Rocket, Shield as ShieldIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for testing",
    icon: Shield,
    features: ["2 active campaigns", "Basic analytics", "1 integration", "Email support"],
    excluded: ["AI optimization", "A/B testing", "Custom integrations", "Priority support"],
    cta: "Get Started Free",
    variant: "ghost" as const,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Pro",
    price: 49,
    description: "For growing businesses",
    icon: Rocket,
    features: ["Unlimited campaigns", "Advanced analytics", "5+ integrations", "Priority support", "AI optimization", "A/B testing", "Budget recommendations"],
    excluded: ["Custom integrations"],
    cta: "Start Pro Trial",
    variant: "default" as const,
    popular: true,
    color: "from-primary/20 to-accent/20"
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations",
    icon: Crown,
    features: ["Everything in Pro", "Custom integrations", "Dedicated manager", "Team collaboration", "White-label", "API access", "Custom analytics", "24/7 support"],
    excluded: [],
    cta: "Contact Sales",
    variant: "ghost" as const,
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const features = [
  { id: "ai", name: "AI Copywriting", price: 25, icon: Brain, category: "Content", description: "Generate compelling content" },
  { id: "automation", name: "Campaign Automation", price: 35, icon: Zap, category: "Automation", description: "Set up complete workflows" },
  { id: "analytics", name: "Advanced Analytics", price: 30, icon: BarChart3, category: "Analytics", description: "Deep insights & reporting" },
  { id: "team", name: "Team Collaboration", price: 20, icon: Users, category: "Team", description: "Advanced team management" },
  { id: "personalization", name: "Personalization", price: 40, icon: Target, category: "AI", description: "AI-driven personalization" },
  { id: "support", name: "Priority Support", price: 50, icon: MessageSquare, category: "Support", description: "24/7 dedicated support" },
  { id: "integrations", name: "Custom Integrations", price: 75, icon: Globe, category: "Dev", description: "Build custom integrations" },
  { id: "white-label", name: "White Label", price: 100, icon: ShieldIcon, category: "Enterprise", description: "Rebrand as your own" },
  { id: "api", name: "API Access", price: 60, icon: Zap, category: "Dev", description: "Full API access" },
  { id: "manager", name: "Dedicated Manager", price: 150, icon: Star, category: "Enterprise", description: "Personal account manager" }
];

export function InteractivePricing() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showCustom, setShowCustom] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const calculatePrice = () => {
    const basePrice = 29;
    const featurePrice = selectedFeatures.reduce((total, id) => {
      const feature = features.find(f => f.id === id);
      return total + (feature?.price || 0);
    }, 0);
    return basePrice + featurePrice;
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-2 p-2 bg-glass rounded-2xl border border-glass-border shadow-lg">
            <button
              onClick={() => setShowCustom(false)}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative",
                !showCustom 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground hover:bg-glass/50"
              )}
            >
              {!showCustom && (
                <motion.div
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-primary rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Standard Plans</span>
            </button>
            <button
              onClick={() => setShowCustom(true)}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative",
                showCustom 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground hover:bg-glass/50"
              )}
            >
              {showCustom && (
                <motion.div
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-primary rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Custom Builder</span>
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {!showCustom ? (
          <motion.div
            key="plans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className={cn(
                      "p-8 h-full relative overflow-hidden transition-all duration-300",
                      plan.popular && "ring-2 ring-primary/50 shadow-2xl scale-105"
                    )}>
                      {/* Background Gradient */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        plan.color
                      )} />
                      
                      {/* Popular Badge */}
                      {plan.popular && (
                        <motion.div 
                          className="absolute -top-0 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-sm font-semibold text-primary-foreground shadow-lg">
                            <Sparkles className="w-2 h-2" />
                            Most Popular
                          </div>
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                          <div className="flex justify-center mb-4">
                            <div className={cn(
                              "p-4 rounded-2xl transition-colors",
                              plan.popular ? "bg-primary/20" : "bg-muted/20 group-hover:bg-primary/10"
                            )}>
                              <IconComponent className={cn(
                                "w-8 h-8",
                                plan.popular ? "text-primary" : "text-muted-foreground"
                              )} />
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                          <p className="text-muted-foreground mb-6">{plan.description}</p>
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-5xl font-bold text-gradient-primary">${plan.price}</span>
                            <span className="text-muted-foreground text-lg">/month</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                          {plan.features.map((feature, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + idx * 0.05 }}
                            >
                              <div className="p-1 rounded-full bg-primary/20">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-foreground">{feature}</span>
                            </motion.div>
                          ))}
                          {plan.excluded.map((feature, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center gap-3 opacity-50"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 0.5, x: 0 }}
                              transition={{ delay: 0.6 + idx * 0.05 }}
                            >
                              <div className="w-4 h-4 border border-muted-foreground/30 rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA */}
                        <NeomorphicButton 
                          variant={plan.variant} 
                          size="lg" 
                          className="w-full"
                          onClick={() => {
                            const footer = document.querySelector('footer');
                            footer?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {plan.cta}
                        </NeomorphicButton>
                      </div>
                    </GlassCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="custom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const isSelected = selectedFeatures.includes(feature.id);
                
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => toggleFeature(feature.id)}
                      className={cn(
                        "w-full p-6 rounded-2xl border transition-all duration-300 text-left group relative overflow-hidden",
                        isSelected
                          ? "border-primary bg-primary/10 shadow-xl ring-2 ring-primary/20"
                          : "border-glass-border hover:border-primary/30 hover:bg-glass/50 hover:shadow-lg"
                      )}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Background Effect */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
                        isSelected ? "from-primary/10 to-accent/10 opacity-100" : "group-hover:from-primary/5 group-hover:to-accent/5 group-hover:opacity-100"
                      )} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className={cn(
                            "p-3 rounded-xl transition-colors",
                            isSelected ? "bg-primary/20" : "bg-muted/20 group-hover:bg-primary/10"
                          )}>
                            <IconComponent className={cn(
                              "w-5 h-5",
                              isSelected ? "text-primary" : "text-muted-foreground"
                            )} />
                          </div>
                          <div className={cn(
                            "w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center",
                            isSelected ? "bg-primary border-primary" : "border-muted-foreground/30"
                          )}>
                            {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-foreground">{feature.name}</h4>
                            <span className="text-lg font-bold text-primary">+${feature.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs px-2 py-1 rounded-full bg-muted/30 text-muted-foreground">
                              {feature.category}
                            </span>
                            <span className={cn(
                              "text-sm font-medium",
                              isSelected ? "text-primary" : "text-muted-foreground"
                            )}>
                              {isSelected ? "Selected" : "Click to Add"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced Price Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Your Custom Plan</h3>
                    <p className="text-muted-foreground">
                      {selectedFeatures.length} features selected • Perfect for your business needs
                    </p>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-4xl font-bold text-gradient-primary mb-1">${calculatePrice()}</div>
                    <div className="text-muted-foreground">per month</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-glass-border">
                                     <NeomorphicButton 
                     variant="default" 
                     size="lg" 
                     className="w-full"
                     onClick={() => {
                       const footer = document.querySelector('footer');
                       footer?.scrollIntoView({ behavior: 'smooth' });
                     }}
                   >
                     Start Your Custom Plan
                     <ArrowRight className="w-5 h-5 ml-2" />
                   </NeomorphicButton>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

