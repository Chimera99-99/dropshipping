import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CategoryTiles from "@/components/CategoryTiles";
import BogoBanner from "@/components/BogoBanner";
import BestSellers from "@/components/BestSellers";
import ShopByCategory from "@/components/ShopByCategory";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import SizeGuide from "@/components/SizeGuide";
import ValueProps from "@/components/ValueProps";
import Story from "@/components/Story";
import JoinSquad from "@/components/JoinSquad";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <CategoryTiles />
      <BogoBanner />
      <BestSellers />
      <ShopByCategory />
      <HowItWorks />
      <Testimonials />
      <SizeGuide />
      <ValueProps />
      <Story />
      <JoinSquad />
    </main>
  );
}
