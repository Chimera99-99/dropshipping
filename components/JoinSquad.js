"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Music2, Facebook, Youtube, Send } from "lucide-react";

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

export default function JoinSquad() {
  const [done, setDone] = useState(false);
  return (
    <section className="py-14">
      <div className="container-x">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl2 px-8 md:px-12 py-14 text-cream-50"
          style={{ background: "radial-gradient(900px 400px at 20% 10%, #A9BE9B, transparent 55%), #57724A" }}>
          <div className="grid lg:grid-cols-2 gap-11 items-center relative">
            <div>
              <h2 className="text-white text-[clamp(1.8rem,3.6vw,2.6rem)]">Join the Frischtier™ Squad</h2>
              <p className="text-sage-100 mt-3 mb-6 text-[1.05rem]">Get 10% off your first order, early access to drops, and a weekly dose of very good boys &amp; girls.</p>
              <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex gap-2.5 max-w-[460px]">
                <input type="email" required placeholder="Enter your email…" className="flex-1 rounded-full px-5 py-3.5 text-ink bg-white/95 outline-none focus:ring-4 focus:ring-cool-300" />
                <button type="submit" className="btn btn-cool"><Send size={17} /> {done ? "Joined!" : "Join"}</button>
              </form>
              <small className="block mt-3 text-sage-200 text-[0.82rem]">{done ? "Welcome to the Squad! 🐾" : "No spam, just cosy things. Unsubscribe anytime."}</small>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-head font-extrabold uppercase tracking-[0.12em] text-[0.8rem] text-sage-200">Follow the pack</span>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href="#" className="flex items-center gap-3 bg-white/12 hover:bg-white/25 px-5 py-4 rounded-xl2 font-head font-bold transition-all hover:-translate-y-0.5">
                      <Icon size={22} /> {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
