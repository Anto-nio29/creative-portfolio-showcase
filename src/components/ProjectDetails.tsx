import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  // 1. Prendi lo 'slug' dall'URL (es: 'architettura-digitale')
  const { slug } = useParams();
  const navigate = useNavigate();

  // 2. Cerca nel tuo array dei progetti quello che corrisponde allo slug
  const project = projects.find((p) => p.slug === slug);

  // 3. Se il progetto non esiste (URL sbagliato), mostra un messaggio di errore
  if (!project) {
    return <div className="p-24 text-center text-2xl">Progetto non trovato</div>;
  }

  // 4. Se esiste, mostra i dettagli del progetto
  return (
    <div className="px-6 md:px-12 py-24 md:py-40 min-h-screen">
      <button 
        onClick={() => navigate("/")}
        className="mb-12 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Torna ai lavori
      </button>
      
      <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8">
        {project.title}
      </h1>
      
      <div className="flex gap-8 mb-12 font-body text-muted-foreground">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <div className="w-full aspect-video overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Qui poi potrai aggiungere la descrizione, altre foto, ecc. */}
    </div>
  );
};

export default ProjectDetails;