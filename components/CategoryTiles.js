"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake, BedDouble, Gift, Car, Cat, Dog, Flame, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/lib/data";

const ICONS = { Snowflake, BedDouble, Gift, Car, Cat, Dog, Flame, Sparkles };

export default function CategoryTiles() {
  return (
    <section className="py-14">
      <div className="container-x">
        <div className="flex gap-7 overflow-x-auto no-scrollbar pb-4 pt-1 px-1">
          {CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex-none w-[120px] text-center"
              >
                <Link href="/collection" className="group block">
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-3 border-4 border-white shadow-soft bg-sage-100 grid place-items-center transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-md2">
                    {c.img ? (
                      <Image src={c.img} alt={c.label} width={120} height={120} className="w-full h-full object-cover" />
                    ) : (
                      <Icon size={40} className="text-sage-500" strokeWidth={1.6} />
                    )}
                  </div>
                  <span className="font-head font-bold text-[0.92rem]">{c.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
