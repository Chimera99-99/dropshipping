"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake, Star, Truck, Moon, Dog } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] } }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      {/* full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero.png"
          alt="A husky and a cat relaxing on a Frischtier cooling mat"
          fill
          priority
          className="object-cover object-[82%_center]"
        />
        {/* horizontal cream scrim keeps the copy on a clean field, pets fade in on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50 from-30% via-cream-50/85 via-52% to-transparent to-80%" />
        {/* mobile: extra veil so text stays legible over the image */}
        <div className="absolute inset-0 bg-cream-50/45 md:hidden" />
        {/* subtle cool wash on the product side */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_82%_55%,rgba(150,208,231,0.26),transparent_62%)]" />
      </div>

      {/* content locked to the site grid */}
      <div className="container-x relative z-10">
        <div className="min-h-[82vh] flex items-center">
          <motion.div initial="hidden" animate="show" className="max-w-[600px] py-20">
            <motion.span variants={fade} custom={0} className="inline-flex items-center gap-2 bg-white/70 backdrop-blur text-sage-700 font-head font-bold text-[0.8rem] px-4 py-1.5 rounded-full mb-7 ring-1 ring-sage-200">
              <Snowflake size={14} /> New — Summer Cooling Collection
            </motion.span>

            <motion.h1 variants={fade} custom={1} className="font-head font-extrabold text-ink text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[0.98] tracking-[-0.02em]">
              Keep them <span className="text-cool-500">cool.</span>
              <br />
              Keep them <span className="text-sage-500">comfy.</span>
            </motion.h1>

            <motion.p variants={fade} custom={2} className="text-[1.15rem] leading-relaxed text-ink-soft mt-6 mb-9 max-w-[440px]">
              Meet the Frischtier™ Self-Cooling Mat — pressure-activated ice-silk that stays fresh for hours. No water, no gel, no fridge. Just happy, chilled-out pets.
            </motion.p>

            <motion.div variants={fade} custom={3} className="flex flex-wrap gap-3.5 items-center">
              <Link href="/product" className="btn btn-primary btn-lg">Shop the Cooling Mat</Link>
              <Link href="/#how" className="btn btn-ghost btn-lg">How it works</Link>
            </motion.div>

            <motion.div variants={fade} custom={4} className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
              <span className="flex items-center gap-2 text-[0.9rem] text-ink-soft font-medium"><Star size={16} className="fill-amber-400 text-amber-400" /> <b className="font-head font-bold text-ink">4.8/5</b> · 12,400+ reviews</span>
              <span className="flex items-center gap-2 text-[0.9rem] text-ink-soft font-medium"><Truck size={16} className="text-sage-600" /> <b className="font-head font-bold text-ink">Free</b> EU shipping €49+</span>
              <span className="flex items-center gap-2 text-[0.9rem] text-ink-soft font-medium"><Moon size={16} className="text-cool-600" /> <b className="font-head font-bold text-ink">60-night</b> guarantee</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* floating chips */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="hidden xl:flex absolute top-[22%] right-[5%] z-10 bg-white rounded-2xl shadow-md2 px-4 py-3 items-center gap-2.5 font-head font-bold text-[0.9rem] animate-float">
        <Snowflake size={20} className="text-cool-500" /> Instantly cool to the touch
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="hidden xl:flex absolute bottom-[14%] right-[14%] z-10 bg-white rounded-2xl shadow-md2 px-4 py-3 items-center gap-2.5 font-head font-bold text-[0.9rem] text-cool-600 animate-float" style={{ animationDelay: "1.5s" }}>
        <Dog size={20} /> Loved by 500k+ pets
      </motion.div>
    </section>
  );
}
