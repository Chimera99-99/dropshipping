import ProductCard from "@/components/ProductCard";
import ValueProps from "@/components/ValueProps";
import Reveal from "@/components/Reveal";
import { COLLECTION } from "@/lib/data";

export const metadata = { title: "Cooling Collection — Frischtier™" };

export default function CollectionPage() {
  return (
    <main>
      <div className="bg-gradient-to-b from-sage-100 to-cream-50 py-12 text-center">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Summer Collection</span>
            <h1 className="text-[clamp(2rem,4vw,3rem)] mt-2">Cooling Comfort</h1>
            <p className="text-ink-soft mt-2">Ice-silk mats, pads and bundles to keep every pet chilled all season.</p>
          </Reveal>
        </div>
      </div>

      <section className="py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTION.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <ValueProps />
    </main>
  );
}
