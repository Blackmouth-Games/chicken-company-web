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
      <SelectTrigger className="w-[100px] bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card/90 transition-colors">
        <Globe className="w-4 h-4 mr-1" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label} - {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
