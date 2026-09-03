import { skills } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillFlipCard from "@/components/SkillFlipCard";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          number="03"
          title="Skills & Technologies"
          subtitle="Hover any card to explore the skills inside."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <SkillFlipCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
