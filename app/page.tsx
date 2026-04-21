import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturedCarousel from "@/components/sections/FeaturedCarousel";
import BrandStory from "@/components/sections/BrandStory";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <Hero />
      <ProductGrid />
      <FeaturedCarousel />
      <BrandStory />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
