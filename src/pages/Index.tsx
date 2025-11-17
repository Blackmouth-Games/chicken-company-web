import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowToPlaySection } from "@/components/HowToPlaySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";
import { translations, LanguageCode } from "@/lib/translations";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en");
  
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={(lang) => setCurrentLanguage(lang as LanguageCode)}
      />
      
      <HeroSection 
        translations={{
          eggProtocol: t.eggProtocol,
          mainTagline: t.mainTagline,
          subTagline: t.subTagline,
          playFree: t.playFree,
          stakeStart: t.stakeStart,
          playFreeNote: t.playFreeNote,
        }}
      />
      
      <HowToPlaySection 
        translations={{
          title: t.howToPlay,
          steps: t.howToPlaySteps,
        }}
      />
      
      <HowItWorksSection 
        translations={{
          title: t.howItWorks,
          steps: t.howItWorksSteps,
        }}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
