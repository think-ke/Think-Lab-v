import {
  ShieldCheck,
  Shield,
  FileCheck,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

import FloatingTag from "./FloatingTag";

const AssessmentCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#B57AD7] to-[#7F33AA] py-24">
      {/* Background Glow */}

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[140px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <span className="inline-flex rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white">
              Get Assessed
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">
              We assess the
              <br />
              Entire AI Ecosystem
            </h2>

            <p className="mt-6 max-w-md text-violet-100 leading-7">
              Know your AI.
              Understand your risks.
              Get expert assurance you can trust.
              We assess the entire AI value chain.
            </p>

            {/* Features */}

            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <Shield className="text-violet-700" />
                </div>

                <span className="text-sm text-white">
                  Reduce Risk
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <ShieldCheck className="text-violet-700" />
                </div>

                <span className="text-sm text-white">
                  Ensure Compliance
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <FileCheck className="text-violet-700" />
                </div>

                <span className="text-sm text-white">
                  Build Trust
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <BarChart3 className="text-violet-700" />
                </div>

                <span className="text-sm text-white">
                  Drive Innovation
                </span>
              </div>
            </div>

            <div className="mt-12">
              <Button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Now
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex h-[520px] items-center justify-center"
          >
            {/* Floating Tags */}

            <FloatingTag
              title="Infrastructure"
              className="left-0 top-16"
            />

            <FloatingTag
              title="Data Sources"
              className="right-0 top-8"
            />

            <FloatingTag
              title="Frameworks & Standards"
              className="left-2 bottom-30"
            />

            <FloatingTag
              title="Monitoring Systems"
              className="left-120 bottom-60"
            />

            <FloatingTag
              title="Governance Structures"
              className="right-0 bottom-30"
            />

            {/* Platform */}

            <div className="absolute bottom-10 h-12 w-72 rounded-full bg-black/15 blur-sm" />

            <div className="absolute bottom-14 h-12 w-72 rounded-full bg-violet-700" />

            {/* Shield */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                relative
                flex
                h-64
                w-56
                items-center
                justify-center
                rounded-[40px]
                bg-gradient-to-br
                from-violet-900
                to-fuchsia-800
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                [clip-path:polygon(50%_0%,100%_18%,100%_72%,50%_100%,0%_72%,0%_18%)]
              "
            >
              <ShieldCheck
                size={100}
                strokeWidth={2.8}
                className="text-violet-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AssessmentCTA;