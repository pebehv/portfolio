import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#6B7BF0] shadow-2xl shadow-[#4B1782]/50">
              <ImageWithFallback
                src="../assets/images/perfil.jpg"
                alt="Pebelin Hernández - Desarrolladora Full Stack"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl text-[#6B7BF0] mb-4">
              Pebelin Hernández
            </h1>
            <h2 className="text-xl md:text-2xl text-[#8E32BC] mb-6">
              Desarrolladora Web Full Stack
            </h2>
            <p className="text-lg text-[#9BA8F5] max-w-2xl mx-auto leading-relaxed">
              Desarrollador Full-Stack con 4 años de trayectoria. 
              Especialización profunda en tecnologías Front-End (Angular, React, TypeScript),
               complementada con habilidades robustas en Back-End (Django, Node.js y PHP).
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="mailto:pebehv@gmail.com"
              className="p-3 bg-[#4B1782] hover:bg-[#8E32BC] rounded-full transition-colors"
            >
              <Mail className="w-6 h-6 text-[#9BA8F5]" />
            </a>
            <a
              href="https://github.com/pebehv?tab=repositories"
              className="p-3 bg-[#4B1782] hover:bg-[#8E32BC] rounded-full transition-colors"
            >
              <Github className="w-6 h-6 text-[#9BA8F5]" />
            </a>
            <a
              href="https://www.linkedin.com/in/pebelin-hernandez-97105b198/"
              className="p-3 bg-[#4B1782] hover:bg-[#8E32BC] rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#9BA8F5]" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <ChevronDown className="w-8 h-8 text-[#6B7BF0]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}