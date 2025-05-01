import HeroSection from "@/components/hero-section"
import FeatureShowcase from "@/components/feature-showcase"
import WhyDenning from "@/components/why-denning"
import HowItWorks from "@/components/how-it-works"
import EarlyAdopters from "@/components/early-adopters"
import ProductShowcase from "@/components/product-showcase"
import SecuritySection from "@/components/security-section"
import CtaSection from "@/components/cta-section"
import FloatingCta from "@/components/floating-cta"

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <FeatureShowcase />
      <WhyDenning />
      <HowItWorks />
      <ProductShowcase />
      <EarlyAdopters />
      <SecuritySection />
      <CtaSection />
      <FloatingCta />
    </div>
  )
}
