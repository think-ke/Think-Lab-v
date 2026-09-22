import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const organizations = [
  {
    name: "Tech Innovators Network",
    logo: "/logo/think.jpg",
  },
  {
    name: "KEBS",
    logo: "/logo/KEBS.png",
  },
  {
    name: "FCDO",
    logo: "/logo/FCDO.png",
  },
  {
    name: "ARSO",
    logo: "/logo/ARSO.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const OrgCarousel = () => {
  const logos = [
    ...organizations,
    ...organizations,
    ...organizations,
    ...organizations,
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        {/* Faint dot grid */}
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      {/* =====================================================
          SECTION HEADING
      ====================================================== */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10"
      >
        <SectionHeading
          badge="Partners"
          title="Our Trusted Partners"
        />
      </motion.div>

      {/* =====================================================
          LOGO MARQUEE
      ====================================================== */}
      <motion.div
        custom={0.15}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 mt-6 overflow-hidden"
      >
        <div
          className="flex w-max items-center gap-12 md:gap-16"
          style={{
            animation: "orgScroll 32s linear infinite",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {logos.map((organization, index) => (
            <motion.div
              key={`${organization.name}-${index}`}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative flex h-20 w-36 flex-shrink-0 items-center justify-center md:h-24 md:w-44"
            >
              {/* Soft hover halo */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-100/0 to-fuchsia-100/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-violet-200/60 group-hover:to-fuchsia-200/50 group-hover:opacity-100" />

              <img
                src={organization.logo}
                alt={organization.name}
                className="relative max-h-16 max-w-[140px] object-contain transition-all duration-300 group-hover:grayscale-0 md:max-h-20 md:max-w-[170px]"
              />
            </motion.div>
          ))}
        </div>

        <style>{`
          @keyframes orgScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </motion.div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}
      <motion.div
        custom={0.3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 mt-8 flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400"
      >
        <span className="h-px w-8 bg-violet-200" />
        Trusted by industry leaders
        <span className="h-px w-8 bg-violet-200" />
      </motion.div>
    </section>
  );
};

export default OrgCarousel;