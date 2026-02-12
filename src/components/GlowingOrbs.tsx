import { useEffect, useRef } from 'react';

interface Orb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  blur: number;
}

export function GlowingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize orbs
    orbsRef.current = [
      { x: 20, y: 30, targetX: 20, targetY: 30, size: 400, color: '#3b82f6', blur: 100 },
      { x: 80, y: 60, targetX: 80, targetY: 60, size: 350, color: '#14b8a6', blur: 120 },
      { x: 50, y: 80, targetX: 50, targetY: 80, size: 300, color: '#8b5cf6', blur: 80 },
      { x: 70, y: 20, targetX: 70, targetY: 20, size: 250, color: '#06b6d4', blur: 90 },
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      orbsRef.current.forEach((orb, i) => {
        // Different orb follows mouse with different lag
        const lag = 0.02 * (i + 1);
        const influence = 0.3 / (i + 1);
        
        // Calculate target position based on mouse
        const mouseX = mouseRef.current.x * 100;
        const mouseY = mouseRef.current.y * 100;
        
        orb.targetX = orb.x + (mouseX - 50) * influence;
        orb.targetY = orb.y + (mouseY - 50) * influence;
        
        // Smooth interpolation
        const el = container.children[i] as HTMLElement;
        if (el) {
          const currentLeft = parseFloat(el.style.left) || orb.x;
          const currentTop = parseFloat(el.style.top) || orb.y;
          
          const newLeft = currentLeft + (orb.targetX - currentLeft) * lag;
          const newTop = currentTop + (orb.targetY - currentTop) * lag;
          
          el.style.left = `${newLeft}%`;
          el.style.top = `${newTop}%`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
    >
      {orbsRef.current.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}40 0%, ${orb.color}10 40%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
