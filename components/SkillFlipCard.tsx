"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Eye,
  BarChart2,
  Wrench,
  Users,
  MessageCircle,
  Layers,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import type { SkillGroup } from "@/content/types";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Eye,
  BarChart2,
  Wrench,
  Users,
  MessageCircle,
  Layers,
  Cloud,
  Tool: Wrench,
};

/* Bash-typed list that activates when the card is flipped */
function BashList({ items, active }: { items: string[]; active: boolean }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!active) {
      setShown(0);
      return;
    }
    if (shown >= items.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 120);
    return () => clearTimeout(t);
  }, [active, shown, items]);

  return (
    <div className="font-mono text-xs space-y-2 w-full">
      <div className="text-green-400/80 mb-3">{"$ ./skills.sh --list"}</div>
      {items.slice(0, shown).map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-start gap-2"
        >
          <span className="text-accent/70 shrink-0" aria-hidden="true">
            •
          </span>
          <span className="text-white/85 leading-snug">{item}</span>
        </motion.div>
      ))}
      {shown < items.length && active && (
        <span className="text-accent/60 animate-pulse text-sm">|</span>
      )}
    </div>
  );
}

interface SkillFlipCardProps {
  group: SkillGroup;
  index: number;
}

export default function SkillFlipCard({ group, index }: SkillFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const Icon = iconMap[group.icon];
  const isViolet = index % 2 === 1;
  const accentCls = isViolet ? "text-accent-2" : "text-accent";
  const borderCls = isViolet ? "border-accent-2/30" : "border-accent/30";
  const bgCls = isViolet ? "bg-accent-2/10" : "bg-accent/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      style={{
        perspective: 1000,
        position: "relative",
        zIndex: flipped ? 10 : 1,
      }}
      className="h-[360px] sm:h-[340px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* FRONT */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 card card-gradient-border flex flex-col items-center justify-center gap-4 p-6 ${flipped ? "" : "hover:border-accent/20"} transition-colors duration-300`}
        >
          <div
            className={`w-14 h-14 rounded-2xl ${bgCls} border ${borderCls} flex items-center justify-center`}
          >
            {Icon && <Icon size={26} className={accentCls} />}
          </div>
          <h3
            className={`font-bold text-sm text-center leading-snug ${accentCls}`}
          >
            {group.category}
          </h3>
          <p className="text-muted/50 text-[10px] font-mono">
            hover to explore →
          </p>
        </div>

        {/* BACK */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className={`absolute inset-0 card p-5 overflow-y-auto ${isViolet ? "border-accent-2/25 shadow-glow-violet" : "border-accent/25 shadow-glow-accent"}`}
        >
          <div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${isViolet ? "via-accent-2/60" : "via-accent/60"} to-transparent`}
          />
          <div className="flex items-center gap-2 mb-4">
            <div
              className={`w-1.5 h-4 rounded-full ${isViolet ? "bg-accent-2" : "bg-accent"}`}
            />
            <span className={`text-xs font-bold font-mono ${accentCls}`}>
              {group.category}
            </span>
          </div>
          <BashList items={group.skills} active={flipped} />
        </div>
      </motion.div>
    </motion.div>
  );
}
