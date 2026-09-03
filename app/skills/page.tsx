"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import PageLayout from "@/components/PageLayout";

const categoryColors: Record<string, { border: string; text: string; bg: string; dot: string }> = {
  "Programming":         { border: "border-accent/40",   text: "text-accent",   bg: "bg-accent/10",   dot: "bg-accent" },
  "Machine Learning & AI":{ border: "border-accent-2/40", text: "text-accent-2", bg: "bg-accent-2/10", dot: "bg-accent-2" },
  "Computer Vision":     { border: "border-accent/40",   text: "text-accent",   bg: "bg-accent/10",   dot: "bg-accent" },
  "Data & Analysis":     { border: "border-accent-2/40", text: "text-accent-2", bg: "bg-accent-2/10", dot: "bg-accent-2" },
  "Tools & Platforms":   { border: "border-accent/40",   text: "text-accent",   bg: "bg-accent/10",   dot: "bg-accent" },
  "Soft Skills":         { border: "border-accent-2/40", text: "text-accent-2", bg: "bg-accent-2/10", dot: "bg-accent-2" },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const chip = {
  hidden:  { opacity: 0, scale: 0.7, y: 12 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { type: "spring", stiffness: 200, damping: 18 } },
};

export default function SkillsPage() {
  const [active, setActive] = useState(skills[0].category);
  const group   = skills.find((s) => s.category === active)!;
  const colors  = categoryColors[active] ?? categoryColors["Programming"];

  return (
    <PageLayout>
      <div aria-hidden className="fixed top-0 left-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeading
        number="03"
        title="Skills & Technologies"
        subtitle="Select a category to explore the toolkit."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {skills.map((g) => {
          const c = categoryColors[g.category] ?? categoryColors["Programming"];
          const isActive = g.category === active;
          return (
            <button
              key={g.category}
              onClick={() => setActive(g.category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? `${c.bg} ${c.border} ${c.text}`
                  : "border-white/10 text-muted hover:border-white/20 hover:text-white"
              }`}
            >
              {g.category}
            </button>
          );
        })}
      </div>

      {/* Animated skill chips area */}
      <div className="card card-gradient-border p-8 min-h-[280px] relative overflow-hidden">
        {/* Ghost category name */}
        <span aria-hidden className="absolute -top-2 -right-2 text-[6rem] font-display font-black text-white/[0.03] leading-none pointer-events-none select-none">
          {active.split(" ")[0]}
        </span>

        {/* Category header */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`w-2 h-6 rounded-full ${colors.dot}`} />
          <h2 className={`font-display font-bold text-2xl ${colors.text}`}>{group.category}</h2>
          <span className="text-muted text-sm ml-auto font-mono">{group.skills.length} skills</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="flex flex-wrap gap-3"
          >
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={chip}
                className={`skill-tag text-sm px-4 py-2 rounded-xl border ${colors.border} ${colors.text} ${colors.bg} hover:scale-105 cursor-default`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* All skills compact overview */}
      <div className="mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-12" />
        <h2 className="text-white font-display font-bold text-xl mb-8">Full Overview</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((g, i) => {
            const c = categoryColors[g.category] ?? categoryColors["Programming"];
            return (
              <motion.button
                key={g.category}
                onClick={() => { setActive(g.category); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card card-gradient-border p-5 text-left hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-1.5 h-4 rounded-full ${c.dot}`} />
                  <span className={`text-sm font-semibold ${c.text}`}>{g.category}</span>
                </div>
                <p className="text-muted text-xs">{g.skills.slice(0, 3).join(" · ")}{g.skills.length > 3 ? ` +${g.skills.length - 3} more` : ""}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
