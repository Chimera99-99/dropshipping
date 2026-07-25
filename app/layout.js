import "./globals.css";
import { Montserrat } from "next/font/google";
import CartProvider from "@/components/CartProvider";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// The Oodie's brand typeface is Montserrat — used for both headings and body.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Frischtier™ — Cooling Comfort for Every Pet",
  description:
    "Frischtier™ — thoughtfully designed pet essentials. Keep your dog or cat cool, calm and comfy with our self-cooling pet mats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <CartProvider>
          <AnnouncementMarquee />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
