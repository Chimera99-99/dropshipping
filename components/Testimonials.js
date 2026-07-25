"use client";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import SectionHead from "./SectionHead";

const REVIEWS = [
  { initial: "L", name: "Lena M.", text: "My husky used to pant all night in summer. First evening on the Frischtier mat he flopped straight down and slept through. Genuinely magic." },
  { initial: "J", name: "Jonas R.", text: "Two cats, zero fighting — they each claimed a corner. Washes brilliantly and still cold after weeks of use." },
  { initial: "P", name: "Priya K.", text: "Bought the XL for the back seat on road trips. My lab finally settles instead of pacing. Worth every cent." },
  { initial: "M", name: "Marco T.", text: "Looks lovely in the living room too — the sage colour matches everything. Doesn't look like a 'pet product' at all." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-sage-100">
      <div className="container-x">
        <SectionHead eyebrow="Loved by pet parents" title="10,000+ five-star tail wags" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-xl2 p-6 shadow-soft flex flex-col gap-3">
              <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} className="fill-amber-400" />)}</div>
              <p className="text-ink-soft text-[0.96rem]">{r.text}</p>
              <div className="flex items-center gap-2.5 mt-auto pt-2">
                <span className="w-9 h-9 rounded-full bg-sage-300 grid place-items-center font-head font-extrabold text-white">{r.initial}</span>
                <div>
                  <b className="font-head block text-[0.9rem] leading-tight">{r.name}</b>
                  <small className="text-cool-600 font-bold text-[0.72rem] flex items-center gap-1"><BadgeCheck size={13} /> Verified Buyer</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
