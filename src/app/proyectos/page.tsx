'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project, ProjectTypology } from '@/types/project';
import ProjectModal from '@/components/ProjectModal';
import { ArrowUpRight } from 'lucide-react';

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
    <div className="min-h-screen bg-arch-950 text-arch-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header with Architectural Structure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-arch-600/90 pb-8 mb-12 gap-6">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-arch-300 mb-3">
              Portafolio de Obras
            </p>
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
              Proyectos <br /> Seleccionados
            </h1>
          </div>

          {/* Typology Filter Bar - Structured with Palette Grays */}
          <div className="flex items-center flex-wrap gap-2">
            {typologies.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTypology(item)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200 ${
                  activeTypology === item
                    ? 'bg-white text-arch-950 font-medium shadow-md'
                    : 'text-arch-200 bg-arch-800 hover:bg-arch-600 border border-arch-600 hover:border-arch-500 hover:text-white'
                }`}
              >
                {item === 'todos' ? 'Todos' : item}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Architectural Grid - Cards with clear structural presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-arch-800 border border-arch-600 hover:border-arch-400 hover:bg-arch-700/80 transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-arch-900 border-b border-arch-600/80">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-arch-950/20 group-hover:bg-transparent transition-colors duration-300" />

                {/* Hover Quick Indicator */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-arch-800/90 backdrop-blur-sm border border-arch-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Badge for typology */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-arch-950/90 text-arch-200 border border-arch-500 backdrop-blur-sm">
                    {project.typology}
                  </span>
                </div>
              </div>

              {/* Project Card Metadata with Contrast and Hierarchy */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-baseline justify-between text-xs font-mono text-arch-300 mb-2">
                    <span>{project.location}</span>
                    <span className="text-arch-400">{project.year}</span>
                  </div>
                  <h2 className="text-xl font-light text-white group-hover:text-arch-100 tracking-tight transition-colors">
                    {project.title}
                  </h2>
                </div>

                <div className="pt-4 mt-4 border-t border-arch-600/80 flex items-center justify-between text-xs font-mono text-arch-300">
                  <span>{project.area}</span>
                  <span className="text-[11px] uppercase tracking-wider text-arch-200 group-hover:text-white transition-colors">
                    Ver ficha &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state if filter has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-arch-600 bg-arch-800/40">
            <p className="text-arch-300 font-light text-sm uppercase tracking-widest">
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
