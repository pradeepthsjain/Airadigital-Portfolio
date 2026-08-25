import Portrait from "@/components/graphics/Portrait";
import { LinkedInIcon } from "@/components/graphics/Icons";
import Reveal from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { founder } from "@/lib/site";

export default function Founder() {
  return (
    <section className="ut-container pt-24 pb-16 xl:pt-32 xl:pb-24">
      <Reveal>
        <h2 className="ut-section-head">
          Meet our <Scribble variant="triple">Founder</Scribble>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mx-auto mt-12 flex w-full flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16 xl:mt-8 xl:px-16">
          <div className="flex-1 text-base font-medium">
            {founder.body.map((p, i) => (
              <p key={i} className={i === 0 ? "text-white/90" : "mt-4 mb-8 text-white/90"}>
                {p}
              </p>
            ))}

            <a
              href={founder.socialUrl}
              className="text-site-yellow inline-flex items-center justify-start gap-3 text-lg hover:underline"
            >
              <LinkedInIcon className="h-5 w-5" />
              {founder.socialLabel}
            </a>
          </div>

          <div className="w-full max-w-sm px-8 xl:w-[42%] xl:max-w-none xl:px-0">
            <div className="bg-site-yellow relative overflow-hidden rounded-3xl">
              <Portrait
                seed={7}
                palette="violet"
                alt={`${founder.name}, ${founder.role}`}
                className="aspect-[4/5] w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                <p className="text-lg font-semibold text-white">{founder.name}</p>
                <p className="text-sm text-white/80">{founder.role}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
