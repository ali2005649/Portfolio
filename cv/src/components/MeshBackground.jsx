import { useEffect, useRef } from "react";

export default function MeshBackground() {
  const canvasRef = useRef(null);
  const auroraA = useRef(null);
  const auroraB = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf = 0;
    const mouse = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.35, active: false };
    const aurora = { x: mouse.x, y: mouse.y };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 0.5;
      }

      update() {
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 180) {
            const force = (180 - dist) / 180;
            this.vx += (dx / dist) * force * 0.045;
            this.vy += (dy / dist) * force * 0.045;
          }
        }

        this.vx *= 0.985;
        this.vy *= 0.985;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 211, 252, 0.28)";
        ctx.fill();
      }
    }

    const count = Math.min(72, Math.floor((canvas.width * canvas.height) / 22000));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      aurora.x += (mouse.x - aurora.x) * 0.07;
      aurora.y += (mouse.y - aurora.y) * 0.07;
      if (auroraA.current) {
        auroraA.current.style.transform = `translate3d(${aurora.x - 280}px, ${aurora.y - 280}px, 0)`;
      }
      if (auroraB.current) {
        auroraB.current.style.transform = `translate3d(${aurora.x * 0.55 - 160}px, ${aurora.y * 0.4 - 80}px, 0)`;
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const nearMouse =
              mouse.active &&
              Math.hypot((p.x + particles[j].x) / 2 - mouse.x, (p.y + particles[j].y) / 2 - mouse.y) < 220;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = nearMouse
              ? `rgba(56, 189, 248, ${0.32 - dist / 700})`
              : `rgba(125, 211, 252, ${0.12 - dist / 1400})`;
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-950">
      <div
        ref={auroraA}
        className="absolute h-[560px] w-[560px] rounded-full bg-sky-500/20 blur-[90px]"
      />
      <div
        ref={auroraB}
        className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/18 blur-[80px]"
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
