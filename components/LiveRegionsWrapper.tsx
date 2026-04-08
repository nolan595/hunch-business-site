"use client";

import dynamic from "next/dynamic";

const LiveRegions = dynamic(() => import("@/components/LiveRegions"), {
  ssr: false,
  loading: () => <div className="min-h-[60vh] bg-brand-violet-dk" />,
});

export default function LiveRegionsWrapper() {
  return <LiveRegions />;
}
