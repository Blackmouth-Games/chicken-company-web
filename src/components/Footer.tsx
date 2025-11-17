import { Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-muted to-background py-12 border-t-4 border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Button
              size="icon"
              className="rounded-full bg-card hover:bg-primary/20 border-2 border-primary/30 transition-all duration-300 hover:scale-110"
              onClick={() => window.open('https://x.com/ChickenCo_io', '_blank')}
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-card hover:bg-secondary/20 border-2 border-secondary/30 transition-all duration-300 hover:scale-110"
              onClick={() => window.open('https://t.me/ChickenCo_io', '_blank')}
            >
              <Send className="w-5 h-5 text-foreground" />
            </Button>
          </div>
          
          <p className="text-muted-foreground text-center text-sm">
            © 2025 Chicken Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
