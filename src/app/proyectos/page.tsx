'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project, ProjectTypology } from '@/types/project';
import ProjectModal from '@/components/ProjectModal';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTypology, setActiveTypology] = useState<string>('todos');

  const typologies: Array<'todos' | ProjectTypology> = [
    'todos',
    'Residencial',
    'Comercial',
    'Interiores',
  ];

  const filteredProjects =
    activeTypology === 'todos'
      ? projects
      : projects.filter((project) => project.typology === activeTypology);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-8 mb-12 gap-6">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-stone-400 mb-3">
              Portafolio de Obras
            </p>
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
              Proyectos Seleccionados
            </h1>
          </div>

          {/* Typology Filter Bar */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mr-2 hidden sm:inline-flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" /> Filtrar:
            </span>
            {typologies.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTypology(item)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200 ${
                  activeTypology === item
                    ? 'bg-stone-100 text-stone-950 font-medium'
                    : 'text-stone-400 hover:text-white bg-stone-900/60 hover:bg-stone-900 border border-stone-800'
                }`}
              >
                {item === 'todos' ? 'Todos' : item}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-stone-900/30 border border-stone-800/80 hover:border-stone-500 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

                {/* Hover Quick Indicator */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-none bg-stone-950/80 backdrop-blur-sm border border-stone-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Badge for typology */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-black/80 text-stone-300 border border-stone-800 backdrop-blur-sm">
                    {project.typology}
                  </span>
                </div>
              </div>

              {/* Project Card Metadata */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-baseline justify-between text-xs font-mono text-stone-400 mb-2">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="text-xl font-light text-white group-hover:text-stone-200 tracking-tight transition-colors">
                    {project.title}
                  </h2>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/60 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>{project.area}</span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 group-hover:text-white transition-colors">
                    Ver ficha &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state if filter has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-stone-800">
            <p className="text-stone-400 font-light text-sm uppercase tracking-widest">
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}
      </div>

      {/* Interactive Project Modal with Homogeneous Dossier */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

