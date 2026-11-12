export type ProjectTypology = 'Residencial' | 'Comercial' | 'Interiores' | 'Institucional';

export interface GalleryMedia {
  url: string;
  caption?: string;
  type: 'exterior' | 'interior' | 'detalle' | 'plano';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  typology: ProjectTypology;
  location: string;
  year: number;
  area: string;
  photographer?: string;
  coverImage: string;
  description: string;
  gallery: GalleryMedia[];
}

