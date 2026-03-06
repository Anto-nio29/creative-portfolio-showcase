import { motion } from "framer-motion";

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.3 + i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  const lines = [
    "Creare esperienze",
    "digitali che",
    "lasciano il segno.",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12">
      {/* Marquee top */}
      <div className="absolute top-[40%] left-0 right-0 overflow-hidden opacity-[0.04] pointer-events-none">
        <div className="animate-marquee whitespace-nowrap font-display text-[12vw] font-extrabold">
          DESIGN — DEVELOP — CREATE — DESIGN — DEVELOP — CREATE —&nbsp;
          DESIGN — DEVELOP — CREATE — DESIGN — DEVELOP — CREATE —&nbsp;
        </div>
      </div>

      <div className="relative z-10 max-w-5xl">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h1
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-foreground"
            >
              {line}
            </motion.h1>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 max-w-md text-muted-foreground font-body text-sm md:text-base leading-relaxed"
      >
        Design & sviluppo web con passione per le animazioni e le interazioni che creano esperienze memorabili.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase rotate-90 origin-center translate-y-6">
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-muted-foreground"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
