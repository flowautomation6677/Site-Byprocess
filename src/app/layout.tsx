import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "By Process | Transforme o caos operacional em um ecossistema de vendas previsível",
  description: "Exclusivo para fundadores B2B. Centralize dados, automatize rotinas manuais e elimine o achismo da sua gestão com a By Process.",
  openGraph: {
    title: "By Process | Consultoria e Automação de Vendas B2B",
    description: "Você construiu um negócio, não uma prisão. Transforme o caos operacional em um ecossistema de vendas previsível.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden text-foreground bg-background">{children}</body>
    </html>
  );
}
