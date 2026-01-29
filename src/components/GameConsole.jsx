import { useEffect, useState } from "react";
import Astronaut from "./Astronaut";
import "../styles/gameConsole.css";

const GameConsole = () => {
  const [gameState, setGameState] = useState("idle"); // idle | running | paused
  const [y, setY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [score, setScore] = useState(0);

  const gravity = 1;
  const jumpStrength = 12;

  // Jump
  const jump = () => {
    if (gameState !== "running") return;
    if (y === 0) setVelocity(jumpStrength);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") jump();
      if (e.key === "p") {
        setGameState((s) => (s === "paused" ? "running" : "paused"));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState, y]);

  // Game loop
  useEffect(() => {
    if (gameState !== "running") return;

    const loop = setInterval(() => {
      setScore((s) => s + 1);

      setY((prev) => {
        const next = prev + velocity;
        return next < 0 ? 0 : next;
      });

      setVelocity((v) => v - gravity);
    }, 50);

    return () => clearInterval(loop);
  }, [gameState, velocity]);

  return (
    <div className="console">
      <div className="console-header">RETRO://ASTRO_RUN</div>

      <div className="console-stats">
        <span>SCORE: {score}</span>
        <span>HIGH: 0000</span>
      </div>

      <div className="console-screen">
        {gameState === "idle" && (
          <p className="console-text">&gt; PRESS START</p>
        )}

        <div
          className="player"
          style={{ transform: `translateY(${-y}px)` }}
        >
          <Astronaut />
        </div>
      </div>

      <div className="console-controls">
        <button onClick={() => setGameState("running")}>START</button>
        <button onClick={() => setGameState("paused")}>PAUSE</button>
        <button onClick={() => setGameState("running")}>RESUME</button>
      </div>
    </div>
  );
};

export default GameConsole;
