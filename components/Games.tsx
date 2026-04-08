"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { games } from "@/lib/data/games";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function PhoneFan({
  game,
  size = "lg",
}: {
  game: (typeof games)[number];
  size?: "sm" | "md" | "lg";
}) {
  const glowColor =
    game.color === "magenta"
      ? "rgba(233,48,184,0.2)"
      : "rgba(63,224,208,0.2)";

  const dims = {
    sm: { w: 110, h: 230, rot: 6, margin: -16 },
    md: { w: 140, h: 295, rot: 7, margin: -20 },
    lg: { w: 200, h: 420, rot: 7, margin: -28 },
  }[size];

  return (
    <div className="flex items-center justify-center">
      {game.mockupSrcs.map((src, i) => {
        const rotations = [-dims.rot, 0, dims.rot];
        const scales = [0.85, 1, 0.85];
        const opacities = [0.65, 1, 0.65];
        const zIndexes = [0, 10, 0];
        const marginStyle =
          i === 0
            ? { marginRight: dims.margin }
            : i === 2
            ? { marginLeft: dims.margin }
            : {};

        return (
          <div
            key={src}
            style={{
              transform: `rotate(${rotations[i]}deg) scale(${scales[i]})`,
              opacity: opacities[i],
              zIndex: zIndexes[i],
              position: "relative",
              ...marginStyle,
            }}
          >
            <div
              className="rounded-[2rem] border border-white/10 overflow-hidden"
              style={{
                width: dims.w,
                height: dims.h,
                background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
              }}
            >
              <Image
                src={src}
                alt={`${game.name} screenshot ${i + 1}`}
                width={dims.w}
                height={dims.h}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GameSlide({ game }: { game: (typeof games)[number] }) {
  const colorClass =
    game.color === "magenta" ? "text-brand-magenta" : "text-brand-cyan";

  return (
    <>
      {/* Mobile layout — vertical stack */}
      <div className="lg:hidden flex flex-col items-center gap-6 text-center px-4">
        <div>
          <h3 className={cn("font-display text-4xl font-bold", colorClass)}>
            {game.name}
          </h3>
          <p className="mt-1 text-lg italic text-grey-300">{game.tagline}</p>
        </div>
        <PhoneFan game={game} size="sm" />
        <div className="max-w-sm">
          <p className="mb-4 text-grey-200 leading-relaxed text-sm">{game.description}</p>
          <div className="flex flex-col gap-2">
            {game.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 px-4 py-2 border border-white/5 flex items-center justify-between">
                <span className={cn("font-display font-bold text-sm", colorClass)}>{stat.value}</span>
                <span className="text-xs text-grey-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet layout (lg–xl) — compact 3-col */}
      <div className="hidden lg:grid xl:hidden gap-6 grid-cols-[1fr_auto_1fr] items-center">
        <div className="text-right">
          <h3 className={cn("font-display text-4xl font-bold", colorClass)}>{game.name}</h3>
          <p className="mt-1 text-lg italic text-grey-300">{game.tagline}</p>
        </div>
        <PhoneFan game={game} size="md" />
        <div>
          <p className="mb-4 text-sm text-grey-200 leading-relaxed">{game.description}</p>
          <div className="flex flex-col gap-2">
            {game.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 px-4 py-2 border border-white/5">
                <span className={cn("font-display font-bold text-sm", colorClass)}>{stat.value}</span>
                <span className="ml-2 text-xs text-grey-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout (xl+) — full 3-col fan */}
      <div className="hidden xl:grid gap-8 grid-cols-[1fr_auto_1fr] items-center">
        <div className="text-right">
          <h3 className={cn("font-display text-5xl font-bold 2xl:text-6xl", colorClass)}>{game.name}</h3>
          <p className="mt-2 text-xl italic text-grey-300">{game.tagline}</p>
        </div>
        <PhoneFan game={game} size="lg" />
        <div>
          <p className="mb-6 text-grey-200 leading-relaxed">{game.description}</p>
          <div className="flex flex-col gap-3">
            {game.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 px-5 py-3 border border-white/5">
                <span className={cn("font-display font-bold", colorClass)}>{stat.value}</span>
                <span className="ml-2 text-sm text-grey-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Games() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const game1Ref = useRef<HTMLDivElement>(null);
  const game2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(game1Ref.current, { opacity: 0, y: -30, duration: 0.2 }, 0.4);
      gsap.set(game2Ref.current, { opacity: 0, y: 30 });
      tl.to(game2Ref.current, { opacity: 1, y: 0, duration: 0.2 }, 0.45);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="games" className="bg-brand-violet-dk">
      <div
        ref={sectionRef}
        className="relative flex min-h-[100dvh] flex-col justify-center py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our games"
            title="Our games."
            subtitle="Two flagship products, hundreds of variants, all live inside Superbet."
            dark
          />

          <div className="relative mt-8">
            <div ref={game1Ref}>
              <GameSlide game={games[0]} />
            </div>
            <div ref={game2Ref} className="absolute inset-0">
              <GameSlide game={games[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
