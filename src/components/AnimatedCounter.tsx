"use client";
import { useEffect, useRef, useState } from "react";

function parse(val: string): { num: number; prefix: string; suffix: string } {
  const clean = val.replace(/,/g, "");
  const match = clean.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return { num: parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export default function AnimatedCounter({ value }: { value: string }) {
  const { num, prefix, suffix } = parse(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const start = performance.now();
          const duration = 1400;
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * num));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  const displayNum =
    value.includes(",") && count >= 1000
      ? count.toLocaleString("en-IN")
      : count.toString();

  return (
    <span ref={ref}>
      {prefix}
      {displayNum}
      {suffix}
    </span>
  );
}
