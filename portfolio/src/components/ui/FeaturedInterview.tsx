import { motion } from 'framer-motion';
import { ExternalLink, Quote } from 'lucide-react';
import { interview } from '../../data/socials';

const FeaturedInterview = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="liquid-glass p-12 rounded-[40px] relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote size={120} />
        </div>
        
        <div className="relative z-10">
          <span className="text-accent font-mono tracking-tighter uppercase text-sm mb-4 block">
            Featured Interview // {interview.publisher}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {interview.title}
          </h2>
          
          <blockquote className="text-2xl italic text-secondary mb-8 border-l-4 border-accent pl-6 py-2">
            "{interview.quote}"
          </blockquote>
          
          <p className="text-xl text-secondary/80 mb-10 max-w-2xl">
            {interview.summary}
          </p>
          
          <a 
            href={interview.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-accent/80 transition-all transform hover:scale-105 active:scale-95"
          >
            <span>Read Full Interview</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedInterview;
