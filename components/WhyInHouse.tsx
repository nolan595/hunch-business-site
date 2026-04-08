"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

const reasons = [
  {
    num: "01",
    title: "Deeper integration",
    body: "Because we\u2019re inside, we\u2019re not bolted on. Hunch games share the same auth, wallet, design language, and player profile as the rest of Superbet \u2014 players never feel like they\u2019ve left.",
  },
  {
    num: "02",
    title: "Data that actually flows",
    body: "We see what each player loves and how they play. That feedback loop powers smarter games, smarter rewards, and smarter retention \u2014 without third-party data gaps.",
  },
  {
    num: "03",
    title: "Speed and ownership",
    body: "No vendor roadmaps, no integration tickets. When Superbet wants a Champions League pick\u2019em next week, we ship a Champions League pick\u2019em next week.",
  },
];

export default function WhyInHouse() {
  return (
    <section id="why-in-house" className="bg-grey-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Most sportsbooks rent their F2P. Superbet built one." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-3"
        >
          {reasons.map((r) => (
            <motion.div key={r.num} variants={fadeUp}>
              <span className="mb-4 block font-display text-5xl font-bold text-brand-magenta">
                {r.num}
              </span>
              <h3 className="mb-3 font-display text-xl font-semibold text-brand-violet">
                {r.title}
              </h3>
              <p className="leading-relaxed text-grey-700">{r.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
