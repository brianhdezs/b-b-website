'use client';

import { useState } from 'react';
import { Mail, MessageSquare, MapPin, Instagram, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    typology: 'Residencial',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Intentar el envío a través de nuestra API route en Next.js
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');
        return;
      }

      // 2. Fallback de respaldo directo hacia FormSubmit por si el entorno local o proxy bloquea
      const directRes = await fetch('https://formsubmit.co/ajax/brianhdez824@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nueva solicitud de proyecto: ${formData.name} [${formData.typology}]`,
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.email,
          Nombre: formData.name,
          'Correo electrónico': formData.email,
          'Teléfono / WhatsApp': formData.phone || 'No especificado',
          'Tipo de Proyecto': formData.typology,
          'Descripción del Proyecto': formData.message,
        }),
      });

      const directData = await directRes.json();
      if (directRes.ok && (directData.success === 'true' || directData.success === true)) {
        setStatus('success');
      } else {
        throw new Error(result.error || directData.message || 'No se pudo enviar la solicitud en este momento.');
      }
    } catch (err: unknown) {
      console.error('Error enviando formulario:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'No se pudo procesar el envío. Por favor contáctanos por WhatsApp.'
      );
    }
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

              {/* Location & Studio (Interactive Google Maps Link) */}
              <a
                href="https://maps.app.goo.gl/88mA8gD5mPzNajYt8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-arch-800 border border-arch-600 hover:border-arch-400 hover:bg-arch-700/80 transition-all shadow-sm"
              >
                <div className="p-2.5 bg-arch-700 border border-arch-500 text-white group-hover:bg-arch-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-arch-300">
                      Ubicación
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-arch-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-sm mt-1">
                    Calle Leandro Valle 34, Tula de Allende, Hidalgo, México, C.P. 42800.
                  </p>
                  <p className="text-arch-400 text-xs mt-1 font-mono">
                    Abrir en Google Maps &bull; Reuniones con cita previa
                  </p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61564755911245"
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
                      Facebook
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-arch-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-sm mt-1 font-mono">B+B Arquitectos</p>
                  <p className="text-arch-300 text-xs mt-1">Seguimiento de obras en proceso y detalles</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-arch-850 border border-arch-600 p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-arch-300 mb-8">
              Cuéntanos sobre tu terreno, idea o proyecto
            </p>

            {status === 'success' ? (
              <div className="py-16 text-center space-y-5 border border-arch-600 bg-arch-900/60 p-8">
                <CheckCircle2 className="w-12 h-12 text-arch-100 mx-auto" />
                <h3 className="text-xl font-light text-white">Solicitud enviada exitosamente</h3>
                <p className="text-sm text-arch-300 max-w-md mx-auto font-light leading-relaxed">
                  El mensaje ha sido remitido directamente a nuestro correo (<span className="text-white font-mono">brianhdez824@gmail.com</span>). Un arquitecto se pondrá en contacto contigo a la brevedad.
                </p>

                {/* Nota de activación inicial */}
                <div className="p-4 bg-arch-800/90 border border-arch-500/70 rounded text-left text-xs text-arch-300 max-w-md mx-auto space-y-1.5">
                  <p className="font-mono text-[11px] text-arch-100 uppercase tracking-wider font-medium">
                    Nota para la prueba inicial:
                  </p>
                  <p className="font-light leading-relaxed text-arch-200">
                    Si es la primera vez que se envía un formulario a este correo, FormSubmit te enviará un email con un botón para **confirmar la activación con 1 clic**. Una vez confirmado, todos los mensajes futuros entrarán directo a tu bandeja.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      typology: 'Residencial',
                      message: '',
                    });
                  }}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-arch-300 hover:text-white underline underline-offset-4"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 bg-red-950/40 border border-red-800/60 text-red-200 text-xs rounded flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-white mb-0.5">Aviso de envío</p>
                        <p className="text-red-300">{errorMessage}</p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/527731273164?text=Hola,%20deseo%20cotizar%20un%20proyecto."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-mono text-[11px] uppercase tracking-wider whitespace-nowrap text-white hover:text-arch-100"
                    >
                      WhatsApp &rarr;
                    </a>
                  </div>
                )}

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
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    name="typology"
                    value={formData.typology}
                    onChange={handleChange}
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
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ubicación aproximada, metros cuadrados estimados, necesidades principales..."
                    className="w-full bg-arch-900 border border-arch-600 px-4 py-3 text-sm text-white placeholder-arch-400 focus:outline-none focus:border-arch-400 focus:bg-arch-950 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-white hover:bg-arch-100 text-arch-950 text-xs font-medium uppercase tracking-[0.25em] transition-all hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-arch-950 border-t-transparent rounded-full animate-spin" />
                      <span>Enviando Solicitud...</span>
                    </>
                  ) : (
                    <span>Enviar Solicitud</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
