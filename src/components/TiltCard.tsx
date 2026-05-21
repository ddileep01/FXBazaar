"use client";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = "", maxTilt = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    // Strip any CSS animation so inline transform takes full control
    if (!el.dataset.tiltReady) {
      el.style.animation = "none";
      el.dataset.tiltReady = "1";
    }
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transition = "transform 0.08s ease";
    el.style.transform = `perspective(700px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg) scale3d(1.03,1.03,1.03)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
