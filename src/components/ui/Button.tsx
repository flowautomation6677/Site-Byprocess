import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  animatePulse?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", animatePulse, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 font-heading",
          // Variants
          variant === "default" && "bg-primary text-white shadow hover:bg-primary/90 hover:shadow-lg",
          variant === "outline" && "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          variant === "link" && "text-primary underline-offset-4 hover:underline",
          // Sizes
          size === "default" && "h-12 px-6 py-3",
          size === "sm" && "h-9 rounded-md px-3 text-xs",
          size === "lg" && "h-14 rounded-md px-8 text-base",
          size === "icon" && "h-10 w-10",
          // Animations
          animatePulse && "animate-pulse-button",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
