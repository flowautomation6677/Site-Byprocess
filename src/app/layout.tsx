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
  title: "By Process | Consultoria e Otimização de Processos",
  description: "Construiu um negócio, não uma prisão. Transforme o caos operacional numa engrenagem previsível e assuma o controlo total da sua empresa.",
  openGraph: {
    title: "By Process | Consultoria e Otimização de Processos",
    description: "Construiu um negócio, não uma prisão. Transforme o caos operacional numa engrenagem previsível e assuma o controlo total da sua empresa.",
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
