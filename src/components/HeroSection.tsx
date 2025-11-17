import { Button } from "@/components/ui/button";
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
      style={{
        backgroundImage: `url(${chickenBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-blue/60 via-sky-blue/40 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <img 
            src={logoChicken} 
            alt="Chicken Company Logo" 
            className="w-full max-w-3xl mx-auto drop-shadow-[0_20px_40px_rgba(251,191,36,0.5)] animate-in fade-in slide-in-from-top duration-1000 hover:scale-105 transition-transform duration-500"
          />
          
          <div className="relative inline-block animate-in fade-in slide-in-from-top duration-1000 delay-200">
            <p className="text-3xl md:text-4xl font-black text-foreground tracking-[0.3em] uppercase relative z-10 drop-shadow-lg">
              {translations.eggProtocol}
            </p>
            <div className="absolute inset-0 blur-xl bg-primary/30 -z-10 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-card leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-300 drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <span className="inline-block hover:scale-110 transition-transform duration-300">
              {translations.mainTagline}
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-foreground animate-in fade-in slide-in-from-bottom duration-1000 delay-400 drop-shadow-lg">
            {translations.subTagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button 
              size="lg"
              className="group relative text-2xl px-12 py-8 rounded-full bg-primary hover:bg-golden-dark text-primary-foreground font-black uppercase shadow-[0_10px_40px_rgba(251,191,36,0.6)] hover:shadow-[0_20px_60px_rgba(251,191,36,0.8)] transition-all duration-500 hover:scale-110 border-4 border-farm-brown overflow-hidden"
              onClick={() => window.open('https://t.me/ChickenCompany_bot', '_blank')}
            >
              <span className="relative z-10">{translations.playFree}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-golden-dark via-primary to-golden-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_infinite]" />
            </Button>
            <p className="text-base text-foreground/90 font-bold bg-card/40 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              {translations.playFreeNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
