"use client";

import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/content/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="card card-gradient-border group flex flex-col overflow-hidden cursor-default"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-surface shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/40 to-transparent" />

        {/* Tag pills on image */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-accent/30 bg-accent/10 text-accent/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-xs leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 flex-1">
          <p className="text-accent/60 text-[10px] font-mono uppercase tracking-widest mb-2">
            {"// highlights"}
          </p>
          <ul className="space-y-1">
            {project.highlights.map((h) => (
              <li key={h} className="text-muted text-xs flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto group/link inline-flex items-center justify-between w-full pt-4 border-t border-white/[0.06] text-accent text-xs font-semibold hover:text-cyan-300 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            {project.linkLabel === "GitHub" ? <Github size={13} /> : <ExternalLink size={13} />}
            View on {project.linkLabel}
          </span>
          <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 translate-x-0 group-hover/link:translate-x-0.5 transition-all duration-200" />
        </a>
      </div>
    </motion.div>
  );
}
