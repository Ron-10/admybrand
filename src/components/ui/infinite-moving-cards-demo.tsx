import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-cosmic items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ADmyBRAND AI transformed our marketing completely. We've seen a 300% increase in conversion rates and our team can now focus on strategy instead of repetitive tasks. The AI-powered automation is game-changing.",
    name: "Sarah Chen",
    title: "Marketing Director, TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The personalized content generation feature alone has saved us 20 hours per week. Our email campaigns now have open rates we never thought possible. This platform is exactly what modern marketing teams need.",
    name: "Marcus Rivera",
    title: "Head of Growth, StartupXYZ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote: "We've tried every marketing automation tool out there, but ADmyBRAND AI is the first one that actually understands our audience. The AI insights are incredibly accurate and actionable.",
    name: "Emily Watson",
    title: "VP Marketing, ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The ROI we've achieved with ADmyBRAND AI is phenomenal. Our customer acquisition cost dropped by 40% while our conversion rates doubled. It's like having a marketing team of 10 working 24/7.",
    name: "David Park",
    title: "CEO, Digital Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "What impressed me most was how quickly we could implement complex marketing campaigns. The AI suggestions are spot-on, and the automation workflows are incredibly intuitive. Our marketing has never been more effective.",
    name: "Lisa Thompson",
    title: "CMO, Innovation Labs",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The predictive analytics feature helped us identify our best customers before they even knew they were ready to buy. We've increased our customer lifetime value by 150% since implementing ADmyBRAND AI.",
    name: "Alex Rodriguez",
    title: "Growth Manager, E-commerce Pro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "As a small team, we needed a solution that could compete with enterprise-level marketing. ADmyBRAND AI gives us that power without the complexity. It's like having an expert marketing team in our pocket.",
    name: "Jennifer Kim",
    title: "Founder, Creative Agency",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The A/B testing automation is revolutionary. We're now running hundreds of tests simultaneously, and the AI optimizes them in real-time. Our conversion rates have improved by 200% in just 3 months.",
    name: "Michael Chang",
    title: "Performance Marketing Lead, SaaS Co.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
  },
]; 