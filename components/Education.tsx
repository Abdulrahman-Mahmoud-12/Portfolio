"use client";

import { motion } from "framer-motion";
import { education } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading number="02" title="Education" />

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-16">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          {/* Timeline node */}
          <div className="absolute left-[4px] sm:left-[18px] top-6 w-4 h-4 rounded-full border-2 border-accent bg-accent/20 shadow-glow-accent" />

          {/* Date label */}
          <div className="absolute -left-1 sm:left-0 top-4 flex items-center">
            <span className="hidden sm:block text-accent font-mono text-xs font-semibold tracking-wider whitespace-nowrap -rotate-90 origin-center translate-x-1 translate-y-6">
              Aug 2023
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="card card-gradient-border p-7 max-w-2xl"
          >
            {/* Date pill (mobile) */}
            <span className="sm:hidden inline-block text-accent font-mono text-xs font-semibold tracking-wider mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
              Aug 2023 – Present
            </span>

            {/* Degree */}
            <h3 className="text-white font-display font-bold text-xl leading-snug mb-1">
              {education.degree}
            </h3>
            <p className="text-accent text-sm font-medium mb-1">{education.faculty}</p>
            <p className="text-muted text-sm mb-5">{education.institution}</p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-accent/25 to-transparent mb-5" />

            {/* Meta */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
              <div>
                <p className="text-muted-2 text-[10px] font-mono uppercase tracking-wider mb-0.5">Major</p>
                <p className="text-white text-sm font-semibold">{education.major}</p>
              </div>
              <div>
                <p className="text-muted-2 text-[10px] font-mono uppercase tracking-wider mb-0.5">GPA</p>
                <p className="text-white text-sm font-semibold">{education.gpa} <span className="text-green-400 text-xs">({education.grade})</span></p>
              </div>
            </div>

            {/* Coursework */}
            <p className="text-accent/70 font-mono text-[10px] uppercase tracking-widest mb-3">{"// Relevant Courses"}</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="skill-tag text-xs">{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
