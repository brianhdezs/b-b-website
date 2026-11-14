import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, PenTool } from 'lucide-react';

export default function EstudioPage() {
  return (
    <div className="min-h-screen bg-arch-950 text-arch-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="border-b border-arch-600 pb-8 mb-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-arch-300 mb-3">
            El Despacho
          </p>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
            Estudio &amp; Filosofía
          </h1>
        </div>

        {/* Philosophy Intro & Studio Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug">
              Una práctica familiar impulsada por el respeto al material, la precisión geométrica y la habitabilidad.
            </h2>
            <div className="space-y-4 text-arch-200 font-light text-base leading-relaxed text-justify">
              <p>
                B+B Arquitectos nace como la convergencia de dos generaciones dedicadas a la arquitectura y la edificación. Creemos que la buena arquitectura no necesita estridencias: se define por la serenidad de sus proporciones, el diálogo honesto con el entorno y la nobleza con la que envejecen sus materiales.
              </p>
              <p>
                Nuestra escala de trabajo nos permite involucrarnos personalmente en cada etapa del proceso: desde las primeras intenciones en el restirador y el desarrollo de ingeniería, hasta la supervisión minuciosa en el sitio de obra.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-arch-200 border-b border-arch-500 pb-1 hover:border-white transition-all"
              >
                <span>Iniciar un proyecto con nosotros</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full border border-arch-600 bg-arch-900 overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                alt="Espacio de trabajo B+B Arquitectos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter grayscale contrast-110"
              />
            </div>
            <p className="mt-3 text-[11px] font-mono text-arch-400 uppercase tracking-widest text-right">
              Taller de proyectos &bull; Maquetas y experimentación material
            </p>
          </div>
        </div>

        {/* Three Core Pillars with Defined Eerie/Jet Gray Cards */}
        <div className="border-t border-arch-600 pt-16 mb-24">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-arch-300 mb-10">
            Nuestros Principios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-arch-600 p-8 bg-arch-800 hover:bg-arch-700/80 hover:border-arch-400 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <Compass className="w-6 h-6 text-arch-200 mb-6" />
              <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                Arraigo al Contexto
              </h3>
              <p className="text-arch-300 font-light text-sm leading-relaxed">
                Cada obra parte de un entendimiento profundo de la orientación solar, la topografía, los vientos dominantes y el tejido cultural donde se inserta.
              </p>
            </div>

            <div className="border border-arch-600 p-8 bg-arch-800 hover:bg-arch-700/80 hover:border-arch-400 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <PenTool className="w-6 h-6 text-arch-200 mb-6" />
              <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                Honestidad Material
              </h3>
              <p className="text-arch-300 font-light text-sm leading-relaxed">
                Priorizamos materiales tectónicos auténticos —concreto aparente, maderas macizas, piedras volcánicas y acero— tratados con maestría artesanal.
              </p>
            </div>

            <div className="border border-arch-600 p-8 bg-arch-800 hover:bg-arch-700/80 hover:border-arch-400 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <ShieldCheck className="w-6 h-6 text-arch-200 mb-6" />
              <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                Acompañamiento Total
              </h3>
              <p className="text-arch-300 font-light text-sm leading-relaxed">
                Garantizamos control presupuestal estricto, coordinación de ingenierías y dirección arquitectónica rigurosa hasta el último detalle de entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Direction & Team */}
        <div className="border-t border-arch-600 pt-16">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-arch-300 mb-10">
            Dirección del Taller
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <div className="border-l-2 border-arch-500 pl-6 space-y-2 bg-arch-800/40 py-4 pr-6">
              <span className="text-xs font-mono text-arch-400 uppercase tracking-widest block">
                Fundador
              </span>
              <h4 className="text-xl font-light text-white">Arq. Benjamín E. Hernández</h4>
              <p className="text-arch-300 font-light text-sm leading-relaxed pt-2">
                Más de 30 años de experiencia liderando proyectos residenciales, desarrollo técnico y dirección de obra. Formado en la tradición constructiva y estructural mexicana.
              </p>
            </div>

            <div className="border-l-2 border-arch-500 pl-6 space-y-2 bg-arch-800/40 py-4 pr-6">
              <span className="text-xs font-mono text-arch-400 uppercase tracking-widest block">
                Director
              </span>
              <h4 className="text-xl font-light text-white">Arq. Benjamín A. Hernández</h4>
              <p className="text-arch-300 font-light text-sm leading-relaxed pt-2">
                Enfocado en la investigación espacial, diseño conceptual contemporáneo, sustentabilidad pasiva y la integración de nuevas tecnologías en la arquitectura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
