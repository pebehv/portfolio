import { Code, Database, Globe, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Front-End Expert",
      description: "Especializada en Angular, React y TypeScript con enfoque en UX/UI"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Back-End Sólido",
      description: "Experiencia con Django, Node.js y bases de datos SQL"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack",
      description: "Desarrollo completo desde la concepción hasta el despliegue"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovación",
      description: "Siempre al día con las últimas tecnologías y tendencias"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#6B7BF0] mb-6">Sobre Mí</h2>
          <p className="text-lg text-[#9BA8F5] max-w-3xl mx-auto leading-relaxed">
            Soy una desarrolladora apasionada por la calidad que transforma conceptos en soluciones web innovadoras.
             A lo largo de 4 años, he construido aplicaciones robustas, enfocándome en el equilibrio perfecto entre diseño excepcional y funcionalidad sólida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#4B1782] to-[#8E32BC] p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#9BA8F5] mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-[#6B7BF0] mb-3">
                {highlight.title}
              </h3>
              <p className="text-[#9BA8F5] text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#4B1782] to-[#8E32BC] p-8 rounded-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl text-[#6B7BF0] mb-6">Mi Filosofía</h3>
            <p className="text-[#9BA8F5] leading-relaxed">
              Creo firmemente que la tecnología debe ser intuitiva y accesible para todos. 
              Abordo cada proyecto como un ciclo de aprendizaje continuo, priorizando la 
              excelencia técnica a través de código limpio y interfaces user-friendly,
               buscando constantemente ir más allá de los requisitos iniciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}