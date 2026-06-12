import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-outline/0 ${
        scrolled ? 'bg-sand/80 backdrop-blur-md border-outline/100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-xl tracking-tight relative group">
          RL.
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full"></span>
        </a>
        <nav className="hidden md:flex gap-8 text-xs font-medium tracking-[0.1em] uppercase text-charcoal">
          {['About', 'Expertise', 'Experience', 'Work'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-ink relative group"
            >
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs font-medium tracking-[0.1em] uppercase border border-ink/20 px-4 py-2 hover:bg-ink hover:text-sand transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
