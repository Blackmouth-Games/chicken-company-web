import { LanguageSelector } from "./LanguageSelector";
import solanaLogo from "@/assets/solana-logo.png";
import tonLogo from "@/assets/ton-logo.png";

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 pointer-events-auto">
            <div className="bg-card/60 backdrop-blur-lg rounded-full p-3 border border-primary/10 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-primary/20">
              <img src={solanaLogo} alt="Solana" className="w-10 h-10" />
            </div>
            <div className="bg-card/60 backdrop-blur-lg rounded-full p-3 border border-primary/10 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-primary/20">
              <img src={tonLogo} alt="TON" className="w-10 h-10" />
            </div>
          </div>

          <div className="pointer-events-auto">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
