import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "hi", label: "HI", name: "हिन्दी" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "pt", label: "PT", name: "Português" },
];

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Select value={currentLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-[110px] bg-card/60 backdrop-blur-lg border border-primary/10 hover:bg-card/80 transition-all duration-300 shadow-xl hover:shadow-primary/20 hover:scale-105">
        <Globe className="w-4 h-4 mr-1" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="backdrop-blur-lg bg-card/95">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label} - {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
