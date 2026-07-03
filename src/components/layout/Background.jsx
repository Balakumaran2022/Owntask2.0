import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 180 };

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    // Mouse interaction
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Particle logic
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }

      update() {
        // Slowly drift
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction (slight repulsion)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density * 0.5;
            let directionY = forceDirectionY * force * this.density * 0.5;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = (canvas.width * canvas.height) / 16000; // Adjust density based on screen size
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    // Data packets flowing on edges
    let packets = [];
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Connections & update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let connectDistance = 140;

          if (distance < connectDistance) {
            // Randomly spawn a data packet on this line
            if (Math.random() < 0.0006) {
               packets.push({
                 p1: particles[i],
                 p2: particles[j],
                 progress: 0,
                 speed: 0.015 + Math.random() * 0.02
               });
            }

            ctx.beginPath();
            let opacity = 1 - (distance / connectDistance);
            // Emerald green lines with low opacity
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        let p = packets[i];
        p.progress += p.speed;
        
        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        let currX = p.p1.x + (p.p2.x - p.p1.x) * p.progress;
        let currY = p.p1.y + (p.p2.y - p.p1.y) * p.progress;
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(currX, currY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 245, 239, 0.9)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#10b981';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          backgroundColor: '#030806',
          // Animated radial gradient blobs (CSS only)
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.2) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 85% 80%, rgba(139,92,246,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 70%, rgba(6,182,212,0.08) 0%, transparent 60%)
          `,
        }}
      >
        {/* Subtle SVG Noise Texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        {/* Neural Network Canvas */}
        <canvas 
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.85, // Keep it subtle and readable
          }}
        />

        {/* Interactive Cursor Follower Spotlight */}
        <div style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 60%)',
          left: 'var(--mouse-x, -1000px)',
          top: 'var(--mouse-y, -1000px)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(60px)',
          transition: 'transform 0.1s ease-out',
        }} />
      </div>
    </>
  );
}
