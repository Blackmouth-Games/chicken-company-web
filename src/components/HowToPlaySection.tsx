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
    <section id="how-to-play" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-primary drop-shadow-lg">
          {translations.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index}
                className="bg-card/90 backdrop-blur-sm border-4 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center shadow-xl">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="w-12 h-12 mx-auto bg-secondary rounded-full flex items-center justify-center -mt-2 shadow-lg">
                    <span className="text-2xl font-black text-secondary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
