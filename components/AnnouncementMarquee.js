"use client";
import { PawPrint, Snowflake, Truck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: PawPrint, text: "Buy One, Get One FREE — Frischtier™ Cooling Mats" },
  { icon: Truck, text: "Free EU Shipping Over €49" },
  { icon: Snowflake, text: "Stays Cool for Hours — No Water, No Gel" },
  { icon: Sparkles, text: "60-Night Comfort Guarantee" },
];

export default function AnnouncementMarquee() {
  // duplicate the list so the -50% translate loops seamlessly
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="bg-gradient-to-r from-sage-600 to-sage-500 text-cream-50 overflow-hidden py-2.5 relative">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {loop.map((it, i) => {
          const Icon = it.icon;
          return (
            <span key={i} className="flex items-center gap-2.5 font-head font-bold text-[0.85rem] tracking-wide px-8">
              <Icon size={15} className="opacity-90" />
              {it.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
