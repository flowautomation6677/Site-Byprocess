import * as React from "react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <img src="/logo_preta_transparente_byprocess.png" alt="By Process" className="w-[150px] h-auto brightness-0 invert opacity-80" />
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} By Process. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
