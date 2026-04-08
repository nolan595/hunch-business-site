"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className,
}: SectionHeadingProps) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
      className={cn("mb-12 max-w-3xl", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-medium uppercase tracking-[0.15em]",
            dark ? "text-brand-cyan" : "text-brand-violet"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-bold leading-[1.1] tracking-tight",
          dark ? "text-white" : "text-brand-violet"
        )}
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            dark ? "text-grey-200" : "text-grey-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
