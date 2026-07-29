import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "../../types/service";

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  const { title, description, icon: Icon } = service;

  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      relative
      h-[280px]
      w-[320px]
      flex-shrink-0
      rounded-[28px]
      bg-white/15
      backdrop-blur-xl
      border
      border-white/20
      p-7
      shadow-xl
      overflow-hidden
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
      </div>

      {/* Icon */}

      <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
        <Icon
          className="text-violet-700"
          size={30}
          strokeWidth={2.2}
        />
      </div>

      {/* Title */}

      <h3 className="relative z-10 text-xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="relative z-10 mt-4 text-sm leading-7 text-violet-100">
        {description}
      </p>

      {/* Button */}

      <button
        className="
        absolute
        bottom-7
        left-7
        flex
        items-center
        gap-2
        font-semibold
        text-white
        transition-all
        duration-300
        group-hover:gap-4
        "
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </motion.article>
  );
};

export default ServiceCard;