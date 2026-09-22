import type { Phase } from "../../types/phase";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  phase: Phase;
  index?: number;
}

const fadeUp = {
  hidden: { opacity: 0, x: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  }),
};

const PhaseCard = ({ phase, index = 0 }: Props) => {
  return (
    <motion.div
      custom={index * 0.12}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="group relative"
    >
      {/* Timeline dot */}
      <span className="absolute -left-7 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_0_0_4px_rgba(196,181,253,0.3)] transition-transform duration-300 group-hover:scale-110">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-500">
        Phase {phase.number}
      </span>

      <h3 className="mt-1.5 font-heading text-lg font-bold text-[#2A084E] md:text-xl">
        {phase.title}
      </h3>

      <p className="mt-2 max-w-md text-[13px] leading-6 text-slate-600 md:text-sm">
        {phase.description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {phase.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-1.5 text-[12px] text-slate-600"
          >
            <CheckCircle2 size={14} className="shrink-0 text-violet-500" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PhaseCard;