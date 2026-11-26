"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  className = "",
}: FadeInProps) {
  const reducedMotion = useReducedMotion();
  const offset = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: -64 },
    right: { x: 64 },
  }[direction];

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, ...offset, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px", amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`scroll-reveal ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: FadeInProps) {
  const reducedMotion = useReducedMotion();
  const directionMap = {
    up: { y: 18 },
    down: { y: -18 },
    left: { x: 18 },
    right: { x: -18 },
  };

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reducedMotion ? 0 : duration, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: Omit<FadeInProps, "direction">) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reducedMotion ? 0 : duration, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reducedMotion ? 0 : 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left";
}) {
  const reducedMotion = useReducedMotion();
  const initialPosition = direction === "left" ? { opacity: 0, x: -48 } : { opacity: 0, y: 12 };

  return (
    <motion.div
      variants={{
        hidden: reducedMotion ? { opacity: 1, x: 0, y: 0 } : initialPosition,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: reducedMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ y: reducedMotion ? 0 : 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const countTextRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const countAnimationRef = useRef<ReturnType<typeof animate> | null>(null);
  const hasStartedRef = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    return count.on("change", (value) => {
      if (countTextRef.current) {
        countTextRef.current.textContent = String(Math.round(value));
      }
    });
  }, [count]);

  useEffect(() => {
    return () => countAnimationRef.current?.stop();
  }, []);

  const startCount = () => {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    if (reducedMotion) {
      count.set(target);
      return;
    }

    countAnimationRef.current = animate(count, target, { duration: 1.6, ease: "easeOut" });
  };

  return (
    <motion.span
      aria-label={`${target}${suffix}`}
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      onViewportEnter={startCount}
    >
      <span ref={countTextRef}>0</span>
      {suffix}
    </motion.span>
  );
}
