import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socials';

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.2em]">
            Software.Engineer // iOS.Developer
          </span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-accent bg-clip-text text-transparent pb-4">
          Maverick <br className="hidden md:block" /> Brazill
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
          Crafting high-performance iOS experiences at the intersection of 
          <span className="text-white"> machine learning </span> and 
          <span className="text-white"> precision engineering</span>, with a relentless focus on building accessible products that drive meaningful impact.
        </p>

        {/* Social Links */}
        <div className="flex space-x-8 mb-16 justify-center">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors p-2"
              whileHover={{ y: -4 }}
              title={social.name}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a 
          href="#projects" 
          onClick={(e) => scrollToSection(e, 'projects')}
          className="px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          View Projects
        </a>
        <a 
          href="#experience" 
          onClick={(e) => scrollToSection(e, 'experience')}
          className="px-10 py-4 liquid-glass rounded-full font-bold hover:bg-white/5 transition-colors active:scale-95"
        >
          View Experience
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
