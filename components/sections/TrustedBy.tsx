import Image from "next/image";

import { brands } from "@/lib/site";

export default function TrustedBy() {
  return (
    <section className="ut-container pt-20 pb-4 xl:pt-24">
      <div className="bg-site-gray flex flex-col items-center gap-6 rounded-4xl p-4 md:flex-row md:gap-12 lg:py-5 lg:pr-5 lg:pl-8">
        <p className="shrink-0 text-lg font-medium lg:text-[28px]">Trusted By</p>

        <div className="bg-site-black1 group relative w-full flex-1 overflow-hidden rounded-3xl py-3 lg:py-4">
          {/* edge fades */}
          <div className="from-site-black1 pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent lg:w-20" />
          <div className="from-site-black1 pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent lg:w-20" />

          {/* Rendered twice: the first copy translates fully out as the second
              arrives, giving a seamless loop. */}
          <div className="flex w-max group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="animate-marquee flex shrink-0 items-center"
                aria-hidden={copy === 1}
              >
                {brands.map((b) => (
                  <Image
                    key={b.name}
                    src={b.src}
                    alt={b.name}
                    width={b.w}
                    height={b.h}
                    className="mx-2 h-16 w-auto shrink-0 lg:mx-4 lg:h-20"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
