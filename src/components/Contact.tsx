import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-sand relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="font-serif text-[15vw] leading-none whitespace-nowrap">CONTACT</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone mb-8 block">
            05 — Get In Touch
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink mb-12">
            Let's build <br className="hidden md:block" />
            <span className="italic font-light">something exceptional.</span>
          </h2>
          
          <a
            href="mailto:renalequin4321@gmail.com"
            className="group inline-flex items-center gap-4 text-xl sm:text-2xl font-light text-charcoal hover:text-ink transition-colors border-b border-ink/20 hover:border-ink/100 pb-2 mb-16 break-all"
          >
            renalequin4321@gmail.com
            <ArrowUpRight className="shrink-0 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="grid grid-cols-1 divide-y divide-outline/50 border-y border-outline/50 w-full max-w-sm mx-auto">
            <a
              href="mailto:renalequin4321@gmail.com"
              className="py-6 flex justify-between items-center group"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-charcoal">Email</span>
              <span className="text-sm text-stone group-hover:text-ink transition-colors">Send a message</span>
            </a>
            <a
              href="tel:09557252702"
              className="py-6 flex justify-between items-center group"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-charcoal">Call</span>
              <span className="text-sm text-stone group-hover:text-ink transition-colors">0955 725 2702</span>
            </a>
            <a
              href="https://linkedin.com/in/renalequin4321"
              target="_blank"
              rel="noreferrer"
              className="py-6 flex justify-between items-center group"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-charcoal">LinkedIn</span>
              <span className="text-sm text-stone group-hover:text-ink transition-colors">Connect</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
