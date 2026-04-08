"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { regions, type Region } from "@/lib/data/regions";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCodes = new Set(regions.map((r) => r.code));

// ISO_A2 codes in the TopoJSON may differ — map common mismatches
const countryCodeMap: Record<string, string> = {
  Brazil: "BR",
  Romania: "RO",
  Poland: "PL",
  Belgium: "BE",
  Greece: "GR",
  Serbia: "RS",
};

function isHighlighted(geo: { properties: { name?: string; ISO_A2?: string } }) {
  const iso = geo.properties.ISO_A2;
  if (iso && highlightedCodes.has(iso)) return true;
  const name = geo.properties.name;
  if (name && countryCodeMap[name]) return true;
  return false;
}

export default function LiveRegions() {
  const [hovered, setHovered] = useState<Region | null>(null);

  return (
    <section id="live-regions" className="bg-brand-violet-dk py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Where we are"
          title="Live in 6 markets — and growing."
          subtitle="From Bucharest to São Paulo, Hunch games run inside Superbet's biggest sportsbook properties."
          dark
        />

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          <div role="img" aria-label="Map showing Hunch live regions across 6 countries">
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ center: [10, 30], scale: 200 }}
            className="w-full h-auto"
            style={{ maxHeight: "500px" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted(geo) ? "#E930B8" : "#2a1463"}
                    stroke={isHighlighted(geo) ? "#3FE0D0" : "#3a2573"}
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Pulsing markers */}
            {regions.map((region, i) => (
              <Marker
                key={region.code}
                coordinates={region.coordinates}
                onMouseEnter={() => setHovered(region)}
                onMouseLeave={() => setHovered(null)}
              >
                <g
                  tabIndex={0}
                  role="button"
                  aria-label={`${region.name} — ${region.partner}, live since ${region.liveSince}`}
                  onFocus={() => setHovered(region)}
                  onBlur={() => setHovered(null)}
                >
                  {/* Pulse ring */}
                  <circle
                    r={12}
                    fill="none"
                    stroke="#3FE0D0"
                    strokeWidth={2}
                    className="animate-pulse-ring"
                    style={{ animationDelay: `${i * 300}ms` }}
                  />
                  {/* Inner dot */}
                  <circle
                    r={4}
                    fill="#E930B8"
                    className="cursor-pointer"
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-xl bg-brand-violet/90 px-5 py-3 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{hovered.flag}</span>
                  <div>
                    <p className="font-display font-semibold text-white">
                      {hovered.name}
                    </p>
                    <p className="text-xs text-grey-300">
                      {hovered.partner} &middot; Live since {hovered.liveSince}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Country cards row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {regions.map((r) => (
            <div
              key={r.code}
              className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 border border-white/5"
            >
              <span className="text-2xl">{r.flag}</span>
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  {r.name}
                </p>
                <p className="text-xs text-grey-400">
                  Live since {r.liveSince}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Screen reader fallback */}
        <ul className="sr-only">
          {regions.map((r) => (
            <li key={r.code}>
              {r.name} &mdash; {r.partner}, live since {r.liveSince}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
