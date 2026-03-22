import Hero from "@/components/sections/Hero";

import Services from "@/components/sections/Services";
import Formations from "@/components/sections/Formations";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />

      <Services />
      <Formations />
      <About />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
