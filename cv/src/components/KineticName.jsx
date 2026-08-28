import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function KineticName({ text = "Ali Basim Salman" }) {
  const reduce = useReducedMotion();
  const chars = Array.from(text);

  if (reduce) {
    return (
      <h1 className="bg-gradient-to-b from-white via-slate-100 to-sky-300 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-7xl">
        {text}
      </h1>
    );
  }

  return (
    <h1 className="relative inline-block max-w-full text-5xl font-semibold tracking-tight md:text-7xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flex flex-wrap justify-center">
        {chars.map((char, index) => (
          <span key={`${char}-${index}`} className="inline-block overflow-hidden leading-none">
            <motion.span
              className="inline-block bg-gradient-to-b from-white via-slate-100 to-sky-300 bg-clip-text text-transparent"
              initial={{ y: "115%", rotateX: -40, opacity: 0 }}
              animate={{ y: "0%", rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.72, delay: 0.18 + index * 0.032, ease: EASE }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/50 to-transparent"
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "120%", opacity: [0, 1, 0] }}
        transition={{ delay: 1.15, duration: 1.05, ease: "easeInOut" }}
        style={{ mixBlendMode: "screen" }}
      />
    </h1>
  );
}
