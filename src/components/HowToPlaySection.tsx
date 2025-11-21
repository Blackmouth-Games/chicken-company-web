import { Building2, Coins, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingParticles } from "./FloatingParticles";

interface HowToPlaySectionProps {
  translations: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
}

const icons = [Building2, Coins, TrendingUp];

export const HowToPlaySection = ({ translations }: HowToPlaySectionProps) => {
  return (
    <section id="how-to-play" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-farm-brown/50 via-farm-brown/30 to-farm-brown/50 backdrop-blur-md z-0" />
      <FloatingParticles />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-16 sm:mb-20 text-primary drop-shadow-[0_4px_20px_rgba(251,191,36,0.5)] animate-fade-in">
          {translations.title}
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {translations.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index}
                className="group relative bg-gradient-to-br from-card/98 to-card/90 backdrop-blur-xl border-4 border-primary/30 hover:border-primary/80 transition-all duration-700 sm:hover:scale-[1.08] hover:shadow-[0_25px_70px_rgba(251,191,36,0.5)] sm:hover:-translate-y-3 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
                
                <CardContent className="relative p-8 sm:p-10 text-center space-y-6 sm:space-y-8">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-br from-primary via-golden to-secondary rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(251,191,36,0.6)] group-hover:shadow-[0_15px_50px_rgba(251,191,36,0.8)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 relative z-10">
                      <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-primary-foreground drop-shadow-lg" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    </div>
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(234,88,12,0.6)] border-4 border-background group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-20">
                      <span className="text-2xl sm:text-3xl font-black text-secondary-foreground drop-shadow-md">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground pt-4 group-hover:text-primary transition-colors duration-500 drop-shadow-md leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-medium">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
