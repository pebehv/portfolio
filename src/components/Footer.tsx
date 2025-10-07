import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191433] border-t border-[#4B1782]/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-[#9BA8F5] flex items-center space-x-2">
              <span>© 2024 Pebelin Hernández.</span>
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-[#6B7BF0] fill-current" />
              <span>y mucho código</span>
            </p>
            <p className="text-[#9BA8F5]/70 text-sm mt-1">
              Desarrolladora Full Stack • Venezuela, Charallave
            </p>
          </div>

          {/* Right side - Back to top */}
          <div className="flex items-center space-x-6">
            <div className="text-[#9BA8F5]/70 text-sm">
              ¿Te gustó mi trabajo?
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#4B1782] to-[#8E32BC] text-[#9BA8F5] rounded-full hover:from-[#6B7BF0] hover:to-[#9BA8F5] hover:text-[#191433] transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Bottom divider and additional info */}
        <div className="mt-8 pt-6 border-t border-[#4B1782]/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#9BA8F5]/60 text-sm">
            <p>
              Construido con React, TypeScript y Tailwind CSS
            </p>
            <p className="mt-2 md:mt-0">
              Siempre abierta a nuevas oportunidades y colaboraciones
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}