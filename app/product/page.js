import ProductView from "@/components/ProductView";
import TrustStrip from "@/components/TrustStrip";
import SectionHead from "@/components/SectionHead";
import SizeGuide from "@/components/SizeGuide";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { Snowflake, Cloud, Wind } from "lucide-react";
import { COLLECTION } from "@/lib/data";

export const metadata = { title: "Self-Cooling Mat™ — Frischtier™" };

const CROSS = COLLECTION.slice(1, 5);

export default function ProductPage() {
  return (
    <main>
      <ProductView />
      <TrustStrip />

      {/* construction split */}
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-2xl2 overflow-hidden shadow-md2">
              <Image src="/img/fabric-closeup.png" alt="Ice-silk cooling surface close up" width={700} height={700} className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">How it stays cool</span>
            <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] mt-2 mb-4">Cool science, cosy result</h2>
            <ul className="flex flex-col gap-3.5 mb-5">
              <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-[10px] bg-cool-100 text-cool-600 grid place-items-center flex-none"><Snowflake size={19} /></span><span className="font-semibold"><b className="font-head">Surface:</b> cold-feeling ice-silk that reacts to touch</span></li>
              <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-[10px] bg-cool-100 text-cool-600 grid place-items-center flex-none"><Cloud size={19} /></span><span className="font-semibold"><b className="font-head">Middle:</b> soft padded cotton for gentle support</span></li>
              <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-[10px] bg-cool-100 text-cool-600 grid place-items-center flex-none"><Wind size={19} /></span><span className="font-semibold"><b className="font-head">Reverse:</b> breathable air-mesh that vents heat away</span></li>
            </ul>
            <p className="text-ink-soft">The result: a mat that feels instantly cool, never sweaty, and bounces back wash after wash.</p>
          </Reveal>
        </div>
      </section>

      <SizeGuide />

      {/* cross sell */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead eyebrow="Complete the set" title="Pairs perfectly with" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CROSS.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
