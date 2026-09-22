import { motion } from "framer-motion";
import type { Service } from "../../types/service";

interface Props {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: Props) => {
  const { title, description, icon: Icon } = service;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex h-[260px] w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-[24px] border border-violet-100 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(80,40,120,0.15)] transition-all duration-300 hover:border-violet-200 hover:shadow-[0_20px_45px_-20px_rgba(80,40,120,0.35)]"
    >
      {/* Gradient top reveal */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Soft hover glow */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-200/60 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Watermark index */}
      <span className="pointer-events-none absolute right-4 top-3 font-heading text-4xl font-black leading-none text-violet-100 transition-colors duration-300 group-hover:text-violet-200">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon size={20} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-heading text-base font-bold text-[#2A084E]">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-2 line-clamp-3 text-[13px] leading-6 text-slate-600">
        {description}
      </p>

      {/* Footer accent */}
      <div className="relative z-10 mt-auto flex items-center gap-2 pt-3">
        <span className="h-1 w-6 rounded-full bg-violet-200 transition-all duration-300 group-hover:w-10 group-hover:bg-fuchsia-400" />
        <span className="h-1 w-2 rounded-full bg-violet-200" />
      </div>
    </motion.article>
  );
};

export default ServiceCard;