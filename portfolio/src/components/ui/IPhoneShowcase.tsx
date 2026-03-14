import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const IPhoneShowcase = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-24 px-6 gap-20">
      <div className="relative group">
        {/* iPhone Outer Frame - Significantly Enlarged */}
        <motion.div 
          initial={{ rotateY: -10, rotateX: 5, y: 50, opacity: 0 }}
          whileInView={{ rotateY: 0, rotateX: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-[380px] h-[780px] bg-[#121212] rounded-[65px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border-[12px] border-[#222] relative overflow-hidden liquid-glass"
        >
          {/* Inner Screen */}
          <div className="w-full h-full bg-[#000] rounded-[52px] overflow-hidden relative flex flex-col">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-40" />
            
            {/* Wallpaper (Purple Galaxy themed) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.3),transparent)] pointer-events-none" />
            
            {/* App Grid - Larger icons, better spacing */}
            <div className="relative z-10 p-8 pt-24 grid grid-cols-4 gap-y-10 gap-x-5 auto-rows-min">
              {projects.filter(p => p.category === 'App').map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col items-center group/icon"
                >
                  <div className="w-16 h-16 rounded-[14px] overflow-hidden shadow-2xl border border-white/10 group-hover/icon:border-white/40 transition-all">
                    <img 
                      src={project.icon} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[12px] mt-2.5 text-white/90 font-bold text-center leading-tight w-[70px] drop-shadow-md">
                    {project.appName || project.title}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Spacer to push dock down */}
            <div className="flex-grow" />

            {/* Dock - Positioned at bottom with perfect spacing */}
            <div className="relative z-10 mx-5 mb-10 h-24 liquid-glass rounded-[36px] flex items-center justify-around px-5 border-white/10 shadow-inner">
                <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-green-400 to-green-600 shadow-lg border border-white/10" />
                <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg border border-white/10" />
                <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-red-400 to-red-600 shadow-lg border border-white/10" />
                <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-gray-200 to-gray-400 shadow-lg border border-white/10" />
            </div>
          </div>

          {/* Gloss overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/15 pointer-events-none z-30" />
        </motion.div>

        {/* Shadow/Reflection */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[95%] h-16 bg-black/70 blur-3xl rounded-full -z-10" />
      </div>

      <div className="max-w-lg text-center lg:text-left">
        <h3 className="text-5xl font-bold mb-8 tracking-tighter">Interactive Showcase</h3>
        <p className="text-2xl text-secondary leading-relaxed mb-10">
          A tactile window into my engineering process. Explore live deployments by tapping the icons inside the device.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
          {/* Tag removed */}
        </div>
      </div>
    </div>
  );
};

export default IPhoneShowcase;
