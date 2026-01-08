import { HeroSection } from "./components/HeroSection";
import { WhyNowSection } from "./components/WhyNowSection";
import { WindowSection } from "./components/WindowSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhatsInsideSection } from "./components/WhatsInsideSection";
import { PricingSection } from "./components/PricingSection";
import { CreatorNote } from "./components/CreatorNote";
import { LaunchWeekSection } from "./components/LaunchWeekSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhyNowSection />
      <WindowSection />
      <HowItWorksSection />
      <WhatsInsideSection />
      <PricingSection />
      <CreatorNote />
      <LaunchWeekSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App 