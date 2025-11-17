import { Button } from "@/components/ui/button";
import { FloatingParticles } from "./FloatingParticles";
import chickenBg from "@/assets/chicken-bg.png";
import logoChicken from "@/assets/logo-chicken-company.png";

interface HeroSectionProps {
  translations: {
    eggProtocol: string;
    mainTagline: string;
    subTagline: string;
    playFree: string;
    stakeStart: string;
    playFreeNote: string;
  };
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${chickenBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-farm-brown/40 via-farm-brown/20 to-farm-brown/60 z-0" />
      <FloatingParticles />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <img 
            src={logoChicken} 
            alt="Chicken Company Logo" 
            className="w-full max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-[0_20px_40px_rgba(251,191,36,0.5)] animate-in fade-in slide-in-from-top duration-1000 hover:scale-105 transition-transform duration-500"
          />
          
          <div className="relative inline-block animate-in fade-in slide-in-from-top duration-1000 delay-200">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground tracking-[0.2em] sm:tracking-[0.3em] uppercase relative z-10 drop-shadow-lg">
              {translations.eggProtocol}
            </p>
            <div className="absolute inset-0 blur-xl bg-primary/30 -z-10 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-card leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-300 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] [text-shadow:_4px_4px_12px_rgb(0_0_0_/_80%)]">
            <span className="inline-block hover:scale-110 transition-transform duration-300">
              {translations.mainTagline}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground animate-in fade-in slide-in-from-bottom duration-1000 delay-400 drop-shadow-lg px-4">
            {translations.subTagline}
          </p>
          
          <div className="flex justify-center items-center pt-6 sm:pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button 
              size="lg"
              className="group relative text-lg sm:text-xl md:text-2xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-full bg-primary hover:bg-golden-dark text-primary-foreground font-black uppercase shadow-[0_10px_40px_rgba(251,191,36,0.6)] hover:shadow-[0_20px_60px_rgba(251,191,36,0.8)] transition-all duration-500 hover:scale-110 border-2 sm:border-4 border-farm-brown overflow-hidden"
              onClick={() => window.open('https://t.me/ChickenCompany_bot', '_blank')}
            >
              <span className="relative z-10">{translations.playFree}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-golden-dark via-primary to-golden-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_infinite]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
