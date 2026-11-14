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
    <div className="min-h-screen bg-stone-950 text-stone-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="border-b border-stone-800 pb-8 mb-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-stone-400 mb-3">
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
              <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed mb-8">
                Estamos disponibles para consultas residenciales, comerciales o institucionales, así como colaboraciones multidisciplinarias.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-6">
              {/* WhatsApp (Direct Link) */}
              <a
                href="https://wa.me/527731273164?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20con%20B+B%20Arquitectos."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-stone-900/40 border border-stone-800 hover:border-stone-500 transition-all"
              >
                <div className="p-2.5 bg-stone-950 border border-stone-800 text-stone-300 group-hover:text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
                      WhatsApp Directo
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-stone-200 text-sm mt-1 font-mono">+52 (773) 127 3164</p>
                  <p className="text-stone-400 text-xs mt-1">Respuesta ágil y citas previas</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@bmasbarquitectos.com"
                className="group flex items-start gap-4 p-5 bg-stone-900/40 border border-stone-800 hover:border-stone-500 transition-all"
              >
                <div className="p-2.5 bg-stone-950 border border-stone-800 text-stone-300 group-hover:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
                      Correo Electrónico
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-stone-200 text-sm mt-1 font-mono">bmasbarquitectos@hotmail.com</p>
                  <p className="text-stone-400 text-xs mt-1">Recepción de memorias y presupuestos</p>
                </div>
              </a>

              {/* Location & Studio */}
              <div className="flex items-start gap-4 p-5 bg-stone-900/40 border border-stone-800">
                <div className="p-2.5 bg-stone-950 border border-stone-800 text-stone-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                    Ubicación del Taller
                  </span>
                  <p className="text-stone-200 text-sm mt-1">
                    Av. Insurgentes Sur &bull; Ciudad de México, México
                  </p>
                  <p className="text-stone-400 text-xs mt-1 font-mono">
                    Reuniones con previa cita
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-stone-900/40 border border-stone-800 hover:border-stone-500 transition-all"
              >
                <div className="p-2.5 bg-stone-950 border border-stone-800 text-stone-300 group-hover:text-white">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
                      Instagram
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-stone-200 text-sm mt-1 font-mono">@bmasbarquitectos</p>
                  <p className="text-stone-400 text-xs mt-1">Seguimiento de obras en proceso y detalles</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Minimalist Contact Form */}
          <div className="lg:col-span-7 bg-stone-900/20 border border-stone-800 p-8 sm:p-12">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-8">
              Cuéntanos sobre tu terreno, idea o proyecto
            </p>

            {submitted ? (
              <div className="py-16 text-center space-y-4 border border-stone-800 bg-stone-950/60 p-8">
                <CheckCircle2 className="w-10 h-10 text-stone-300 mx-auto" />
                <h3 className="text-lg font-light text-white">Mensaje enviado exitosamente</h3>
                <p className="text-sm text-stone-400 max-w-sm mx-auto font-light leading-relaxed">
                  Agradecemos su interés en el despacho. Un arquitecto de nuestro equipo se pondrá en contacto a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-white underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Ej. Roberto Sánchez"
                    className="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="roberto@ejemplo.com"
                      className="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+52 55 ..."
                      className="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="typology"
                    className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2"
                  >
                    Tipo de Proyecto
                  </label>
                  <select
                    id="typology"
                    defaultValue="Residencial"
                    className="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
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
                    className="block text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2"
                  >
                    Descripción del Proyecto o Terreno *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Ubicación aproximada, metros cuadrados estimados, necesidades principales..."
                    className="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-stone-100 hover:bg-white text-stone-950 text-xs font-medium uppercase tracking-[0.25em] transition-all hover:shadow-xl"
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

