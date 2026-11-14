import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-arch-900 text-arch-300 border-t border-arch-600/80 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Studio info */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-white text-sm font-medium tracking-[0.25em] uppercase block">
              B+B Arquitectos
            </span>
            <p className="text-arch-300 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Despacho de arquitectura dedicado al diseño contemporáneo, el rigor constructivo y la creación de espacios atemporales con arraigo contextual y material.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-arch-100">
              Navegación
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-light">
              <li>
                <Link href="/" className="text-arch-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-arch-300 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/estudio" className="text-arch-300 hover:text-white transition-colors">
                  Estudio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-arch-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct contact */}
          <div className="space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-arch-100">
              Contacto
            </p>
            <div className="text-xs space-y-2 font-light">
              <p className="text-arch-200">bmasbarquitectos@hotmail.com</p>
              <p className="text-arch-300 font-mono">+52 773 127 3164</p>
              <div className="flex space-x-4 pt-2 text-arch-300">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-mono"
                >
                  Instagram
                </a>
                <span className="text-arch-500">&bull;</span>
                <a
                  href="https://wa.me/527731273164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-mono"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-arch-700/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-wider text-arch-400 gap-4">
          <p>&copy; {currentYear} B+B Arquitectos. Todos los derechos reservados.</p>
          <p className="text-arch-400">Proyectamos tu patrimonio</p>
        </div>
      </div>
    </footer>
  );
}
