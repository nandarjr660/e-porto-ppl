import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Institusi from "@/components/institusi";

export default function Home() {
  return (
    <>
      {/* SECTION 1: PEMBUKA (ID: hero) */}
      <Hero />
      
      {/* SECTION 2: PENGANTAR (ID: intro) */}
      <Intro />

      {/* SECTION 3: INSTITUSI (ID: institusi) */}
      <Institusi />
    </>
  );
}