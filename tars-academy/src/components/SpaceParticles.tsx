'use client';

import { useState, useEffect } from 'react';

interface SpaceParticlesProps {
  mode?: 'landing' | 'tutorial';
  intensity?: number;
  showLines?: boolean;
}

interface Particle {
  id: string;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

interface FloatParticle extends Particle {
  transform: number;
}

interface LineParticle {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  animationDelay: number;
  animationDuration: number;
}

export default function SpaceParticles({ 
  mode = 'landing', 
  intensity = 1, 
  showLines = true 
}: SpaceParticlesProps) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatParticles, setFloatParticles] = useState<FloatParticle[]>([]);
  const [lineParticles, setLineParticles] = useState<LineParticle[]>([]);

  useEffect(() => {
    setMounted(true);
    
    const isLanding = mode === 'landing';
    const particleCount = Math.floor((isLanding ? 50 : 25) * intensity);
    const floatCount = Math.floor((isLanding ? 30 : 15) * intensity);
    const lineCount = showLines ? Math.floor((isLanding ? 8 : 4) * intensity) : 0;

    // Generate particles
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: `particle-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: isLanding ? 2 + Math.random() * 3 : 3 + Math.random() * 4,
    }));

    // Generate float particles
    const newFloatParticles: FloatParticle[] = Array.from({ length: floatCount }, (_, i) => ({
      id: `float-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      transform: Math.random() * 20,
      animationDelay: 0,
      animationDuration: isLanding ? 10 + Math.random() * 10 : 15 + Math.random() * 15,
    }));

    // Generate line particles
    const newLineParticles: LineParticle[] = Array.from({ length: lineCount }, (_, i) => ({
      id: `line-${i}`,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: isLanding ? 3 + Math.random() * 4 : 5 + Math.random() * 6,
    }));

    setParticles(newParticles);
    setFloatParticles(newFloatParticles);
    setLineParticles(newLineParticles);
  }, [mode, intensity, showLines]);

  if (!mounted) {
    return null; // Avoid SSR mismatch
  }

  const isLanding = mode === 'landing';

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Partículas pequeñas (estrellas) */}
      <div className={`absolute inset-0 ${isLanding ? 'opacity-30' : 'opacity-20'}`}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </div>
      
      {/* Partículas medianas flotantes */}
      <div className={`absolute inset-0 ${isLanding ? 'opacity-20' : 'opacity-10'}`}>
        {floatParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-space-500 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.animationDuration}s infinite linear`,
              transform: `translateY(${particle.transform}px)`
            }}
          />
        ))}
      </div>
      
      {/* Líneas de conexión sutiles (solo si showLines es true) */}
      {showLines && (
        <div className={`absolute inset-0 ${isLanding ? 'opacity-10' : 'opacity-5'}`}>
          <svg width="100%" height="100%" className="absolute inset-0">
            {lineParticles.map((line) => (
              <line
                key={line.id}
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke="rgba(124, 58, 237, 0.3)"
                strokeWidth="1"
                className="animate-pulse"
                style={{
                  animationDelay: `${line.animationDelay}s`,
                  animationDuration: `${line.animationDuration}s`,
                }}
              />
            ))}
          </svg>
        </div>
      )}
    </div>
  );
}