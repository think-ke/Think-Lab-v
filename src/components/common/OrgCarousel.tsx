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
];

const OrgCarousel = () => {
  const logos = [...organizations, ...organizations];

  return (
    <section className="relative overflow-hidden bg-[#F7F4FA] py-12 md:py-14">
      <SectionHeading
                    badge="Partners"
                    title="Our Trusted Partners"
        />
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#F7F4FA] to-transparent md:w-40" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#F7F4FA] to-transparent md:w-40" />

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-14 md:gap-20"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logos.map((organization, index) => (
            <motion.div
              key={`${organization.name}-${index}`}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="
                flex
                h-24
                w-40
                flex-shrink-0
                items-center
                justify-center
                md:h-28
                md:w-52
              "
            >
              <img
                src={organization.logo}
                alt={organization.name}
                className="
                  max-h-20
                  max-w-[170px]
                  object-contain
                  md:max-h-24
                  md:max-w-[200px]
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OrgCarousel;