import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  CircleCheckBig,
  Cpu,
  FileCheck2,
  FlaskConical,
  Gauge,
  Lock,
  Network,
  Scale,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../layout/Navbar";
import BackgroundShapes from "./BackgroundShapes";
import Container from "../common/Container";
import Button from "../common/Button";

/* =====================================================
   FLOATING STANDARDS NETWORK
===================================================== */
const standards = [
  { label: "ISO/IEC 42001", icon: BrainCircuit, position: "left-[5%] top-[22%]", delay: "0s" },
  { label: "NIST AI RMF", icon: Scale, position: "right-[5%] top-[20%]", delay: "1.2s" },
  { label: "KS 3007", icon: FileCheck2, position: "left-[9%] bottom-[24%]", delay: "2.4s" },
  { label: "ISO/IEC 27001", icon: ShieldCheck, position: "right-[8%] bottom-[25%]", delay: "3.1s" },
  { label: "DPA 2019", icon: Lock, position: "left-[2%] top-[50%]", delay: "1.8s" },
  { label: "ISO 23894", icon: Gauge, position: "right-[2%] top-[50%]", delay: "2.9s" },
  { label: "ISO/IEC/IEEE 29119", icon: FlaskConical, position: "left-[27%] top-[8%]", delay: "0.6s" },
  { label: "ISO/IEC TS 4213", icon: Network, position: "right-[31%] top-[9%]", delay: "2.1s" },
  { label: "ISO 9001", icon: BadgeCheck, position: "left-[31%] bottom-[10%]", delay: "3.4s" },
  { label: "ISO/IEC 25059", icon: Cpu, position: "right-[25%] bottom-[11%]", delay: "1.4s" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate h-screen max-h-screen overflow-hidden bg-[#2A084E] text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundShapes />
      </div>

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* =====================================================
          FLOATING STANDARDS LAYER
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden max-w-[1500px] xl:block">
        {standards.map((standard) => {
          const Icon = standard.icon;

          return (
            <div key={standard.label} className={`absolute ${standard.position}`}>
              <div
                className="hero-node flex items-center gap-2 rounded-full border border-violet-300/20 bg-white/[0.07] px-3 py-1.5 shadow-[0_10px_35px_rgba(10,0,25,0.45)] backdrop-blur-md"
                style={{ animationDelay: standard.delay }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-300/10 text-violet-200">
                  <Icon size={12} strokeWidth={1.8} />
                </div>

                <span className="whitespace-nowrap font-sans text-[10px] font-semibold tracking-wide text-violet-50/80">
                  {standard.label}
                </span>
              </div>
            </div>
          );
        })}

        {/* Orbiting particles */}
        <div className="absolute left-[20%] top-[36%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300/60" />
        <div className="absolute right-[22%] top-[32%] h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-300/50" />
        <div className="absolute bottom-[30%] left-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300/50" />
        <div className="absolute bottom-[27%] right-[29%] h-2 w-2 animate-pulse rounded-full bg-violet-200/40" />
      </div>

      {/* =====================================================
          CENTRAL CONTENT
      ===================================================== */}
      <Container className="relative z-20 flex h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] flex-col items-center justify-center px-5 text-center">
        <div className="mt-6 mx-auto flex w-full max-w-[820px] flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-white/[0.06] px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-violet-200 shadow-[0_6px_20px_rgba(10,0,25,0.3)] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-300" />
            Secure • Trusted • Responsible AI
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 font-heading font-extrabold leading-[0.95] tracking-[-0.035em]"
          >
            <span className="mt-6 block text-[2.25rem] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              THiNK LAB
            </span>

            <span className="mt-2 block bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-300 bg-clip-text text-lg font-bold text-transparent sm:text-xl md:text-2xl lg:text-3xl">
              Trusted Assessment &amp; Conformity Centre
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[580px] text-xs leading-6 text-violet-100/70 sm:text-sm md:text-[15px] md:leading-7"
          >
            We test and verify software and AI systems for safety, security and
            responsibility — assessing AI agents, data quality and governance
            against global and local standards like ISO/IEC 42001, KS 3007 and
            Kenya&rsquo;s Data Protection Act.
          </motion.p>

          {/* Main CTA */}
          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
          >
            <Button onClick={scrollToContact}>Get Started</Button>
          </motion.div>

          {/* =================================================
              FREE ASSESSMENT OFFER
          ================================================== */}
          <motion.div
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-5 w-full max-w-[520px]"
          >
            <div className="group relative overflow-hidden rounded-xl border border-violet-300/20 bg-white/[0.06] px-3.5 py-2.5 text-left backdrop-blur-md transition-all duration-300 hover:border-violet-300/40 hover:bg-white/[0.09]">
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-fuchsia-400/20 blur-2xl" />

              <div className="relative flex items-center gap-3">
                {/* Icon */}
                <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-300/10 text-violet-200 sm:flex">
                  <CircleCheckBig size={15} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-fuchsia-300/15 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-fuchsia-200">
                      Limited Offer
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-wider text-violet-200/50">
                      First 20 registrations
                    </span>
                  </div>

                  <p className="mt-0.5 text-[11px] font-bold text-white sm:text-xs">
                    Free AI Maturity Assessment
                  </p>

                  <p className="text-[10px] leading-4 text-violet-100/60">
                    Discover where your organisation stands and what to improve
                    next.
                  </p>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="hidden shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#2A084E] transition hover:bg-violet-100 sm:inline-flex"
                >
                  Claim yours
                  <ArrowUpRight size={12} />
                </button>
              </div>

              {/* Mobile CTA */}
              <button
                type="button"
                onClick={scrollToContact}
                className="relative mt-2 inline-flex w-full items-center justify-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#2A084E] transition hover:bg-violet-100 sm:hidden"
              >
                Claim your free assessment
                <ArrowUpRight size={12} />
              </button>
            </div>
          </motion.div>

          {/* Bottom indicator */}
          <motion.div
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-5 flex items-center justify-center gap-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-violet-200/40"
          >
            <span className="h-px w-8 bg-violet-300/20" />
            Standards • Assurance • Trust
            <span className="h-px w-8 bg-violet-300/20" />
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#150425] to-transparent" />

      {/* Floating animation */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .hero-node {
          animation: heroFloat 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;