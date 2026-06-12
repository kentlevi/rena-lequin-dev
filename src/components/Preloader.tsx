import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      onComplete();
      // Restore scrolling slightly after the exit animation completes
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1000); 
    }, 2000);
    
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink text-sand"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <span className="font-serif text-5xl md:text-7xl tracking-tight">RL.</span>
        <div className="mt-8 w-48 h-[1px] bg-sand/20 overflow-hidden relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 h-full w-full bg-sand origin-left"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
