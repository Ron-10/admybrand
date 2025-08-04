import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./glass-card";
import { NeomorphicButton } from "./neomorphic-button";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { Check, Users, Zap, Target, Sparkles, Crown, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const baseFeatures = {
  users: { name: "Team Members", prices: [0, 15, 35], levels: ["1 user", "Up to 10 users", "Unlimited users"] },
  campaigns: { name: "AI Campaigns", prices: [0, 25, 60], levels: ["5 campaigns", "50 campaigns", "Unlimited campaigns"] },
  aiWords: { name: "AI Content Generation", prices: [0, 20, 45], levels: ["10K words", "100K words", "Unlimited words"] },
  integrations: { name: "Platform Integrations", prices: [0, 10, 25], levels: ["3 platforms", "15 platforms", "All platforms"] },
  analytics: { name: "Advanced Analytics", prices: [0, 12, 30], levels: ["Basic reports", "Advanced insights", "Custom dashboards"] },
  support: { name: "Priority Support", prices: [0, 8, 20], levels: ["Email support", "Priority chat", "Dedicated manager"] }
};

const plans = [
  {
    name: "Starter",
    basePrice: 0,
    icon: Sparkles,
    features: ["AI content generation", "Basic templates", "Email support", "5 campaigns/month"],
    limits: { users: 1, campaigns: 5, aiWords: 10000, integrations: 3, analytics: 0, support: 0 },
    gradient: "from-slate-500 to-slate-700"
  },
  {
    name: "Professional",
    basePrice: 79,
    icon: Crown,
    features: ["Everything in Starter", "Advanced AI models", "A/B testing", "Priority support", "Custom branding"],
    limits: { users: 10, campaigns: 50, aiWords: 100000, integrations: 15, analytics: 1, support: 1 },
    recommended: true,
    gradient: "from-purple-500 to-pink-500",
    savings: "Save 30%"
  },
  {
    name: "Enterprise",
    basePrice: 249,
    icon: Rocket,
    features: ["Everything in Pro", "Custom AI training", "Dedicated account manager", "White-label solution", "API access"],
    limits: { users: 50, campaigns: 200, aiWords: 500000, integrations: 50, analytics: 2, support: 2 },
    gradient: "from-emerald-500 to-blue-500"
  }
];

export function InteractivePricing() {
  const [selectedFeatures, setSelectedFeatures] = useState({
    users: 0,
    campaigns: 0,
    aiWords: 0,
    integrations: 0,
    analytics: 0,
    support: 0
  });
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const calculatePrice = (planIndex: number) => {
    const plan = plans[planIndex];
    let price = plan.basePrice;
    
    Object.entries(selectedFeatures).forEach(([feature, level]) => {
      if (level > plan.limits[feature as keyof typeof plan.limits]) {
        const extraLevels = level - plan.limits[feature as keyof typeof plan.limits];
        price += baseFeatures[feature as keyof typeof baseFeatures].prices[extraLevels] || 0;
      }
    });
    
    // Apply yearly discount
    if (billingCycle === 'yearly') {
      price = Math.round(price * 0.8); // 20% discount for yearly
    }
    
    return price;
  };

  const getTotalSavings = (planIndex: number) => {
    const monthlyPrice = calculatePrice(planIndex);
    const yearlyPrice = Math.round(monthlyPrice * 0.8 * 12);
    const monthlyCost = monthlyPrice * 12;
    return monthlyCost - yearlyPrice;
  };

  return (
    <div className="space-y-8">
      {/* Billing Toggle */}
      <div className="flex justify-center">
        <GlassCard className="p-2 inline-flex">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setBillingCycle('monthly')}
            className={cn(
              "px-6 py-2 rounded-lg transition-all duration-300",
              billingCycle === 'monthly'
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setBillingCycle('yearly')}
            className={cn(
              "px-6 py-2 rounded-lg transition-all duration-300 relative",
              billingCycle === 'yearly'
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </motion.button>
        </GlassCard>
      </div>

      {/* Feature Customizer */}
      <GlassCard className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gradient-primary mb-2">
            Customize Your Experience
          </h3>
          <p className="text-muted-foreground">
            Fine-tune your plan with advanced features that scale with your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(baseFeatures).map(([key, feature]) => (
            <motion.div 
              key={key} 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Object.keys(baseFeatures).indexOf(key) * 0.1 }}
            >
              <div className="flex items-center gap-3">
                {key === 'users' && <Users className="w-6 h-6 text-primary" />}
                {key === 'campaigns' && <Zap className="w-6 h-6 text-primary" />}
                {key === 'aiWords' && <Target className="w-6 h-6 text-primary" />}
                {key === 'integrations' && <Check className="w-6 h-6 text-primary" />}
                {key === 'analytics' && <Sparkles className="w-6 h-6 text-primary" />}
                {key === 'support' && <Crown className="w-6 h-6 text-primary" />}
                <span className="font-semibold text-foreground">{feature.name}</span>
              </div>
              
              <div className="space-y-2">
                {feature.levels.map((level, index) => (
                  <motion.button
                    key={level}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedFeatures(prev => ({ ...prev, [key]: index }))}
                    className={cn(
                      "w-full p-4 rounded-xl border transition-all duration-300 text-left",
                      selectedFeatures[key as keyof typeof selectedFeatures] === index
                        ? "glass-border bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border-primary shadow-lg shadow-primary/20"
                        : "glass-border hover:bg-glass/50 hover:border-primary/30"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{level}</div>
                        <div className="text-sm text-muted-foreground">
                          {feature.prices[index] === 0 ? 'Included' : `+$${feature.prices[index]}/${billingCycle === 'yearly' ? 'year' : 'month'}`}
                        </div>
                      </div>
                      {selectedFeatures[key as keyof typeof selectedFeatures] === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Dynamic 3D Pricing Cards */}
      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const price = calculatePrice(index);
          const Icon = plan.icon;
          const yearlyPrice = billingCycle === 'yearly' ? price : Math.round(price * 0.8);
          const savings = billingCycle === 'yearly' ? getTotalSavings(index) : 0;
          
          return (
            <CardContainer key={plan.name} containerClassName="py-0">
              <motion.div
                layout
                className={cn(
                  "relative w-full",
                  plan.recommended && "z-10"
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CardBody className={cn(
                  "w-full h-auto bg-glass/40 backdrop-blur-xl border border-white/10 rounded-2xl",
                  plan.recommended && "ring-2 ring-primary shadow-2xl shadow-primary/25"
                )}>
                  {plan.recommended && (
                    <CardItem translateZ="20" className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.span 
                        animate={{ 
                          boxShadow: ["0 0 20px rgba(168, 85, 247, 0.4)", "0 0 40px rgba(168, 85, 247, 0.6)", "0 0 20px rgba(168, 85, 247, 0.4)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={cn("bg-gradient-to-r", plan.gradient, "text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg")}
                      >
                        {plan.savings || "Most Popular"}
                      </motion.span>
                    </CardItem>
                  )}
                  
                  <div className="p-8 space-y-6">
                    <CardItem translateZ="50" className="text-center space-y-4">
                      <div className={cn("w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br", plan.gradient, "flex items-center justify-center shadow-lg")}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    </CardItem>

                    <CardItem translateZ="70" className="text-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${price}-${billingCycle}`}
                          initial={{ y: 20, opacity: 0, scale: 0.8 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: -20, opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, type: "spring" }}
                          className="space-y-2"
                        >
                          <div className="space-y-1">
                            <span className={cn("text-5xl font-bold bg-gradient-to-r", plan.gradient, "bg-clip-text text-transparent")}>
                              ${billingCycle === 'yearly' ? yearlyPrice : price}
                            </span>
                            <span className="text-muted-foreground text-lg">
                              /{billingCycle === 'yearly' ? 'year' : 'month'}
                            </span>
                          </div>
                          {billingCycle === 'yearly' && savings > 0 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-emerald-400 font-medium text-sm"
                            >
                              Save ${savings}/year
                            </motion.div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center space-x-3"
                        >
                          <div className={cn("w-5 h-5 rounded-full bg-gradient-to-r", plan.gradient, "flex items-center justify-center flex-shrink-0")}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </CardItem>
                    
                    <CardItem translateZ="80">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <NeomorphicButton 
                          variant={plan.recommended ? "default" : "ghost"} 
                          size="lg" 
                          className={cn(
                            "w-full transition-all duration-300",
                            plan.recommended && `bg-gradient-to-r ${plan.gradient} hover:shadow-2xl hover:shadow-primary/50`
                          )}
                        >
                          {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-2"
                          >
                            →
                          </motion.div>
                        </NeomorphicButton>
                      </motion.div>
                    </CardItem>
                  </div>
                </CardBody>
              </motion.div>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
}