import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Games from "@/components/Games";
import MoreGames from "@/components/MoreGames";
import WhyInHouse from "@/components/WhyInHouse";
import LiveRegionsWrapper from "@/components/LiveRegionsWrapper";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Games />
        <MoreGames />
        <WhyInHouse />
        <LiveRegionsWrapper />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
