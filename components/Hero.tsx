"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { regions } from "@/lib/data/regions";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

const headline = "Free-to-play, built from the inside out.";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const isMobile = useIsMobile();
  // Wait for mount so isMobile is resolved before animations start
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Delays: compressed on mobile, original desktop values otherwise
  const d = isMobile
    ? { eyebrow: 0, headline: 0.1, subtitle: 0.2, cta: 0.3, flags: 0.4 }
    : { eyebrow: 0.2, headline: 0.4, subtitle: 1.6, cta: 1.8, flags: 2.2 };

  // Render nothing until mounted so delays are correct from first paint
  if (!mounted) return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-violet-dk"
    />
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-violet-dk"
    >
      {/* Animated gradient blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--brand-magenta), transparent 70%)",
            animation: "drift 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-0">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: d.eyebrow }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-brand-cyan"
        >
          In-house F2P for Superbet
        </motion.p>

        {/* H1 — letter-by-letter on desktop, block fade on mobile */}
        {isMobile ? (
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: d.headline }}
            className="mb-6 max-w-4xl font-display font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {headline}
          </motion.h1>
        ) : (
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.03, delayChildren: d.headline }}
            className="mb-6 max-w-4xl font-display font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {headline.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={letterVariants}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {wi < headline.split(" ").length - 1 && (
                  <motion.span
                    variants={letterVariants}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-block"
                  >
                    &nbsp;
                  </motion.span>
                )}
              </span>
            ))}
          </motion.h1>
        )}

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: d.subtitle }}
          className="mb-10 max-w-[60ch] text-lg leading-relaxed text-grey-200"
        >
          Hunch is the sole F2P partner to Superbet &mdash; and that closeness
          is the product. Deeper integration, smarter data, games that feel
          native, not bolted on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: d.cta }}
          className="mb-12 flex flex-wrap gap-4"
        >
          <Button href="#games">See our games</Button>
          <Button href="#team" variant="secondary">
            Meet the team
          </Button>
        </motion.div>

        {/* Country flags row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: d.flags }}
          className="flex flex-wrap items-center gap-4"
        >
          <div className="flex gap-3 text-2xl">
            {regions.map((r) => (
              <span key={r.code} title={r.name}>
                {r.flag}
              </span>
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-cyan">
            Live in {regions.length} markets
          </span>
        </motion.div>
      </div>

    </section>
  );
}
