"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/ui/StatCounter";
import { staggerContainer, fadeUp } from "@/lib/motion";

const stats = [
  { value: 6, label: "Live markets" },
  { value: 2, label: "Flagship games" },
  { value: "25+", label: "Team members" },
  { value: 1, label: "Sportsbook partner", note: "(and we like it that way)" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-grey-50 py-16 lg:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <StatCounter
                value={s.value}
                label={s.label}
                note={"note" in s ? (s as { note: string }).note : undefined}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
