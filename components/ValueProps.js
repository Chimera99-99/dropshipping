"use client";
import { motion } from "framer-motion";
import { PawPrint, Moon, Truck, Snowflake } from "lucide-react";

const VALUES = [
  { icon: PawPrint, title: "500k+ happy pets", sub: "Chilling out in 30+ countries" },
  { icon: Moon, title: "60-night guarantee", sub: "Love it or your money back" },
  { icon: Truck, title: "Free EU shipping", sub: "On every order over €49" },
  { icon: Snowflake, title: "1M+ mats sold", sub: "The original ice-silk cool mat" },
];

export default function ValueProps() {
  return (
    <section className="py-20">
      <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {VALUES.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="text-center px-4 py-8 bg-white rounded-xl2 shadow-soft">
              <div className="w-14 h-14 rounded-2xl bg-sage-100 text-sage-600 grid place-items-center mx-auto mb-3"><Icon size={26} /></div>
              <b className="font-head text-[1.15rem] block text-sage-700">{v.title}</b>
              <span className="text-ink-soft text-[0.9rem]">{v.sub}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
