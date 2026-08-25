import PhoneMockup from "@/components/graphics/PhoneMockup";
import Reveal from "@/components/ui/Reveal";
import { hero, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="ut-container">
      <div className="bg-site-theme-purple relative flex flex-col justify-between gap-16 overflow-hidden rounded-3xl px-4 py-8 lg:flex-row lg:rounded-4xl lg:px-16 lg:py-12">
        {/* ambient wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #4F347F, transparent 70%)" }}
        />

        <div className="relative flex w-full flex-col items-center justify-center lg:items-start lg:justify-start lg:pr-4">
          <Reveal>
            <h1 className="text-center text-4xl leading-tight font-bold lg:text-left lg:text-[5.5rem] xl:text-8xl">
              {hero.titleTop}
              <br />
              {hero.titleBottom}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-6 mb-8 max-w-xl text-center text-sm font-medium text-white/90 lg:mt-12 lg:mb-8 lg:text-left lg:text-2xl">
              {hero.subtitle}
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <a
              href={site.bookingUrl}
              className="bg-site-yellow text-site-theme-black flex w-32 items-center justify-center rounded-full py-2 text-sm font-semibold transition-transform duration-300 hover:scale-105 lg:w-48 lg:py-4 lg:text-lg"
            >
              {hero.cta}
            </a>
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
