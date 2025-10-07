import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "pebehv@gmail.com",
      href: "mailto:pebehv@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+58 (424) 324-1710",
      href: "tel:+584243241710"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Venezuela, Charallave",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/pebehv?tab=repositories",
      color: "hover:bg-[#333]"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pebelin-hernandez-97105b198/",
      color: "hover:bg-[#0077B5]"
    },
    /*{
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:bg-[#1DA1F2]"
    }*/
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#191433] to-[#4B1782]/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#6B7BF0] mb-6">Contacto</h2>
          <p className="text-lg text-[#9BA8F5] max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! 
            Contáctame y trabajemos juntos para crear algo increíble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-[#6B7BF0] mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#6B7BF0] to-[#9BA8F5] rounded-lg flex items-center justify-center text-[#191433]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[#9BA8F5] text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#6B7BF0] hover:text-[#9BA8F5] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#6B7BF0]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg text-[#6B7BF0] mb-4">Sígueme en</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-[#4B1782] ${social.color} rounded-lg transition-colors duration-200 text-[#9BA8F5]`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#4B1782]/50 to-[#8E32BC]/30 p-6 rounded-xl border border-[#6B7BF0]/20">
            {/*<h4 className="text-lg text-[#6B7BF0] mb-3">¿Listo para comenzar?</h4> */}
              
              <p className="text-[#9BA8F5] text-sm mb-4">
                Estoy disponible para proyectos freelance y oportunidades laborales. 
                Hablemos sobre cómo puedo ayudarte a llevar tu idea al siguiente nivel.
              </p>
              <div className="flex space-x-2">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm">Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Form 
           <div className="bg-gradient-to-br from-[#4B1782]/30 to-[#8E32BC]/20 p-8 rounded-xl backdrop-blur-sm border border-[#6B7BF0]/20">
            <h3 className="text-2xl text-[#6B7BF0] mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[#9BA8F5] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#191433]/50 border border-[#6B7BF0]/30 rounded-lg text-[#9BA8F5] placeholder-[#9BA8F5]/50 focus:border-[#6B7BF0] focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#9BA8F5] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#191433]/50 border border-[#6B7BF0]/30 rounded-lg text-[#9BA8F5] placeholder-[#9BA8F5]/50 focus:border-[#6B7BF0] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[#9BA8F5] mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#191433]/50 border border-[#6B7BF0]/30 rounded-lg text-[#9BA8F5] placeholder-[#9BA8F5]/50 focus:border-[#6B7BF0] focus:outline-none transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#9BA8F5] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#191433]/50 border border-[#6B7BF0]/30 rounded-lg text-[#9BA8F5] placeholder-[#9BA8F5]/50 focus:border-[#6B7BF0] focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#6B7BF0] to-[#9BA8F5] text-[#191433] rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}