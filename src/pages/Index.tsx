import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
