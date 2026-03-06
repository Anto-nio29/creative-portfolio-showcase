import { motion } from "framer-motion";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
    >
      <button onClick={() => scrollTo("hero")} className="font-display text-lg font-bold text-foreground tracking-tight">
        Portfolio©
      </button>
      <nav className="hidden md:flex items-center gap-8 font-body text-sm text-foreground">
        <button onClick={() => scrollTo("work")} className="link-underline pb-0.5">
          Lavori
        </button>
        <button onClick={() => scrollTo("contact")} className="link-underline pb-0.5">
          Contatti
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
