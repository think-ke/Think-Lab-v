import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

import DashboardMockup from "./DashboardMockup";
import PhaseCard from "./PhaseCard";

import { phases } from "../../constants/phases";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const CapFramework = () => {
  return (
    <section className="relative isolate z-10 overflow-hidden bg-gradient-to-b from-[#FBF8FE] via-[#F6EFFC] to-[#F1E7FA] py-16 md:py-20">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-violet-300/30 blur-[140px]" />
        <div className="absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-fuchsia-300/25 blur-[140px]" />

        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full border-[14px] border-dashed border-violet-300/30" />
        <div className="absolute -right-20 bottom-8 h-64 w-64 rounded-full border-[18px] border-violet-300/20" />

        <div className="absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="absolute left-[14%] top-[26%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/60" />
        <div className="absolute right-[18%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400/60" />
        <div className="absolute bottom-[22%] left-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/50" />
        <div className="absolute bottom-[26%] right-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300/60" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="CAP"
          title="The CAP Framework: Certify Your AI"
          subtitle="THINK LAB uses the Conformity Assessment Process (CAP) to evaluate already-built AI systems."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* =====================================================
              LEFT — COPY + PHASES
          ====================================================== */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#2A084E] md:text-2xl">
              Our Proven 3 Step Blueprint for Bulletproof AI
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600 md:text-base">
              Unlock market-ready innovation with our elite three-phase AI
              safety, security, and conformity certification.
            </p>

            <div className="relative mt-9 space-y-10 pl-7">
              {/* Timeline line */}
              <span className="absolute left-2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-violet-300 via-violet-200 to-transparent" />

              {phases.map((phase, i) => (
                <PhaseCard key={phase.number} phase={phase} index={i} />
              ))}
            </div>

            <motion.div
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8"
            >
              <a
                href="https://cap.think.ke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Learn More</Button>
              </a>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — DASHBOARD MOCKUP
          ====================================================== */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CapFramework;