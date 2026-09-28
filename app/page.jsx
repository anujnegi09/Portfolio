// import Link from "next/link";
// import LanyardCard from "@/components/LanyardCard";
// import ProjectCard from "@/components/ProjectCard";
// import { portfolio as p } from "@/data/portfolio";

// export default function Home() {
//   const marquee = p.skills.flatMap((g) => g.items);
//   return (
//     <>
//       <section className="hero">
//         <LanyardCard />
//         <div className="wrap hero-grid">
//           <div className="hero-text">
//             <p className="pill" data-hero><span className="dot" /> {p.availability}</p>
//             <h1 data-hero>
//               Hi, I&apos;m <span className="grad">{p.firstName}</span>.
//               <br />
//               {p.headline}
//             </h1>
//             <p className="lead" data-hero>{p.tagline}</p>
//             <div className="cta" data-hero>
//               <Link href="/projects" className="btn primary">View projects</Link>
//               <a href={p.resumeUrl} className="btn ghost" target="_blank" rel="noreferrer">Resume ↗</a>
//             </div>
//             <div className="socials" data-hero>
//               {p.socials.map((s) => (
//                 <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="wrap stats" data-reveal>
//         {p.stats.map((s) => (
//           <div key={s.label}>
//             <b>{s.value}</b>
//             <span>{s.label}</span>
//           </div>
//         ))}
//       </section>

//       <div className="marquee" data-reveal>
//         <div className="track">
//           {[...marquee, ...marquee].map((m, i) => (<span key={i}>{m}</span>))}
//         </div>
//       </div>

//       <section className="section wrap">
//         <p className="eyebrow" data-reveal>Selected work</p>
//         <h2 data-reveal>Things I&apos;ve built</h2>
//         <div className="grid">
//           {p.projects.slice(0, 2).map((pr, i) => (<ProjectCard key={pr.title} project={pr} index={i} />))}
//         </div>
//       </section>

//       <section className="wrap cta-band" data-reveal>
//         <h2>Have an idea or an opening?</h2>
//         <p>I&apos;m always up for a good conversation.</p>
//         <Link href="/contact" className="btn primary">Let&apos;s talk</Link>
//       </section>
//     </>
//   );
// }


import LanyardCard from "@/components/LanyardCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { portfolio as p } from "@/data/portfolio";

export default function Home() {
  const marquee = p.skills.flatMap((g) => g.items);
  return (
    <>
      {/* HOME */}
      <section id="home" className="hero">
        <LanyardCard />
        <div className="wrap hero-grid">
          <div className="hero-text">
            <p className="pill" data-hero><span className="dot" /> {p.availability}</p>
            <h1 data-hero>
              Hi, I&apos;m <span className="grad">{p.firstName}</span>.
              <br />
              {p.headline}
            </h1>
            <p className="lead" data-hero>{p.tagline}</p>
            <div className="cta" data-hero>
              <a href="#projects" className="btn primary">View projects</a>
              <a href={p.resumeUrl} className="btn ghost" target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
            <div className="socials" data-hero>
              {p.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap stats" data-reveal>
        {p.stats.map((s) => (
          <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </section>

      <div className="marquee" data-reveal>
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => (<span key={i}>{m}</span>))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="page wrap">
        <p className="eyebrow" data-reveal>About</p>
        <h2 className="page-title" data-reveal>A little about me</h2>
        <div className="two">
          <div>
            {p.about.map((t, i) => (<p key={i} className="lead" data-reveal>{t}</p>))}
            <p className="meta" data-reveal>📍 {p.location}</p>
          </div>
          <div className="panel" data-reveal>
            {p.skills.map((g) => (
              <div key={g.title} className="skill-group">
                <h4>{g.title}</h4>
                <div className="tags">{g.items.map((s) => (<span key={s}>{s}</span>))}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="sub" data-reveal>Experience</h2>
        <div className="timeline">
          {p.experience.map((e) => (
            <div key={e.role} className="tl-item" data-reveal>
              <span className="tl-dot" />
              <p className="mono">{e.period}</p>
              <h3>{e.role}</h3>
              <p className="muted">{e.company}</p>
              <ul>{e.points.map((pt) => (<li key={pt}>{pt}</li>))}</ul>
            </div>
          ))}
        </div>

        <h2 className="sub" data-reveal>Education</h2>
        <div className="timeline">
          {p.education.map((e) => (
            <div key={e.title} className="tl-item" data-reveal>
              <span className="tl-dot" />
              <p className="mono">{e.period}</p>
              <h3>{e.title}</h3>
              <p className="muted">{e.place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="page wrap">
        <p className="eyebrow" data-reveal>Projects</p>
        <h2 className="page-title" data-reveal>Selected work</h2>
        <div className="grid">
          {p.projects.map((pr, i) => (<ProjectCard key={pr.title} project={pr} index={i} />))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="page wrap">
        <p className="eyebrow" data-reveal>Contact</p>
        <h2 className="page-title" data-reveal>Let&apos;s build something</h2>
        <div className="two">
          <div>
            <p className="lead" data-reveal>Drop a message and it opens in your mail app. Or reach me directly:</p>
            <a className="big-mail" href={`mailto:${p.email}`} data-reveal>{p.email}</a>
            <div className="socials col" data-reveal>
              {p.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>
              ))}
            </div>
          </div>
          <div className="panel" data-reveal><ContactForm /></div>
        </div>
      </section>
    </>
  );
}