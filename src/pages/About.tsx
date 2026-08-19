import {
  ShieldCheck,
  Target,
  Network,
  FlaskConical,
  Store,
  ArrowUpRight,
  Check,
  Sparkles,
  LockKeyhole,
  Microscope,
} from "lucide-react";
import { motion } from "framer-motion";

import AIRespPolicy from "../components/about/AIRespPolicy";
import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import Footer from "../components/home/Footer";

const About = () => {
  const principles = [
    "Safe and secure",
    "Reliable and robust",
    "Responsible and ethical",
    "Fair and trustworthy",
    "Aligned with relevant standards and regulations",
    "Ready for deployment and commercial use",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F7FC] text-slate-700">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#210936] pt-28 text-white md:pt-36">
        {/* Ambient gradients */}
        <div className="absolute inset-0">
          <div className="absolute left-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="absolute right-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[35%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:60px_60px]" />

        <Container className="relative z-10">
          <div className="grid min-h-[650px] items-center gap-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
                <Sparkles size={15} />
                <span>THiNK Lab · AI Assurance & Innovation</span>
              </div>

              <h1 className="font-heading max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Where innovation
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  earns trust.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-violet-100/80">
                THiNK Lab is the independent assurance and conformity
                assessment arm of the Tech Innovators Network, helping
                organisations build, test and deploy trustworthy AI and
                software systems.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  "AI Assurance",
                  "Software Testing",
                  "Responsible AI",
                  "Conformity Assessment",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-violet-100 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto flex h-[430px] w-full max-w-[500px] items-center justify-center"
            >
              {/* Rings */}
              <div className="absolute h-[390px] w-[390px] rounded-full border border-violet-400/10" />
              <div className="absolute h-[300px] w-[300px] rounded-full border border-violet-400/15" />
              <div className="absolute h-[215px] w-[215px] rounded-full border border-cyan-300/20" />

              {/* Rotating accent */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-violet-300/20"
              />

              {/* Central glow */}
              <div className="absolute h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

              {/* Central card */}
              <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-[32px] border border-white/20 bg-white/[0.08] shadow-2xl shadow-violet-950/50 backdrop-blur-2xl">
                <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-gradient-to-br from-white to-violet-100 shadow-xl">
                  <ShieldCheck
                    size={48}
                    strokeWidth={1.5}
                    className="text-[#602191]"
                  />
                </div>
              </div>

              {/* Floating nodes */}
              <motion.div
                animate={{ y: [-7, 7, -7] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-3 top-16 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20">
                  <Network size={18} className="text-violet-300" />
                </div>
                <span className="text-xs text-violet-100">Connected</span>
              </motion.div>

              <motion.div
                animate={{ y: [7, -7, 7] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute right-0 top-24 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
                  <LockKeyhole size={18} className="text-cyan-300" />
                </div>
                <span className="text-xs text-violet-100">Assured</span>
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.2, repeat: Infinity }}
                className="absolute bottom-14 left-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-400/10">
                  <Microscope size={18} className="text-fuchsia-300" />
                </div>
                <span className="text-xs text-violet-100">Tested</span>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#F8F7FC] to-transparent" />
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="relative bg-[#F8F7FC] py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
                <span className="h-px w-8 bg-violet-500" />
                About the Lab
              </div>

              <h2 className="font-heading mt-5 max-w-md text-4xl font-bold leading-tight text-[#17203A] md:text-5xl">
                A trusted layer inside the THiNK ecosystem.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-8 text-slate-600"
            >
              <p>
                <strong className="text-[#2A084E]">THiNK Lab</strong> is one
                of the three strategic arms of the{" "}
                <strong className="text-[#2A084E]">
                  Tech Innovators Network (THiNK)
                </strong>
                .
              </p>

              <p>
                THiNK brings together technology communities, innovators,
                researchers and engineers to turn ideas into practical
                solutions that address local and global challenges.
              </p>

              <p>
                Within this ecosystem, THiNK Lab provides the independent
                assurance layer — assessing, testing and validating technology
                before it reaches the wider ecosystem and marketplace.
              </p>

              <div className="border-l-2 border-violet-300 pl-6 text-base italic text-slate-500">
                Innovation moves fast. Trust makes it sustainable.
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PURPOSE + OBJECTIVE
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              <span className="h-px w-8 bg-violet-500" />
              What drives us
            </div>

            <h2 className="font-heading mt-5 text-4xl font-bold text-[#17203A] md:text-5xl">
              Turning responsible innovation into measurable assurance.
            </h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {/* Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[28px] border border-violet-100 bg-[#FAF8FD] p-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-200/30 blur-3xl transition-all group-hover:bg-violet-300/40" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                    <Target
                      size={27}
                      strokeWidth={1.6}
                      className="text-violet-700"
                    />
                  </div>

                  <span className="text-5xl font-bold text-violet-100">
                    01
                  </span>
                </div>

                <h3 className="font-heading mt-8 text-3xl font-bold text-[#17203A]">
                  Our Purpose
                </h3>

                <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                  <p>
                    THiNK Lab exists to build trust in Artificial Intelligence
                    and software systems.
                  </p>

                  <p>
                    We independently assess, test, validate, verify and
                    certify systems so that organisations can understand their
                    risks and make confident deployment decisions.
                  </p>

                  <p>
                    Because innovation only creates lasting value when people
                    can trust the technology behind it.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Objective */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2A084E] via-[#3B1265] to-[#241044] p-8 text-white shadow-2xl shadow-violet-900/20 md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <ShieldCheck
                      size={27}
                      strokeWidth={1.6}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="text-5xl font-bold text-white/10">
                    02
                  </span>
                </div>

                <h3 className="font-heading mt-8 text-3xl font-bold">
                  Our Objective
                </h3>

                <p className="mt-5 text-base leading-7 text-violet-100">
                  We work to ensure that technologies entering the THiNK
                  ecosystem meet recognised expectations for safety, quality,
                  security and responsible use.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {principles.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 flex-shrink-0 text-cyan-300"
                      />
                      <span className="text-sm leading-5 text-violet-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ECOSYSTEM
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F1EDF7] py-20 md:py-28">
        <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-violet-300/20 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              <span className="h-px w-8 bg-violet-500" />
              The THiNK Ecosystem
              <span className="h-px w-8 bg-violet-500" />
            </div>

            <h2 className="font-heading mt-5 text-4xl font-bold text-[#17203A] md:text-5xl">
              An independent assurance layer.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              THiNK Lab connects innovation with assurance, creating a bridge
              between development, testing, deployment and trusted adoption.
            </p>
          </div>

          {/* Ecosystem visual */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="hidden absolute left-[17%] right-[17%] top-1/2 h-px bg-gradient-to-r from-violet-200 via-violet-400 to-cyan-200 lg:block" />

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: Network,
                  title: "Innovation",
                  text: "Ideas, products and AI systems enter the ecosystem.",
                },
                {
                  number: "02",
                  icon: ShieldCheck,
                  title: "Assurance",
                  text: "THiNK Lab independently tests, assesses and validates them.",
                  featured: true,
                },
                {
                  number: "03",
                  icon: Store,
                  title: "Trusted Adoption",
                  text: "Assured solutions can move toward sandbox testing and marketplace access.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative z-10 rounded-[28px] border p-7 text-center ${
                      item.featured
                        ? "border-violet-300 bg-[#2A084E] text-white shadow-2xl shadow-violet-900/20"
                        : "border-violet-100 bg-white"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold tracking-[0.2em] ${
                        item.featured
                          ? "text-cyan-300"
                          : "text-violet-400"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div
                      className={`mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-2xl ${
                        item.featured
                          ? "bg-white/10"
                          : "bg-violet-100"
                      }`}
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className={
                          item.featured
                            ? "text-cyan-300"
                            : "text-violet-700"
                        }
                      />
                    </div>

                    <h3
                      className={`font-heading mt-5 text-xl font-bold ${
                        item.featured
                          ? "text-white"
                          : "text-[#17203A]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        item.featured
                          ? "text-violet-100"
                          : "text-slate-500"
                      }`}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SANDBOX + MARKETPLACE
      ========================================================= */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Sandbox */}
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] border border-violet-100 bg-gradient-to-br from-[#FBF9FE] to-[#F1EAF8] p-8 md:p-10"
            >
              <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full bg-violet-300/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                    <FlaskConical
                      size={27}
                      className="text-violet-700"
                      strokeWidth={1.6}
                    />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-violet-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-violet-500">
                  Controlled Testing
                </p>

                <h2 className="font-heading mt-3 text-3xl font-bold text-[#17203A] md:text-4xl">
                  THiNKiT Sandbox
                </h2>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  THiNK Lab serves as the gateway into the THiNKiT Sandbox,
                  where developers, researchers and organisations can test
                  their systems in a controlled environment.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Risk discovery", "Testing", "Validation"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-violet-700 shadow-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.article>

            {/* Marketplace */}
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-[30px] bg-[#210936] p-8 text-white shadow-2xl shadow-violet-900/20 md:p-10"
            >
              <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-[-60px] left-[-40px] h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Store
                      size={27}
                      className="text-cyan-300"
                      strokeWidth={1.6}
                    />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-cyan-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Trusted Solutions
                </p>

                <h2 className="font-heading mt-3 text-3xl font-bold md:text-4xl">
                  THiNK Marketplace
                </h2>

                <p className="mt-5 max-w-lg text-base leading-7 text-violet-100">
                  Solutions that successfully complete the required
                  assessment and assurance process can be recognised as
                  trusted solutions within the THiNK Marketplace.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Independent evaluation",
                    "Trust",
                    "Responsible AI",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-violet-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#210936] py-24 md:py-32">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full border-[20px] border-violet-400/10" />
        <div className="absolute right-[-100px] bottom-[-100px] h-80 w-80 rounded-full border-[25px] border-cyan-300/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_55%)]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl">
              <ShieldCheck
                size={32}
                strokeWidth={1.5}
                className="text-cyan-300"
              />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              The THiNK Lab Promise
            </p>

            <h2 className="font-heading mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              Building technology
              <span className="block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                people can trust.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100/75">
              Through independent assessment, testing and assurance, THiNK
              Lab helps turn innovative technology into technology that is
              ready to be trusted.
            </p>
          </div>

          <div className="mt-16">
            <AIRespPolicy />
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default About;