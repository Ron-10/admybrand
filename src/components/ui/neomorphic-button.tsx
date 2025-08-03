import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "btn-neomorphic inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:glow-primary",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:glow-accent",
        accent: "bg-gradient-to-r from-accent to-primary text-accent-foreground hover:glow-accent",
        ghost: "glass text-foreground hover:bg-glass hover:text-foreground",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NeomorphicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const NeomorphicButton = forwardRef<HTMLButtonElement, NeomorphicButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

NeomorphicButton.displayName = "NeomorphicButton";

export { NeomorphicButton, buttonVariants };