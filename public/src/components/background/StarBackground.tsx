import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
  }>>([]);
  const [meteors, setMeteors] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
  }>>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        generateStars();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const generateStars = () => {
    // Reduce star count for better performance - max 100 stars
    const numberOfStars = Math.min(
      100,
      Math.floor((window.innerWidth * window.innerHeight) / 15000)
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.7,
        animationDuration: Math.random() * 3 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    // 2-3 meteors for better visual effect while maintaining performance
    const numberOfMeteors = 2;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.2 + 0.7,
        x: Math.random() * 100,
        y: Math.random() * 35,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 2 + 2,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            willChange: "opacity",
            transform: "translate3d(0, 0, 0)",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            willChange: "transform",
            transform: "translate3d(0, 0, 0) scaleX(1)",
          }}
        />
      ))}
    </div>
  );
};
