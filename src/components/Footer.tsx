import { Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-muted via-background to-transparent py-16 border-t-4 border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <Button
              size="icon"
              className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-card to-card/80 hover:from-primary/30 hover:to-primary/20 border-2 border-primary/30 hover:border-primary transition-all duration-500 hover:scale-125 shadow-xl hover:shadow-primary/40"
              onClick={() => window.open('https://x.com/ChickenCo_io', '_blank')}
            >
              <Twitter className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            </Button>
            <Button
              size="icon"
              className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-card to-card/80 hover:from-secondary/30 hover:to-secondary/20 border-2 border-secondary/30 hover:border-secondary transition-all duration-500 hover:scale-125 shadow-xl hover:shadow-secondary/40"
              onClick={() => window.open('https://t.me/ChickenCo_io', '_blank')}
            >
              <Send className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors duration-300" />
            </Button>
          </div>
          
          <p className="text-muted-foreground text-center font-bold bg-card/40 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10">
            © 2025 Chicken Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
