import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'casa-pedregal',
    slug: 'casa-pedregal',
    title: 'Casa Pedregal',
    typology: 'Residencial',
    location: 'Ciudad de México, México',
    year: 2023,
    area: '420 m²',
    photographer: 'César Béjar Studio',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
    description:
      'Concebida como un diálogo entre la roca volcánica del sitio y volúmenes monolíticos de concreto aparente. La casa se organiza alrededor de un patio central de agua que articula los recorridos de la familia y captura la luz cenital a lo largo del día.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
        caption: 'Fachada principal y acceso escalonado en piedra volcánica',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80',
        caption: 'Vista del jardín posterior y cancelería de piso a techo',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80',
        caption: 'Estancia principal con losa de concreto aparente y carpintería de roble',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80',
        caption: 'Cocina monolítica integrada a la terraza',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
        caption: 'Detalle de ensamble de madera y junta constructiva oculta',
        type: 'detalle',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
        caption: 'Planta arquitectónica - Nivel 01',
        type: 'plano',
      },
    ],
  },
  {
    id: 'edificio-nogal',
    slug: 'edificio-nogal',
    title: 'Edificio Nogal',
    typology: 'Comercial',
    location: 'Guadalajara, Jalisco',
    year: 2024,
    area: '1,250 m²',
    photographer: 'Onnis Luque',
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80',
    description:
      'Un edificio de usos mixtos que reinterpreta el uso de la celosía de barro y el concreto pigmentado. Su volumetría responde a la orientación solar mediante parasoles tectónicos que tamizan la luz natural protegiendo los espacios interiores del sobrecalentamiento.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80',
        caption: 'Fachada urbana con ritmo vertical de parasoles tectónicos',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
        caption: 'Encuentro volumétrico y remate superior',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80',
        caption: 'Vestíbulo de triple altura con iluminación cenital filtrada',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
        caption: 'Encuentro de celosía artesanal y estructura metálica',
        type: 'detalle',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
        caption: 'Corte transversal longitudinal',
        type: 'plano',
      },
    ],
  },
  {
    id: 'pabellon-las-canteras',
    slug: 'pabellon-las-canteras',
    title: 'Pabellón Las Canteras',
    typology: 'Comercial',
    location: 'Oaxaca, México',
    year: 2022,
    area: '310 m²',
    photographer: 'Rafael Gamo',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80',
    description:
      'Estructura liviana y muros de cantera verde local. El pabellón se diseñó como un recinto de reunión y exhibición donde los límites entre el interior y la vegetación nativa se difuminan por completo mediante pórticos perimetrales continuos.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80',
        caption: 'Pórtico continuo y relación con el paisaje desértico',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80',
        caption: 'Galería abierta al patio de cantera labrada',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80',
        caption: 'Espacio de contemplación con mobiliario en sitio',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
        caption: 'Esquema de implantación y sombras estacionales',
        type: 'plano',
      },
    ],
  },
  {
    id: 'residencia-valle-alto',
    slug: 'residencia-valle-alto',
    title: 'Residencia Valle Alto',
    typology: 'Residencial',
    location: 'Monterrey, Nuevo León',
    year: 2024,
    area: '580 m²',
    photographer: 'Maureen M. Evans',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
    description:
      'Asentada sobre una pendiente pronunciada frente a la Sierra Madre. Dos cuerpos horizontales de concreto estriado se incrustan en la montaña, volando audazmente para generar terrazas sombreadas que capturan la brisa predominante.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
        caption: 'Volumetría en voladizo hacia la cordillera',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80',
        caption: 'Comedor y sala integrados con vistas panorámicas',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=80',
        caption: 'Baño principal en mármol nacional y patio privado',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
        caption: 'Detalle de la textura del concreto estriado artesanal',
        type: 'detalle',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
        caption: 'Planta de conjunto y corte orográfico',
        type: 'plano',
      },
    ],
  },
  {
    id: 'estudio-galeria-madero',
    slug: 'estudio-galeria-madero',
    title: 'Estudio & Galería Madero',
    typology: 'Interiores',
    location: 'Ciudad de México, México',
    year: 2023,
    area: '195 m²',
    photographer: 'Marcos Zotes',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
    description:
      'Intervención en un antiguo taller de principios del siglo XX. Se desnudó la estructura original de vigas de acero y mampostería, introduciendo una caja minimalista de madera y microcemento pulido que genera diferentes atmósferas de trabajo.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
        caption: 'Área de exhibición con iluminación dirigida y pavimentos continuos',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80',
        caption: 'Mesa de juntas y biblioteca de materiales del despacho',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80',
        caption: 'Detalle de cancelería de acero ennegrecido al ácido',
        type: 'detalle',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
        caption: 'Plano de distribución de interiores e iluminación',
        type: 'plano',
      },
    ],
  },
  {
    id: 'casa-entre-encinos',
    slug: 'casa-entre-encinos',
    title: 'Casa Entre Encinos',
    typology: 'Residencial',
    location: 'Valle de Bravo, Estado de México',
    year: 2021,
    area: '360 m²',
    photographer: 'Yoshihiro Koitani',
    coverImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=80',
    description:
      'Respetando cada uno de los árboles existentes en el predio boscoso, la casa se desfragmenta en tres pabellones unidos por pasarelas cubiertas de cristal. Construida en madera carbonizada y piedra local para mimetizarse con el entorno.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=80',
        caption: 'Integración volumétrica con el bosque de encinos',
        type: 'exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
        caption: 'Pasarela acristalada de transición entre áreas públicas y privadas',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80',
        caption: 'Chimenea suspendida en concreto y remates de madera natural',
        type: 'interior',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
        caption: 'Plano de ubicación y levantamiento arbóreo',
        type: 'plano',
      },
    ],
  },
];

