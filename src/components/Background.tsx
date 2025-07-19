import { useEffect, useState } from "react";
import corner from "../assets/img/corner.png";

type Bloom = {
  id: number;
  x: number;
  y: number;
};

const Background = () => {
  const [blooms, setBlooms] = useState<Bloom[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlooms((prev) => {
        const newBloom: Bloom = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        };

        const updated = [...prev, newBloom];

        if (updated.length > 3) {
          updated.shift();
        }

        return updated;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      const corners = document.querySelector(
        ".corner-container"
      ) as HTMLElement;

      if (corners) {
        corners.style.display = isAtBottom ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="corner-container">
        <div className="corner-embroidery top-left">
          <img src={corner}></img>
        </div>
        <div className="corner-embroidery top-right">
          <img src={corner}></img>
        </div>
        <div className="corner-embroidery bottom-left">
          <img src={corner}></img>
        </div>
        <div className="corner-embroidery bottom-right">
          <img src={corner}></img>
        </div>
      </div>

      <div className="bloom-container">
        {blooms.map((bloom) => (
          <div
            key={bloom.id}
            className="bloom"
            style={{
              left: `${bloom.x}%`,
              top: `${bloom.y}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;
