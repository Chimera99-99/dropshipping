"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PawPrint, ArrowRight } from "lucide-react";

export default function BogoBanner() {
  const strip = "BUY ONE · GET ONE FREE · ";
  const words = Array.from({ length: 10 }).map(() => strip).join("");

  return (
    <section className="py-14">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl2 bg-gradient-to-br from-cool-500 to-cool-600 text-white"
        >
          {/* sliding ribbon that slides to one side */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden py-2 bg-white/10">
            <div className="flex w-max animate-marquee whitespace-nowrap font-head font-extrabold text-[0.8rem] tracking-[0.25em] opacity-80">
              <span className="px-2">{words}</span>
              <span className="px-2">{words}</span>
            </div>
          </div>

          <div className="relative text-center px-6 pt-16 pb-12">
            <PawPrint className="absolute top-8 left-8 opacity-10" size={110} />
            <PawPrint className="absolute bottom-2 right-10 opacity-10 rotate-12" size={130} />
            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-[clamp(1.9rem,4.5vw,3rem)] relative"
            >
              Buy One, Get One Free 🐾
            </motion.h2>
            <p className="relative mt-3 mb-6 text-[1.1rem] opacity-95 max-w-[560px] mx-auto">
              Every Frischtier™ Cooling Mat comes with a second one on us — perfect for a second pet, room, or the car.
            </p>
            <Link href="/product" className="btn btn-lg bg-white text-cool-600 hover:-translate-y-0.5 relative">
              Claim the Deal <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
