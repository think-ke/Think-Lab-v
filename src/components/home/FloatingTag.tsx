import { motion } from "framer-motion";

interface FloatingTagProps {
  title: string;
  position?: string;
  delay?: number;
}

const FloatingTag = ({ title, position = "", delay = 0 }: FloatingTagProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-20 ${position}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4 + delay * 0.4,
          ease: "easeInOut",
          delay,
        }}
        className="group flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/85 px-3 py-1.5 shadow-[0_10px_30px_-12px_rgba(80,40,120,0.35)] backdrop-blur-md transition-all duration-300 hover:border-violet-300 hover:shadow-[0_15px_35px_-12px_rgba(80,40,120,0.5)]"
      >
        {/* Dot indicator */}
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute h-5 w-5 animate-ping rounded-full bg-violet-300/40" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
        </span>

        <span className="whitespace-nowrap text-[11px] font-semibold text-[#2A084E]">
          {title}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default FloatingTag;