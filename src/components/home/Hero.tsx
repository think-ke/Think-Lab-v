import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CircleCheckBig } from "lucide-react";

import Navbar from "../layout/Navbar";
import BackgroundShapes from "./BackgroundShapes";
import Container from "../common/Container";
import Button from "../common/Button";
import HeroBubble from "./HeroBubble";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const Hero = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#2A084E] text-white">
      <BackgroundShapes />
      <Navbar />

      <Container className="relative z-10 flex min-h-[720px] flex-col justify-center pt-28 pb-14 md:min-h-[760px] md:pt-32 md:pb-16">
        {/* =====================================================
            FLOATING STANDARDS NETWORK
        ====================================================== */}
        <div className="absolute right-10 top-24 hidden h-[500px] w-[480px] xl:block">
          <HeroBubble
            title="ISO/IEC 42001"
            className="absolute right-60 bottom-90"
            delay={0}
          />

          <HeroBubble
            title="NIST AI RMF"
            className="absolute right-0 bottom-70"
            delay={0.5}
          />

          <HeroBubble
            title="KS 3007"
            className="absolute right-90 bottom-40"
            delay={1}
          />

          <HeroBubble
            title="ISO/IEC 27001"
            className="absolute right-6 bottom-24"
            delay={1.5}
          />

          <HeroBubble
            title="DPA 2019"
            className="absolute left-50 bottom-0"
            delay={2}
          />

          <HeroBubble
            title="ISO 23894"
            className="absolute left-20 bottom-65"
            delay={2}
          />

          <HeroBubble
            title="ISO/IEC/IEEE 29119"
            className="absolute left-10 bottom-20"
            delay={2}
          />

          <HeroBubble
            title="ISO/IEC 25059"
            className="absolute left-80 bottom-90"
            delay={2}
          />

          <HeroBubble
            title="ISO 9001"
            className="absolute left-90 bottom-50"
            delay={2}
          />

          <HeroBubble
            title="ISO/IEC TS 4213"
            className="absolute left-80 bottom-0"
            delay={2}
          />

          <HeroBubble
            title="ISO/IEC TR 24028"
            className="absolute left-0 bottom-0"
            delay={2}
          />
        </div>

        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/40 bg-white/10 px-4 py-1.5 text-xs backdrop-blur-md"
          >
            <Sparkles size={14} className="text-violet-300" />
            <span>Secure • Trusted • Responsible AI</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl"
          >
            THiNK LAB: Trusted
            <br />
            Assessment
            <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              & Conformity Centre
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-7 text-violet-100 md:text-lg"
          >
            We test and verify software and AI systems for safety, security,
            and responsibility. Using our THINK CAP framework, we assess AI
            agents, data quality, and governance against global and local
            standards like ISO/IEC 42001, KS 3007, and Kenyan data protection
            laws.
          </motion.p>

          {/* =================================================
              FREE ASSESSMENT OFFER
          ================================================== */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 w-full max-w-xl"
          >
            <div className="group relative overflow-hidden rounded-xl border border-violet-300/20 bg-white/[0.07] px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-violet-300/35 hover:bg-white/[0.1]">
              {/* Glow */}
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-400/20 blur-2xl" />

              <div className="relative flex items-center gap-3">
                {/* Icon */}
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-300/10 text-violet-200 sm:flex">
                  <CircleCheckBig size={17} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-fuchsia-300/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-fuchsia-200">
                      Limited Offer
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-wider text-violet-200/60">
                      First 20 registrations
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                    Free AI Maturity Assessment
                  </p>

                  <p className="text-[11px] leading-4 text-violet-100/60">
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
                className="relative mt-2.5 inline-flex w-full items-center justify-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#2A084E] transition hover:bg-violet-100 sm:hidden"
              >
                Claim your free assessment
                <ArrowUpRight size={12} />
              </button>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Button onClick={scrollToContact}>Get Started</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;