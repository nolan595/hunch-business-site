import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Footer from "@/components/Footer";
import BelowFoldSections from "@/components/BelowFoldSections";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <BelowFoldSections />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
