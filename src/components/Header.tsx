import { Menu } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import solanaLogo from "@/assets/solana-logo.png";
import tonLogo from "@/assets/ton-logo.png";

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full bg-primary hover:bg-golden-dark border-farm-brown/20"
                >
                  <Menu className="h-5 w-5 text-primary-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#home" className="text-lg font-bold hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="#how-to-play" className="text-lg font-bold hover:text-primary transition-colors">
                    How to Play
                  </a>
                  <a href="#how-it-works" className="text-lg font-bold hover:text-primary transition-colors">
                    How it Works
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center gap-3">
              <div className="bg-card/80 backdrop-blur-sm rounded-full p-2 border-2 border-primary/20">
                <img src={solanaLogo} alt="Solana" className="w-8 h-8" />
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-full p-2 border-2 border-primary/20">
                <img src={tonLogo} alt="TON" className="w-8 h-8" />
              </div>
            </div>
          </div>

          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
};
