import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, forwardRef } from "react";
import { useNavigate, NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectItem = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // --- LOGICA DI VINCOLO X ---
    // Definiamo una soglia: l'immagine non andrà mai a sinistra del 65% della larghezza schermo.
    // In questo modo i testi (che solitamente occupano la parte sinistra) restano liberi.
    const thresholdX = window.innerWidth * 0.65;
    
    // Se il mouse è a sinistra del 65%, l'immagine resta "ancorata" al 65%.
    // Se il mouse supera il 65%, l'immagine inizia a seguirlo verso destra.
    const boundedX = Math.max(thresholdX, e.clientX);

    x.set(boundedX);
    y.set(e.clientY);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border-t border-border py-6 md:py-8 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => navigate(`/work/${project.slug}`)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="font-body text-xs text-muted-foreground tabular-nums">
            0{index + 1}
          </span>
          <motion.h3
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground relative z-50 pointer-events-none"
          >
            {project.title}
          </motion.h3>
        </div>
        <div className="flex items-center gap-6 md:gap-12 pl-8 md:pl-0 relative z-50 pointer-events-none">
          <span className="font-body text-sm text-muted-foreground">{project.category}</span>
          <span className="font-body text-sm text-muted-foreground">{project.year}</span>
        </div>
      </div>

      {/* Hover image preview con vincolo X */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="pointer-events-none fixed top-0 left-0 z-40"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            /* MODIFICATO: larghezza aumentata e aspetto modificato da aspect-[4/5] a aspect-video */
            className="w-[320px] md:w-[480px] aspect-video overflow-hidden shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
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
          <ProjectItem key={project.slug} project={project} index={index} />
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default PortfolioSection;

// --- NAVLINK COMPAT ---
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };