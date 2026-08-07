import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Clock3 } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import BackgroundShapes from "../home/BackgroundShapes";
import HeroBubble from "../home/HeroBubble";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
    },
  }),
};

const ComingSoon = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#4C1D95] via-[#602191] to-[#8B5CF6] text-white">

      <BackgroundShapes />

      {/* Floating Standards */}
      <div className="absolute inset-0 hidden xl:block">
        <HeroBubble
          title="ISO/IEC 42001"
          className="absolute left-24 top-28"
          delay={0}
        />

        <HeroBubble
          title="NIST AI RMF"
          className="absolute right-28 top-36"
          delay={0.5}
        />

        <HeroBubble
          title="KS 3007"
          className="absolute left-36 bottom-32"
          delay={1}
        />

        <HeroBubble
          title="ISO/IEC 27001"
          className="absolute right-24 bottom-28"
          delay={1.5}
        />
      </div>

      <Container className="relative z-10 flex min-h-screen items-center justify-center">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl rounded-[40px] border border-white/20 bg-white/10 p-16 text-center backdrop-blur-xl shadow-2xl"
        >

          <motion.div
            variants={fadeUp}
            custom={0}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10"
          >
            <Clock3
              size={46}
              className="text-violet-200"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/40 bg-white/10 px-5 py-2 backdrop-blur-md"
          >
            <Sparkles
              size={16}
              className="text-violet-300"
            />

            <span className="text-sm">
              THiNK LAB
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.4}
            className="font-heading text-5xl font-black md:text-7xl"
          >
            Coming
            <span className="block bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
              Soon
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.6}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-violet-100"
          >
            We're building an intelligent experience to support AI
            verification, governance, conformity assessments, and
            responsible innovation.

            <br />
            <br />

            This section will be available soon.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.8}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <Button
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Back
            </Button>

            <Button
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              Contact Us
            </Button>
          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
};

export default ComingSoon;