import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Angular-Based ERP Web Application",
    description: "Architected the frontend interfaces for an enterprise-level web application. Implemented NgRx state management for complex data flows and seamlessly integrated backend services, utilizing AI tools to accelerate development cycles.",
    tech: ["Angular", "TypeScript", "MySQL", "NgRx", "AI Scaffolding"],
    number: "01"
  },
  {
    title: "ERP Module Customization Platform",
    description: "Developed and customized ERP modules mapped directly to specific business needs. Automated operational workflows using tailored scripting, yielding a 30% increase in process efficiency. Leveraged AI tools for rapid prototyping and active debugging.",
    tech: ["JavaScript", "Python", "CSS Flexbox", "ERP Scripting"],
    number: "02"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-ink text-sand">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone mb-4 block">
            04 — Selected Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-sand">Engineering Case Studies</h2>
        </div>

        <div className="flex flex-col space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative border-t border-sand/20 pt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4 flex justify-between items-start gap-4">
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight break-words flex-1">
                    {project.title}
                  </h3>
                  <span className="font-serif text-2xl text-stone/40 shrink-0">{project.number}</span>
                </div>
                
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <p className="text-sand/70 font-light leading-relaxed mb-8 md:text-lg">
                    {project.description}
                  </p>
                  
                  <ul className="flex flex-wrap gap-x-6 gap-y-3">
                    {project.tech.map((t, tIdx) => (
                      <li key={tIdx} className="text-xs uppercase tracking-widest text-stone">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end items-start mt-6 lg:mt-0">
                  <div className="w-12 h-12 rounded-full border border-sand/20 flex items-center justify-center group-hover:bg-sand group-hover:text-ink transition-all duration-300 transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
