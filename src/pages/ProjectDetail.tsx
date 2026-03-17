import { useParams, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-80px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground font-display text-2xl">Progetto non trovato</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease }}
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 md:left-12 z-50 flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Indietro
      </motion.button>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease }}
          src={project.detailImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

        {/* Title overlay */}
        <div className="absolute bottom-12 md:bottom-20 left-6 md:left-12 right-6">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
            >
              {project.category} — {project.year}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* Project info */}
      <div ref={infoRef} className="px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-6xl">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="md:col-span-2"
          >
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Descrizione
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-foreground">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 font-display text-xl md:text-2xl text-foreground link-underline pb-1"
              >
                {project.linkLabel || "Visita il progetto"} →
              </a>
            )}
          </motion.div>

          {/* Details sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="space-y-8"
          >
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Cliente
              </p>
              <p className="font-display text-lg text-foreground">{project.client}</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Ruolo
              </p>
              <p className="font-display text-lg text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Strumenti
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-body text-sm px-3 py-1 border border-border text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-12">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={infoInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease }}
          className="h-[1px] bg-border origin-left"
        />
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="px-6 md:px-12 py-20 md:py-32">
        <div className="overflow-hidden mb-12">
          <motion.p
            initial={{ y: "100%" }}
            animate={galleryInView ? { y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Galleria
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {project.gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease }}
              className="overflow-hidden aspect-[4/3]"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease }}
                  src={item.src}
                  alt={`${project.title} - ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next project */}
      <div className="px-6 md:px-12 pb-16">
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <p className="font-body text-xs text-muted-foreground">
            © 2024 — Tutti i diritti riservati
          </p>
          {(() => {
            const currentIndex = projects.findIndex((p) => p.slug === slug);
            const next = projects[(currentIndex + 1) % projects.length];
            return (
              <button
                onClick={() => navigate(`/work/${next.slug}`)}
                className="font-display text-lg text-foreground link-underline pb-1"
              >
                Prossimo: {next.title} →
              </button>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
