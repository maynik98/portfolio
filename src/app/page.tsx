import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Developer from "@/components/sections/Developer";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Developer />
      <Process />
      <Skills />
      <Contact />
    </>
  );
}
