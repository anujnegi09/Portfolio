"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { portfolio as p } from "@/data/portfolio";

// ID card hanging from the navbar. Drag it — it swings back like a real lanyard.
export default function LanyardCard() {
  const anchor = useRef(null);
  const swing = useRef(null);
  const idle = useRef(null);
  const [imgOk, setImgOk] = useState(true);

  const startIdle = () => {
    idle.current?.kill();
    idle.current = gsap.fromTo(
      swing.current,
      { rotation: -2.5 },
      { rotation: 2.5, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 }
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(swing.current, { transformOrigin: "50% 64px" });
      gsap.from(swing.current, {
        y: -460, duration: 1.4, ease: "bounce.out", delay: 0.3,
        onComplete: startIdle,
      });
    });
    return () => { idle.current?.kill(); ctx.revert(); };
  }, []);

  const onDown = (e) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    idle.current?.kill();
    gsap.killTweensOf(swing.current);
    el.dataset.drag = "1";
  };
  const onMove = (e) => {
    if (e.currentTarget.dataset.drag !== "1") return;
    const r = anchor.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = Math.max(e.clientY - (r.top + 64), 60);
    const angle = gsap.utils.clamp(-40, 40, (-Math.atan2(dx, dy) * 180) / Math.PI);
    gsap.to(swing.current, { rotation: angle, duration: 0.25, ease: "power2.out" });
  };
  const onUp = (e) => {
    e.currentTarget.dataset.drag = "0";
    gsap.to(swing.current, {
      rotation: 0, duration: 2.2, ease: "elastic.out(1, 0.28)", onComplete: startIdle,
    });
  };

  const initials = p.name.slice(0, 2).toUpperCase();

  return (
    <div className="lanyard" ref={anchor}>
      <div className="swing" ref={swing}>
        <div className="strap"><span>{`${p.name} · ${p.role} · `.toUpperCase().repeat(6)}</span></div>
        <div className="clip" />
        <div
          className="idcard"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <div className="slot" />
          <p className="mono tiny">DEVELOPER ID · {p.card.id}</p>
          <div className="photo">
            {imgOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.photo} alt={p.name} draggable={false} onError={() => setImgOk(false)} />
            ) : (
              <div className="initials">{initials}</div>
            )}
          </div>
          <h3>{p.name}</h3>
          <p className="role">{p.role}</p>
          <div className="rows mono">
            <div><span>BASE</span><b>{p.location}</b></div>
            <div><span>STATUS</span><b><i className="dot" /> {p.card.status}</b></div>
          </div>
          <div className="barcode" />
        </div>
      </div>
    </div>
  );
}
