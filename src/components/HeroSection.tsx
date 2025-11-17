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
        <div className="max-w-4xl mx-auto space-y-8">
          <img 
            src={logoChicken} 
            alt="Chicken Company Logo" 
            className="w-full max-w-2xl mx-auto drop-shadow-2xl animate-in fade-in slide-in-from-top duration-1000"
          />
          
          <p className="text-2xl md:text-3xl font-bold text-foreground tracking-wider uppercase animate-in fade-in slide-in-from-top duration-1000 delay-200">
            {translations.eggProtocol}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-card drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            {translations.mainTagline}
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold text-foreground animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            {translations.subTagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button 
              size="lg"
              className="text-xl px-8 py-6 rounded-full bg-primary hover:bg-golden-dark text-primary-foreground font-black uppercase shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 border-4 border-farm-brown"
              onClick={() => window.open('https://t.me/ChickenCompany_bot', '_blank')}
            >
              {translations.playFree}
            </Button>
            <p className="text-sm text-foreground/80 font-semibold">
              {translations.playFreeNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
