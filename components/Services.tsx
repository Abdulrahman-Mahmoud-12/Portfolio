import { services } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="section-padding overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          number="04"
          title="Services"
          subtitle="Hover any card to flip it and discover what's included."
        />
        {/* overflow-visible so scaled cards swim above siblings */}
        <div
          className="grid sm:grid-cols-2 gap-7"
          style={{ overflow: "visible" }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
