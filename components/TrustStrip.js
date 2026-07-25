import { Snowflake, Droplets, WashingMachine, Sofa, Palette } from "lucide-react";

const ITEMS = [
  { icon: Snowflake, text: "Self-cooling ice-silk" },
  { icon: Droplets, text: "No water or gel needed" },
  { icon: WashingMachine, text: "Machine washable" },
  { icon: Sofa, text: "Sofa · Floor · Crate · Car" },
  { icon: Palette, text: "5 sizes · 6 colours" },
];

export default function TrustStrip() {
  return (
    <div className="bg-sage-600 text-cream-100">
      <div className="container-x flex flex-wrap justify-around gap-4 py-4 text-center">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 font-head font-bold text-[0.95rem]">
              <Icon size={18} className="opacity-90" /> {it.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
