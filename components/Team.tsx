"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { leadership, product, ops, type TeamMember } from "@/lib/data/team";
import { staggerContainerFast, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const photoSrc = `/team/${member.slug}.webp`;

  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-2xl bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(233,48,184,0.15)] border border-transparent hover:border-brand-magenta/30"
    >
      {/* Photo area */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-[#2A1568]">
        {!imgError ? (
          <>
            <Image
              src={photoSrc}
              alt={member.name}
              fill
              className="object-cover transition-all duration-300"
              style={{ objectPosition: member.photoPosition ?? "center top" }}
              onError={() => setImgError(true)}
            />
            {/* Gradient fade — unifies mixed image backgrounds */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1e1040] to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User size={40} className="text-grey-600" />
          </div>
        )}
      </div>

      <h3 className="font-display font-semibold text-white">{member.name}</h3>
      <p className="text-sm text-brand-cyan">{member.role}</p>
      {member.bio && (
        <p className="mt-1 text-xs text-grey-300">{member.bio}</p>
      )}
    </motion.div>
  );
}

function TeamRow({
  members,
  cols,
}: {
  members: TeamMember[];
  cols: string;
}) {
  return (
    <motion.div
      variants={staggerContainerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      className={cn("grid gap-6", cols)}
    >
      {members.map((m) => (
        <TeamCard key={m.slug} member={m} />
      ))}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-brand-violet-dk py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="The team behind Hunch."
          subtitle="Co-founded in Dublin, built across Ireland and Ukraine."
          dark
        />

        {/* Leadership */}
        <div className="mb-12">
          <TeamRow
            members={leadership}
            cols="grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto"
          />
        </div>

        {/* Product */}
        <div className="mb-12">
          <TeamRow
            members={product}
            cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          />
        </div>

        {/* Ops */}
        <div className="mb-16">
          <TeamRow
            members={ops}
            cols="grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
          />
        </div>

        {/* Dev team band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 py-8 text-center border border-white/5"
        >
          <p className="font-display text-lg font-semibold text-grey-200">
            Plus a 15&ndash;20 strong dev team based in Ukraine, building Hunch
            every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
