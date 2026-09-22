import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Button from "../common/Button";
import ServicesCarousel from "./ServiceCarousel";
import Container from "../common/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF8FE] via-[#F6EFFC] to-[#F1E7FA] py-12 md:py-16">
      {/* =====================================================
          BACKGROUND ATMOSPHERE (light)
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[340px] w-[340px] rounded-full bg-violet-300/30 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-fuchsia-300/25 blur-[140px]" />

        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full border-[14px] border-dashed border-violet-300/30" />
        <div className="absolute -right-20 bottom-4 h-64 w-64 rounded-full border-[18px] border-violet-300/20" />

        <div className="absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="absolute left-[14%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/60" />
        <div className="absolute right-[18%] top-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400/60" />
        <div className="absolute bottom-[22%] left-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/50" />
        <div className="absolute bottom-[26%] right-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300/60" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-8 max-w-2xl text-center md:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-sm">
            <Sparkles size={11} className="text-fuchsia-500" />
            Services
          </span>

          <h2 className="font-heading mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#2A084E] md:text-4xl">
            What We Offer
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            We provide independent testing, assessment, and verification
            services to help organizations build safer, more secure, and
            responsible AI and software systems.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES CAROUSEL
        ====================================================== */}
        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ServicesCarousel />
        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <motion.div
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 flex justify-center md:mt-10"
        >
          <Link to="/assessments">
            <Button variant="primary" className="justify-center">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;