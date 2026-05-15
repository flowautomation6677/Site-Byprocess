"use client";

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.05)] py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo mapping to /by-process-logo.svg or similar. Using a stylized text as fallback */}
        <div className="flex items-center gap-2">
           <img src="/logo_preta_transparente_byprocess.png" alt="By Process" className="w-[150px] h-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-slate-800">
          <a href="#solucao" className="text-sm font-medium hover:text-primary transition-colors">A Solução</a>
          <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Catálogo</a>
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</a>
          <a href="#autoridade" className="text-sm font-medium hover:text-primary transition-colors">Por que Nós?</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div>
          <Button size="sm" onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>
            Agendar Diagnóstico
          </Button>
        </div>
      </div>
    </header>
  )
}
