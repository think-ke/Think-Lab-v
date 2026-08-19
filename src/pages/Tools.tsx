import {
  BrainCircuit,
  Database,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Footer from "../components/home/Footer";

const tools = [
  {
    title: "AI Assessment Toolkit",
    description:
      "A practical toolkit designed to support the assessment of AI systems across safety, reliability, responsibility, security, and conformity requirements.",
    details:
      "The toolkit helps organisations structure their AI assessment activities, identify potential risks and gaps, gather evidence, and establish a clearer basis for evaluating AI systems against defined requirements.",
    icon: BrainCircuit,
  },
  {
    title: "Data Quality Toolkit",
    description:
      "A toolkit for evaluating and improving the quality, readiness, and reliability of data used to support AI systems and applications.",
    details:
      "It helps organisations examine important aspects of their data and identify quality gaps that could affect AI performance, reliability, scalability, and trustworthiness.",
    icon: Database,
  },
  {
    title: "AI Policy Assessment Toolkit",
    description:
      "A toolkit designed to help organisations assess the strength and completeness of their AI policies and responsible AI practices.",
    details:
      "The toolkit provides a structured approach for reviewing AI governance, responsibility, risk management, data protection, accountability, and other areas that contribute to responsible AI adoption.",
    icon: FileCheck2,
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-[#F7F4FA] text-slate-700">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#2A084E] pt-32 pb-20 text-white md:pt-36 md:pb-24">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border-[24px] border-violet-400/10" />

        <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full border-[50px] border-violet-300/10" />

        <div className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-violet-200 backdrop-blur-md">
              <Sparkles size={14} />
              THiNK Lab Tools
            </span>

            <h1 className="font-heading mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Tools for{" "}
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Trusted AI
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-violet-100/85 md:text-lg">
              Practical toolkits designed to help organisations assess,
              understand, and improve the systems, data, and policies that
              support responsible AI.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* =========================================================
          TOOLS
      ========================================================= */}
      <section className="bg-[#F7F4FA] py-20 md:py-24">
        <Container>
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#F0E5F7] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#7F4A9D]">
              Our Toolkits
            </span>

            <h2 className="font-heading mt-5 text-3xl font-bold text-[#17203A] md:text-4xl">
              Practical tools for better AI
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore the toolkits available through THiNK Lab and discover how
              they can support your organisation's assessment and improvement
              journey.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <motion.article
                  key={tool.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col rounded-[24px] border border-violet-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0E5F7] transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      className="text-[#7F4A9D]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading mt-6 text-xl font-bold text-[#17203A]">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>

                  {/* Details */}
                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {tool.details}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-7">
                    <Link to="/#contact">
                      <Button
                        variant="primary"
                        icon={true}
                        className="w-full justify-center"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#2A084E] py-16 md:py-20">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full border-[20px] border-violet-400/10" />

        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full border-[25px] border-violet-300/10" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Need help choosing the right toolkit?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-200">
              Get in touch with THiNK Lab to discuss your organisation's
              requirements and find the right assessment or toolkit for your
              needs.
            </p>

            <Link to="/#contact" className="mt-7 inline-block">
              <Button
                variant="secondary"
                icon={true}
                className="bg-white text-[#2A084E] hover:bg-violet-100"
              >
                Contact THiNK Lab
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
      <Footer/>
    </div>
    
  );
};

export default Tools;