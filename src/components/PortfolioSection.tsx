import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  { title: "Architettura Digitale", category: "Design & Development", year: "2024", image: project1 },
  { title: "Studio Editorial", category: "Art Direction", year: "2024", image: project2 },
  { title: "Brand Identity", category: "Branding & Design", year: "2023", image: project3 },
  { title: "Scultura Astratta", category: "Interactive Experience", year: "2023", image: project4 },
];

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border-t border-border py-6 md:py-8 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="font-body text-xs text-muted-foreground tabular-nums">
            0{index + 1}
          </span>
          <motion.h3
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            {project.title}
          </motion.h3>
        </div>
        <div className="flex items-center gap-6 md:gap-12 pl-8 md:pl-0">
          <span className="font-body text-sm text-muted-foreground">{project.category}</span>
          <span className="font-body text-sm text-muted-foreground">{project.year}</span>
        </div>
      </div>

      {/* Hover image preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none fixed top-1/2 right-[10%] -translate-y-1/2 z-40 w-[300px] md:w-[400px] aspect-[4/5] overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-40">
      <div ref={ref} className="overflow-hidden mb-16">
        <motion.div
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline gap-4"
        >
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Lavori Recenti
          </h2>
          <div className="h-[1px] flex-1 bg-border" />
        </motion.div>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default PortfolioSection;
