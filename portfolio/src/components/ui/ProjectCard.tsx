import { motion } from 'framer-motion';
import { ExternalLink, AppWindow, Cpu } from 'lucide-react';
import { type Project } from '../../data/projects';

const GitHubIcon = ({ size = 24, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CategoryIcon = ({ category }: { category: Project['category'] }) => {
  switch (category) {
    case 'App': return <AppWindow size={20} />;
    case 'Tool': return <Cpu size={20} />;
  }
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="liquid-glass p-8 rounded-[32px] group relative flex flex-col h-full hover:border-accent/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 bg-accent/10 rounded-2xl text-accent border border-accent/20">
          <CategoryIcon category={project.category} />
        </div>
        <div className="flex space-x-3 opacity-40 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <GitHubIcon size={20} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
      <p className="text-secondary leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>
      
      <div className="pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70 font-medium transition-colors hover:border-white/20 hover:bg-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
