"use client";

import dynamic from "next/dynamic";

function RegionsSkeleton() {
  return (
    <section className="bg-brand-violet-dk py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading skeleton */}
        <div className="mb-12 max-w-3xl animate-pulse space-y-3">
          <div className="h-3 w-24 rounded bg-white/10" />
          <div className="h-8 w-3/4 rounded bg-white/10" />
          <div className="h-5 w-2/3 rounded bg-white/10" />
        </div>
        {/* Card skeletons — visible on mobile */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/5 px-4 py-4 animate-pulse"
            >
              <div className="h-8 w-8 rounded bg-white/10 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 rounded bg-white/10" />
                <div className="h-3 w-1/2 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
        {/* Map skeleton — desktop only */}
        <div className="hidden md:block h-[400px] rounded-2xl bg-white/5 animate-pulse" />
      </div>
    </section>
  );
}

const LiveRegions = dynamic(() => import("@/components/LiveRegions"), {
  ssr: false,
  loading: () => <RegionsSkeleton />,
});

export default function LiveRegionsWrapper() {
  return <LiveRegions />;
}
