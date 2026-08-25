import Artwork from "@/components/graphics/Artwork";
import Reveal from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { caseStudies, caseStudiesSection } from "@/lib/site";

const TONES = {
  pink: "bg-site-pink",
  orange: "bg-site-orange",
  purple: "bg-site-theme-purple",
} as const;

export default function CaseStudies() {
  return (
    <section id="case-studies" className="ut-container scroll-mt-24 pt-24 pb-16 xl:pt-32">
      <Reveal>
        <div className="mx-auto w-full text-center">
          <h2 className="ut-section-head">
            See the <Scribble variant="double">results</Scribble> for yourself
          </h2>
          <h3 className="ut-section-sub-head text-white/85">
            {caseStudiesSection.sub}
          </h3>
        </div>
      </Reveal>

      <div className="mx-auto mt-9 grid w-full gap-6 md:mt-[60px] md:grid-cols-3 xl:gap-9">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <article
              className={`flex h-full transform flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/40 ${TONES[c.tone]}`}
            >
              <div className="relative">
                <Artwork variant={c.art} className="aspect-[400/290] w-full bg-black/10" />
                <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {c.metric}
                </span>
              </div>
              <div className="px-4 py-5">
                <h4 className="text-lg font-semibold xl:text-2xl">{c.title}</h4>
                <p className="mt-4 text-sm font-medium text-white/90 xl:text-base">{c.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
