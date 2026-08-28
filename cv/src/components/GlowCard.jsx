import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function GlowCard({
  children,
  className = "",
  innerClassName = "",
  tilt = false,
  delay = 0,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18, mass: 0.4 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18, mass: 0.4 });

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    node.style.setProperty("--mx", `${px * 100}%`);
    node.style.setProperty("--my", `${py * 100}%`);
    if (tilt && !reduce) {
      rotateY.set((px - 0.5) * 12);
      rotateX.set((0.5 - py) * 12);
    }
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "50%");
    ref.current.style.setProperty("--my", "0%");
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: tilt && !reduce ? springX : 0,
        rotateY: tilt && !reduce ? springY : 0,
        transformPerspective: 1100,
      }}
      className={`glow-shell relative h-full rounded-2xl ${className}`}
    >
      <div className={`glow-inner relative h-full overflow-hidden rounded-[15px] bg-slate-950/75 backdrop-blur-2xl ${innerClassName}`}>
        <div className="holo-glare" />
        {children}
      </div>
    </motion.div>
  );
}
