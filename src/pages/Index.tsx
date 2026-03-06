import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}
      <Header />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
