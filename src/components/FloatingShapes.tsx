import { useEffect, useRef } from 'react';

interface Shape {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  floatSpeed: number;
  floatOffset: number;
  opacity: number;
  type: 'circle' | 'square' | 'triangle' | 'hexagon';
  color: string;
}

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize shapes
    const colors = ['#3b82f6', '#14b8a6', '#8b5cf6', '#06b6d4'];
    const types: Shape['type'][] = ['circle', 'square', 'triangle', 'hexagon'];
    
    shapesRef.current = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      floatSpeed: Math.random() * 0.02 + 0.01,
      floatOffset: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.15 + 0.05,
      type: types[i % types.length],
      color: colors[i % colors.length],
    }));

    let time = 0;

    const animate = () => {
      time += 1;
      const shapes = container.querySelectorAll('.floating-shape');
      
      shapesRef.current.forEach((shape, i) => {
        const el = shapes[i] as HTMLElement;
        if (!el) return;

        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Calculate floating position
        const floatY = Math.sin(time * shape.floatSpeed + shape.floatOffset) * 15;
        
        el.style.transform = `translateY(${floatY}px) rotate(${shape.rotation}deg)`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const renderShape = (shape: Shape) => {
    const baseClasses = "floating-shape absolute transition-transform will-change-transform";
    
    switch (shape.type) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full border-2`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              borderColor: shape.color,
              opacity: shape.opacity,
            }}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} border-2`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              borderColor: shape.color,
              opacity: shape.opacity,
              borderRadius: '4px',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            className={baseClasses}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              opacity: shape.opacity,
            }}
          />
        );
      case 'hexagon':
        return (
          <div
            className={`${baseClasses} flex items-center justify-center`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size * 0.866,
            }}
          >
            <svg
              viewBox="0 0 100 86.6"
              className="w-full h-full"
              style={{ opacity: shape.opacity }}
            >
              <polygon
                points="50,0 100,21.65 100,64.95 50,86.6 0,64.95 0,21.65"
                fill="none"
                stroke={shape.color}
                strokeWidth="2"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {shapesRef.current.map((shape, i) => (
        <div key={i}>{renderShape(shape)}</div>
      ))}
    </div>
  );
}
