"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Expand } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { comingSoonGames, type ComingSoonGame } from "@/lib/data/moreGames";
import { cn } from "@/lib/utils";

// ─── Phone fan ───────────────────────────────────────────────────────────────

function PhoneFan({ srcs, gradient, phoneWidth = 90 }: { srcs: string[]; gradient: string; phoneWidth?: number }) {
  const rotations = [-8, 0, 8];
  const scales = [0.82, 1, 0.82];
  const opacities = [0.65, 1, 0.65];
  const W = phoneWidth;
  const H = Math.round(W * (19.5 / 9));

  if (srcs.length === 0) {
    return (
      <div
        className={cn("rounded-[1.25rem] bg-gradient-to-b", gradient)}
        style={{ width: W, height: H }}
      />
    );
  }

  return (
    <div className="flex items-center justify-center">
      {srcs.slice(0, 3).map((src, i) => (
        <div
          key={src}
          style={{
            transform: `rotate(${rotations[i]}deg) scale(${scales[i]})`,
            opacity: opacities[i],
            zIndex: i === 1 ? 10 : 0,
            position: "relative",
            marginLeft: i > 0 ? -20 : 0,
          }}
        >
          <div
            className="relative overflow-hidden rounded-[1.25rem] border border-white/10"
            style={{ width: W, height: H }}
          >
            <Image src={src} alt="" fill sizes={`${W}px`} className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Placeholder ────────────────────────────────────────────────────────────

function GamePlaceholder({
  game,
  className,
}: {
  game: ComingSoonGame;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-gradient-to-b",
        game.gradient,
        className
      )}
    >
      <p
        className="px-4 text-center font-display font-bold text-white/20 select-none"
        style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)" }}
      >
        {game.name}
      </p>
    </div>
  );
}

// ─── Thumbnail card ──────────────────────────────────────────────────────────

function GameCard({
  game,
  onClick,
}: {
  game: ComingSoonGame;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
      aria-label={`Preview ${game.name}`}
    >
      {/* Phone fan */}
      <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-violet/40 to-brand-violet-dk py-8">
        <PhoneFan srcs={game.screenshotSrcs} gradient={game.gradient} phoneWidth={130} />

        {/* Expand hint on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Expand size={14} />
            Preview
          </div>
        </div>

        {/* Coming Soon badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full border border-amber-400/40 bg-black/40 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-widest text-amber-400 backdrop-blur-sm">
            Coming Soon
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-5 py-4">
        <h3 className="font-display text-base font-semibold text-white">
          {game.name}
        </h3>
        <p className="mt-0.5 text-sm text-grey-400">{game.tagline}</p>
      </div>
    </motion.button>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({
  game,
  onClose,
}: {
  game: ComingSoonGame;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const hasScreenshots = game.screenshotSrcs.length > 0;

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${game.name} preview`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Mobile: bottom sheet */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 md:hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[85dvh] overflow-y-auto overscroll-contain rounded-t-3xl border-t border-white/10 bg-brand-violet-dk">
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="h-1 w-10 rounded-full bg-white/20" />
          </div>

          {/* Phone fan */}
          <div className="flex justify-center mt-4 pb-2">
            <PhoneFan srcs={game.screenshotSrcs} gradient={game.gradient} />
          </div>

          <div className="px-6 py-5">
            <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-amber-400">
              Coming Soon
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">{game.name}</h2>
            <p className="mt-1 text-sm italic text-grey-400">{game.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-grey-300">{game.description}</p>
            <p className="mt-6 pb-8 text-xs text-grey-600">Screenshots and details will be available closer to launch.</p>
          </div>
        </div>
      </motion.div>

      {/* Desktop: centred modal */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center p-8">
        <motion.div
          className="relative z-10 flex w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-brand-violet-dk shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Phone fan panel */}
          <div className="flex w-64 shrink-0 items-center justify-center bg-brand-violet/30 py-8 lg:w-72">
            <PhoneFan srcs={game.screenshotSrcs} gradient={game.gradient} />
          </div>

          {/* Info panel */}
          <div className="flex flex-1 flex-col justify-between p-8">
            <div>
              <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-amber-400">
                Coming Soon
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">{game.name}</h2>
              <p className="mt-1 text-base italic text-grey-400">{game.tagline}</p>
              <p className="mt-5 text-sm leading-relaxed text-grey-300">{game.description}</p>
            </div>
            <p className="mt-8 text-xs text-grey-600">Screenshots and details will be available closer to launch.</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/30 text-grey-400 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
            aria-label="Close preview"
          >
            <X size={14} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function MoreGames() {
  const [selected, setSelected] = useState<ComingSoonGame | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <section
        id="more-games"
        className="bg-brand-violet-dk py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Divider from Games section */}
          <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <SectionHeading
            eyebrow="Coming soon"
            title="New games in the pipeline."
            subtitle="Three new formats launching across Super Technology markets — built in-house, designed to convert."
            dark
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {comingSoonGames.map((game) => (
              <GameCard key={game.id} game={game} onClick={() => setSelected(game)} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <Lightbox game={selected} onClose={close} />}
      </AnimatePresence>
    </>
  );
}
