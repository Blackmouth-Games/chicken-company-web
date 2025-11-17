import { Wrench, Shield, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface HowItWorksSectionProps {
  translations: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
}

const icons = [Wrench, Shield, Wallet];

export const HowItWorksSection = ({ translations }: HowItWorksSectionProps) => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-secondary drop-shadow-lg">
          {translations.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index}
                className="group relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg border-4 border-secondary/20 hover:border-secondary transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_60px_rgba(244,114,87,0.4)] hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-secondary/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-12 h-12 text-secondary-foreground" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-background group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-black text-primary-foreground">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground pt-4 group-hover:text-secondary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
