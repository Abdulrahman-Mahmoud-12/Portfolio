"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Zap, Rocket, Trophy, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { achievements } from "@/content/site";
import type { Achievement } from "@/content/types";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = { Award, Zap, Rocket, Trophy };

const typeColors: Record<Achievement["type"], { border: string; bg: string; text: string; dot: string }> = {
  award:        { border: "border-yellow-400/30", bg: "bg-yellow-400/10", text: "text-yellow-400",  dot: "bg-yellow-400" },
  milestone:    { border: "border-accent/30",     bg: "bg-accent/10",    text: "text-accent",       dot: "bg-accent" },
  certification:{ border: "border-accent-2/30",   bg: "bg-accent-2/10",  text: "text-accent-2",     dot: "bg-accent-2" },
  competition:  { border: "border-orange-400/30", bg: "bg-orange-400/10",text: "text-orange-400",   dot: "bg-orange-400" },
};

/* Mini image slider for achievements with multiple images */
function ImageSlider({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-4 relative rounded-xl overflow-hidden border border-white/[0.07]">
      <div className="relative h-40 w-full">
        <Image src={images[idx]} alt="Achievement image" fill sizes="400px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 to-transparent" />
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-3">
          <button onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            className="p-1 rounded-full bg-bg-base/70 border border-white/10 text-white hover:text-accent transition-colors">
            <ChevronLeft size={13} />
          </button>
          <span className="text-white/50 text-[10px] font-mono">{idx + 1} / {images.length}</span>
          <button onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="p-1 rounded-full bg-bg-base/70 border border-white/10 text-white hover:text-accent transition-colors">
            <ChevronRight size={13} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading number="07" title="Achievements" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const Icon  = iconMap[a.icon];
            const color = typeColors[a.type];
            const hasImages = a.images && a.images.length > 0;
            return (
              <motion.div key={a.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card card-gradient-border p-5 flex flex-col hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon + type badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${color.border} ${color.bg}`}>
                    {Icon && <Icon size={18} className={color.text} />}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${color.border} ${color.bg} ${color.text}`}>
                    {a.type}
                  </span>
                </div>

                <h3 className="text-white font-bold text-sm leading-snug mb-2">{a.title}</h3>
                <p className="text-muted text-xs leading-relaxed flex-1">{a.description}</p>

                {/* Images with slider */}
                {hasImages && <ImageSlider images={a.images!} />}

                {/* Date */}
                <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-white/[0.06]">
                  <div className={`w-1 h-1 rounded-full ${color.dot}`} />
                  <span className="text-muted-2 text-[10px] font-mono">{a.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
