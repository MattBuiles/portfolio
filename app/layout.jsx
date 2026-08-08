import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Mateo Builes Duque - Especialista en IA & Data Science",
  description:
    "Portfolio profesional de Mateo Builes Duque, especialista en Inteligencia Artificial, Machine Learning y Data Science. Estudiante de Ingeniería de Sistemas e Informática en la Universidad Nacional de Colombia - Medellín.",
  keywords: [
    "IA",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Ingeniería de Sistemas",
    "Universidad Nacional",
    "Colombia",
  ],
  authors: [{ name: "Mateo Builes Duque" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Portfolio - Especialista en IA & Data Science",
    description:
      "Portfolio profesional de un especialista en Inteligencia Artificial, Machine Learning y Data Science.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
