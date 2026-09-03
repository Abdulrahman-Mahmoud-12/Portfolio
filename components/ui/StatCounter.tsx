"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

export default function StatCounter({ value, suffix, label, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 group">
      <span className="text-3xl sm:text-4xl font-display font-black tabular-nums gradient-text">
        {count}{suffix}
      </span>
      <span className="text-[10px] text-muted uppercase tracking-[0.15em] text-center">
        {label}
      </span>
    </div>
  );
}
