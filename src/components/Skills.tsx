import { motion } from 'motion/react';

const categories = [
  {
    title: "Frontend & Architecture",
    skills: ["Angular (TypeScript)", "Micro-Frontend SPA", "NgRx State Management", "JavaScript (ES6+)", "HTML5 & CSS Flexbox"]
  },
  {
    title: "Data & Systems",
    skills: ["ERP Module Customization", "MySQL", "Python", "REST API Integration"]
  },
  {
    title: "Quality & AI Workflows",
    skills: ["Agentic AI (Gemini, Codex)", "Jasmine Unit Testing", "WCAG Accessibility", "Agile Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="expertise" className="py-32 px-6 md:px-12 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone mb-4 block">
              02 — Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Technical Arsenal</h2>
          </div>
          <p className="max-w-xs text-sm text-stone font-light mt-6 md:mt-0 text-balance">
            A comprehensive stack honed for enterprise scalability and fluid user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 border-t border-outline/50 pt-16">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm uppercase tracking-widest text-ink mb-8 border-b border-outline/30 pb-4 inline-block w-fit">
                {category.title}
              </h3>
              <ul className="space-y-4 flex-1">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="font-serif text-xl md:text-2xl text-charcoal flex items-baseline gap-3">
                    <span className="text-xs font-sans text-stone/50 font-light">{(sIdx + 1).toString().padStart(2, '0')}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
