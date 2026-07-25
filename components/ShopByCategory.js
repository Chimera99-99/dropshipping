"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHead from "./SectionHead";

const TILES = [
  { title: "Cooling Mats", img: "/img/color-blue.png", href: "/product" },
  { title: "Sofa Protectors", img: "/img/lifestyle-sofa.png", href: "/collection" },
  { title: "For Every Room", img: "/img/suitable-for.png", href: "/collection" },
  { title: "Cat Comfort", img: "/img/color-pink.png", href: "/collection" },
];

export default function ShopByCategory() {
  return (
    <section className="pb-20">
      <div className="container-x">
        <SectionHead eyebrow="Explore" title="Shop by category" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TILES.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link href={t.href} className="relative block rounded-xl2 overflow-hidden aspect-[3/4] shadow-soft group">
                <Image src={t.img} alt={t.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-white text-[1.3rem]">{t.title}</h3>
                  <span className="text-cream-100 font-bold text-[0.85rem] opacity-90 flex items-center gap-1">Shop now <ArrowRight size={15} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
