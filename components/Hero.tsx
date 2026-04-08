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
      {/* Animated gradient blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--brand-magenta), transparent 70%)",
            animation: "drift 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-0">
        <p
          style={heroStyle(0.05)}
          className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-brand-cyan"
        >
          In-house F2P for Superbet
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
          Hunch is the sole F2P partner to Superbet &mdash; and that closeness
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
