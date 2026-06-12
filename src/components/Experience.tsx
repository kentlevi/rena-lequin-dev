import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-white text-ink">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone mb-4 block">
            03 — Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Career Trajectory</h2>
        </div>

        <div className="relative border-l border-outline/60 ml-2 md:ml-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="pl-8 md:pl-16 relative"
          >
            {/* Timeline node */}
            <div className="absolute w-3 h-3 bg-ink top-2 rounded-full ring-4 ring-white -left-1.5" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <p className="text-sm font-medium tracking-widest uppercase text-stone mb-2">2023 — Present</p>
                <h3 className="font-serif text-3xl mb-1 text-ink">Frontend Developer</h3>
                <p className="text-lg text-charcoal/80 mb-6 font-light">Dinnox IT Solution</p>
                <div className="hidden lg:block w-16 h-[1px] bg-outline mt-8" />
              </div>
              
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-ink mb-3 font-medium">Architecture & UI</h4>
                    <p className="text-charcoal font-light leading-relaxed text-sm">
                      Built and maintained enterprise-grade Angular SPA applications integrating seamlessly with backend ERP systems. Reduced code duplication by <strong>35%</strong> through the rigorous implementation of reusable UI component libraries.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-ink mb-3 font-medium">ERP Customization</h4>
                    <p className="text-charcoal font-light leading-relaxed text-sm">
                      Engineered custom ERP modules utilizing JavaScript and Python. Automated complex internal processes, resulting in a measurable <strong>30%</strong> improvement in workflow efficiency.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-ink mb-3 font-medium">Quality & Testing</h4>
                    <p className="text-charcoal font-light leading-relaxed text-sm">
                      Developed robust unit testing coverage using Jasmine. Ensured true mobile-first layouts using CSS Flexbox across all deliverables, maintaining strict WCAG accessibility and cross-browser compliance.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-ink mb-3 font-medium">AI & Collaboration</h4>
                    <p className="text-charcoal font-light leading-relaxed text-sm">
                      Actively integrated ChatGPT, Google Gemini, and Codex into daily workflows for rapid scaffolding and optimization. Collaborated directly with Business Analysts and UI/UX teams in an Agile Scrum environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
