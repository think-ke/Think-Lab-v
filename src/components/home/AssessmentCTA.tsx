import { motion } from "framer-motion";
import {
  ShieldCheck,
  Shield,
  FileCheck,
  BarChart3,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import FloatingTag from "./FloatingTag";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const features = [
  { icon: Shield, label: "Reduce Risk" },
  { icon: ShieldCheck, label: "Ensure Compliance" },
  { icon: FileCheck, label: "Build Trust" },
  { icon: BarChart3, label: "Drive Innovation" },
];

const AssessmentCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF8FE] via-[#F4EBFB] to-[#EFE3F8] py-20 md:py-24">
      {/* =====================================================
          BACKGROUND ATMOSPHERE (matches Services + Newsletter)
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-violet-300/35 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-300/30 blur-[140px]" />

        <div className="absolute -left-24 top-16 h-60 w-60 rounded-full border-[14px] border-dashed border-violet-300/30" />
        <div className="absolute -right-20 bottom-8 h-72 w-72 rounded-full border-[20px] border-violet-300/20" />

        <div className="absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="absolute left-[14%] top-[28%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/60" />
        <div className="absolute right-[18%] top-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400/60" />
        <div className="absolute bottom-[24%] left-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/50" />
        <div className="absolute bottom-[28%] right-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300/60" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* =====================================================
              LEFT — COPY
          ====================================================== */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-sm">
              <Sparkles size={11} className="text-fuchsia-500" />
              Get Assessed
            </span>

            {/* Heading */}
            <h2 className="font-heading mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#2A084E] md:text-5xl">
              We assess the
              <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                Entire AI Ecosystem
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 md:text-base md:leading-8">
              Know your AI. Understand your risks. Get expert assurance you can
              trust — we assess the entire AI value chain.
            </p>

            {/* Feature tiles */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    custom={0.15 + i * 0.08}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-2xl border border-violet-100 bg-white/80 p-3.5 text-center shadow-[0_10px_30px_-15px_rgba(80,40,120,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-violet-200 hover:shadow-[0_20px_40px_-20px_rgba(80,40,120,0.4)]"
                  >
                    <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-fuchsia-200/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={18} strokeWidth={2.2} />
                    </span>

                    <span className="relative text-[11px] font-bold text-[#2A084E]">
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-9"
            >
              <Button onClick={scrollToContact}>Start Now</Button>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — ORBITAL ECOSYSTEM
          ====================================================== */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center md:h-[480px]"
          >
            {/* Orbital rings */}
            <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full border border-violet-300/40 md:h-[320px] md:w-[320px]" />
            <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full border border-dashed border-violet-300/30 md:h-[440px] md:w-[440px]" />

            {/* Center aura */}
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-gradient-to-br from-violet-300/40 to-fuchsia-300/30 blur-3xl" />

            {/* Floating tags */}
            <FloatingTag title="Infrastructure" position="left-0 top-10" delay={0} />
            <FloatingTag title="Data Sources" position="right-0 top-16" delay={0.6} />
            <FloatingTag title="Frameworks & Standards" position="left-0 bottom-16" delay={1.2} />
            <FloatingTag title="Monitoring Systems" position="right-0 bottom-24" delay={1.8} />
            <FloatingTag title="Governance Structures" position="left-1/2 -translate-x-1/2 bottom-0" delay={2.4} />

            {/* Central shield */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative flex h-56 w-48 items-center justify-center rounded-[36px] bg-gradient-to-br from-[#3A1160] via-[#4B1C77] to-[#6B2C9C] shadow-[0_30px_70px_-20px_rgba(80,40,120,0.6)] [clip-path:polygon(50%_0%,100%_18%,100%_72%,50%_100%,0%_72%,0%_18%)] md:h-64 md:w-56"
            >
              {/* Inner glow */}
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />

              {/* Shield icon */}
              <div className="relative flex flex-col items-center">
                <ShieldCheck
                  size={88}
                  strokeWidth={2.4}
                  className="text-violet-200 drop-shadow-[0_0_20px_rgba(196,181,253,0.6)]"
                />

                <span className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-violet-200/70">
                  THiNK LAB
                </span>
              </div>

              {/* Pulsing halo */}
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="pointer-events-none absolute inset-[-12px] rounded-[40px] border border-violet-300/40 [clip-path:polygon(50%_0%,100%_18%,100%_72%,50%_100%,0%_72%,0%_18%)]"
              />
            </motion.div>

            {/* Base platform */}
            <div className="pointer-events-none absolute bottom-6 h-6 w-56 rounded-[50%] bg-violet-900/20 blur-md md:w-64" />
            <div className="pointer-events-none absolute bottom-8 h-4 w-48 rounded-[50%] bg-violet-500/40 blur-sm md:w-56" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AssessmentCTA;