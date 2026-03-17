import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project1Detail from "@/assets/project-1-detail.jpg";
import project2Detail from "@/assets/project-2-detail.jpg";
import project3Detail from "@/assets/project-3-detail.jpg";
import project4Detail from "@/assets/project-4-detail.jpg";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  detailImage: string;
  description: string;
  client: string;
  role: string;
  tools: string[];
  gallery: GalleryItem[];
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "architettura-digitale",
    title: "Architettura Digitale",
    category: "Design & Development",
    year: "2024",
    image: project1,
    detailImage: project1Detail,
    description:
      "Un progetto che esplora la connessione tra architettura fisica e digitale. Attraverso animazioni fluide e interazioni immersive, l'utente viene trasportato in uno spazio virtuale che riflette la geometria e la materialità del mondo reale.",
    client: "Studio Architettura",
    role: "Design & Frontend Development",
    tools: ["React", "Three.js", "GSAP", "Figma"],
    gallery: [
      { type: "image", src: project1 },
      { type: "image", src: project1Detail },
    ],
  },
  {
    slug: "studio-editorial",
    title: "Studio Editorial",
    category: "Art Direction",
    year: "2024",
    image: project2,
    detailImage: project2Detail,
    description:
      "Direzione artistica per un progetto editoriale di moda. Un'esperienza visiva che combina fotografia d'autore con tipografia espressiva, creando un racconto digitale che cattura l'essenza del brand.",
    client: "Fashion House",
    role: "Art Direction & Development",
    tools: ["Figma", "React", "Framer Motion", "Photoshop"],
    gallery: [
      { type: "image", src: project2 },
      { type: "image", src: project2Detail },
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Branding & Design",
    year: "2023",
    image: project3,
    detailImage: project3Detail,
    description:
      "Creazione dell'identità visiva completa per un brand di lusso. Dal logo al packaging, ogni elemento è stato progettato per comunicare eleganza e raffinatezza, con un'attenzione maniacale ai dettagli.",
    client: "Luxury Brand",
    role: "Brand Design & Web Development",
    tools: ["Illustrator", "Figma", "React", "Tailwind"],
    gallery: [
      { type: "image", src: project3 },
      { type: "image", src: project3Detail },
    ],
  },
  {
    slug: "scultura-astratta",
    title: "Scultura Astratta",
    category: "Interactive Experience",
    year: "2023",
    image: project4,
    detailImage: project4Detail,
    description:
      "Un'esperienza interattiva che trasforma sculture astratte in installazioni digitali. L'utente può esplorare forme organiche in uno spazio tridimensionale, manipolando luce e materia attraverso gesti intuitivi.",
    client: "Galleria d'Arte",
    role: "Creative Development",
    tools: ["WebGL", "React", "Blender", "GLSL"],
    gallery: [
      { type: "image", src: project4 },
      { type: "image", src: project4Detail },
    ],
  },
];
