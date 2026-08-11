"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed grid of subtle dots. Colored glow clusters orbit and weave across
 * the grid so individual dots light up and travel like a living logo mark.
 * The grid never moves — only which dots are lit changes each frame.
 */
export default function DotMatrixBackground({
  className = "",
  bgColor = "#0b0b0f",
  baseDotColor = "rgba(255,255,255,0.07)",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia("(max-width: 768px)").matches ||
        window.matchMedia("(pointer: coarse)").matches);

    const spacing = isMobile ? 18 : 14;
    const dotRadius = isMobile ? 0.95 : 1.15;
    const clusterCount = isMobile ? 4 : 6;

    // Kivora brand: purple, pink, teal, warm yellow accents
    const palette = [
      { r: 201, g: 148, b: 255 }, // purple
      { r: 255, g: 148, b: 231 }, // pink
      { r: 69, g: 173, b: 148 }, // teal
      { r: 180, g: 120, b: 255 }, // soft violet
      { r: 255, g: 180, b: 80 }, // warm gold
      { r: 100, g: 200, b: 180 }, // mint
    ];

    const makeCluster = (w, h, i) => {
      const color = palette[i % palette.length];
      const n = clusterCount;
      const cx = w * (0.15 + (0.7 * (i + 0.5)) / n);
      const cy = h * (0.25 + 0.5 * ((i % 3) / 2));
      const rx = w * (0.18 + (i % 3) * 0.06);
      const ry = h * (0.28 + (i % 2) * 0.12);
      const period = 18000 + (i * 3700) % 22000;
      const omega = (Math.PI * 2) / period;
      const dir = i % 2 === 0 ? 1 : -1;
      const mode = i % 3;

      return {
        cx,
        cy,
        rx,
        ry,
        omega: omega * dir,
        phase: (i / n) * Math.PI * 2,
        mode,
        radius: isMobile ? 70 + (i % 3) * 25 : 90 + (i % 4) * 30,
        pulsePeriod: 8000 + i * 1500,
        pulsePhase: Math.random() * Math.PI * 2,
        color,
        x: cx,
        y: cy,
      };
    };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let cols = 0;
    let rows = 0;
    let clusters = [];
    let gridX = [];
    let gridY = [];

    const rebuildGrid = () => {
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : { width: window.innerWidth, height: 400 };

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;

      gridX = new Float32Array(cols);
      gridY = new Float32Array(rows);
      for (let c = 0; c < cols; c++) gridX[c] = c * spacing;
      for (let r = 0; r < rows; r++) gridY[r] = r * spacing;

      clusters = Array.from({ length: clusterCount }, (_, i) =>
        makeCluster(width, height, i)
      );
    };

    rebuildGrid();

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(rebuildGrid, 120);
    };
    window.addEventListener("resize", onResize);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawStatic = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = baseDotColor;
      for (let r = 0; r < rows; r++) {
        const y = gridY[r];
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.arc(gridX[c], y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    if (prefersReduced) {
      drawStatic();
      return () => {
        window.removeEventListener("resize", onResize);
        clearTimeout(resizeTimer);
      };
    }

    const tick = (now) => {
      const t = now;

      for (let i = 0; i < clusters.length; i++) {
        const cl = clusters[i];
        const a = t * cl.omega + cl.phase;

        if (cl.mode === 0) {
          cl.x = cl.cx + Math.cos(a) * cl.rx;
          cl.y = cl.cy + Math.sin(a) * cl.ry;
        } else if (cl.mode === 1) {
          cl.x = cl.cx + Math.cos(a) * cl.rx * 1.15;
          cl.y = cl.cy + Math.sin(a * 0.85 + 0.4) * cl.ry;
        } else {
          cl.x = cl.cx + Math.sin(a) * cl.rx;
          cl.y = cl.cy + Math.sin(a * 2) * cl.ry * 0.85;
        }
      }

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        const y = gridY[r];
        for (let c = 0; c < cols; c++) {
          const x = gridX[c];

          let glowR = 0;
          let glowG = 0;
          let glowB = 0;
          let glowA = 0;

          for (let i = 0; i < clusters.length; i++) {
            const cl = clusters[i];
            const dx = x - cl.x;
            const dy = y - cl.y;
            const dist2 = dx * dx + dy * dy;
            const r2 = cl.radius * cl.radius;
            if (dist2 > r2) continue;

            const falloff = 1 - dist2 / r2;
            const pulse =
              0.55 +
              0.45 *
                (0.5 +
                  0.5 *
                    Math.sin(
                      (t / cl.pulsePeriod) * Math.PI * 2 + cl.pulsePhase
                    ));
            const intensity = falloff * falloff * pulse;

            glowR += cl.color.r * intensity;
            glowG += cl.color.g * intensity;
            glowB += cl.color.b * intensity;
            glowA += intensity;
          }

          if (glowA > 0.015) {
            const a = Math.min(1.2, glowA);
            const inv = 1 / Math.max(glowA, 0.001);
            const rr = Math.min(255, glowR * inv + 18);
            const gg = Math.min(255, glowG * inv + 8);
            const bb = Math.min(255, glowB * inv);
            const alpha = Math.min(0.95, 0.12 + a * 0.7);
            ctx.fillStyle = `rgba(${rr | 0},${gg | 0},${bb | 0},${alpha.toFixed(3)})`;
            const rad = dotRadius + Math.min(a, 1) * 1.6;
            ctx.beginPath();
            ctx.arc(x, y, rad, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = baseDotColor;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, [bgColor, baseDotColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
