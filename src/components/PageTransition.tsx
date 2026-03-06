import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      // Partenza: invisibile e leggermente spostato in basso
      initial={{ opacity: 0, y: 20 }}
      // Entrata: visibile e nella posizione originale
      animate={{ opacity: 1, y: 0 }}
      // Uscita: invisibile e leggermente spostato in alto
      exit={{ opacity: 0, y: -20 }}
      // La curva di transizione morbida
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;