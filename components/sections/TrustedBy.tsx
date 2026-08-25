import BrandMark from "@/components/graphics/BrandMark";
import { brands } from "@/lib/site";

export default function TrustedBy() {
  // Rendered twice: the first copy translates fully out as the second arrives,
  // giving a seamless 20s loop.
  const track = [...brands, ...brands];

  return (
    <section className="ut-container pt-20 pb-4 xl:pt-24">
      <div className="bg-site-gray flex flex-col items-center gap-6 rounded-4xl p-4 md:flex-row md:gap-12 lg:py-5 lg:pr-5 lg:pl-8">
        <p className="shrink-0 text-lg font-medium lg:text-[28px]">Trusted By</p>

        <div className="bg-site-black1 group relative w-full flex-1 overflow-hidden rounded-3xl py-4">
          {/* edge fades */}
          <div className="from-site-black1 pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent" />
          <div className="from-site-black1 pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent" />

          <div className="flex w-max group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} className="animate-marquee flex shrink-0 items-center" aria-hidden={copy === 1}>
                {track.slice(0, brands.length).map((b, i) => (
                  <div key={i} className="mx-4 flex shrink-0 items-center justify-center lg:mx-8">
                    <BrandMark name={b.name} accent={b.accent} index={i} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
