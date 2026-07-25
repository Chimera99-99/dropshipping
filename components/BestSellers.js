"use client";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import ProductCard from "./ProductCard";
import { BEST_SELLERS } from "@/lib/data";

export default function BestSellers() {
  return (
    <section className="py-20" id="shop">
      <div className="container-x">
        <SectionHead eyebrow="Fan Favourites" title="Best-selling comfort" sub="Thoughtfully designed, endlessly loved — the essentials pets ask for by name." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_SELLERS.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <ProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
