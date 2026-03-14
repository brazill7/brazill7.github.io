import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const Galaxy = ({ top, left, size, color, delay, duration }: { top: string, left: string, size: string, color: string, delay: number, duration: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.15, 1],
      rotate: [0, 360]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear" 
    }}
    className="absolute pointer-events-none"
    style={{
      top,
      left,
      width: size,
      height: `calc(${size} * 0.5)`,
      background: `radial-gradient(ellipse at center, ${color} 0%, transparent 100%)`,
      zIndex: 1,
      willChange: "transform, opacity",
      filter: 'blur(20px)'
    }}
  >
    {/* Subtle spiral/core effect */}
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[40%] h-[40%]"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 100%)`,
        opacity: 0.3
      }}
    />
  </motion.div>
);

const RandomShip = () => {
  const [coords, setCoords] = useState<{
    start: { x: string; y: string; angle: number };
    end: { x: string; y: string };
    key: number;
  }>({ 
    start: { x: "-10vw", y: "0vh", angle: 0 }, 
    end: { x: "0vw", y: "0vh" },
    key: 0
  });

  const getPointOnEdge = useCallback(() => {
    const edge = Math.floor(Math.random() * 4);
    const pos = Math.random() * 100;
    switch (edge) {
      case 0: return { x: `${pos}vw`, y: `-10vh` };
      case 1: return { x: `110vw`, y: `${pos}vh` };
      case 2: return { x: `${pos}vw`, y: `110vh` };
      case 3: return { x: `-10vw`, y: `${pos}vh` };
      default: return { x: `0vw`, y: `0vh` };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const start = getPointOnEdge();
      let end = getPointOnEdge();
      while (start.x === end.x && start.y === end.y) end = getPointOnEdge();

      const startX = parseFloat(start.x);
      const startY = parseFloat(start.y);
      const endX = parseFloat(end.x);
      const endY = parseFloat(end.y);
      const dx = (endX - startX) * (window.innerWidth / 100);
      const dy = (endY - startY) * (window.innerHeight / 100);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setCoords({ start: { ...start, angle }, end, key: Math.random() });
    }, 6000); // 1s cooldown + 5s max flight

    return () => clearInterval(interval);
  }, [getPointOnEdge]);

  return (
    <motion.div
      key={coords.key}
      initial={{ left: coords.start.x, top: coords.start.y, opacity: 0, rotate: coords.start.angle }}
      animate={{ left: coords.end.x, top: coords.end.y, opacity: [0, 0.6, 0.6, 0] }}
      transition={{ duration: 4, ease: "linear" }}
      className="absolute h-[1.5px] w-[120px] pointer-events-none z-10 origin-left"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), rgba(255, 255, 255, 0.5))',
        boxShadow: '0 0 8px rgba(168, 85, 247, 0.2)',
        willChange: "left, top, opacity"
      }}
    />
  );
};

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#000003]">
      {/* Deep Space Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a25_0%,#000003_100%)]" />

      {/* Stars - Bottom Layer (Dense) */}
      <div className="star-layer" style={{ opacity: 0.5 }} />
      <div className="star-layer" style={{ animationDuration: '150s', transform: 'rotate(45deg)', opacity: 0.3 }} />
      
      {/* Scattered Subtle Galaxies */}
      <Galaxy top="15%" left="10%" size="800px" color="rgba(168, 85, 247, 0.4)" delay={0} duration={120} />
      <Galaxy top="55%" left="65%" size="900px" color="rgba(139, 92, 246, 0.3)" delay={5} duration={140} />
      <Galaxy top="35%" left="-10%" size="600px" color="rgba(192, 132, 252, 0.3)" delay={2} duration={100} />
      <Galaxy top="75%" left="15%" size="850px" color="rgba(124, 58, 237, 0.4)" delay={8} duration={160} />
      <Galaxy top="10%" left="70%" size="500px" color="rgba(167, 139, 250, 0.25)" delay={4} duration={130} />
      
      {/* Single Random Space Ship */}
      <RandomShip />
      
      {/* Stars - Top Layer (Fewer, bigger, brighter) */}
      <div className="star-layer" style={{ 
        animationDuration: '180s', 
        opacity: 0.9, 
        backgroundSize: '300px 300px', 
        backgroundImage: `
          radial-gradient(2px 2px at 50px 50px, #fff, rgba(0,0,0,0)), 
          radial-gradient(2.5px 2.5px at 150px 250px, #fff, rgba(0,0,0,0)),
          radial-gradient(1.5px 1.5px at 250px 100px, #fff, rgba(0,0,0,0))
        `
      }} />

      {/* Distant Star Clusters */}
      <div className="absolute top-[25%] left-[35%] w-4 h-4 bg-white rounded-full blur-[2px] opacity-60" />
      <div className="absolute top-[65%] left-[55%] w-3 h-3 bg-purple-200 rounded-full blur-[1px] opacity-70" />
      <div className="absolute top-[10%] left-[85%] w-5 h-5 bg-blue-100 rounded-full blur-[4px] opacity-30" />
    </div>
  );
};

export default SpaceBackground;
