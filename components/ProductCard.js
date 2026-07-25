"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { useCart } from "./CartProvider";

export default function ProductCard({ p }) {
  const { add } = useCart();
  const tagBg = p.tagColor === "cool" ? "bg-cool-500" : "bg-sage-500";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-white rounded-xl2 overflow-hidden shadow-soft hover:shadow-md2 flex flex-col"
    >
      <Link href="/product" className="relative block aspect-square bg-cream-100 overflow-hidden group">
        {p.tag && <span className={`absolute top-3 left-3 z-10 ${tagBg} text-white font-head font-extrabold text-[0.7rem] px-2.5 py-1 rounded-full uppercase tracking-wide`}>{p.tag}</span>}
        <button className="absolute top-2.5 right-2.5 z-10 w-9 h-9 rounded-full bg-white/90 grid place-items-center hover:bg-white transition-colors" aria-label="Wishlist">
          <Heart size={16} className="text-sage-600" />
        </button>
        <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </Link>

      <div className="p-[18px] flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-1.5">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className={i < p.rating ? "fill-amber-400" : "text-cream-300"} />
            ))}
          </div>
          <span className="text-ink-faint text-[0.8rem]">({p.reviews})</span>
        </div>

        <h3 className="font-head font-extrabold text-[1.05rem] leading-tight">
          <Link href="/product">{p.title}</Link>
        </h3>

        {p.swatches && (
          <div className="flex gap-1.5">
            {p.swatches.map((s, i) => (
              <span key={i} className="w-[18px] h-[18px] rounded-full border-2 border-white" style={{ background: s, boxShadow: "0 0 0 1px #E7DBC3" }} />
            ))}
          </div>
        )}

        <div className="mt-auto flex items-baseline gap-2">
          <span className="font-head font-black text-[1.25rem] text-sage-700">€{p.price.toFixed(2)}</span>
          {p.was && <span className="text-ink-faint line-through text-[0.95rem]">€{p.was.toFixed(2)}</span>}
          {p.was && <span className="bg-sage-100 text-sage-700 text-[0.72rem] font-extrabold px-2 py-0.5 rounded-full font-head">-{Math.round((1 - p.price / p.was) * 100)}%</span>}
        </div>
      </div>

      <button
        onClick={() => add({ id: p.id, title: p.title, price: p.price, qty: 1 })}
        className="btn btn-primary mx-[18px] mb-[18px] justify-center"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
