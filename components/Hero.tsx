import Image from "next/image";
import Button from "@/components/ui/Button";
import { regions } from "@/lib/data/regions";

const headline = "Free-to-play, built from the inside out.";

// CSS animation helper — runs before any JS loads
function heroStyle(delay: number, fade = false): React.CSSProperties {
  return {
    animation: `${fade ? "hero-fade" : "hero-in"} 0.5s ease-out ${delay}s both`,
  };
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-violet-dk"
    >
      {/* Background — scattered phone mockups */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Magenta glow blob — desktop only (blur-[120px] is GPU-intensive on mobile) */}
        <div
          className="hidden lg:block absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: "radial-gradient(circle, var(--brand-magenta), transparent 70%)",
            animation: "drift 20s ease-in-out infinite alternate",
          }}
        />
        {/* Cyan glow blob — desktop only */}
        <div
          className="hidden lg:block absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[140px]"
          style={{ background: "radial-gradient(circle, var(--brand-cyan), transparent 70%)" }}
        />

        {/* Phone mockups — desktop only */}
        <div className="hidden lg:block">
        {[
          { src: "/games/PredictorMain.webp",  top: "-5%",  right: "22%", w: 160, rot: -8,  op: 0.18 },
          { src: "/games/StreakMain.webp",      top: "8%",   right: "4%",  w: 200, rot: 6,   op: 0.22 },
          { src: "/games/PredictorRight.webp",  top: "42%",  right: "14%", w: 140, rot: -4,  op: 0.15 },
          { src: "/games/StreakLeft.webp",       top: "55%",  right: "1%",  w: 170, rot: 8,   op: 0.18 },
          { src: "/games/PredictorLeft.webp",   top: "10%",  right: "38%", w: 120, rot: 5,   op: 0.12 },
          { src: "/games/StreakRight.webp",      top: "65%",  right: "30%", w: 130, rot: -6,  op: 0.13 },
        ].map(({ src, top, right, w, rot, op }) => {
          const h = Math.round(w * (19.5 / 9));
          return (
            <div
              key={src + top}
              className="absolute overflow-hidden rounded-[1.5rem] border border-white/10"
              style={{
                top,
                right,
                width: w,
                height: h,
                transform: `rotate(${rot}deg)`,
                opacity: op,
              }}
            >
              <Image src={src} alt="" fill sizes="200px" className="object-cover" />
            </div>
          );
        })}
        </div>

        {/* Gradient fade — ensures left side stays readable for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet-dk via-brand-violet-dk/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-0">
        <p
          style={heroStyle(0.05)}
          className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-brand-cyan"
        >
          In-house F2P for Super
        </p>

        <h1
          style={{
            ...heroStyle(0.15),
            fontSize: "clamp(3rem, 8vw, 6rem)",
          }}
          className="mb-6 max-w-4xl font-display font-bold leading-[1.05] tracking-tight text-white"
        >
          {headline}
        </h1>

        <p
          style={heroStyle(0.25)}
          className="mb-10 max-w-[60ch] text-lg leading-relaxed text-grey-200"
        >
          Hunch is the sole F2P partner to Super &mdash; and that closeness
          is the product. Deeper integration, smarter data, games that feel
          native, not bolted on.
        </p>

        <div
          style={heroStyle(0.35)}
          className="mb-12 flex flex-wrap gap-4"
        >
          <Button href="#games">See our games</Button>
          <Button href="#team" variant="secondary">
            Meet the team
          </Button>
        </div>

        <div
          style={heroStyle(0.45, true)}
          className="flex flex-wrap items-center gap-4"
        >
          <div className="flex gap-3 text-2xl">
            {regions.map((r) => (
              <span key={r.code} title={r.name}>
                {r.flag}
              </span>
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-cyan">
            Live in {regions.length} markets
          </span>
        </div>
      </div>
    </section>
  );
}
