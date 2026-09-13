import { About } from "@/components/sections/about";
import { AIEngineering } from "@/components/sections/ai-engineering";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <AIEngineering />
      <Expertise />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
