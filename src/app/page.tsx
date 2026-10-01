import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Pathologies from "@/components/sections/Pathologies";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FirstVisit from "@/components/sections/FirstVisit";
import Services from "@/components/sections/Services";
import CTABanner from "@/components/sections/CTABanner";
import ProStrip from "@/components/sections/ProStrip";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pathologies />
      <Testimonials />
      <About />
      <FirstVisit />
      <Services />
      <CTABanner />
      <ProStrip />
    </>
  );
}
