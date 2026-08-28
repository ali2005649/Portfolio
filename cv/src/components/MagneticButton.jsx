import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function MagneticButton({
  as = "button",
  children,
  className = "",
  strength = 0.32,
  ...props
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.35 });
  const Tag = as === "a" ? motion.a : motion.button;

  const onMove = (event) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Tag
      className={className}
      style={{ x: reduce ? 0 : springX, y: reduce ? 0 : springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
