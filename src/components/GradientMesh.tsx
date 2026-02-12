import { useEffect, useRef } from 'react';

export function GradientMesh() {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      mesh.style.setProperty('--mouse-x', `${x}`);
      mesh.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={meshRef}
      className="fixed inset-0 -z-20 overflow-hidden"
      style={{
        '--mouse-x': '0',
        '--mouse-y': '0',
      } as React.CSSProperties}
    >
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
          transform: 'translate(calc(var(--mouse-x) * -30px), calc(var(--mouse-y) * -30px))',
          transition: 'transform 0.3s ease-out',
          animation: 'float-orb-1 20s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)',
          top: '40%',
          right: '5%',
          transform: 'translate(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 20px))',
          transition: 'transform 0.3s ease-out',
          animation: 'float-orb-2 25s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
          transform: 'translate(calc(var(--mouse-x) * -15px), calc(var(--mouse-y) * -15px))',
          transition: 'transform 0.3s ease-out',
          animation: 'float-orb-3 18s ease-in-out infinite',
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
