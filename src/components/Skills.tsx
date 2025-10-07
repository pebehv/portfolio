export function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "Angular", level: 95, icon: "🅰️" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "JavaScript", level: 92, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 80, icon: "💨" }
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "Django", level: 75, icon: "🐍" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "🚀" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "PHP", level: 65, icon: "📊" }
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🗃️" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "SQL", level: 90, icon: "📋" },
        { name: "Sqlite", level: 80, icon: "🗄️"  }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: 92, icon: "📝" },
        { name: "GitHub/Bitbucket", level: 70, icon: "☁️" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "PGAdmin", level: 70, icon: "📦" },
        /*{ name: "Jest", level: 82, icon: "🧪" }*/
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-[#191433] to-[#4B1782]/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#6B7BF0] mb-6">Habilidades Técnicas</h2>
          <p className="text-lg text-[#9BA8F5] max-w-3xl mx-auto">
            Un conjunto diverso de tecnologías y herramientas que me permiten 
            construir soluciones completas y escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-[#4B1782]/50 to-[#8E32BC]/30 p-6 rounded-xl backdrop-blur-sm border border-[#6B7BF0]/20"
            >
              <h3 className="text-xl text-[#6B7BF0] mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-[#9BA8F5]">{skill.name}</span>
                      </div>
                      <span className="text-[#6B7BF0] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#191433] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#6B7BF0] to-[#9BA8F5] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#4B1782] to-[#8E32BC] px-8 py-4 rounded-full">
            <span className="text-[#9BA8F5]">Siempre aprendiendo nuevas tecnologías</span>
            <span className="text-2xl">📚</span>
          </div>
        </div>
      </div>
    </section>
  );
}