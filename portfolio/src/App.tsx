import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/ui/Hero';
import IPhoneShowcase from './components/ui/IPhoneShowcase';
import Projects from './components/ui/Projects';
import Experience from './components/ui/Experience';
import Education from './components/ui/Education';
import SpaceBackground from './components/ui/SpaceBackground';
import FeaturedInterview from './components/ui/FeaturedInterview';

function App() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
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
    <Router>
      <div className="min-h-screen text-white relative">
        <SpaceBackground />
        
        <nav className="fixed top-0 left-0 right-0 z-50 liquid-glass-strong py-4 px-8 flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-black tracking-tighter hover:text-accent transition-colors cursor-pointer"
          >
            MB<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex space-x-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-accent transition-colors">Projects</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-accent transition-colors">Experience</a>
            <a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="hover:text-accent transition-colors">Education</a>
          </div>
          <div>
            <a href="mailto:brazillmav@gmail.com" className="text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              Contact
            </a>
          </div>
        </nav>

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <IPhoneShowcase />
                <FeaturedInterview />
                <Projects />
                <Experience />
                <Education />
              </>
            } />
          </Routes>
        </main>

        <footer className="py-20 px-6 text-center border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-secondary text-sm">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Maverick Brazill. All Rights Reserved.
            </p>
            <div className="flex space-x-8 font-mono text-[10px] uppercase tracking-widest">
              <span>Coords: 42.3297° N, 83.0425° W</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
