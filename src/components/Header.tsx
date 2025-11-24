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
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
            <div className="p-2 sm:p-2.5 transition-all duration-300">
              <img src={solanaLogo} alt="Solana" className="w-5 h-5 sm:w-6 sm:h-6 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-2 sm:p-2.5 transition-all duration-300">
              <img src={tonLogo} alt="TON" className="w-4 h-4 sm:w-5 sm:h-5 opacity-60 hover:opacity-100 transition-opacity" />
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
