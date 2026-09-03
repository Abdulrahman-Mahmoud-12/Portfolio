"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Eye, BarChart2, FlaskConical, Check, type LucideIcon } from "lucide-react";
import type { Service } from "@/content/types";

const iconMap: Record<string, LucideIcon> = { Brain, Eye, BarChart2, FlaskConical };

interface ServiceFlipCardProps {
  service: Service;
  index: number;
}

export default function ServiceFlipCard({ service, index }: ServiceFlipCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[service.icon];
  const isCyan    = service.accentColor === "accent";
  const accentCls = isCyan ? "text-accent"   : "text-accent-2";
  const borderCls = isCyan ? "border-accent/25"   : "border-accent-2/25";
  const bgCls     = isCyan ? "bg-accent/10"   : "bg-accent-2/10";
  const glowCls   = isCyan ? "shadow-glow-accent" : "shadow-glow-violet";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      /* zIndex lives in style (not animate) — Framer Motion can't animate zIndex */
      style={{
        perspective: 1200,
        position: "relative",
        zIndex: hovered ? 10 : 1,
      }}
      className="h-[380px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Scale wrapper — separate from the flip wrapper */}
      <motion.div
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
      >
        {/* Flip wrapper */}
        <motion.div
          animate={{ rotateY: hovered ? 180 : 0 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full h-full"
        >
          {/* ── FRONT ── */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className={`absolute inset-0 card card-gradient-border flex flex-col items-center justify-center p-8 overflow-hidden ${hovered ? glowCls : ""} transition-shadow duration-300`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`} />
            <div aria-hidden className={`absolute bottom-0 right-0 opacity-10 ${accentCls}`}>
              {Icon && <Icon size={140} />}
            </div>
            <div className={`relative z-10 w-16 h-16 rounded-2xl ${bgCls} border ${borderCls} flex items-center justify-center mb-6`}>
              {Icon && <Icon size={32} className={accentCls} />}
            </div>
            <h3 className="relative z-10 text-white font-display font-bold text-xl text-center mb-3 leading-snug">
              {service.title}
            </h3>
            <p className="relative z-10 text-muted text-sm text-center leading-relaxed">
              {service.description}
            </p>
            <p className={`relative z-10 mt-6 text-xs font-mono ${accentCls} opacity-60`}>
              Hover to see details →
            </p>
          </div>

          {/* ── BACK ── */}
          <div
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            className={`absolute inset-0 card flex flex-col p-8 overflow-hidden ${glowCls}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`} />
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-xl ${bgCls} border ${borderCls}`}>
                  {Icon && <Icon size={18} className={accentCls} />}
                </div>
                <h3 className="text-white font-bold text-base leading-snug">{service.title}</h3>
              </div>
              <div className={`mb-5 h-px ${isCyan ? "bg-gradient-to-r from-accent/30 to-transparent" : "bg-gradient-to-r from-accent-2/30 to-transparent"}`} />
              <p className={`text-[10px] font-mono uppercase tracking-widest mb-4 ${accentCls} opacity-70`}>
                {"// What's included"}
              </p>
              <ul className="space-y-3 flex-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted text-sm">
                    <Check size={13} className={`mt-0.5 shrink-0 ${accentCls}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`mt-5 w-full py-2.5 rounded-xl border ${borderCls} ${accentCls} text-xs font-semibold text-center transition-colors hover:opacity-80`}
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
