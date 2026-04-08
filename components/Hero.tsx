"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { regions } from "@/lib/data/regions";

const headline = "Free-to-play, built from the inside out.";

// Fast delays — content visible within 0.5s regardless of device
const d = { eyebrow: 0.05, headline: 0.15, subtitle: 0.25, cta: 0.35, flags: 0.45 };

export default function Hero() {
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
          transition={{ duration: 0.4, delay: d.eyebrow }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-brand-cyan"
        >
          In-house F2P for Superbet
        </motion.p>

        {/* H1 — single block fade, works instantly on all devices */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: d.headline }}
          className="mb-6 max-w-4xl font-display font-bold leading-[1.05] tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          {headline}
        </motion.h1>

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
          initial={{ opacity: 0, scale: 0.95 }}
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
