import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-accent glow"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
              <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
              <span className="text-accent font-mono text-sm">{exp.duration}</span>
            </div>
            <p className="text-xl text-secondary mb-4">{exp.company}</p>
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="text-secondary flex items-start">
                  <span className="mr-3 text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
