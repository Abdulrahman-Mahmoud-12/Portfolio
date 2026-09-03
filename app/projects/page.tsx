"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import PageLayout from "@/components/PageLayout";

const stagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: "easeOut" },
  }),
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      {/* Background orb */}
      <div aria-hidden className="fixed top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading
        number="05"
        title="Projects"
        subtitle="Real-world AI systems built from research to production — covering computer vision, machine learning, medical AI, and data analytics."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="block card card-gradient-border group overflow-hidden hover:border-accent/25 hover:-translate-y-2 transition-all duration-300 hover:shadow-glow-accent"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/30 to-transparent" />

                {/* Tags on image */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-accent/30 bg-accent/10 text-accent/90 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <span className="text-accent text-xs font-semibold flex items-center gap-1">
                    View Details
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="flex items-center gap-2 text-muted">
                    {project.linkLabel === "GitHub" ? <Github size={14} /> : <ExternalLink size={14} />}
                    <span className="text-xs">{project.linkLabel}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
