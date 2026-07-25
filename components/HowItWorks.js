"use client";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { Snowflake, Cloud, Wind, WashingMachine } from "lucide-react";

const FEATURES = [
  { icon: Snowflake, title: "Ice-silk surface", desc: "cool-to-touch, breathable and gentle on paws" },
  { icon: Cloud, title: "Padded cotton core", desc: "soft support that won't flatten" },
  { icon: Wind, title: "Reverse air-mesh", desc: "vents warmth so it never gets clammy" },
  { icon: WashingMachine, title: "Fully washable", desc: "wipe clean or pop in the machine" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-cream-100" id="how">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="rounded-2xl2 overflow-hidden shadow-md2">
            <Image src="/img/construction.png" alt="Three-layer cooling mat construction" width={700} height={700} className="w-full h-auto" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="eyebrow">The Frischtier™ difference</span>
          <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] mt-2 mb-3.5">Three layers of engineered chill</h2>
          <p className="text-ink-soft mb-6">No electricity. No refrigeration. Just clever fabric science that draws heat away the moment your pet lies down.</p>
          <ul className="flex flex-col gap-3.5 mb-7">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.title} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-[10px] bg-cool-100 text-cool-600 grid place-items-center flex-none"><Icon size={19} /></span>
                  <span className="font-semibold"><b className="font-head">{f.title}</b> — {f.desc}</span>
                </li>
              );
            })}
          </ul>
          <Link href="/product" className="btn btn-cool btn-lg">Feel the difference</Link>
        </Reveal>
      </div>
    </section>
  );
}
