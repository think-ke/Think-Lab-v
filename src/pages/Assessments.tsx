import {
  ShieldCheck,
  BrainCircuit,
  Database,
  Bot,
  LockKeyhole,
  Cpu,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Layers3,
  ScanSearch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/home/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";

interface Assessment {
  number: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  category: string;
  accent: string;
  href: string;
  description: string;
  outcome: string;
  extra?: string;
}

const assessments: Assessment[] = [
  {
    number: "01",
    title: "AI Maturity Model (AI-MM)",
    icon: BrainCircuit,
    category: "Artificial Intelligence",
    accent: "violet",
    href: "https://cop.think.ke/media/blogs/the-real-ai-challenge-isnt-adoptionits-governance-kenyas-ai-maturity-model-aimm-is-the-answer",
    description:
      "The AI Maturity Model (AI-MM) assesses an organisation’s readiness and maturity in adopting, governing, and scaling artificial intelligence. It evaluates areas such as AI strategy, governance, data readiness, talent and skills, technology infrastructure, responsible AI, risk management, and organisational adoption.",
    outcome:
      "The assessment helps organisations understand their current maturity level, identify capability gaps, and develop a structured roadmap for progressing from initial AI experimentation to responsible and sustainable AI adoption.",
  },

  {
    number: "02",
    title: "AI Data Maturity Model",
    icon: Database,
    category: "Data & AI Readiness",
    accent: "cyan",
    href: "https://cop.think.ke/media/blogs",
    description:
      "Our AI Data Maturity Model assesses an organisation’s readiness and capability to manage, govern, and leverage data effectively for AI development and deployment. It evaluates areas such as data governance, data quality, data availability and accessibility, data architecture, metadata and lineage, privacy and security, data literacy, and the organisation’s ability to provide reliable data for AI models and applications.",
    outcome:
      "The assessment identifies gaps that may affect AI performance, trustworthiness, and scalability, and provides a roadmap for building the data capabilities required to support responsible, reliable, and scalable AI adoption.",
  },

  {
    number: "03",
    title: "AI Agents Security Assessment",
    icon: Bot,
    category: "AI Security",
    accent: "pink",
    href: "https://cop.think.ke/media/blogs/the-autonomous-agent-revolution-why-standards-ethics-and-governance-are-non-negotiable",
    description:
      "This assessment evaluates the security risks associated with AI agents that can perform tasks, interact with systems, access information, and make decisions with varying degrees of autonomy. The assessment examines areas such as agent identity and access controls, tool permissions, data access, prompt and instruction manipulation, authentication, logging, monitoring, and containment mechanisms.",
    outcome:
      "It helps organisations identify vulnerabilities and establish appropriate safeguards before deploying AI agents in operational environments.",
  },

  {
    number: "04",
    title: "Agentic AI Security Assessment",
    icon: ShieldCheck,
    category: "Agentic AI",
    accent: "indigo",
    href: "https://cop.think.ke/media/blogs",
    description:
      "The Agentic AI Security Assessment focuses on AI systems capable of planning, reasoning, taking actions, interacting with multiple systems, and operating with greater autonomy. It evaluates risks across the agentic AI lifecycle, including system architecture, autonomy and decision-making, human oversight, tool and API access, data protection, inter-agent communication, monitoring, and failure containment.",
    outcome:
      "The assessment helps organisations establish security and governance controls appropriate for increasingly autonomous AI environments.",
  },

  {
    number: "05",
    title: "CyberSecurity MM",
    icon: LockKeyhole,
    category: "Cybersecurity",
    accent: "orange",
    href: "https://cop.think.ke/media/blogs/when-ai-goes-rogue-the-new-reality-of-cybersecurity-threats",
    description:
      "Assesses the organisation's overall cybersecurity capabilities and maturity. It evaluates areas such as governance, risk management, asset management, identity and access management, vulnerability management, security operations, incident response, business continuity, and security awareness.",
    outcome:
      "The assessment provides a baseline of the organisation's cybersecurity posture, highlights critical gaps, and supports the development of a prioritised cybersecurity improvement roadmap.",
  },

  {
    number: "06",
    title: "Model Assessment",
    icon: Cpu,
    category: "AI / ML Models",
    accent: "emerald",
    href: "https://cop.think.ke/media/blogs/from-ai-applications-to-digital-public-infrastructure-how-reusable-platforms-can-become-edpi",
    description:
      "Evaluates the quality, performance, reliability, safety, security, and responsible use of AI/ML models. Depending on the model and use case, the assessment can examine accuracy, robustness, bias and fairness, explainability, data quality, privacy, security, hallucination or error rates, model drift, and performance against defined business requirements.",
    outcome:
      "The objective is to determine whether a model is fit for its intended purpose and whether appropriate controls are in place throughout its lifecycle.",
  },

  {
    number: "07",
    title: "DPI Assessment Framework",
    subtitle: "Digital Public Infrastructure",
    icon: Globe2,
    category: "Digital Public Infrastructure",
    accent: "blue",
    href: "https://cop.think.ke/media/blogs/how-to-evaluate-your-digital-public-infrastructure-dpi",
    description:
      "This assessment framework evaluates the maturity, readiness, inclusivity, security, and sustainability of digital public infrastructure (DPI) that supports the delivery of public and essential services at scale. It assesses critical components including digital identity, digital payments, data exchange, interoperability, digital registries, governance, cybersecurity, privacy, accessibility, and ecosystem participation.",
    outcome:
      "The framework enables organisations and public institutions to identify gaps and risks within their DPI ecosystem, evaluate levels of interoperability and trust, and define a practical roadmap towards secure, inclusive, interoperable, and citizen-centred infrastructure.",
    extra:
      "We applied this framework to evaluate the most suitable AgriStack DPI framework developed for the Government of Sri Lanka.",
  },
];

const accentStyles: Record<
  string,
  {
    icon: string;
    badge: string;
    line: string;
    number: string;
    glow: string;
  }
> = {
  violet: {
    icon: "bg-violet-100 text-violet-700",
    badge: "bg-violet-50 text-violet-700",
    line: "bg-violet-500",
    number: "text-violet-100",
    glow: "bg-violet-500/20",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    badge: "bg-cyan-50 text-cyan-700",
    line: "bg-cyan-500",
    number: "text-cyan-100",
    glow: "bg-cyan-500/20",
  },
  pink: {
    icon: "bg-pink-100 text-pink-700",
    badge: "bg-pink-50 text-pink-700",
    line: "bg-pink-500",
    number: "text-pink-100",
    glow: "bg-pink-500/20",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-700",
    badge: "bg-indigo-50 text-indigo-700",
    line: "bg-indigo-500",
    number: "text-indigo-100",
    glow: "bg-indigo-500/20",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    badge: "bg-orange-50 text-orange-700",
    line: "bg-orange-500",
    number: "text-orange-100",
    glow: "bg-orange-500/20",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    badge: "bg-emerald-50 text-emerald-700",
    line: "bg-emerald-500",
    number: "text-emerald-100",
    glow: "bg-emerald-500/20",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    badge: "bg-blue-50 text-blue-700",
    line: "bg-blue-500",
    number: "text-blue-100",
    glow: "bg-blue-500/20",
  },
};

const Assessments = () => {
  return (
    <div className="min-h-screen bg-[#F5F6FC] text-slate-700">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#21053F] via-[#42106D] to-[#7139A0] pt-28 pb-20 text-white md:pt-32 md:pb-24">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Large decorative rings */}
        <div className="absolute -left-40 top-16 h-[430px] w-[430px] rounded-full border-[2px] border-white/10" />
        <div className="absolute -left-28 top-28 h-[330px] w-[330px] rounded-full border-[24px] border-violet-300/5" />

        <div className="absolute -right-36 -top-32 h-[500px] w-[500px] rounded-full border-[55px] border-fuchsia-300/10" />
        <div className="absolute right-20 bottom-0 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-3xl" />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-violet-100 backdrop-blur-md">
                Baseline Assessments & Frameworks
              </span>

              <h1 className="font-heading mt-6 max-w-4xl text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
                How Would You Assess
                <span className="block bg-gradient-to-r from-violet-200 via-fuchsia-200 to-pink-200 bg-clip-text text-transparent">
                  Your Organisation?
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/90">
                Turn uncertainty into a clear path forward.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-violet-100/80 md:text-base">
                Our assessments help you see <em>where you stand</em>,
                <em> uncover what’s holding you back</em>, and{" "}
                <em>identify what it takes to move forward</em>—across AI,
                data, cybersecurity, AI security, models, and Digital Public
                Infrastructure.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                  Measure your Maturity.
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                  Close the gaps.
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                  Lead what’s next.
                </span>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* =========================================================
          QUICK OVERVIEW
      ========================================================= */}
      <section className="bg-[#F0F2FA] py-14 md:py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-violet-100 bg-white px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm">
              Assessment Portfolio
            </span>

            <h2 className="font-heading mt-4 text-3xl font-bold leading-tight text-[#101936] md:text-4xl">
              Frameworks for different technology challenges
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              From organisational maturity to AI security and digital public
              infrastructure, our assessment frameworks provide structured
              ways to understand capability, identify gaps, and plan the next
              stage of development.
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {assessments.map((assessment, index) => {
              const Icon = assessment.icon;
              const style = accentStyles[assessment.accent];

              return (
                <motion.a
                  key={assessment.number}
                  href={assessment.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
                >
                  <div
                    className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ${style.icon}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <p className="mt-3 text-[11px] font-semibold leading-4 text-[#101936]">
                    {assessment.title}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CAP FRAMEWORK
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
          >
            <div>
              <span className="inline-flex rounded-full bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-violet-700">
                Our Core Framework
              </span>

              <h2 className="font-heading mt-5 text-3xl font-bold leading-tight text-[#101936] md:text-4xl">
                Conformity Assessment Process
              </h2>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                CAP
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-violet-100 bg-[#F7F4FA] p-7 md:p-9">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-200/40 blur-2xl" />

              <div className="relative space-y-5 text-sm leading-7 text-slate-600 md:text-base">
                <p>
                  Conformity Assessment Process (CAP) is a framework for
                  evaluating AI systems to determine whether they are
                  trustworthy, safe, reliable, and fit for use by their
                  intended users.
                </p>

                <p>
                  The framework brings together structured testing,
                  documentation review, evidence-based evaluation, and
                  certification to assess an AI system against defined
                  trustworthiness and conformity requirements.
                </p>

                <p>
                  Through AI systems are systematically assessed, gaps and
                  risks are identified, and evidence of compliance is
                  documented before a certification decision is made.
                </p>

                <p>
                  The framework provides a consistent and transparent approach
                  for organizations to demonstrate that their AI systems have
                  been responsibly evaluated and meet established expectations
                  for trustworthy AI.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =========================================================
          ASSESSMENTS
      ========================================================= */}
      <section
        id="assessment-frameworks"
        className="bg-[#F5F6FC] py-16 md:py-24"
      >
        <Container>
          <div className="mb-14 max-w-2xl">
            <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-violet-700 shadow-sm">
              Explore the frameworks
            </span>

            <h2 className="font-heading mt-5 text-3xl font-bold text-[#101936] md:text-4xl">
              Assess. Understand. Improve.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Each framework provides a structured way to understand your
              current position, uncover risk and capability gaps, and define
              practical next steps.
            </p>
          </div>

          <div className="space-y-8">
            {assessments.map((assessment, index) => {
              const Icon = assessment.icon;
              const style = accentStyles[assessment.accent];
              const isReversed = index % 2 !== 0;

              return (
                <motion.a
                  href={assessment.href}
                  key={assessment.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55 }}
                  className="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
                >
                  <div
                    className={`grid lg:grid-cols-[0.38fr_0.62fr] ${isReversed ? "lg:grid-cols-[0.62fr_0.38fr]" : ""
                      }`}
                  >
                    {/* Visual panel */}
                    <div
                      className={`relative min-h-[260px] overflow-hidden p-7 md:p-9 ${isReversed ? "lg:order-2" : ""
                        }`}
                    >
                      <div
                        className={`absolute inset-0 ${assessment.accent === "violet"
                            ? "bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white"
                            : assessment.accent === "cyan"
                              ? "bg-gradient-to-br from-cyan-100 via-sky-50 to-white"
                              : assessment.accent === "pink"
                                ? "bg-gradient-to-br from-pink-100 via-rose-50 to-white"
                                : assessment.accent === "indigo"
                                  ? "bg-gradient-to-br from-indigo-100 via-violet-50 to-white"
                                  : assessment.accent === "orange"
                                    ? "bg-gradient-to-br from-orange-100 via-amber-50 to-white"
                                    : assessment.accent === "emerald"
                                      ? "bg-gradient-to-br from-emerald-100 via-teal-50 to-white"
                                      : "bg-gradient-to-br from-blue-100 via-sky-50 to-white"
                          }`}
                      />

                      <div
                        className={`absolute -right-20 -top-20 h-48 w-48 rounded-full ${style.glow} blur-2xl`}
                      />

                      <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full border-[20px] border-white/70" />

                      <div className="relative flex h-full min-h-[220px] flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon} shadow-sm`}
                          >
                            <Icon size={27} strokeWidth={1.7} />
                          </div>

                          <span
                            className={`text-6xl font-black tracking-tighter ${style.number}`}
                          >
                            {assessment.number}
                          </span>
                        </div>

                        <div>
                          <p
                            className={`text-xs font-bold uppercase tracking-[0.15em] ${style.badge
                              .replace("bg-", "text-")
                              .replace("-50", "-600")}`}
                          >
                            {assessment.category}
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <Layers3 size={15} className="text-slate-400" />

                            <span className="text-xs font-medium text-slate-500">
                              Assessment Framework
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 md:p-9">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="font-heading text-2xl font-bold leading-tight text-[#101936] md:text-3xl">
                            {assessment.title}
                          </h3>

                          {assessment.subtitle && (
                            <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-violet-600">
                              {assessment.subtitle}
                            </p>
                          )}
                        </div>

                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-violet-300 group-hover:bg-violet-50 group-hover:text-violet-600">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <p className="text-sm leading-7 text-slate-600 md:text-[15px]">
                          {assessment.description}
                        </p>

                        <div className="rounded-2xl bg-[#F7F4FA] p-5">
                          <div className="flex gap-3">
                            <CheckCircle2
                              size={19}
                              className={`mt-0.5 flex-shrink-0 ${style.badge
                                .replace("bg-", "text-")
                                .replace("-50", "-600")}`}
                            />

                            <div>
                              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                                Assessment outcome
                              </p>

                              <p className="text-sm leading-6 text-slate-600">
                                {assessment.outcome}
                              </p>
                            </div>
                          </div>
                        </div>

                        {assessment.extra && (
                          <div className="rounded-xl border-l-4 border-violet-400 bg-violet-50/70 p-4">
                            <p className="text-sm italic leading-6 text-slate-600">
                              {assessment.extra}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#21053F] via-[#42106D] to-[#7139A0] py-20 text-white md:py-24">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full border-[30px] border-white/5" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full border-[35px] border-fuchsia-300/10" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
              <ScanSearch
                size={30}
                strokeWidth={1.5}
                className="text-violet-200"
              />
            </div>

            <h2 className="font-heading mt-6 text-3xl font-bold md:text-4xl">
              Know where you stand.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-violet-100/80 md:text-base">
              Use structured assessment to understand your current maturity,
              identify gaps, and build a practical path towards safer,
              stronger and more trustworthy technology.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-semibold backdrop-blur-md">
                Assess
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-semibold backdrop-blur-md">
                Identify
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-semibold backdrop-blur-md">
                Improve
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-semibold backdrop-blur-md">
                Build Trust
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Assessments;