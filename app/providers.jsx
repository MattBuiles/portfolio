"use client";

import { ThemeProvider } from "../src/contexts/ThemeContext";
import { LanguageProvider } from "../src/contexts/LanguageContext";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
