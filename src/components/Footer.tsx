import { Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative py-4 sm:py-5 overflow-hidden z-10 bg-farm-brown/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-background/10 transition-all duration-300"
            onClick={() => window.open('https://x.com/ChickenCo_io', '_blank')}
          >
            <Twitter className="w-4 h-4 text-foreground/70 hover:text-foreground transition-colors duration-300" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-background/10 transition-all duration-300"
            onClick={() => window.open('https://t.me/ChickenCo_io', '_blank')}
          >
            <Send className="w-4 h-4 text-foreground/70 hover:text-foreground transition-colors duration-300" />
          </Button>
          
          <p className="text-foreground/70 text-xs sm:text-sm ml-2">
            © 2025 Chicken Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
