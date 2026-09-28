"use client";
import { useState } from "react";
import { portfolio as p } from "@/data/portfolio";

// No backend needed: opens the visitor's mail app with the message filled in.
export default function ContactForm() {
  const [f, setF] = useState({ name: "", message: "" });
  const send = () => {
    const subject = encodeURIComponent(`Portfolio message from ${f.name || "a visitor"}`);
    const body = encodeURIComponent(f.message);
    window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`;
  };
  return (
    <div className="form">
      <label>Your name
        <input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Jane Doe" />
      </label>
      <label>Message
        <textarea rows={5} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder="Tell me about your project…" />
      </label>
      <button type="button" className="btn primary" onClick={send}>Send message</button>
    </div>
  );
}
