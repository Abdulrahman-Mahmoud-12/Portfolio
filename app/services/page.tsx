import { services } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceFlipCard from "@/components/ServiceFlipCard";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Services | Abdelrahman Mahmoud",
  description: "AI engineering services: model development, computer vision, data analysis, and research implementation.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Background */}
      <div aria-hidden className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-2/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading
        number="04"
        title="Services"
        subtitle="Specialized AI engineering services — hover a card to explore what's included."
        align="center"
      />

      {/* Grid — overflow-visible so scaled cards don't clip */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ overflow: "visible" }}>
        {services.map((service, i) => (
          <ServiceFlipCard key={service.title} service={service} index={i} />
        ))}
      </div>

      {/* CTA section */}
      <div className="mt-20 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-12" />
        <p className="text-muted text-base mb-6 max-w-xl mx-auto">
          Have a project in mind? Let&apos;s discuss how I can help build the right AI solution for your needs.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-cyan-300 text-bg-base font-semibold text-sm hover:shadow-glow-accent transition-all duration-200 active:scale-[0.97]"
        >
          Start a Conversation
        </a>
      </div>
    </PageLayout>
  );
}
