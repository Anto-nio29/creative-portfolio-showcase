import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-24 text-center text-2xl">Progetto non trovato</div>;
  }

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

      {/* CONTENITORE IMMAGINE */}
      <div className="w-full aspect-video overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* IL LINK ORA È FUORI DAL CONTENITORE DELL'IMMAGINE */}
      {project.links && project.links.length > 0 && (
  <div className="mt-8">
    <ul className="space-y-3">
      {project.links.map((link, i) => (
        <li key={i}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl md:text-2xl text-foreground link-underline pb-1 inline-block"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
      
    </div>
  );
};

export default ProjectDetails;