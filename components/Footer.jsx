import { portfolio as p } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <span>© {new Date().getFullYear()} {p.name}. Built with Next.js & GSAP.</span>
        <div className="socials">
          {p.socials.map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>))}
        </div>
      </div>
    </footer>
  );
}
