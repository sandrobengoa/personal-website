import About from "@/components/sections/About";
import { Providers } from "./providers";
import Intro from "@/components/sections/Intro";
import SectionDivider from "@/components/SectionDivider";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Languages from "@/components/sections/Languages";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Providers>
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <SectionDivider />
        <Experience />

        <SectionDivider />
        <Skills />

        <Languages />
        <SectionDivider hideDivider />
        <Projects />
      </Providers>
    </main>
  );
}
