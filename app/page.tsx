import Navbar, { AnnouncementBar } from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import PowerStack from "@/components/sections/PowerStack";
import CaseStudies from "@/components/sections/CaseStudies";
import Habits from "@/components/sections/Habits";
import Creators from "@/components/sections/Creators";
import Faqs from "@/components/sections/Faqs";
import Founder from "@/components/sections/Founder";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="bg-site-yellow text-site-theme-black sr-only rounded-full px-4 py-2 font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[1000]"
      >
        Skip to content
      </a>

      <div id="top" />
      <AnnouncementBar />
      <Navbar />

      <main id="main">
        <Hero />
        <TrustedBy />
        <Stats />
        <PowerStack />
        <CaseStudies />
        <Habits />
        <Creators />
        <Faqs />
        <Founder />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
