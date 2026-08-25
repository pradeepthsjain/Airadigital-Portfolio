import { finalCta, site } from "@/lib/site";

/**
 * Full-bleed closer. The original plays a looping background video behind a
 * dark scrim; this uses a slowly drifting gradient mesh for the same effect
 * with no media payload.
 */
export default function FinalCta() {
  return (
    <section className="relative flex h-screen min-h-[560px] w-full items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 25%, #4F347F 0%, transparent 60%)," +
            "radial-gradient(55% 55% at 82% 30%, #E01569 0%, transparent 62%)," +
            "radial-gradient(65% 65% at 55% 92%, #DE4612 0%, transparent 60%)," +
            "linear-gradient(160deg, #12091f, #0a0a0a)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute top-1/2 left-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, #52B1B7 20%, transparent 40%, #E2D939 60%, transparent 80%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

      <div className="border-site-yellow relative z-10 flex h-[80%] w-[calc(100%-48px)] flex-col items-center justify-center rounded-[40px] border-4 p-6 text-center text-white md:w-[calc(100%-84px)] md:rounded-[60px]">
        <h2 className="text-3xl leading-snug font-bold md:text-6xl md:leading-tight xl:text-7xl">
          {finalCta.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>

        <a
          href={site.bookingUrl}
          className="bg-site-yellow absolute bottom-0 flex h-14 w-48 translate-y-1/2 items-center justify-center rounded-full text-2xl font-semibold text-black transition-transform duration-300 hover:scale-105 md:h-20 md:w-80 md:text-4xl"
        >
          {finalCta.button}
        </a>
      </div>
    </section>
  );
}
