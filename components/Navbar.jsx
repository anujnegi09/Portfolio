"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { portfolio as p } from "@/data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav", { y: -80, duration: 0.9, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ids = p.nav.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" } // section touching the middle of the screen = active
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    // last section is short, so force it active when you hit the page bottom
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        setActive(ids[ids.length - 1]);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo">{p.logo}<i>.</i></a>
        <nav className="links">
          {p.nav.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? "on" : ""}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn small primary" href={`mailto:${p.email}`}>Hire me</a>
      </div>
    </header>
  );
}