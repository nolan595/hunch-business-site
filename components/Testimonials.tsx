"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "Hunch's product suite and rapid local customisation gave us the exact edge we needed. They unlock key differentiators that allows Super to outpace established competitors in both acquiring and retaining players.",
    name: "Eamonn",
    title: "COO, Super",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Mark Flood",
    title: "General Manager, Brazil",
  },
  {
    quote:
      "Hunch is a powerhouse team. From feeding us cross-border insights to their lightning-fast support, they've made our Greek F2P launch a success. I'm looking forward to our continued expansion as we completely evolve how the Greek market engages with Free-to-Play games.",
    name: "Andreea Năftică",
    title: "Commercial Director, Greece",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-grey-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What they say"
          title="Trusted by the people inside the business."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-grey-200 bg-white p-8 shadow-sm"
            >
              {/* Quote mark */}
              <span
                className="mb-4 block font-display font-bold leading-none text-brand-magenta select-none"
                style={{ fontSize: "4rem" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="flex-1 text-base leading-relaxed text-grey-700">
                {t.quote}
              </p>

              <div className="mt-8 border-t border-grey-100 pt-6">
                <p className="font-display text-base font-semibold text-brand-violet">
                  {t.name}
                </p>
                <p className="mt-0.5 text-sm text-grey-500">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
