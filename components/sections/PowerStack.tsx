import Artwork from "@/components/graphics/Artwork";
import Reveal from "@/components/ui/Reveal";
import { powers, powerSection } from "@/lib/site";

/** Card body colour + the pastel panel its artwork sits on. */
const TONES = {
  pink: { card: "bg-site-pink", panel: "bg-site-pink-light" },
  cyan: { card: "bg-site-cyan", panel: "bg-site-cyan-light" },
  orange: { card: "bg-site-orange", panel: "bg-site-orange-light" },
} as const;

/**
 * Sticky stacking cards: each card pins under the nav at an offset one
 * `--peek-space` deeper than the last, so earlier cards stay visible as a thin
 * ledge while later ones slide over them. Ascending z-index keeps the incoming
 * card on top.
 */
export default function PowerStack() {
  return (
    <section id="features" className="bg-site-theme-purple scroll-mt-24 pt-20 xl:pt-28">
      <div className="ut-container">
        <Reveal>
          <div className="mx-auto w-full lg:px-40">
            <h2 className="ut-section-head" style={{ color: "var(--color-site-yellow-light)" }}>
              {powerSection.heading}
            </h2>
            <h3 className="ut-section-sub-head text-white/85">{powerSection.sub}</h3>
          </div>
        </Reveal>

        <div
          className="relative mt-12 space-y-8 xl:mt-[60px]"
          style={
            {
              "--peek-space": "20px",
              "--top-sticky": "104px",
            } as React.CSSProperties
          }
        >
          {powers.map((p, i) => {
            const tone = TONES[p.tone];
            return (
              <div
                key={p.title}
                className={`text-site-theme-black flex flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/30 transition-all duration-500 ease-out xl:h-[400px] xl:flex-row xl:rounded-4xl ${tone.card}`}
                style={
                  {
                    "--content-top": `calc(${i} * var(--peek-space))`,
                    zIndex: 3 + i,
                    position: "sticky",
                    top: "calc(var(--top-sticky) + var(--content-top))",
                  } as React.CSSProperties
                }
              >
                <div className="flex flex-1 flex-col items-start justify-center px-5 py-8 xl:px-11 xl:py-16">
                  <h3 className="text-2xl font-bold whitespace-pre-line xl:text-[44px] xl:leading-[1.15]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium xl:text-xl">{p.body}</p>
                </div>

                <div className={`flex w-full items-center justify-center p-6 xl:w-[35%] xl:p-8 ${tone.panel}`}>
                  <Artwork variant={p.art} className="h-56 w-full max-w-[340px] xl:h-full" />
                </div>
              </div>
            );
          })}

          {/* trailing space so the last card can settle before the next section */}
          <div className="h-[20vh] xl:h-[30vh]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
