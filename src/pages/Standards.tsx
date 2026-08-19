import { useMemo, useState } from "react";
import Footer from "../components/home/Footer";
import {
  Search,
  SlidersHorizontal,
  X,
  Globe2,
  MapPin,
  Landmark,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";

type StandardCategory = "International" | "Africa Regional" | "Kenya Local";

interface Standard {
  number: number;
  standard: string;
  where: StandardCategory;
  title: string;
  description: string;
}

const standards: Standard[] = [
  {
    number: 1,
    standard: "ISO/IEC 42001",
    where: "International",
    title: "Artificial Intelligence Management System (AIMS)",
    description:
      "First international AI management system standard. Provides a framework for establishing, implementing, maintaining, and continually improving an AI management system, covering responsible governance, risk management, lifecycle processes, and continual improvement.",
  },
  {
    number: 2,
    standard: "ISO/IEC 23894",
    where: "International",
    title: "AI Risk Management Guidelines",
    description:
      "Provides guidance on risk identification, assessment, and control for AI systems throughout their entire lifecycle, for organisations that develop, produce, deploy, or use AI products.",
  },
  {
    number: 3,
    standard: "ISO/IEC 27001",
    where: "International",
    title: "Information Security Management System (ISMS)",
    description:
      "Specifies requirements for establishing, implementing, maintaining, and continually improving an ISMS, covering information security, cybersecurity, and privacy protection.",
  },
  {
    number: 4,
    standard: "ISO/IEC 25010",
    where: "International",
    title: "Systems and Software Quality Model (SQuaRE)",
    description:
      "Defines a product quality model for ICT and software products, comprising eight quality characteristics and their sub-characteristics: functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability.",
  },
  {
    number: 5,
    standard: "ISO/IEC 25059",
    where: "International",
    title: "Quality Model for AI Systems",
    description:
      "An AI-specific extension of ISO/IEC 25010, providing a dedicated quality model for AI systems, with consistent terminology for specifying, measuring, and evaluating quality.",
  },
  {
    number: 6,
    standard: "ISO/IEC/IEEE 29119",
    where: "International",
    title: "Software Testing Standards Suite",
    description:
      "Internationally recognised set of standards for software testing, applicable to any organisation performing any form of software testing, including keyword-driven testing.",
  },
  {
    number: 7,
    standard: "ISO 9001",
    where: "International",
    title: "Quality Management System (QMS)",
    description:
      "The most widely used QMS standard globally, specifying requirements for consistently providing products and services that meet customer and regulatory requirements.",
  },
  {
    number: 8,
    standard: "ISO/IEC TS 4213",
    where: "International",
    title: "Assessment of Classification Performance of ML Systems",
    description:
      "Technical specification that defines measurement methods for classification performance of machine learning models, systems, and algorithms.",
  },
  {
    number: 9,
    standard: "ISO/IEC TR 24028",
    where: "International",
    title: "Overview of Trustworthiness in AI",
    description:
      "Technical report that surveys trustworthiness topics for AI systems, including transparency, explainability, controllability, robustness, safety, privacy, fairness, and accountability.",
  },
  {
    number: 10,
    standard: "ISO/IEC 22989",
    where: "International",
    title: "AI Concepts and Terminology",
    description:
      "Establishes a common terminology for AI and describes key AI concepts, facilitating communication among stakeholders and supporting other standards.",
  },
  {
    number: 11,
    standard: "ISO/IEC 38507",
    where: "International",
    title: "Governance of AI for Organisations",
    description:
      "Provides guidance for governance bodies, including boards and executives, on the governance of AI use within organisations, ensuring effective, efficient, and acceptable use.",
  },
  {
    number: 12,
    standard: "ISO/IEC 5338",
    where: "International",
    title: "AI System Lifecycle Processes",
    description:
      "Specifies the lifecycle processes for AI systems, covering development, operation, and maintenance.",
  },
  {
    number: 13,
    standard: "ISO/IEC 5339",
    where: "International",
    title: "Application Guidelines for AI",
    description:
      "Provides guidance on the application of AI systems in various domains.",
  },
  {
    number: 14,
    standard: "NIST AI RMF",
    where: "International",
    title: "AI Risk Management Framework",
    description:
      "A U.S.-issued framework that offers a structured approach to managing risks associated with AI systems.",
  },
  {
    number: 15,
    standard: "ISO/IEC 42001 (adopted)",
    where: "Africa Regional",
    title: "AI Management System",
    description:
      "ISO/IEC 42001 is increasingly being adopted across Africa as a framework for AI governance and responsible AI management. It provides organisations with a structured approach to managing AI-related risks and opportunities.",
  },
  {
    number: 16,
    standard: "ISO/IEC 27001 (adopted)",
    where: "Africa Regional",
    title: "Information Security Management",
    description:
      "Organisations across Africa widely adopt ISO/IEC 27001 to establish information security management systems and strengthen their cybersecurity and information security posture.",
  },
  {
    number: 17,
    standard: "African Union AI Governance Framework",
    where: "Africa Regional",
    title: "AI Governance",
    description:
      "The African Union is working towards an AI governance approach that considers African cultural, social, economic, and developmental contexts while drawing on international AI governance principles and standards.",
  },
  {
    number: 18,
    standard: "KS 3007:2025",
    where: "Kenya Local",
    title:
      "Information Technology – Artificial Intelligence – Code of Practice for AI Applications",
    description:
      "Kenya Bureau of Standards national AI standard. Provides systematic guidance and norms for the development, provision, and use of AI applications, covering stages from project planning through implementation.",
  },
  {
    number: 19,
    standard: "KS ISO/IEC 42001:2023",
    where: "Kenya Local",
    title: "Information Technology – Artificial Intelligence – Management System",
    description:
      "Kenya's national adoption of ISO/IEC 42001, providing a framework for establishing and continually improving an Artificial Intelligence Management System.",
  },
  {
    number: 20,
    standard: "KS ISO/IEC 5339",
    where: "Kenya Local",
    title: "Information Technology – Artificial Intelligence – Application Guidelines",
    description:
      "Kenya's national adoption of ISO/IEC 5339, providing guidance for the responsible application of AI systems across different domains and use cases.",
  },
  {
    number: 21,
    standard: "KS ISO/IEC 5338:2023",
    where: "Kenya Local",
    title:
      "Information Technology – Artificial Intelligence – AI System Lifecycle Processes",
    description:
      "Kenya's national adoption of ISO/IEC 5338, addressing lifecycle processes associated with the development, operation, and maintenance of AI systems.",
  },
  {
    number: 22,
    standard: "KS ISO 9001",
    where: "Kenya Local",
    title: "Quality Management System",
    description:
      "Kenya's national adoption of ISO 9001, providing requirements for establishing and continually improving a quality management system.",
  },
  {
    number: 23,
    standard: "DPA 2019",
    where: "Kenya Local",
    title: "Data Protection Act, 2019",
    description:
      "Kenya's principal personal data protection law. It regulates the processing of personal data, establishes the Office of the Data Protection Commissioner, and establishes obligations for organisations processing personal information.",
  },
  {
    number: 24,
    standard: "Kenya National AI Strategy",
    where: "Kenya Local",
    title: "National AI Strategy",
    description:
      "Kenya is developing a national AI strategy intended to provide strategic direction for AI development and adoption, while considering international AI governance standards and Kenya's national priorities.",
  },
];

const categoryStyles: Record<
  StandardCategory,
  {
    icon: typeof Globe2;
    badge: string;
    iconBg: string;
    line: string;
  }
> = {
  International: {
    icon: Globe2,
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    iconBg: "bg-violet-100 text-violet-700",
    line: "bg-violet-500",
  },
  "Africa Regional": {
    icon: Landmark,
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-100 text-amber-700",
    line: "bg-amber-500",
  },
  "Kenya Local": {
    icon: MapPin,
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-700",
    line: "bg-emerald-500",
  },
};

const categories: Array<"All" | StandardCategory> = [
  "All",
  "International",
  "Africa Regional",
  "Kenya Local",
];

const Standards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<"All" | StandardCategory>("All");

  const filteredStandards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return standards.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.where === activeCategory;

      const matchesSearch =
        !query ||
        item.standard.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.where.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <div className="min-h-screen bg-[#F5F6FC] text-slate-700">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#21053F] via-[#42106D] to-[#7139A0] pt-32 pb-20 text-white md:pt-36 md:pb-24">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full border-[18px] border-violet-300/5" />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border-[45px] border-fuchsia-300/10" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
              <BookOpen
                size={30}
                strokeWidth={1.5}
                className="text-violet-200"
              />
            </div>

            <span className="mt-7 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-violet-100 backdrop-blur-md">
              THiNK LAB Standards Hub
            </span>

            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Standards that shape
              <span className="block bg-gradient-to-r from-violet-200 via-fuchsia-200 to-pink-200 bg-clip-text text-transparent">
                trustworthy technology.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-violet-100/85 md:text-lg">
              Explore the international, African, and Kenyan standards,
              frameworks, and regulatory instruments that guide AI governance,
              cybersecurity, data protection, software quality, and digital
              infrastructure.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative">
              <Search
                size={21}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search standards, frameworks, titles, or topics..."
                className="h-16 w-full rounded-2xl border border-white/20 bg-white px-14 pr-12 text-sm text-slate-800 shadow-2xl outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-300/20"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          STANDARDS HUB
      ========================================================= */}
      <main className="py-14 md:py-20">
        <Container>
          {/* Intro */}
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                <SlidersHorizontal size={15} />
                Standards Directory
              </div>

              <h2 className="font-heading mt-3 text-3xl font-bold text-[#101936] md:text-4xl">
                Explore the standards landscape
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Search and filter our reference directory to find the
                standards and frameworks relevant to your organisation,
                technology, or assessment requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Showing
              </p>

              <p className="mt-1 text-2xl font-bold text-[#2A084E]">
                {filteredStandards.length}
                <span className="ml-1 text-sm font-medium text-slate-500">
                  of {standards.length} standards
                </span>
              </p>
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                        active
                          ? "bg-[#2A084E] text-white shadow-md"
                          : "bg-slate-50 text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {(searchQuery || activeCategory !== "All") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                >
                  <X size={15} />
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Active filter information */}
          {(searchQuery || activeCategory !== "All") && (
            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span>Filtering by:</span>

              {activeCategory !== "All" && (
                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  {activeCategory}
                </span>
              )}

              {searchQuery && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  "{searchQuery}"
                </span>
              )}
            </div>
          )}

          {/* Standards grid */}
          {filteredStandards.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredStandards.map((item) => {
                const style = categoryStyles[item.where];
                const Icon = style.icon;

                return (
                  <article
                    key={`${item.number}-${item.standard}`}
                    className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Accent line */}
                    <div className={`h-1.5 w-full ${style.line}`} />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${style.iconBg}`}
                        >
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <span className="text-4xl font-black tracking-tighter text-slate-100 transition-colors group-hover:text-violet-100">
                          {String(item.number).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Region */}
                      <div className="mt-5">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${style.badge}`}
                        >
                          {item.where}
                        </span>
                      </div>

                      {/* Standard number */}
                      <p className="mt-5 text-sm font-bold text-violet-600">
                        {item.standard}
                      </p>

                      {/* Title */}
                      <h3 className="font-heading mt-2 text-xl font-bold leading-snug text-[#101936]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                          <FileCheck2 size={15} />
                          Reference Standard
                        </div>

                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-600"
                          aria-label={`View ${item.standard}`}
                        >
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Empty state */
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Search size={25} />
              </div>

              <h3 className="font-heading mt-5 text-xl font-bold text-[#101936]">
                No standards found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We couldn't find any standards matching your search and
                selected filters. Try a different keyword or clear the
                filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-[#2A084E] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#42106D]"
              >
                Clear search and filters
              </button>
            </div>
          )}
        </Container>
      </main>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#21053F] via-[#42106D] to-[#7139A0] py-20 text-white">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full border-[30px] border-white/5" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full border-[35px] border-fuchsia-300/10" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
              <ShieldCheck
                size={30}
                strokeWidth={1.5}
                className="text-violet-200"
              />
            </div>

            <h2 className="font-heading mt-6 text-3xl font-bold md:text-4xl">
              Standards are the starting point.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-violet-100/80 md:text-base">
              Understanding which standards apply is only the first step. THiNK
              LAB helps organisations translate standards and frameworks into
              practical assessments, controls, evidence, and improvement
              roadmaps.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2A084E] shadow-xl transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Talk to THiNK LAB
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Standards;