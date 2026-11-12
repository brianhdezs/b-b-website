import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Architectural Image with Subtle Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="BMASB Arquitectura Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter grayscale contrast-110 brightness-[0.45] transition-transform duration-1000 scale-105"
        />
        {/* Architectural Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-950/60" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Subtitle / Architectural Tagline */}
        <p className="text-[11px] sm:text-xs font-mono tracking-[0.35em] uppercase text-stone-300 mb-6 drop-shadow-sm">
          Arquitectura &bull; Espacio &bull; Materia
        </p>

        {/* Studio Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase mb-8 leading-[1.05]">
          BMASB <span className="font-extralight text-stone-400">Arquitectos</span>
        </h1>

        {/* Minimalist Statement */}
        <p className="max-w-xl text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-12 text-center">
          Diseño arquitectónico contemporáneo con rigor formal, sensibilidad espacial y valor atemporal.
        </p>

        {/* Two Essential Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary Button: Explorar Proyectos */}
          <Link
            href="/proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-stone-950 bg-stone-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Explorar Obras</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Secondary Button: Contacto */}
          <Link
            href="/contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-light uppercase tracking-[0.2em] text-white border border-stone-500/80 bg-black/30 hover:bg-white hover:text-stone-950 hover:border-white backdrop-blur-sm transition-all duration-300 group"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Subtle Bottom Architectural Coordinate */}
      <div className="absolute bottom-8 left-8 right-8 z-10 hidden sm:flex items-center justify-between text-[10px] font-mono tracking-widest text-stone-400 uppercase">
        <span>Portfolio 2021 — 2026</span>
        <span>Despacho de Arquitectura Familiar</span>
      </div>
    </div>
  );
}

