import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/tonio.fede/" },
  //{ name: "LinkedIn", url: "#" },
  //{ name: "Twitter / X", url: "#" },
  //{ name: "Dribbble", url: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const titleLines = ["Lavoriamo", "insieme."];

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-40">
      <div ref={ref}>
        {/* Big CTA title */}
        <div className="mb-16 md:mb-24">
          {titleLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-tight text-foreground"
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Email
            </p>
            <a
              href="mailto:anto7267@gmail.com"
              className="font-display text-xl md:text-2xl text-foreground link-underline pb-1 inline-block"
            >
              anto7267@gmail.com
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Social
            </p>
            <ul className="space-y-3">
              {socials.map((social, i) => (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl md:text-2xl text-foreground link-underline pb-1 inline-block"
                  >
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-32 md:mt-48 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-6"
      >
        <p className="font-body text-xs text-muted-foreground">
          © 2026 — Tutti i diritti riservati
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Designed & Developed with passion
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
