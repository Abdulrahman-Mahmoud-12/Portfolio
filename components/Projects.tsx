import { projects } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          number="05"
          title="Projects"
          subtitle="Click the arrows or side cards to navigate — click View Details for the full project breakdown."
        />
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}
