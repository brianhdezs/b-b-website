'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/estudio', label: 'Estudio' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-arch-950/90 text-arch-100 backdrop-blur-md border-b border-arch-600/80 py-4 shadow-sm'
          : 'bg-gradient-to-b from-arch-950/90 via-arch-950/40 to-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex flex-col tracking-widest uppercase font-light text-sm sm:text-base transition-opacity hover:opacity-85"
        >
          <span className="font-medium tracking-[0.25em] text-white">B+B</span>
          <span className="text-[10px] tracking-[0.35em] text-arch-300 group-hover:text-arch-200 transition-colors">
            Arquitectos
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1 ${
                  isActive
                    ? 'text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white'
                    : 'text-arch-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          className="md:hidden p-2 text-arch-200 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-arch-950/98 backdrop-blur-xl border-t border-arch-600 z-50 p-8 flex flex-col justify-between">
          <nav className="flex flex-col space-y-6 pt-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg uppercase tracking-[0.25em] transition-colors py-2 border-b border-arch-700 ${
                    isActive ? 'text-white font-medium pl-2 border-l-2 border-white' : 'text-arch-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-arch-700 text-xs tracking-wider text-arch-300 uppercase font-mono">
            <p>B+B Arquitectos</p>
            <p className="mt-1">Arquitectura &bull; Construcción &bull; Ciudad</p>
          </div>
        </div>
      )}
    </header>
  );
}
