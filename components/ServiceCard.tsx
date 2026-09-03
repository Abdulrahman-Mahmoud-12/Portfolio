"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  BarChart2,
  FlaskConical,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/content/types";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Eye,
  BarChart2,
  FlaskConical,
};

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[service.icon];
  const isCyan = service.accentColor === "accent";
  const accentCls = isCyan ? "text-accent" : "text-accent-2";
  const borderCls = isCyan ? "border-accent/30" : "border-accent-2/30";
  const bgCls = isCyan ? "bg-accent/10" : "bg-accent-2/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      style={{
        perspective: 1400,
        position: "relative",
        zIndex: hovered ? 50 : 1,
      }}
      className="h-[420px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Scale up on hover — "swims" above other cards */}
      <motion.div
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
      >
        {/* Flip */}
        <motion.div
          animate={{ rotateY: hovered ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full h-full"
        >
          {/* ── FRONT ── image + name + subtitle */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0 card card-gradient-border overflow-hidden"
          >
            {/* Service image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent" />
              {/* Icon */}
              <div
                className={`absolute bottom-3 left-4 w-10 h-10 rounded-xl ${bgCls} border ${borderCls} flex items-center justify-center`}
              >
                {Icon && <Icon size={18} className={accentCls} />}
              </div>
            </div>
            {/* Text */}
            <div className="p-4">
              <h3 className="text-white font-bold text-base leading-snug mb-1">
                {service.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                {service.subtitle}
              </p>
              <p
                className={`mt-3 text-[10px] font-mono ${accentCls} opacity-60`}
              >
                hover to learn more →
              </p>
            </div>
          </div>

          {/* ── BACK ── image left + details right */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            className={`absolute inset-0 card overflow-hidden flex ${isCyan ? "shadow-glow-accent border-accent/30" : "shadow-glow-violet border-accent-2/30"}`}
          >
            {/* Left: image */}
            <div className="relative w-2/5 shrink-0 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="100px"
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent ${isCyan ? "to-surface" : "to-surface"}`}
              />
            </div>

            {/* Right: details */}
            <div className="flex-1 flex flex-col p-5 overflow-y-auto">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`p-1.5 rounded-lg ${bgCls} border ${borderCls}`}
                >
                  {Icon && <Icon size={14} className={accentCls} />}
                </div>
                <h3 className="text-white font-bold text-sm leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted text-[11px] leading-relaxed mb-4">
                {service.description}
              </p>
              <div
                className={`h-px mb-4 ${isCyan ? "bg-gradient-to-r from-accent/30 to-transparent" : "bg-gradient-to-r from-accent-2/30 to-transparent"}`}
              />
              <p
                className={`text-[9px] font-mono uppercase tracking-widest mb-3 ${accentCls} opacity-70`}
              >
                {"// includes"}
              </p>
              <ul className="space-y-2 flex-1">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-muted text-[11px] leading-snug"
                  >
                    <Check
                      size={10}
                      className={`${accentCls} mt-0.5 shrink-0`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-3 text-center text-[10px] font-semibold py-2 rounded-lg border ${borderCls} ${accentCls} hover:opacity-80 transition-opacity`}
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
