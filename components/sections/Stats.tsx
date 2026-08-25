import { FlashIcon } from "@/components/graphics/Icons";
import Reveal from "@/components/ui/Reveal";
import { stats, statsSection } from "@/lib/site";

export default function Stats() {
  return (
    <section className="ut-container pb-20 xl:pb-16">
      <div className="mt-12 lg:mt-24">
        <Reveal>
          <h2 className="ut-section-head mx-auto max-w-4xl">
            Turn creators into your most{" "}
            <span className="text-site-yellow-light inline-flex items-center gap-1">
              <FlashIcon className="h-7 w-7 xl:h-11 xl:w-11" />
              impactful
            </span>{" "}
            growth engine
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="ut-section-sub-head mx-auto max-w-4xl text-white/85">
            {statsSection.sub}
          </h3>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="bg-site-gray group hover:bg-site-yellow h-full rounded-3xl px-4 py-6 transition-all duration-300 ease-in-out xl:rounded-4xl">
                <p className="text-site-white group-hover:text-site-black1 text-center text-3xl font-semibold transition-all duration-300 ease-in-out xl:text-4xl">
                  {s.value}
                </p>
                <p className="text-site-white group-hover:text-site-black1 mt-5 text-center text-base transition-all duration-300 ease-in-out xl:text-lg">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
