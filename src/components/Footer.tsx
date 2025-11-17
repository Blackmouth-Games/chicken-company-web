import { Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative py-8 sm:py-10 overflow-hidden z-10 bg-farm-brown/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            size="icon"
            variant="ghost"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-background/10 transition-all duration-300"
            onClick={() => window.open('https://x.com/ChickenCo_io', '_blank')}
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60 hover:text-foreground transition-colors duration-300" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-background/10 transition-all duration-300"
            onClick={() => window.open('https://t.me/ChickenCo_io', '_blank')}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60 hover:text-foreground transition-colors duration-300" />
          </Button>
          
          <p className="text-foreground/60 text-center text-xs sm:text-sm">
            © 2025 Chicken Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
