import project1 from "@/assets/promo1.jpg";
import project2 from "@/assets/navicel.jpeg";
import project3 from "@/assets/cg1.jpeg";
import project4 from "@/assets/project-4.jpg";
import project1Detail from "@/assets/live.jpg";
import project2Detail from "@/assets/lava.jpeg";
import project3Detail from "@/assets/cg2.jpeg";
import project4Detail from "@/assets/project-4-detail.jpg";
import project5Detail from "@/assets/alienoglare.jpg";
import project6Detail from "@/assets/bunkerlluce.jpg";
import project7Detail from "@/assets/alienorazzo.jpg";
import project8Detail from "@/assets/alienociocco.jpg";

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
  gallery: string[];
  // ECCO LA MODIFICA: Ora è una lista di link, proprio come i socials!
  links?: { name: string; url: string }[]; 
}

export const projects: Project[] = [
  {
    slug: "architettura-digitale",
    title: "VR - Avenue Harmony",
    category: "VR Environment",
    year: "2026",
    image: project1,
    detailImage: project1Detail,
    description:
      "Prototipo di un'esperienza virtuale immersiva, strutturata da me, in prima persona, che trasforma l'esplorazione di un luogo, ed un museo, in un viaggio interattivo tra arte, storia, musica, interazioni ed effetti visivi magici. Grazie a particelle dinamiche, trigger ambientali e installazioni multimediali, il giocatore non si limita a osservare lo spazio, ma lo fa letteralmente prendere vita al suo passaggio. Uso del microfono per interagire con la tv, museo in vr con opere immersive.",
    client: "Progetto personale",
    role: "Vr artist",
    tools: ["Unity", "Blender"],
    // ECCO IL LINK INSERITO COL NUOVO FORMATO
    links: [
      { name: "Scarica la Build", url: "https://www.swisstransfer.com/d/00b1ee85-54f3-46c5-90d6-27a480cf9025" }
    ],
    gallery: [project1, project1Detail],
  },
  {
    slug: "studio-editorial",
    title: "UniVRse",
    category: "VR Environment",
    year: "2024/25",
    image: project2Detail,
    detailImage: project2Detail,
    description:
      "Progetto universitario, realizzato col team nel corso di 'realtà virtuale', presso il Politecnico di Torino. UNIVRSE è un'avventura immersiva in Realtà Virtuale che ti mette ai comandi di una navicella per esplorare da vicino i pianeti del nostro Sistema Solare. Durante il viaggio non sei un semplice spettatore, ma puoi interagire attivamente con l'ambiente spaziale afferrando oggetti, agganciando le orbite e completando specifiche missioni educative. Unisce un'estetica visivamente affascinante a un'esplorazione rilassante e istruttiva, perfetta per ogni appassionato di astronomia.",
    client: "Politecnico di Torino",
    role: "Art Direction, Programmer",
    tools: ["Unity", "Blender"],
    // HO SPOSTATO QUI IL LINK DI ITCH.IO
    links: [
      { name: "Gioca su Itch.io", url: "https://alescasella.itch.io/univrse" }
      //https://youtu.be/eJZFKhqLBNA
    ],
    gallery: [project2, project2Detail],
  },
  {
    slug: "brand-identity",
    title: "Computer Graphics",
    category: "3D Graphics",
    year: "2022",
    image: project3,
    detailImage: project3Detail,
    description:
      "Progetto universitario, realizzato col team nel corso di 'computer grafica' presso il Politecnico di Torino. Rappresentazione di una prigione medievale, modellata e texturizzata su Blender.",
    client: "Politecnico di Torino",
    role: "Cg Artist, Modeler, Asset Artist",
    tools: ["Illustrator", "Blender"],
    gallery: [project3, project3Detail],
  },
  {
    slug: "scultura-astratta",
    title: "Computer Animation",
    category: "3D Animation",
    year: "2025",
    image: project6Detail,
    detailImage: project6Detail,
    description:
      "In questo progetto universitario abbiamo ricreato la famosa pubblicità della cioccolata Cadbury! Con il mio team ci siamo occupati di modellazione e animazione dei modelli, riprendendo fedelmente quanto accade nella pubblicità originale",
    client: "Politecnico di Torino",
    role: "Asset Artist, 3D modeler, Animator",
    tools: [ "Blender", "Illustrator"],
    links: [
      { name: "Guarda il video", url: "https://youtu.be/eJZFKhqLBNA" }
      //https://youtu.be/eJZFKhqLBNA
    ],
    gallery: [project5Detail, project6Detail, project7Detail, project8Detail],
  },
];