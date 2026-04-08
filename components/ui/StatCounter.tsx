"use client";

import { useEffect, useRef, useState } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
  note?: string;
  dark?: boolean;
}

export default function StatCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  note,
  dark = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  const isNumeric = typeof value === "number";

  useEffect(() => {
    if (!isNumeric) return;
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded, isNumeric]);

  useEffect(() => {
    if (isInView && isNumeric) {
      animate(motionVal, value, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, isNumeric, motionVal, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-brand-magenta font-display font-bold text-5xl md:text-6xl">
        {prefix}
        {isNumeric ? <span>{displayValue}</span> : <span>{value}</span>}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 text-sm font-body",
          dark ? "text-grey-300" : "text-grey-700"
        )}
      >
        {label}
      </p>
      {note && (
        <p
          className={cn(
            "mt-1 text-xs italic",
            dark ? "text-grey-400" : "text-grey-500"
          )}
        >
          {note}
        </p>
      )}
    </div>
  );
}
