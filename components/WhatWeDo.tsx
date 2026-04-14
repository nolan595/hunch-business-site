"use client";

import { motion } from "framer-motion";
import { Target, Flame, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, slideFromRight } from "@/lib/motion";

const features = [
  {
    icon: Target,
    title: "Pick'em & Predictors",
    desc: "One-off games tied to big fixtures. Pick6, stat predictors, score predictors.",
  },
  {
    icon: Flame,
    title: "Streak Games",
    desc: "Daily challenges that compound. Players come back to keep their streak alive and chase the jackpot.",
  },
  {
    icon: Zap,
    title: "Tournament Specials",
    desc: "Custom builds for World Cups, Champions League finals, and tentpole moments.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-grey-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <SectionHeading
              title="Free games that bring fans back."
              className="mb-6"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-lg text-lg leading-relaxed text-grey-600"
            >
              Hunch builds free-to-play prediction games inside the Super
              ecosystem &mdash; from one-off tournament pick&rsquo;ems to daily
              streak games that turn casual fans into habits. Every game is
              designed to feel native to the sportsbook, because it is.
            </motion.p>
          </div>

          {/* Right column — feature cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            className="flex flex-col gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={slideFromRight}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50">
                  <f.icon size={20} className="text-brand-violet" />
                </div>
                <h3 className="mb-1 font-display font-semibold text-brand-violet">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey-600">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
