import Image from "next/image";

import { site } from "@/lib/site";

/**
 * Brand lockup. The source artwork is a stacked logo whose "Elevate Your Brand"
 * tagline would render only a few pixels tall at header size, so the exported
 * asset is cropped to the wordmark + "DIGITAL" and the tagline is dropped.
 */
export default function Logo({ className = "h-10 w-auto md:h-14" }: { className?: string }) {
  return (
    <Image
      src="/brand/aira-digital.png"
      alt={site.name}
      width={303}
      height={200}
      priority
      className={className}
    />
  );
}
