"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm";
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  size = "default",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-display font-semibold transition-all duration-200 cursor-pointer";
  const sizes = {
    default: "px-8 py-3 text-base",
    sm: "px-6 py-2 text-sm",
  };
  const variants = {
    primary:
      "bg-brand-magenta text-white hover:shadow-[0_0_24px_rgba(63,224,208,0.4)] hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border border-white text-white hover:bg-brand-magenta hover:border-brand-magenta active:scale-[0.98]",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
