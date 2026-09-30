import { WHY_ICONS } from "@/components/graphics/Icons";
import Reveal from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { whyUs, whyUsSection } from "@/lib/site";

/** Accent used for the icon chip and the rule above each card title. */
const TONES = {
  pink: "bg-site-pink",
  cyan: "bg-site-cyan",
  orange: "bg-site-orange",
} as const;

export default function WhyUs() {
  return (
    <section id="why-us" className="ut-container scroll-mt-24 pt-24 pb-16 xl:pt-32">
      <Reveal>
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="ut-section-head">
            {whyUsSection.headBefore} <Scribble variant="double">{whyUsSection.headAccent}</Scribble>
          </h2>
          <h3 className="ut-section-sub-head text-white/85">{whyUsSection.sub}</h3>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3 xl:mt-16 xl:gap-6">
        {whyUs.map((w, i) => {
          const Icon = WHY_ICONS[w.icon];
          return (
            <Reveal key={w.title} delay={i * 90}>
              <div className="bg-site-gray flex h-full flex-col rounded-3xl p-6 xl:rounded-4xl xl:p-8">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${TONES[w.tone]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-xl font-semibold xl:text-2xl">{w.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/85 xl:text-base">{w.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
