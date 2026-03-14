import { motion } from 'framer-motion';
import { education } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
            <p className="text-accent font-medium mb-4">{edu.description}</p>
            <p className="text-secondary font-mono text-sm">{edu.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
