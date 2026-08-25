"use client";

import Logo from "@/components/graphics/Logo";
import { SOCIAL_ICONS } from "@/components/graphics/Icons";
import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
  };

  return (
    <footer className="bg-site-theme-black px-6 pt-24 pb-16 xl:px-10">
      <div className="grid w-full items-start justify-between gap-y-14 xl:grid-cols-[1fr_1fr_auto] xl:gap-x-6">
        {/* brand */}
        <div className="flex w-full flex-col items-start justify-between xl:order-1 xl:w-[80%]">
          <a href="#top" className="text-3xl xl:text-5xl" aria-label={`${site.name} home`}>
            <Logo />
          </a>
          <p className="mt-4 max-w-sm text-base font-medium text-white/70">{site.description}</p>
          <p className="mt-4 text-sm font-medium text-white/60">
            © {site.year} {site.legalName}
          </p>
        </div>

        {/* links */}
        <div className="grid grid-cols-2 items-start gap-6 text-base font-semibold xl:order-2 xl:text-lg">
          <div className="grid content-start gap-5 xl:gap-8">
            {footerLinks.primary.map((l) =>
              "target" in l && l.target ? (
                <button
                  key={l.label}
                  onClick={() => go(l.target as string)}
                  className="hover:text-site-yellow w-fit cursor-pointer text-left transition-colors"
                >
                  {l.label}
                </button>
              ) : (
                <a key={l.label} href={l.href} className="hover:text-site-yellow w-fit transition-colors">
                  {l.label}
                </a>
              ),
            )}
          </div>

          <div className="grid content-start gap-5 xl:gap-8">
            {footerLinks.legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-site-yellow w-fit transition-colors">
                {l.label}
              </a>
            ))}
            <div>
              <p className="mb-3">Social Media</p>
              <div className="flex items-center justify-start gap-4">
                {footerLinks.social.map((s) => {
                  const Icon = SOCIAL_ICONS[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="hover:text-site-yellow text-white transition-colors"
                    >
                      <Icon className="h-7 w-7" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="xl:order-3">
          <p className="text-lg font-medium xl:text-2xl">Any Query?</p>
          <p className="mt-2 text-base xl:text-lg">
            Contact us at{" "}
            <a className="text-site-yellow hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
