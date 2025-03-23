import About from "@/components/sections/About";
import { Providers } from "./providers";
import Intro from "@/components/sections/Intro";
import SectionDivider from "@/components/SectionDivider";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <Languages />
      <SectionDivider hideDivider />
      <Projects />
      <SectionDivider hideDivider />
      {/* <Contact /> */}
    </main>
  );
}
