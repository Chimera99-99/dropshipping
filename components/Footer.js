import Link from "next/link";
import { PawPrint } from "lucide-react";

const COLS = [
  { title: "Discover", links: [["About Us", "/#story"], ["Gift Cards", "#"], ["Our Blog", "#"], ["Careers", "#"], ["Frischtier Cares", "#"]] },
  { title: "Support", links: [["Contact Us", "#"], ["FAQs", "#"], ["Delivery & Returns", "#"], ["Size Guide", "/#size-guide"], ["Track My Order", "#"], ["Wholesale Enquiries", "#"]] },
  { title: "Shop", links: [["Cooling Mats", "/product"], ["Pet Beds", "/collection"], ["Bundles", "/collection"], ["Best Sellers", "/collection"], ["New Arrivals", "/collection"]] },
];

const PAYS = ["VISA", "MASTERCARD", "AMEX", "PAYPAL", "APPLE PAY", "G PAY", "KLARNA"];

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200 pt-14">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 pb-10">
          <div>
            <Link href="/" className="font-head font-black text-[1.6rem] text-sage-700 flex items-center gap-2 mb-3.5">
              <span className="w-9 h-9 rounded-full grid place-items-center text-white" style={{ background: "radial-gradient(circle at 35% 30%, #96D0E7, #6E8A5C)" }}><PawPrint size={18} /></span>
              Frischtier<span className="tm">™</span>
            </Link>
            <p className="text-ink-soft text-[0.92rem] max-w-[300px]">Thoughtfully designed pet essentials that keep your best friend cool, calm and comfy — every season, every room.</p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-head text-[0.78rem] uppercase tracking-[0.12em] text-sage-600 mb-4">{c.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-ink-soft text-[0.92rem] hover:text-sage-700 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-cream-200 py-5 flex flex-wrap justify-between items-center gap-4">
          <span className="text-[0.85rem] text-ink-faint">© 2026 Frischtier™. All rights reserved.</span>
          <div className="flex gap-2 flex-wrap">
            {PAYS.map((p) => (
              <span key={p} className="bg-white border border-cream-300 rounded-md px-2 py-1 font-head font-extrabold text-[0.68rem] text-ink-soft">{p}</span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap text-[0.85rem] text-ink-faint">
            <Link href="#" className="hover:text-sage-700">Privacy</Link>
            <Link href="#" className="hover:text-sage-700">Terms</Link>
            <Link href="#" className="hover:text-sage-700">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
