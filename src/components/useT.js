
import { useLanguage } from "./LanguageContext";
import { texts } from "./translations";

export function useT() {
  const { language } = useLanguage();
  return (key) => texts[language][key];
}
