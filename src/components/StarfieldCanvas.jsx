import { useEffect, useRef } from 'react';

const StarfieldCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let stars = [];
    const numStars = 250;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const moveStars = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const speed = 1.25;

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        star.z -= speed;
        if (star.z <= 1) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const k = 600.0 / star.z; // increased to spread stars more
        const px = star.x - centerX;
        const py = star.y - centerY;

        const x = px * k + centerX;
        const y = py * k + centerY;

        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
          const size = (1 - star.z / canvas.width) * 4; // increased size
          ctx.beginPath();
          ctx.arc(x, y, size, 0, 2 * Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
        }
      }
    };

    let animationFrameId;

    const animate = () => {
      moveStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default StarfieldCanvas;
