"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, ChevronDown, Menu, PawPrint } from "lucide-react";
import { useCart } from "./CartProvider";

const MENU = [
  { label: "New", href: "/collection" },
  { label: "Best Sellers", href: "/collection" },
  {
    label: "Cooling",
    href: "/collection",
    mega: { title: "Beat the heat", links: ["Self-Cooling Mat", "Cooling Bandanas", "Cooling Beds", "Cooling Bundles", "Travel Cooling Pads", "Shop All Cooling"] },
  },
  {
    label: "Beds & Mats",
    href: "/collection",
    mega: { title: "Rest & lounge", links: ["Orthopedic Beds", "Calming Donut Beds", "Crate Mats", "Sofa Protectors", "Car Seat Mats", "Shop All Beds"] },
  },
  { label: "Accessories", href: "/collection" },
  { label: "Bundles", href: "/collection", badge: "Save" },
  { label: "Discover", href: "/#story", caret: true },
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200">
      <div className="container-x flex items-center justify-between h-[74px] gap-5">
        <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <Menu size={22} />
        </button>

        <Link href="/" className="font-head font-black text-[1.6rem] text-sage-700 tracking-tight flex items-center gap-2">
          <span className="w-9 h-9 rounded-full grid place-items-center text-white" style={{ background: "radial-gradient(circle at 35% 30%, #96D0E7, #6E8A5C)" }}>
            <PawPrint size={18} />
          </span>
          Frischtier<span className="tm">™</span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MENU.map((m) => (
              <li key={m.label} className="relative group">
                <Link href={m.href} className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-head font-bold text-[0.95rem] hover:bg-sage-100 hover:text-sage-700 transition-colors">
                  {m.label}
                  {m.badge && <span className="bg-cool-500 text-white text-[0.6rem] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wide">{m.badge}</span>}
                  {(m.mega || m.caret) && <ChevronDown size={13} className="opacity-60" />}
                </Link>
                {m.mega && (
                  <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white rounded-xl2 shadow-lg2 border border-cream-200 p-5 min-w-[440px] grid grid-cols-2 gap-x-6 gap-y-1 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <span className="col-span-2 font-head font-extrabold text-sage-600 text-[0.72rem] uppercase tracking-[0.1em] px-3 pb-1">{m.mega.title}</span>
                    {m.mega.links.map((l) => (
                      <Link key={l} href="/product" className="px-3 py-2.5 rounded-[10px] font-semibold text-[0.92rem] text-ink-soft hover:bg-sage-100 hover:text-sage-700 transition-colors">{l}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <button className="w-10 h-10 grid place-items-center rounded-full hover:bg-sage-100 transition-colors" aria-label="Search"><Search size={19} /></button>
          <button className="w-10 h-10 grid place-items-center rounded-full hover:bg-sage-100 transition-colors" aria-label="Account"><User size={19} /></button>
          <Link href="/product" className="w-10 h-10 grid place-items-center rounded-full hover:bg-sage-100 transition-colors relative" aria-label="Cart">
            <ShoppingBag size={19} />
            {count > 0 && <span className="absolute top-1 right-1 bg-cool-500 text-white text-[0.6rem] font-extrabold min-w-[16px] h-4 rounded-full grid place-items-center px-1">{count}</span>}
          </Link>
          <button className="hidden sm:block font-head font-bold text-[0.85rem] text-ink-soft px-3 py-2 rounded-full hover:bg-sage-100">🇩🇪 EUR €</button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden border-t border-cream-200 bg-cream-50">
            <ul className="flex flex-col p-3">
              {MENU.map((m) => (
                <li key={m.label}><Link href={m.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl font-head font-bold hover:bg-sage-100">{m.label}</Link></li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
