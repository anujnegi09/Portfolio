import TiltCard from "./TiltCard";

export default function ProjectCard({ project: pr, index }) {
  return (
    <TiltCard className="pcard">
      <span className="num mono">{String(index + 1).padStart(2, "0")}</span>
      <h3>{pr.title}</h3>
      <p className="muted">{pr.description}</p>
      <div className="tags">{pr.tags.map((t) => (<span key={t}>{t}</span>))}</div>
      <div className="plinks">
        {pr.github && <a href={pr.github} target="_blank" rel="noreferrer">Code ↗</a>}
        {pr.live && <a href={pr.live} target="_blank" rel="noreferrer">Live ↗</a>}
      </div>
    </TiltCard>
  );
}
