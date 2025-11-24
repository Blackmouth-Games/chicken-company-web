import { Card, CardContent } from "@/components/ui/card";
import { FloatingParticles } from "./FloatingParticles";
import buildAndManageImg from "@/assets/build-and-manage.png";
import stakeSafelyImg from "@/assets/stake-safely.png";
import earnWithdrawImg from "@/assets/earn-withdraw.png";

interface HowItWorksSectionProps {
  translations: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
}

const images = [buildAndManageImg, stakeSafelyImg, earnWithdrawImg];

export const HowItWorksSection = ({ translations }: HowItWorksSectionProps) => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-secondary/5 to-background/50 backdrop-blur-sm z-0" />
      <FloatingParticles />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16 text-secondary drop-shadow-lg">
          {translations.title}
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {translations.steps.map((step, index) => {
            const stepImage = images[index];
            return (
              <Card 
                key={index}
                className="group relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg border-2 sm:border-4 border-secondary/20 hover:border-secondary transition-all duration-500 sm:hover:scale-110 hover:shadow-[0_20px_60px_rgba(244,114,87,0.4)] sm:hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <CardContent className="relative p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                      <img 
                        src={stepImage} 
                        alt={step.title}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground pt-4 group-hover:text-secondary transition-colors duration-300">{step.title}</h3>
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
