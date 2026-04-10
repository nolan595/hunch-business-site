"use client";

import dynamic from "next/dynamic";

const Games = dynamic(() => import("@/components/Games"), { ssr: false });
const MoreGames = dynamic(() => import("@/components/MoreGames"), { ssr: false });
const WhyInHouse = dynamic(() => import("@/components/WhyInHouse"), { ssr: false });
const LiveRegionsWrapper = dynamic(() => import("@/components/LiveRegionsWrapper"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Team = dynamic(() => import("@/components/Team"), { ssr: false });

export default function BelowFoldSections() {
  return (
    <>
      <Games />
      <MoreGames />
      <WhyInHouse />
      <LiveRegionsWrapper />
      <Testimonials />
      <Team />
    </>
  );
}
