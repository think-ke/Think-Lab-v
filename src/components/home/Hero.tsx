import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Navbar from "../layout/Navbar";
import BackgroundShapes from "./BackgroundShapes";
import Container from "../common/Container";
import Button from "../common/Button";
import ServicesCarousel from "./ServiceCarousel";
import HeroBubble from "./HeroBubble";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#2A084E] text-white">
        <BackgroundShapes />
        <Navbar />

        <Container className="relative z-10 flex min-h-screen flex-col justify-center pt-32 pb-20">
          {/* Floating Standards Network */}
          <div className="absolute right-10 top-24 hidden h-[520px] w-[500px] xl:block">
            {/* Bubbles */}
            <HeroBubble
              title="ISO/IEC 42001"
              className="absolute left-6 bottom-90"
              delay={0}
            />

            <HeroBubble
              title="NIST AI RMF"
              className="absolute right-0 bottom-70"
              delay={0.5}
            />

            <HeroBubble
              title="KS 3007"
              className="absolute left-2 bottom-32"
              delay={1}
            />

            <HeroBubble
              title="ISO 27001"
              className="absolute right-6 bottom-24"
              delay={1.5}
            />

            <HeroBubble
              title="Kenya Data Protection Act"
              className="absolute left-20 bottom-0"
              delay={2}
            />
          </div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/40 bg-white/10 px-5 py-2 text-sm backdrop-blur-md"
          >
            <Sparkles size={16} className="text-violet-300" />
            <span>Secure • Trusted • Responsible AI</span>
          </motion.div>

          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
          >
            THiNK LAB: Trusted
            <br />
            Assessment
            <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              & Conformity Centre
            </span>
          </motion.h1>

          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-violet-100"
          >
            We test and verify software and AI systems for safety, security, and responsibility. Using our THINK CAP framework, we assess AI agents, data quality, and governance against global and local standards like ISO/IEC 42001, KS 3007, and Kenyan data protection laws.
          </motion.p>

          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button>Get Started</Button>

          </motion.div>

          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-20"
          >
            <ServicesCarousel />
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
