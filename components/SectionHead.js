import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="text-center max-w-[640px] mx-auto mb-10">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] mt-2.5 mb-2">{title}</h2>
      {sub && <p className="text-ink-soft">{sub}</p>}
    </Reveal>
  );
}
