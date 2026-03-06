import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Ciao", "Hello", "Bonjour", "Hallo", "おい"];

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [phase, setPhase] = useState<"words" | "reveal">("words");

  useEffect(() => {
    if (phase === "words") {
      if (currentWord < words.length - 1) {
        const timer = setTimeout(() => setCurrentWord((p) => p + 1), 350);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("reveal"), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentWord, phase]);

  return (
    <AnimatePresence>
      {phase === "words" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          onAnimationComplete={(def: { y?: string }) => {
            if (def.y === "-100%") onComplete();
          }}
        >
          {/* Counter */}
          <motion.div
            className="absolute bottom-8 right-8 font-body text-xs text-muted-foreground tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {Math.round(((currentWord + 1) / words.length) * 100)}%
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-8 left-8 right-24 h-[1px] bg-border">
            <motion.div
              className="h-full bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (currentWord + 1) / words.length }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Rotating words */}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-display text-4xl md:text-6xl font-bold text-foreground"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}

      {phase === "reveal" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.1 }}
          onAnimationComplete={() => onComplete()}
        />
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
