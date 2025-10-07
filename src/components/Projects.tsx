import { ExternalLink, Github, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Sistema de Control de Casos",
      description: "Aplicación de Escritorio Híbrida (Desktop App) construida como proyecto final de Patrones y Diseño de Frameworks, combinando Angular para el frontend y ElectronJS para la capa de escritorio.",
      image: "./assets/images/control-casos.png",
      technologies: ["Angular", "TypeScript", "ElectronJS", "SQlite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/pebehv/SCI_PDyF",
      year: "2025"
    },
    {
      title: "Project Management Dashboard",
      description: "Plataforma web para la visualización de datos que monitoriza métricas y el estatus de múltiples proyectos.",
      image: "./assets/images/dashboard.png",
      technologies: ["React", "Next.Js", "Tailwind", "TypeScript"],
      liveUrl: "https://dashboard-projec.netlify.app/",
      githubUrl: "https://github.com/pebehv/project-dashboard?tab=readme-ov-file",
      year: "2025"
    },
    {
      title: "Mere-Bar",
      description: "Uno de los primeros proyectos web, desarrollado para aplicar y consolidar los conceptos básicos de diseño y maquetación.",
      image: "./assets/images/mere-bar.png",
      technologies: ["React", "Bootstrap", "PostgreSQL", "AWS S3", "Docker"],
      liveUrl: "https://pebehv.github.io/Mere-Bar/",
      githubUrl: "https://github.com/pebehv/Mere-Bar",
      year: "2021"
    },
    {
      title: "Proyecto en Angular",
      description: "Uno de los primeros proyectos web, desarrollado para aplicar y consolidar los conceptos básicos de diseño y maquetación.",
      image: "./assets/images/angular.png",
      technologies: ["Angular", "Bootstrap", "RxJS"],
      liveUrl: "https://pebehv.github.io/pryectoAngular/dist/pryecto-angular/",
      githubUrl: "https://github.com/pebehv/pryectoAngular",
      year: "2021"
    },
    {
      title: "Hoteles PEBEHV",
      description: "Uno de los primeros proyectos web, desarrollado para aplicar y consolidar los conceptos básicos de diseño y maquetación.",
      image: "./assets/images/hotel.png",
      technologies: ["HTML", "CSS", "JavaScript",  "Bootstrap"],
      liveUrl: "https://pebehv.github.io/Pagina-Bootstrap/",
      githubUrl: "https://github.com/pebehv/Pagina-Bootstrap",
      year: "2021"
    },
    {
      title: "NodeJS_HerokUCurso",
      description: "Proyecto práctico para la exploración y dominio de conceptos clave del Back-End.",
      image: "./assets/images/heroku.png",
      technologies: ["NodeJS", "Heroku", "MongoDB",  "Express"],
      liveUrl: "https://github.com/pebehv/NodeJS_HerokUCurso/tree/master",
      githubUrl: "https://github.com/pebehv/NodeJS_HerokUCurso/tree/master",
      year: "2022"
    },
    {
      title: "Prog_Paralelo_MPI",
      description: "Proyecto práctico de la asigantura de Fundamentos de la Programación Paralela.",
      image: "./assets/images/paralela.png",
      technologies: ["C", "MPI", "OpenMP"],
      liveUrl: "https://github.com/pebehv/Prog_Paralelo_MPI/blob/master/01-nbody.c",
      githubUrl: "https://github.com/pebehv/Prog_Paralelo_MPI/blob/master/01-nbody.c",
      year: "2025"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#6B7BF0] mb-6">Proyectos Personales</h2>
          <p className="text-lg text-[#9BA8F5] max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo 
            full stack y mi pasión por crear soluciones innovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 bg-gradient-to-br from-[#4B1782]/30 to-[#8E32BC]/20 p-8 rounded-xl backdrop-blur-sm border border-[#6B7BF0]/20 hover:border-[#6B7BF0]/40 transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191433]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-2xl text-[#6B7BF0]">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-[#9BA8F5] text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-[#9BA8F5] leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#8E32BC]/30 text-[#9BA8F5] text-sm rounded-full border border-[#6B7BF0]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#6B7BF0] to-[#9BA8F5] text-[#191433] rounded-lg hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Proyecto</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-[#4B1782] hover:bg-[#8E32BC] text-[#9BA8F5] rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/pebehv?tab=repositories"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#8E32BC] to-[#6B7BF0] text-[#191433] rounded-full hover:scale-105 transition-transform duration-200"
          >
            <Github className="w-5 h-5" />
            <span>Ver Más Proyectos en GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}