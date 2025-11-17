import { Building2, Coins, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="how-to-play" className="py-16 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16 text-primary drop-shadow-lg">
          {translations.title}
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {translations.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index}
                className="group relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg border-2 sm:border-4 border-primary/20 hover:border-primary transition-all duration-500 sm:hover:scale-110 hover:shadow-[0_20px_60px_rgba(251,191,36,0.4)] sm:hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <CardContent className="relative p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary to-golden-dark rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-background group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl font-black text-secondary-foreground">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground pt-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
