"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    gsap.to(ref.current, {
      rotateY: (x - 0.5) * 10, rotateX: (0.5 - y) * 10,
      transformPerspective: 900, duration: 0.4, ease: "power2.out",
    });
    ref.current.style.setProperty("--gx", `${x * 100}%`);
    ref.current.style.setProperty("--gy", `${y * 100}%`);
  };
  const leave = () =>
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave} data-reveal>
      {children}
    </div>
  );
}
