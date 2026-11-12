'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2, Camera, Layers, Compass } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  // Reset index when project changes
  useEffect(() => {
    if (project) {
      setCurrentMediaIndex(0);
      setActiveFilter('todos');
    }
  }, [project]);

  // Filter gallery items if filter is active
  const filteredGallery = project
    ? activeFilter === 'todos'
      ? project.gallery
      : project.gallery.filter((item) => item.type === activeFilter)
    : [];

  const handlePrev = useCallback(() => {
    if (!filteredGallery.length) return;
    setCurrentMediaIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  }, [filteredGallery.length]);

  const handleNext = useCallback(() => {
    if (!filteredGallery.length) return;
    setCurrentMediaIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
  }, [filteredGallery.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !project) return null;

  const currentMedia = filteredGallery[currentMediaIndex] || project.gallery[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-all duration-300 p-2 sm:p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative flex flex-col lg:flex-row w-full max-w-7xl h-[92vh] bg-stone-950 text-stone-100 border border-stone-800 shadow-2xl overflow-hidden rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-30 p-2.5 text-stone-400 hover:text-white bg-black/40 hover:bg-black/80 backdrop-blur-sm border border-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Gallery Viewer */}
        <div className="relative flex-1 flex flex-col justify-between bg-black/60 h-1/2 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800">
          {/* Main Visual Display */}
          <div className="relative flex-1 flex items-center justify-center p-4 lg:p-8">
            {currentMedia ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentMedia.url}
                  alt={currentMedia.caption || project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-contain transition-opacity duration-300 select-none"
                  priority
                />
              </div>
            ) : null}

            {/* Previous & Next Arrows */}
            {filteredGallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Imagen anterior"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/90 text-stone-300 hover:text-white border border-stone-800 backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Siguiente imagen"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/90 text-stone-300 hover:text-white border border-stone-800 backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Media Type Badge & Counter */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 text-xs tracking-wider uppercase text-stone-400 bg-stone-950/80 px-3 py-1.5 border border-stone-800/80 backdrop-blur-sm">
              <span className="font-mono text-white">
                {String(currentMediaIndex + 1).padStart(2, '0')} / {String(filteredGallery.length).padStart(2, '0')}
              </span>
              <span className="text-stone-600">|</span>
              <span>{currentMedia?.type}</span>
            </div>
          </div>

          {/* Caption & Category Filter Bar */}
          <div className="px-6 py-3 bg-stone-950/90 border-t border-stone-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <p className="text-stone-300 font-light truncate max-w-md italic">
              {currentMedia?.caption || project.title}
            </p>
            {/* Gallery Category Selector */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {['todos', 'exterior', 'interior', 'detalle', 'plano'].map((cat) => {
                const count = cat === 'todos' ? project.gallery.length : project.gallery.filter((i) => i.type === cat).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveFilter(cat);
                      setCurrentMediaIndex(0);
                    }}
                    className={`px-2.5 py-1 text-[11px] tracking-wider uppercase transition-all whitespace-nowrap ${
                      activeFilter === cat
                        ? 'bg-stone-100 text-stone-950 font-medium'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="flex gap-2 p-3 bg-black/80 overflow-x-auto border-t border-stone-800/80 scrollbar-thin">
            {filteredGallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentMediaIndex(idx)}
                className={`relative flex-shrink-0 w-16 h-12 border transition-all ${
                  idx === currentMediaIndex
                    ? 'border-white opacity-100 scale-105'
                    : 'border-stone-800 opacity-40 hover:opacity-80'
                }`}
              >
                <Image src={item.url} alt={`Miniatura ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Architectural Dossier & Homogeneous Spec Sheet */}
        <div className="w-full lg:w-[420px] xl:w-[460px] h-1/2 lg:h-full overflow-y-auto p-6 lg:p-10 flex flex-col justify-between bg-stone-950">
          <div>
            {/* Header / Typology */}
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-6">
              <span className="text-[11px] tracking-widest uppercase font-mono text-stone-400">
                Ficha Técnica de Proyecto
              </span>
              <span className="text-xs px-2.5 py-0.5 border border-stone-700 bg-stone-900 text-stone-300 tracking-wider uppercase">
                {project.typology}
              </span>
            </div>

            {/* Project Title */}
            <h2 id="modal-project-title" className="text-2xl lg:text-3xl font-light tracking-tight text-white mb-6">
              {project.title}
            </h2>

            {/* Homogeneous Spec Sheet Table */}
            <dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm border-y border-stone-800 py-6 mb-6">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-stone-400 font-mono mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-stone-400" />
                  Tipología
                </dt>
                <dd className="text-stone-200 font-light">{project.typology}</dd>
              </div>

              <div>
                <dt className="text-[11px] uppercase tracking-wider text-stone-400 font-mono mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  Ubicación
                </dt>
                <dd className="text-stone-200 font-light">{project.location}</dd>
              </div>

              <div>
                <dt className="text-[11px] uppercase tracking-wider text-stone-400 font-mono mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  Año de Culminación
                </dt>
                <dd className="text-stone-200 font-mono">{project.year}</dd>
              </div>

              <div>
                <dt className="text-[11px] uppercase tracking-wider text-stone-400 font-mono mb-1 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-stone-400" />
                  Área Construida
                </dt>
                <dd className="text-stone-200 font-mono">{project.area}</dd>
              </div>

              {project.photographer && (
                <div className="col-span-2 pt-2 border-t border-stone-900">
                  <dt className="text-[11px] uppercase tracking-wider text-stone-400 font-mono mb-1 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-stone-400" />
                    Fotografía
                  </dt>
                  <dd className="text-stone-300 font-light text-xs">{project.photographer}</dd>
                </div>
              )}
            </dl>

            {/* Project Memory / Description */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-mono text-stone-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-stone-400" />
                Memoria Descriptiva
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light text-justify">
                {project.description}
              </p>
            </div>
          </div>

          {/* Modal Footer Call to Action */}
          <div className="pt-8 border-t border-stone-800 mt-8">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center w-full py-3 px-6 text-xs uppercase tracking-widest font-medium text-stone-950 bg-stone-100 hover:bg-white hover:shadow-lg transition-all"
            >
              Consultar sobre este proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

