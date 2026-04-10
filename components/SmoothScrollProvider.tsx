"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    // Skip Lenis on mobile — native scroll is faster and avoids iOS conflicts
    if (window.innerWidth < 1024) return;

    let instance: Lenis;

    (async () => {
      const [{ default: LenisClass }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      instance = new LenisClass({ autoRaf: false });
      setLenis(instance);

      instance.on("scroll", ScrollTrigger.update);

      const tickerCallback = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      if (instance) {
        import("gsap").then(({ gsap }) => {
          gsap.ticker.remove((time: number) => instance.raf(time * 1000));
        });
        instance.destroy();
        setLenis(null);
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
