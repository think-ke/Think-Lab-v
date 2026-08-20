import { FileText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../common/Container";

const AIResponsibilityPolicy = () => {
  return (
    <section className="relative overflow-hidden bg-[#2A084E] py-10 md:py-14">
      {/* Subtle decorative circles */}
      <div className="absolute -left-20 top-8 h-40 w-40 rounded-full border-[12px] border-violet-400/10" />

      <div className="absolute -right-16 bottom-[-40px] h-48 w-48 rounded-full border-[14px] border-violet-300/10" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-6 backdrop-blur-md md:px-7 md:py-7">
            <div className="flex items-center gap-5">

              {/* Icon */}
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white md:flex">
                <FileText
                  size={25}
                  strokeWidth={1.8}
                  className="text-violet-700"
                />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <span className="inline-flex rounded-full bg-violet-300/10 px-3 py-1 text-[11px] font-medium text-violet-200">
                  Responsible AI
                </span>

                <h2 className="font-heading mt-2 text-xl font-bold text-white md:text-2xl">
                  AI Responsibility Policy
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-5 text-violet-100/75">
                  Our commitment to responsible artificial intelligence
                  guides how we assess, test, verify, and assure AI systems.
                </p>

                <a
                  href="/documents/THiNKAI-Framework.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2A084E] transition hover:bg-violet-100"
                >
                  <FileText size={14} />
                  View Policy
                  <ArrowUpRight size={14} />
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AIResponsibilityPolicy;