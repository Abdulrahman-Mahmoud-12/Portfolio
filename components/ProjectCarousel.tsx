"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/types";

interface Props { projects: Project[]; }

/* Visual config per relative position to center */
const CARD_CONFIG: Record<number, { x: string; scale: number; opacity: number; z: number; rotateY: number }> = {
  0:  { x: "0%",    scale: 1,    opacity: 1,   z: 30, rotateY: 0   },
  1:  { x: "62%",   scale: 0.82, opacity: 0.75, z: 20, rotateY: -14 },
  [-1]:{ x: "-62%", scale: 0.82, opacity: 0.75, z: 20, rotateY: 14  },
  2:  { x: "105%",  scale: 0.65, opacity: 0.45, z: 10, rotateY: -24 },
  [-2]:{ x: "-105%",scale: 0.65, opacity: 0.45, z: 10, rotateY: 24  },
};

function getRelPos(i: number, active: number, total: number): number {
  let rel = i - active;
  // Wrap around
  if (rel > total / 2)  rel -= total;
  if (rel < -total / 2) rel += total;
  return rel;
}

export default function ProjectCarousel({ projects }: Props) {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div className="relative h-[440px] mx-auto max-w-4xl" style={{ perspective: "1200px" }}>
        {projects.map((project, i) => {
          const rel = getRelPos(i, active, total);
          const cfg = CARD_CONFIG[rel] ?? { x: "0%", scale: 0, opacity: 0, z: 0, rotateY: 0 };
          const isCenter = rel === 0;
          const isVisible = Math.abs(rel) <= 2;

          return (
            <motion.div
              key={project.slug}
              animate={{
                x: cfg.x, scale: cfg.scale, opacity: isVisible ? cfg.opacity : 0,
                rotateY: cfg.rotateY, zIndex: cfg.z,
              }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: "absolute", width: "100%", top: 0, transformStyle: "preserve-3d", pointerEvents: isVisible ? "auto" : "none" }}
              onClick={() => { if (!isCenter) setActive(i); }}
              className={!isCenter ? "cursor-pointer" : ""}
            >
              <div className={`card card-gradient-border overflow-hidden mx-auto w-full max-w-lg transition-all duration-300 ${isCenter ? "shadow-glow-accent border-accent/20" : "hover:border-white/15"}`}>
                {/* Project image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 512px"
                    className={`object-cover transition-transform duration-700 ${isCenter ? "scale-100" : "scale-105"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/20 to-transparent" />

                  {/* Tags on image */}
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-accent/30 bg-accent/10 text-accent/90 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`font-bold text-base leading-snug mb-2 transition-colors ${isCenter ? "text-accent" : "text-white"}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Actions — only fully visible when center */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-3 pt-3 border-t border-white/[0.06]"
                      >
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-accent to-cyan-300 text-bg-base hover:shadow-glow-accent transition-all"
                        >
                          View Details →
                        </Link>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-white/10 text-muted hover:text-accent hover:border-accent/30 transition-all">
                          {project.linkLabel === "GitHub" ? <Github size={14} /> : <ExternalLink size={14} />}
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button onClick={prev}
          className="p-3 rounded-full border border-white/10 text-muted hover:text-accent hover:border-accent/40 hover:shadow-glow-accent transition-all active:scale-90">
          <ChevronLeft size={20} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        <button onClick={next}
          className="p-3 rounded-full border border-white/10 text-muted hover:text-accent hover:border-accent/40 hover:shadow-glow-accent transition-all active:scale-90">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Project counter */}
      <p className="text-center text-muted/50 font-mono text-xs mt-4">
        {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
    </div>
  );
}
