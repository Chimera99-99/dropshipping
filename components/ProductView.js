"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Truck, Moon, Lock, Minus, Plus } from "lucide-react";
import { COLORS, SIZES } from "@/lib/data";
import { useCart } from "./CartProvider";

const THUMBS = [
  { img: "/img/color-blue.png" },
  { img: "/img/hero.png" },
  { img: "/img/lifestyle-sofa.png" },
  { img: "/img/construction.png" },
  { img: "/img/features.png" },
];

export default function ProductView() {
  const { add } = useCart();
  const [color, setColor] = useState(COLORS[0]);
  const [sizeIdx, setSizeIdx] = useState(1);
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState(COLORS[0].img);

  const size = SIZES[sizeIdx];
  const save = (size.was - size.price).toFixed(2);

  const pickColor = (c) => { setColor(c); setMainImg(c.img); };

  return (
    <section className="py-14">
      <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        {/* gallery */}
        <div>
          <div className="rounded-2xl2 overflow-hidden bg-cream-100 shadow-soft aspect-square relative">
            <AnimatePresence mode="wait">
              <motion.div key={mainImg} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                <Image src={mainImg} alt="Self-Cooling Mat" fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-3 mt-3.5">
            {THUMBS.map((t) => (
              <button key={t.img} onClick={() => setMainImg(t.img)} className={`w-[78px] h-[78px] rounded-[14px] overflow-hidden border-[3px] transition-colors ${mainImg === t.img ? "border-sage-500" : "border-transparent"}`}>
                <Image src={t.img} alt="" width={78} height={78} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* info */}
        <div>
          <div className="text-ink-faint text-[0.85rem] mb-3">Home / Cooling / Self-Cooling Mat™</div>
          <h1 className="text-[clamp(1.9rem,3.6vw,2.6rem)] mb-2.5">Self-Cooling Mat<span className="tm">™</span></h1>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} className="fill-amber-400" />)}</div>
            <a href="#" className="text-cool-600 font-bold text-[0.88rem]">12,400 reviews</a>
          </div>

          <div className="flex items-baseline gap-3 mb-2">
            <motion.span key={size.price} initial={{ scale: 0.9, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} className="font-head font-black text-[2rem] text-sage-700">€{size.price.toFixed(2)}</motion.span>
            <span className="line-through text-ink-faint text-[1.15rem]">€{size.was.toFixed(2)}</span>
            <span className="bg-cool-100 text-cool-600 font-head font-extrabold text-[0.8rem] px-2.5 py-1 rounded-full">Save €{save}</span>
          </div>

          <p className="text-ink-soft my-4">Pressure-activated ice-silk that stays cool for hours — no water, no gel, no fridge. A breathable three-layer design that draws heat away the moment your pet lies down, then vents it out the back so it never turns clammy. Foldable, featherlight and fully washable.</p>

          {/* colour */}
          <div className="mb-5">
            <div className="font-head font-extrabold mb-2.5 flex gap-2">Colour: <span className="text-sage-600">{color.name}</span></div>
            <div className="flex gap-2.5 flex-wrap">
              {COLORS.map((c) => (
                <button key={c.name} onClick={() => pickColor(c)} title={c.name}
                  className={`w-10 h-10 rounded-full border-[3px] border-white transition-transform ${color.name === c.name ? "scale-110" : ""}`}
                  style={{ background: c.hex, boxShadow: color.name === c.name ? "0 0 0 2px #6E8A5C" : "0 0 0 2px #E7DBC3" }} />
              ))}
            </div>
          </div>

          {/* size */}
          <div className="mb-5">
            <div className="font-head font-extrabold mb-2.5 flex gap-2">Size: <span className="text-sage-600">{size.size}</span></div>
            <div className="flex gap-2.5 flex-wrap">
              {SIZES.map((s, i) => (
                <button key={s.size} onClick={() => setSizeIdx(i)}
                  className={`min-w-[66px] px-2 py-3 rounded-[14px] border-2 font-head font-extrabold text-center transition-all ${i === sizeIdx ? "border-sage-500 bg-sage-100 text-sage-700" : "border-cream-300 bg-white hover:border-sage-300"}`}>
                  {s.size}<small className="block font-semibold text-[0.68rem] text-ink-faint">≤{s.upto}</small>
                </button>
              ))}
            </div>
          </div>

          {/* qty + add */}
          <div className="flex gap-3 my-6">
            <div className="flex items-center border-2 border-cream-300 rounded-full overflow-hidden">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-11 h-[52px] grid place-items-center text-sage-600"><Minus size={18} /></button>
              <span className="w-11 text-center font-head font-extrabold text-[1.05rem]">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-11 h-[52px] grid place-items-center text-sage-600"><Plus size={18} /></button>
            </div>
            <button onClick={() => add({ id: "cooling-mat", title: `Cooling Mat — ${color.name} / ${size.size}`, price: size.price, color: color.name, size: size.size, qty })}
              className="btn btn-primary btn-lg flex-1 justify-center">
              Add to Cart — BOGO Free 🐾
            </button>
          </div>

          <div className="flex flex-col gap-2.5 bg-sage-100 rounded-xl2 px-5 py-4">
            <div className="flex items-center gap-2.5 text-[0.92rem] font-semibold text-ink-soft"><Truck size={18} className="text-sage-600" /> Free EU shipping over €49 · dispatched in 24h</div>
            <div className="flex items-center gap-2.5 text-[0.92rem] font-semibold text-ink-soft"><Moon size={18} className="text-sage-600" /> 60-night comfort guarantee — love it or return it</div>
            <div className="flex items-center gap-2.5 text-[0.92rem] font-semibold text-ink-soft"><Lock size={18} className="text-sage-600" /> Secure checkout · Klarna &amp; PayPal available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
