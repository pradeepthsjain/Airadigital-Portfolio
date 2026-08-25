import Portrait from "@/components/graphics/Portrait";
import Reveal from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { creators, creatorsSection } from "@/lib/site";

const BACKS: Record<string, string> = {
  peach: "linear-gradient(135deg, #F8B7A0, #ef6535)",
  pink: "linear-gradient(135deg, #F273A8, #ED3D86)",
  violet: "linear-gradient(135deg, #AA93D2, #6643a3)",
};

type Creator = (typeof creators)[number];

/**
 * Flip card. Hover (or keyboard focus) rotates the inner wrapper 180° on Y;
 * both faces are backface-hidden so only one is ever painted.
 */
function CreatorCard({ creator, className = "" }: { creator: Creator; className?: string }) {
  return (
    <div
      tabIndex={0}
      className={`group perspective relative overflow-hidden rounded-3xl outline-none ${className}`}
      aria-label={`${creator.name}, ${creator.followers} followers`}
    >
      <div className="transform-style-3d relative h-full w-full transition-transform duration-700 group-hover:flip-y group-focus-visible:flip-y">
        {/* front */}
        <div className="backface-hidden absolute inset-0">
          <Portrait
            seed={creator.seed}
            palette={creator.palette}
            alt={creator.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="truncate text-sm font-semibold text-white">{creator.name}</p>
            <p className="truncate text-xs text-white/75">{creator.followers} followers</p>
          </div>
        </div>

        {/* back */}
        <div
          className="backface-hidden flip-y absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-3 text-center text-white"
          style={{ background: BACKS[creator.palette] }}
        >
          <h3 className="text-sm font-semibold">{creator.name}</h3>
          <p className="mt-2 text-xs font-semibold">@{creator.handle}</p>
          <p className="mt-1 mb-4 text-xs font-semibold">{creator.followers} followers</p>
          <span className="flex items-center justify-center rounded-xl border border-white px-3 py-2 text-xs">
            View Profile
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Creators() {
  const [a, b, c, d, e, f, g, h, i, j] = creators;

  return (
    <section id="creators" className="ut-container scroll-mt-24 pt-24 pb-16 xl:pt-32">
      <Reveal>
        <div className="mx-auto w-full text-center">
          <h2 className="ut-section-head">
            <Scribble variant="triple">Creators</Scribble> {creatorsSection.headAfter}
          </h2>
          <h3 className="ut-section-sub-head text-white/85">{creatorsSection.sub}</h3>
        </div>
      </Reveal>

      {/* Mosaic on desktop; a horizontal snap rail on small screens. */}
      <Reveal delay={100}>
        <div className="creators-rail hide-scrollbar mt-12 flex h-[520px] flex-row gap-4 overflow-x-auto lg:grid lg:h-[600px] lg:grid-cols-6 lg:gap-4 lg:overflow-visible xl:mt-[60px]">
          <CreatorCard creator={a} className="h-full" />

          <div className="flex h-full flex-col gap-4">
            <CreatorCard creator={b} className="h-[40%]" />
            <CreatorCard creator={c} className="flex-1" />
          </div>

          <div className="flex h-full flex-col gap-4">
            <CreatorCard creator={d} className="flex-1" />
            <CreatorCard creator={e} className="h-[40%]" />
          </div>

          <CreatorCard creator={f} className="h-full" />

          <div className="flex h-full flex-col gap-4">
            <CreatorCard creator={g} className="h-[40%]" />
            <CreatorCard creator={h} className="flex-1" />
          </div>

          <div className="flex h-full flex-col gap-4">
            <CreatorCard creator={i} className="flex-1" />
            <CreatorCard creator={j} className="h-[40%]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
