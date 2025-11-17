import { useEffect, useState } from "react";

interface Chicken {
  id: number;
  x: number;
  speed: number;
  size: number;
  delay: number;
}

export const WalkingChickens = () => {
  const [chickens, setChickens] = useState<Chicken[]>([]);

  useEffect(() => {
    // Create 5 chickens with random properties
    const initialChickens: Chicken[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: -100 - i * 300,
      speed: 0.5 + Math.random() * 0.5,
      size: 40 + Math.random() * 20,
      delay: i * 2,
    }));
    setChickens(initialChickens);

    // Animate chickens
    const interval = setInterval(() => {
      setChickens((prev) =>
        prev.map((chicken) => {
          const newX = chicken.x + chicken.speed;
          // Reset position when chicken goes off screen
          return {
            ...chicken,
            x: newX > window.innerWidth + 100 ? -100 : newX,
          };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none z-20 overflow-hidden">
      {chickens.map((chicken) => (
        <div
          key={chicken.id}
          className="absolute bottom-4 transition-transform duration-75"
          style={{
            left: `${chicken.x}px`,
            width: `${chicken.size}px`,
            height: `${chicken.size}px`,
            animationDelay: `${chicken.delay}s`,
          }}
        >
          <div className="relative w-full h-full animate-bounce">
            {/* Chicken emoji/character */}
            <span className="text-4xl" style={{ fontSize: `${chicken.size}px` }}>
              🐤
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
