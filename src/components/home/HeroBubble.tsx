import { motion } from "framer-motion";

interface HeroBubbleProps {
    title: string;
    className?: string;
    delay?: number;
}

const HeroBubble = ({
    title,
    className = "",
    delay = 0,
}: HeroBubbleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                y: [0, -12, 0],
            }}
            transition={{
                opacity: { duration: 0.8, delay },
                y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay,
                },
            }}
            className={`absolute ${className}`}
        >
            <div
                className="
    rounded-full
    border
    border-violet-300/40
    bg-white/10
    px-5
    py-3
    backdrop-blur-xl
    shadow-xl
    transition-all
    duration-300
    hover:scale-110
    hover:bg-violet-500/30
    hover:shadow-violet-500/40
    cursor-default
  "
            >
                <span className="text-sm font-semibold text-white">
                    {title}
                </span>
            </div>
        </motion.div>
    );
};

export default HeroBubble;