import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        {/* Subtle background abstract element */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-stone/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start justify-center">
        <div className="max-w-4xl flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone mb-6 block border-l border-stone pl-4 ml-1 break-words">
              Based in Cebu, Philippines
            </span>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[1.05] tracking-tight text-ink mb-10 text-balance break-words">
              Rena Lequin
              <span className="block italic font-light text-stone/80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4">
                Frontend Developer
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed font-light mb-12 text-balance">
              Engineering high-performance enterprise applications and ERP systems through modular architecture and AI-assisted workflows.
            </p>
            <div className="flex flex-wrap items-center gap-8 text-sm font-medium tracking-wide uppercase">
              <a
                href="/rena-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-ink text-sand px-10 py-5 hover:bg-charcoal transition-colors duration-300 whitespace-nowrap"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 hover:text-stone transition-colors whitespace-nowrap"
              >
                Let's Talk
                <span className="w-12 h-[1px] bg-ink group-hover:bg-stone group-hover:w-16 transition-all duration-300 block" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-3 text-xs tracking-widest uppercase items-center text-stone"
      >
        <span className="whitespace-nowrap">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone to-transparent" />
      </motion.div>
    </section>
  );
}
