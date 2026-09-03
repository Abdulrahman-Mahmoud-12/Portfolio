"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Eye, Mail, Cpu, Network, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { hero } from "@/content/site";
import StatCounter from "@/components/ui/StatCounter";

const NeuralNetBg = dynamic(() => import("@/components/NeuralNetBg"), {
  ssr: false,
});

/* ── Typewriter for roles ── */
function TypewriterRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const cur = roles[index];
    let t: NodeJS.Timeout;
    if (!deleting && displayed.length < cur.length)
      t = setTimeout(
        () => setDisplayed(cur.slice(0, displayed.length + 1)),
        55,
      );
    else if (!deleting && displayed.length === cur.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      t = setTimeout(
        () => setDisplayed(cur.slice(0, displayed.length - 1)),
        30,
      );
    else {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index, roles]);
  return (
    <span className="font-mono text-lg sm:text-xl">
      <span className="text-accent">{">"}</span>{" "}
      <span className="text-accent/90 font-semibold">{displayed}</span>
      <span className="text-accent animate-pulse">_</span>
    </span>
  );
}

/* ── 3D tilt profile ── */
function TiltImage() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rx = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const ry = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px] cursor-default"
    >
      <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl animate-pulse-slow" />
      <div className="absolute -inset-1.5 rounded-full border border-accent/10 animate-spin-slow" />
      {/* Corner brackets */}
      {[
        "top-2 left-2 border-t-2 border-l-2",
        "top-2 right-2 border-t-2 border-r-2",
        "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-2 right-2 border-b-2 border-r-2",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-5 h-5 ${cls} border-accent/70 z-20 rounded-sm`}
        />
      ))}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-accent/15 shadow-glow-accent">
        <Image
          src="/images/profile.jpg"
          alt="Abdelrahman Mahmoud"
          fill
          sizes="(max-width:768px) 288px, 390px"
          className="object-cover object-top"
          priority
        />
      </div>
      {/* Badges */}
      <motion.div
        className="absolute -bottom-5 -left-5 z-30 flex items-center gap-2 px-3 py-2 rounded-xl border border-accent/20 bg-surface/90 backdrop-blur-md text-xs font-medium"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/70">Open to opportunities</span>
      </motion.div>
      <motion.div
        className="absolute -top-5 -right-5 z-30 flex items-center gap-2 px-3 py-2 rounded-xl border border-accent-2/20 bg-surface/90 backdrop-blur-md text-xs font-medium"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Cpu size={12} className="text-accent-2" />
        <span className="text-white/70">AI / ML</span>
      </motion.div>
    </motion.div>
  );
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <NeuralNetBg nodeCount={40} />
      {/* Orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px] animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent-2/5 rounded-full blur-[100px] animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — text */}
          <div className="order-2 lg:order-1 space-y-5">
            {/* Slogan */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fade}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.05] tracking-tight"
            >
              <span className="text-white/80">{hero.slogan}</span>
              <br />
              <span className="gradient-text">{hero.sloganAccent}</span>
            </motion.div>

            {/* BIG NAME */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fade}
            >
              {/* Label chips */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-accent text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />{" "}
                  AI & ML Engineer
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-2/20 bg-accent-2/6 text-accent-2 text-xs font-mono">
                  <Network size={10} /> Computer Vision
                </span>
              </div>
              <p className="text-muted font-mono text-xs tracking-[0.25em] uppercase mb-1">
                Hello, I&apos;m
              </p>
              <h1 className="font-display font-black leading-[1.0] tracking-tight">
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white block">
                  {hero.name}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl gradient-text block">
                  {hero.nameAccent}
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role — in accent color */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fade}
              className="h-9"
            >
              <TypewriterRoles roles={hero.roles} />
            </motion.div>

            {/* Subtext */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fade}
              className="text-muted text-sm sm:text-base leading-relaxed max-w-lg border-l-2 border-accent/30 pl-4"
            >
              {hero.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fade}
              className="flex flex-wrap gap-3 pt-1"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-accent to-cyan-300 text-bg-base hover:shadow-glow-accent transition-all active:scale-[0.97]"
              >
                {hero.ctaProjects}
              </button>
              <a
                href={hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-accent/50 text-accent hover:bg-accent/8 hover:shadow-glow-accent transition-all active:scale-[0.97]"
              >
                <Eye size={16} /> {hero.ctaCV}
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl text-muted hover:text-white hover:bg-white/5 transition-all active:scale-[0.97]"
              >
                <Mail size={16} /> {hero.ctaContact}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fade}
            >
              <div className="h-px bg-gradient-to-r from-accent/25 to-transparent mb-5" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hero.stats.map((s) => (
                  <StatCounter
                    key={s.label}
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          >
            <TiltImage />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-1 text-muted/50 hover:text-accent transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
