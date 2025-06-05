import { useEffect, useRef } from 'react';

interface Line {
  x: number;
  y: number;
  width: number;
  opacity: number;
  speed: number;
  thickness: number;
  points: { x: number; y: number }[];
}

const WindBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let lines: Line[] = [];
    let animationFrameId: number;
    
    // Define the text area and navbar bounds
    const bounds = {
      navbar: {
        bottom: 100, // Height of navbar plus some padding
      },
      textArea: {
        top: 0,
        bottom: 0,
        padding: 100, // Padding around text area
      }
    };
    
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Set text area bounds
      bounds.textArea.top = canvas.height * 0.4;
      bounds.textArea.bottom = canvas.height * 0.6;
      
      initLines();
    };
    
    const initLines = () => {
      lines = [];
      const numberOfLines = 40;
      
      for (let i = 0; i < numberOfLines; i++) {
        // Choose a valid section (below navbar, above or below text area)
        let y;
        const section = Math.random();
        
        if (section < 0.3) {
          // Between navbar and text area
          y = bounds.navbar.bottom + Math.random() * (bounds.textArea.top - bounds.navbar.bottom - bounds.textArea.padding);
        } else if (section < 0.6) {
          // Below text area
          y = bounds.textArea.bottom + bounds.textArea.padding + Math.random() * (canvas.height - bounds.textArea.bottom - bounds.textArea.padding);
        } else {
          // Above text area but below navbar
          y = bounds.navbar.bottom + Math.random() * (bounds.textArea.top - bounds.navbar.bottom);
        }
        
        const line: Line = {
          x: canvas.width + Math.random() * 200,
          y,
          width: Math.random() * 300 + 200,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 4 + 3,
          thickness: Math.random() * 2 + 1,
          points: []
        };
        
        // Initialize points along the line
        const numPoints = 20;
        for (let j = 0; j < numPoints; j++) {
          line.points.push({
            x: line.x + (j * line.width) / (numPoints - 1),
            y: line.y
          });
        }
        
        lines.push(line);
      }
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        ctx.beginPath();
        
        // Update points
        for (let i = 0; i < line.points.length; i++) {
          const point = line.points[i];
          point.x -= line.speed;
          
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            const prevPoint = line.points[i - 1];
            const cpx = (prevPoint.x + point.x) / 2;
            const cpy = (prevPoint.y + point.y) / 2;
            ctx.quadraticCurveTo(cpx, cpy, point.x, point.y);
          }
        }
        
        // Create gradient
        const gradient = ctx.createLinearGradient(
          line.points[0].x,
          line.points[0].y,
          line.points[line.points.length - 1].x,
          line.points[line.points.length - 1].y
        );
        
        gradient.addColorStop(0, `rgba(106, 79, 182, ${line.opacity})`);
        gradient.addColorStop(0.5, `rgba(106, 79, 182, ${line.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(106, 79, 182, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = line.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Reset line when it moves off screen
        if (line.points[line.points.length - 1].x < 0) {
          line.points = [];
          line.x = canvas.width + Math.random() * 100;
          
          // Choose a valid section for new position
          const section = Math.random();
          if (section < 0.3) {
            line.y = bounds.navbar.bottom + Math.random() * (bounds.textArea.top - bounds.navbar.bottom - bounds.textArea.padding);
          } else if (section < 0.6) {
            line.y = bounds.textArea.bottom + bounds.textArea.padding + Math.random() * (canvas.height - bounds.textArea.bottom - bounds.textArea.padding);
          } else {
            line.y = bounds.navbar.bottom + Math.random() * (bounds.textArea.top - bounds.navbar.bottom);
          }
          
          const numPoints = 20;
          for (let j = 0; j < numPoints; j++) {
            line.points.push({
              x: line.x + (j * line.width) / (numPoints - 1),
              y: line.y
            });
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    window.addEventListener('resize', resize);
    
    resize();
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default WindBackground;