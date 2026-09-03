"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
}

const FPS   = 30;                      // cap at 30 fps — saves ~50% CPU vs 60fps
const FRAME = 1000 / FPS;
const MAX_DIST = 140;

export default function NeuralNetBg({ nodeCount = 38 }: { nodeCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Initialise nodes
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r:  Math.random() * 1.6 + 0.5,
    }));

    let animId: number;
    let lastTime = 0;

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw);

      // FPS throttle — skip frame if not enough time has passed
      if (now - lastTime < FRAME) return;
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Draw edges — O(n²) but n is small (38)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= MAX_DIST) continue;

          const alpha = (1 - dist / MAX_DIST) * 0.11;
          // Alternate cyan / violet per pair index
          ctx.strokeStyle = (i + j) % 3 === 0
            ? `rgba(167,139,250,${alpha})`
            : `rgba(34,211,238,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        ctx.fillStyle = i % 3 === 0
          ? "rgba(167,139,250,0.45)"
          : "rgba(34,211,238,0.45)";
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
