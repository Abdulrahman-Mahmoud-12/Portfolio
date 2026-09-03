"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";

/* ── Bash-style sequential question typer ── */
function BashQuestions({ questions }: { questions: string[] }) {
  const [lines, setLines]             = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [qIndex, setQIndex]           = useState(0);
  const [started, setStarted]         = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Start when visible
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || qIndex >= questions.length) return;
    const q = questions[qIndex];
    if (currentText.length < q.length) {
      const t = setTimeout(() => setCurrentText(q.slice(0, currentText.length + 1)), 28);
      return () => clearTimeout(t);
    }
    // Finished typing this question — push to completed lines
    const t = setTimeout(() => {
      setLines((l) => [...l, q]);
      setCurrentText("");
      setQIndex((i) => i + 1);
    }, 350);
    return () => clearTimeout(t);
  }, [started, currentText, qIndex, questions]);

  return (
    <div ref={ref} className="card p-5 font-mono text-sm bg-surface/80 border-accent/15 overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-muted/50 text-[10px] tracking-wider">bash — python3 about.py</span>
      </div>
      {/* Prompt line */}
      <div className="text-green-400/70 text-xs mb-3">{"$ python3 about.py"}</div>
      {/* Completed lines */}
      {lines.map((line, i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="text-accent/60 shrink-0 mt-0.5">▸</span>
          <span className="text-white/80 leading-relaxed">{line}</span>
        </div>
      ))}
      {/* Currently typing line */}
      {qIndex < questions.length && (
        <div className="flex items-start gap-2 mb-2">
          <span className="text-accent/60 shrink-0 mt-0.5">▸</span>
          <span className="text-white/80 leading-relaxed">
            {currentText}
            <span className="text-accent animate-pulse">|</span>
          </span>
        </div>
      )}
    </div>
  );
}

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.55, ease: "easeOut" } }),
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">

          {/* Tall photo — LEFT side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="hidden lg:block">
            <div className="relative h-[520px] w-full rounded-2xl overflow-hidden border border-accent/15 shadow-glow-accent">
              <Image src={about.sidePhoto} alt="Abdelrahman Mahmoud" fill sizes="280px" className="object-cover object-top" />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/50 to-transparent" />
              {/* Decorative corner lines */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/60 rounded-tl-sm" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/60 rounded-tr-sm" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/60 rounded-bl-sm" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/60 rounded-br-sm" />
            </div>
          </motion.div>

          {/* Text content — RIGHT */}
          <div className="space-y-5">
            {/* Paragraphs */}
            {about.paragraphs.map((para, i) => (
              <motion.p key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
                className="text-muted text-base leading-relaxed">
                {para}
              </motion.p>
            ))}

            {/* Bash question terminal */}
            <motion.div custom={about.paragraphs.length} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3 mt-2">
                {"// The questions that drive me"}
              </p>
              <BashQuestions questions={about.questions} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
