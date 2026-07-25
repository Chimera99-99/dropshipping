import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { SIZES } from "@/lib/data";

export default function SizeGuide() {
  return (
    <section className="py-20 bg-sage-100" id="size-guide">
      <div className="container-x">
        <SectionHead eyebrow="Get the fit right" title="Size guide" sub="Sized by your pet's weight — when in doubt, size up for extra lounging room." />
        <Reveal>
          <div className="overflow-x-auto rounded-xl2 shadow-soft">
            <table className="w-full border-collapse bg-white min-w-[560px]">
              <thead>
                <tr className="bg-sage-500 text-white font-head text-left text-[0.9rem]">
                  <th className="px-5 py-3.5">Size</th><th className="px-5 py-3.5">Dimensions</th><th className="px-5 py-3.5">Best for</th><th className="px-5 py-3.5">Up to</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s) => (
                  <tr key={s.size} className="border-b border-cream-200 last:border-0">
                    <td className="px-5 py-3.5 font-head font-extrabold text-sage-700">{s.size}</td>
                    <td className="px-5 py-3.5">{s.dims}</td>
                    <td className="px-5 py-3.5 text-ink-soft">{s.best}</td>
                    <td className="px-5 py-3.5">{s.upto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
