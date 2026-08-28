import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollMarquee({ text, reverse = false }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? [80, -80] : [-80, 80]);
  const copies = Array.from({ length: 8 }, (_, i) => `${text} · ${i}`);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-x-0 top-10 overflow-hidden">
      <motion.div
        style={{ x: reduce ? 0 : x }}
        className="select-none whitespace-nowrap font-sans text-[12vw] font-semibold uppercase leading-none tracking-tight text-white/[0.045]"
      >
        <motion.div
          className="flex w-max gap-16"
          animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((copy) => (
            <span key={copy} className="flex gap-16">
              {copies.map((item) => (
                <span key={`${copy}-${item}`}>{text}</span>
              ))}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
