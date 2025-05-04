
import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Line properties
    const lines: any[] = [];
    const lineCount = 20;
    
    // Create initial lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 50 + 50,
        opacity: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
        speed: Math.random() * 1 + 0.5,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        const endX = line.x + Math.cos(line.direction) * line.length;
        const endY = line.y + Math.sin(line.direction) * line.length;
        ctx.lineTo(endX, endY);
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Move lines
        line.x += Math.cos(line.direction) * line.speed;
        line.y += Math.sin(line.direction) * line.speed;
        
        // Reset lines that go off screen
        if (line.x < -line.length || line.x > canvas.width + line.length || 
            line.y < -line.length || line.y > canvas.height + line.length) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.direction = Math.random() * Math.PI * 2;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent pointer-events-none"
    />
  );
};

export default BackgroundAnimation;
