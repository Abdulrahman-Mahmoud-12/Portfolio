"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { experience } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading number="06" title="Experience" />

        <div className="relative pl-8 sm:pl-16 space-y-10">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          {experience.map((item, i) => (
            <div key={i} className="relative">
              {/* Timeline node */}
              <div className="absolute left-[4px] sm:left-[18px] top-6 w-4 h-4 rounded-full border-2 border-accent bg-accent/20 shadow-glow-accent" />

              {/* Start date on the line (desktop) */}
              <div className="hidden sm:flex absolute -left-[110px] top-4 w-[52px] justify-end">
                <span className="text-accent font-mono text-[10px] font-semibold tracking-wider text-right leading-tight">
                  {item.startDate}
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card card-gradient-border p-7"
              >
                {/* Date pill (mobile) */}
                <span className="sm:hidden inline-block text-accent font-mono text-xs font-semibold tracking-wider mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
                  {item.period}
                </span>

                {/* Header: position + period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-white font-display font-bold text-xl">
                    {item.title}
                  </h3>
                  <span className="hidden sm:inline-block text-muted font-mono text-xs border border-white/10 px-3 py-1 rounded-full shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-accent text-sm font-medium mb-1">
                  {item.company}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-accent/25 to-transparent my-5" />

                {/* Bullets */}
                <ul className="space-y-3">
                  {item.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.07 + 0.2 }}
                      className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
