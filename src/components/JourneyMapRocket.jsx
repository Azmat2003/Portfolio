// JourneyMapRocket.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import planet0 from '../assets/planet0.png';
import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';

const planets = [
  { id: 0, label: "Level 0", x: 100, y: 300, img: planet0, message: "Started the journey" },
  { id: 1, label: "Level 1", x: 350, y: 150, img: planet1, message: "Built my first project" },
  { id: 2, label: "Level 2", x: 600, y: 350, img: planet2, message: "Landed my internship" }
];

import bgPlanet1 from '../assets/bg-Planet1.png';
import bgPlanet2 from '../assets/bg-Planet2.png';

const envPlanets = [
  { id: "env1", x: 200, y: 50, img: bgPlanet1},
  { id: "env2", x: 500, y: 100, img: bgPlanet2},
];


import rocket from '../assets/rocket.png';
const Rocket = ({ x, y }) => (
  <motion.img
    src={rocket}
    alt="Rocket"
    initial={{ opacity: 1 }}
    animate={{ x, y, opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ position: "absolute", width: 50, height: 50, transform: "rotate(45deg)" }}
  />
);

const Planet = ({ planet, onClick, hovered }) => (
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: hovered ? 1.2 : 1 }}
    whileHover={{ cursor: "pointer" }}
    onClick={() => onClick(planet)}
    style={{ position: "absolute", left: planet.x, top: planet.y }}
  >
    <img src={planet.img} alt={planet.label} width={80} height={80} />
    {hovered && (
      <div className="text-white text-xs text-center mt-1">{planet.label}</div>
    )}
  </motion.div>
);

const JourneyMapRocket = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [message, setMessage] = useState(planets[0].message);

  const handlePlanetClick = (planet) => {
    const newIndex = planets.findIndex((p) => p.id === planet.id);
    setMessage(planet.message);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < planets.length - 1) {
        const next = currentIndex + 1;
        setCurrentIndex(next);
        setMessage(planets[next].message);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = planets[currentIndex];

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden rounded-xl">
      {/* Dotted path */}
      <svg className="absolute inset-0" width="100%" height="100%">
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#ccc" />
          </pattern>
        </defs>
        <polyline
          fill="none"
          stroke="url(#dots)"
          strokeWidth="2"
          points={planets.map((p) => `${p.x + 40},${p.y + 40}`).join(" ")}
        />
      </svg>

      {/* Rocket */}
      <Rocket x={current.x + 15} y={current.y + 10} />

      {/* Planets */}
      {planets.map((planet) => (
        <div
          key={planet.id}
          onMouseEnter={() => setHoveredId(planet.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Planet
            planet={planet}
            hovered={hoveredId === planet.id}
            onClick={handlePlanetClick}
          />
        </div>
      ))}

      {/* Background env planets */}
      {envPlanets.map((ep) => (
        <img
          key={ep.id}
          src={ep.img}
          alt=""
          style={{
            position: "absolute",
            left: ep.x,
            top: ep.y,
            width: 80,
            height: 80,
            opacity: 0.3,
          }}
        />
      ))}

      {/* Message Box */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-purple-800 text-white p-3 rounded-xl text-sm shadow-xl border border-purple-400">
        {message}
      </div>
    </div>
  );
};

export default JourneyMapRocket;
