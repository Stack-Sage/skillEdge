// Note: App Router landing page (/) — uses components and centralized content.
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<PricingSection />
			<PortfolioSection />
			<ReviewsSection />
			<ContactSection />
		</>
	);
}
