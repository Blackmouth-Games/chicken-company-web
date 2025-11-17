import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "egg" | "feather" | "coin";
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 20;
      const types: Array<"egg" | "feather" | "coin"> = ["egg", "feather", "coin"];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const getParticleEmoji = (type: string) => {
    switch (type) {
      case "egg":
        return "🥚";
      case "feather":
        return "🪶";
      case "coin":
        return "🪙";
      default:
        return "🥚";
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float opacity-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {getParticleEmoji(particle.type)}
        </div>
      ))}
    </div>
  );
};
