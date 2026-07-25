import Link from "next/link";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100 text-center" id="story">
      <div className="container-x max-w-[720px] mx-auto">
        <Reveal>
          <span className="eyebrow">Welcome to Frischtier™</span>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] mt-2 mb-5">Comfort, designed with love</h2>
          <p className="text-ink-soft text-[1.1rem] mb-3.5">
            Frischtier — &ldquo;fresh companion&rdquo; — began with a simple belief: our pets deserve the same thoughtful design we give ourselves. Every product is chosen to make their day cooler, calmer and cosier.
          </p>
          <p className="text-ink-soft text-[1.1rem] mb-6">
            We obsess over the details so your best friend doesn&rsquo;t have to. That&rsquo;s the Frischtier™ promise.
          </p>
          <Link href="/collection" className="btn btn-primary btn-lg">Explore the collection</Link>
        </Reveal>
      </div>
    </section>
  );
}
