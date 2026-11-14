'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Instagram, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-arch-950 text-arch-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="border-b border-arch-600 pb-8 mb-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-arch-300 mb-3">
            Contacto
          </p>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
            Hablemos de su Proyecto
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-arch-200 font-light text-base sm:text-lg leading-relaxed mb-8">
                Estamos disponibles para consultas residenciales, comerciales o institucionales, así como colaboraciones multidisciplinarias.
              </p>
            </div>

            {/* Direct Channel Cards structured with Eerie Black & Jet Gray */}
            <div className="space-y-6">
              {/* WhatsApp (Direct Link) */}
              <a
                href="https://wa.me/527731273164?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20con%20B+B%20Arquitectos."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-arch-800 border border-arch-600 hover:border-arch-400 hover:bg-arch-700/80 transition-all shadow-sm"
              >
                <div className="p-2.5 bg-arch-700 border border-arch-500 text-white group-hover:bg-arch-600 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-arch-300">
                      WhatsApp Directo
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-arch-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-sm mt-1 font-mono">+52 (773) 127 3164</p>
                  <p className="text-arch-300 text-xs mt-1">Respuesta ágil y citas previas</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:bmasbarquitectos@hotmail.com"
                className="group flex items-start gap-4 p-5 bg-arch-800 border border-arch-600 hover:border-arch-400 hover:bg-arch-700/80 transition-all shadow-sm"
              >
                <div className="p-2.5 bg-arch-700 border border-arch-500 text-white group-hover:bg-arch-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-arch-300">
                      Correo Electrónico
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-arch-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-sm mt-1 font-mono">bmasbarquitectos@hotmail.com</p>
                  <p className="text-arch-300 text-xs mt-1">Recepción de memorias y presupuestos</p>
                </div>
              </a>

              {/* Location & Studio */}
              <div className="flex items-start gap-4 p-5 bg-arch-800 border border-arch-600 shadow-sm">
                <div className="p-2.5 bg-arch-700 border border-arch-500 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-arch-300 block">
                    Ubicación del Taller
                  </span>
                  <p className="text-white text-sm mt-1">
                    Av. Insurgentes Sur &bull; Ciudad de México, México
                  </p>
                  <p className="text-arch-400 text-xs mt-1 font-mono">
                    Reuniones con previa cita
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-arch-800 border border-arch-600 hover:border-arch-400 hover:bg-arch-700/80 transition-all shadow-sm"
              >
                <div className="p-2.5 bg-arch-700 border border-arch-500 text-white group-hover:bg-arch-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-arch-300">
                      Instagram
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-arch-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-sm mt-1 font-mono">@bmasbarquitectos</p>
                  <p className="text-arch-300 text-xs mt-1">Seguimiento de obras en proceso y detalles</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Minimalist Contact Form with Charcoal / Jet Structure */}
          <div className="lg:col-span-7 bg-arch-850 border border-arch-600 p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-arch-300 mb-8">
              Cuéntanos sobre tu terreno, idea o proyecto
            </p>

            {submitted ? (
              <div className="py-16 text-center space-y-4 border border-arch-600 bg-arch-900/60 p-8">
                <CheckCircle2 className="w-10 h-10 text-arch-200 mx-auto" />
                <h3 className="text-lg font-light text-white">Mensaje enviado exitosamente</h3>
                <p className="text-sm text-arch-300 max-w-sm mx-auto font-light leading-relaxed">
                  Agradecemos su interés en el despacho. Un arquitecto de nuestro equipo se pondrá en contacto a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-arch-300 hover:text-white underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase tracking-widest text-arch-300 mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Ej. Roberto Sánchez"
                    className="w-full bg-arch-900 border border-arch-600 px-4 py-3 text-sm text-white placeholder-arch-400 focus:outline-none focus:border-arch-400 focus:bg-arch-950 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono uppercase tracking-widest text-arch-300 mb-2"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="roberto@ejemplo.com"
                      className="w-full bg-arch-900 border border-arch-600 px-4 py-3 text-sm text-white placeholder-arch-400 focus:outline-none focus:border-arch-400 focus:bg-arch-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-mono uppercase tracking-widest text-arch-300 mb-2"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+52 773 ..."
                      className="w-full bg-arch-900 border border-arch-600 px-4 py-3 text-sm text-white placeholder-arch-400 focus:outline-none focus:border-arch-400 focus:bg-arch-950 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="typology"
                    className="block text-[11px] font-mono uppercase tracking-widest text-arch-300 mb-2"
                  >
                    Tipo de Proyecto
                  </label>
                  <select
                    id="typology"
                    defaultValue="Residencial"
                    className="w-full bg-arch-900 border border-arch-600 px-4 py-3 text-sm text-white focus:outline-none focus:border-arch-400 transition-colors cursor-pointer"
                  >
                    <option value="Residencial">Residencial (Casa habitación)</option>
                    <option value="Comercial">Comercial / Usos Mixtos</option>
                    <option value="Interiores">Remodelación o Interiores</option>
                    <option value="Consultoría">Supervisión / Consultoría</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase tracking-widest text-arch-300 mb-2"
                  >
                    Descripción del Proyecto o Terreno *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Ubicación aproximada, metros cuadrados estimados, necesidades principales..."
                    className="w-full bg-arch-900 border border-arch-600 px-4 py-3 text-sm text-white placeholder-arch-400 focus:outline-none focus:border-arch-400 focus:bg-arch-950 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white hover:bg-arch-100 text-arch-950 text-xs font-medium uppercase tracking-[0.25em] transition-all hover:shadow-xl"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
