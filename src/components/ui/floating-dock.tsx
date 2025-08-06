import React from "react";
import { cn } from "@/lib/utils";

interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: FloatingDockItem[];
  mobileClassName?: string;
  className?: string;
}

export function FloatingDock({ items, mobileClassName, className }: FloatingDockProps) {
  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
        mobileClassName,
        className
      )}
    >
      <div className="flex items-center gap-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-neutral-200/50 dark:border-neutral-700/50">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-110"
            title={item.title}
          >
            <div className="w-6 h-6 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
} 