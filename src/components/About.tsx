import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone mb-4 block">
              01 — Introduction
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Crafting <br className="hidden lg:block" />
              Digital<br className="hidden lg:block" />
              Precision
            </h2>
          </div>
          
          <div className="lg:col-span-8 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none text-charcoal font-light leading-relaxed"
            >
              <p className="text-2xl md:text-3xl font-serif text-ink mb-10 leading-snug">
                I build and maintain enterprise-grade single-page applications and ERP systems, translating complex business logic into seamless, high-performance user interfaces.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-base">
                <div>
                  <p className="mb-6">
                    My expertise lies deeply in Angular and TypeScript, focusing strictly on micro-frontend architectures, responsive design, and uncompromised WCAG accessibility standards.
                  </p>
                  <p>
                    I approach frontend development structurally. By creating highly reusable, modular UI components tailored for ERP environments, I prioritize scale, maintainability, and operational velocity.
                  </p>
                </div>
                <div>
                  <p className="mb-6">
                    Beyond traditional implementation, I actively integrate AI-assisted workflows—leveraging Google Gemini, OpenAI, and agentic systems like Codex—to accelerate scaffolding, unit testing, and code optimization.
                  </p>
                  <div className="pt-6 border-t border-outline/50 mt-6">
                    <p className="text-xs uppercase tracking-[0.1em] text-stone mb-2">Education</p>
                    <p className="font-medium text-ink">B.S. Information Technology</p>
                    <p className="text-sm text-stone">Cebu Technological University</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
