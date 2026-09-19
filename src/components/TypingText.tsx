"use client";

import { useEffect, useState } from "react";

export interface TypedSegment {
  text: string;
  className?: string;
}

type Phase = "idle" | "typing" | "deleting" | "pausing" | "settled";

export function TypedText({
  segments,
  speed = 40,
  deleteSpeed = 25,
  startDelay = 800,
  holdTime = 1400,
  deletePause = 600,
}: {
  segments: TypedSegment[];
  speed?: number;
  deleteSpeed?: number;
  startDelay?: number;
  holdTime?: number;
  deletePause?: number;
}) {
  const total = segments.reduce((acc, s) => acc + s.text.length, 0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(prefersReducedMotion ? total : 0);
  const [phase, setPhase] = useState<Phase>(
    prefersReducedMotion ? "settled" : "idle"
  );

  useEffect(() => {
    if (phase !== "idle") return;
    const t = setTimeout(() => setPhase("typing"), startDelay);
    return () => clearTimeout(t);
  }, [phase, startDelay]);

  useEffect(() => {
    if (phase === "typing" && count < total) {
      const t = setTimeout(() => setCount((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (phase === "typing" && count >= total) {
      const t = setTimeout(() => setPhase("deleting"), holdTime);
      return () => clearTimeout(t);
    }
    if (phase === "deleting" && count > 0) {
      const t = setTimeout(() => setCount((c) => c - 1), deleteSpeed);
      return () => clearTimeout(t);
    }
    if (phase === "deleting" && count <= 0) {
      const t = setTimeout(() => setPhase("pausing"), deletePause);
      return () => clearTimeout(t);
    }
    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("typing"), startDelay);
      return () => clearTimeout(t);
    }
  }, [phase, count, speed, deleteSpeed, holdTime, deletePause, startDelay, total]);

  const rendered = segments.map((seg, i) => {
    const charsBefore = segments
      .slice(0, i)
      .reduce((sum, s) => sum + s.text.length, 0);
    const remaining = Math.max(count - charsBefore, 0);
    const take = Math.min(remaining, seg.text.length);
    return (
      <span key={seg.text} className={seg.className} aria-hidden="true">
        {seg.text.slice(0, take)}
      </span>
    );
  });

  const fullText = segments.map((s) => s.text).join("");

  return (
    <span className="inline-block" aria-label={fullText}>
      {rendered}
      <span
        aria-hidden="true"
        className="typing-caret text-yellow-400"
      />
    </span>
  );
}