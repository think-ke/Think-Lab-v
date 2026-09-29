import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =====================================================
   TYPES
===================================================== */
type CircleId = "security" | "compliance" | "governance";

interface CircleDef {
  id: CircleId;
  cx: number;
  cy: number;
  color: string;
}

interface RegionDef {
  id: string;
  title: string;
  lines: string[];
  anchor: { x: number; y: number };
  hit: number;
  color: string;
  include: CircleId[];
  kicker: string;
  body: string;
  labelClass: string;
  labelFill: string;
  labelOpacity: number;
  lineHeight: number;
}

/* =====================================================
   GEOMETRY — viewBox 760 x 650
===================================================== */
const VIEW_W = 760;
const VIEW_H = 650;
const R = 170;

const CIRCLES: CircleDef[] = [
  { id: "security", cx: 289, cy: 247.5, color: "#6366f1" },   // indigo
  { id: "compliance", cx: 471, cy: 247.5, color: "#d946ef" }, // fuchsia
  { id: "governance", cx: 380, cy: 405, color: "#8b5cf6" },   // violet
];

/* =====================================================
   REGIONS — light theme (dark text on light bg)
===================================================== */
const REGIONS: RegionDef[] = [
  /* ---------- single circles ---------- */
  {
    id: "security",
    title: "AI Security",
    lines: ["AI Security"],
    anchor: { x: 212, y: 158 },
    hit: 64,
    color: "#6366f1",
    include: ["security"],
    kicker: "Protection, not paperwork",
    body:
      "We probe models, data and infrastructure for prompt injection, poisoning and model theft — then harden them by design.",
    labelClass: "text-[22px] font-bold sm:text-[17px] md:text-[15px]",
    labelFill: "#312e81",
    labelOpacity: 0.9,
    lineHeight: 18,
  },
  {
    id: "compliance",
    title: "AI Compliance",
    lines: ["AI Compliance"],
    anchor: { x: 548, y: 158 },
    hit: 64,
    color: "#d946ef",
    include: ["compliance"],
    kicker: "Proof, not promises",
    body:
      "We map your AI systems to ISO/IEC 42001, NIST AI RMF, KS 3007 and the Data Protection Act — with audit-ready evidence.",
    labelClass: "text-[22px] font-bold sm:text-[17px] md:text-[15px]",
    labelFill: "#701a75",
    labelOpacity: 0.9,
    lineHeight: 18,
  },
  {
    id: "governance",
    title: "AI Governance",
    lines: ["AI Governance"],
    anchor: { x: 380, y: 528 },
    hit: 64,
    color: "#8b5cf6",
    include: ["governance"],
    kicker: "Direction, not control",
    body:
      "We help you set strategy, assign accountability and oversee performance and risk across the whole AI lifecycle.",
    labelClass: "text-[22px] font-bold sm:text-[17px] md:text-[15px]",
    labelFill: "#4c1d95",
    labelOpacity: 0.9,
    lineHeight: 18,
  },

  /* ---------- pairwise overlaps ---------- */
  {
    id: "security-compliance",
    title: "Security & Compliance",
    lines: ["Security &", "Compliance"],
    anchor: { x: 380, y: 150 },
    hit: 54,
    color: "#a855f7",
    include: ["security", "compliance"],
    kicker: "Overlap",
    body:
      "Controls that prove compliance — evidence that your safeguards actually work, not just that they exist.",
    labelClass: "text-[13px] font-semibold sm:text-[11px]",
    labelFill: "#6d28d9",
    labelOpacity: 0.75,
    lineHeight: 12,
  },
  {
    id: "security-governance",
    title: "Security & Governance",
    lines: ["Security &", "Governance"],
    anchor: { x: 252, y: 356 },
    hit: 54,
    color: "#7c3aed",
    include: ["security", "governance"],
    kicker: "Overlap",
    body:
      "Risk-aware oversight — your security posture wired directly into governance and decision-making.",
    labelClass: "text-[13px] font-semibold sm:text-[11px]",
    labelFill: "#5b21b6",
    labelOpacity: 0.75,
    lineHeight: 12,
  },
  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    lines: ["Governance &", "Compliance"],
    anchor: { x: 508, y: 356 },
    hit: 54,
    color: "#c026d3",
    include: ["compliance", "governance"],
    kicker: "Overlap",
    body:
      "Policies mapped to regulation, so every governance decision stays defensible and auditable.",
    labelClass: "text-[13px] font-semibold sm:text-[11px]",
    labelFill: "#86198f",
    labelOpacity: 0.75,
    lineHeight: 12,
  },

  /* ---------- centre (triple) ---------- */
  {
    id: "center",
    title: "Responsible & Trusted AI",
    lines: ["Responsible &", "Trusted AI"],
    anchor: { x: 380, y: 290 },
    hit: 48,
    color: "#7c3aed",
    include: ["security", "compliance", "governance"],
    kicker: "The intersection",
    body:
      "Safe, secure and accountable AI — aligned to your business goals, regulation and public trust.",
    labelClass: "text-[16px] font-bold sm:text-[13px] md:text-[12px]",
    labelFill: "#1e1b4b",
    labelOpacity: 0.95,
    lineHeight: 14,
  },
];

/* =====================================================
   COMPONENT
===================================================== */
const VennDiagram = ({ className = "" }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const activeRegion = REGIONS.find((r) => r.id === active) ?? null;

  const circleActive = (id: CircleId): boolean =>
    !!activeRegion && activeRegion.include.includes(id);

  return (
    <div
      className={`relative mx-auto w-full max-w-[720px] select-none ${className}`}
    >
      <div className="relative aspect-[760/650] w-full">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="h-full w-full overflow-visible"
          role="img"
          aria-label="Venn diagram of AI Security, AI Compliance and AI Governance"
        >
          <defs>
            {REGIONS.filter((r) => r.id !== "center").map((region) => (
              <mask
                key={region.id}
                id={`venn-mask-${region.id}`}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width={VIEW_W}
                height={VIEW_H}
              >
                <rect width={VIEW_W} height={VIEW_H} fill="#000" />
                {CIRCLES.map((c) => (
                  <circle
                    key={c.id}
                    cx={c.cx}
                    cy={c.cy}
                    r={R}
                    fill={region.include.includes(c.id) ? "#fff" : "#000"}
                  />
                ))}
              </mask>
            ))}

            <clipPath id="venn-clip-security">
              <circle cx={CIRCLES[0].cx} cy={CIRCLES[0].cy} r={R} />
            </clipPath>
            <clipPath id="venn-clip-compliance">
              <circle cx={CIRCLES[1].cx} cy={CIRCLES[1].cy} r={R} />
            </clipPath>
          </defs>

          {/* region fills */}
          {REGIONS.filter((r) => r.id !== "center").map((region) => (
            <rect
              key={region.id}
              x="0"
              y="0"
              width={VIEW_W}
              height={VIEW_H}
              fill={region.color}
              mask={`url(#venn-mask-${region.id})`}
              pointerEvents="none"
              className="transition-opacity duration-300 ease-out"
              style={{ opacity: active === region.id ? 0.16 : 0 }}
            />
          ))}

          {/* centre region (triple intersection) */}
          <g clipPath="url(#venn-clip-security)" pointerEvents="none">
            <g clipPath="url(#venn-clip-compliance)">
              <circle
                cx={CIRCLES[2].cx}
                cy={CIRCLES[2].cy}
                r={R}
                fill="#a855f7"
                className="transition-opacity duration-300 ease-out"
                style={{ opacity: active === "center" ? 0.18 : 0 }}
              />
            </g>
          </g>

          {/* circle outlines */}
          {CIRCLES.map((c) => (
            <circle
              key={c.id}
              cx={c.cx}
              cy={c.cy}
              r={R}
              fill="none"
              stroke={c.color}
              strokeWidth="1.5"
              pointerEvents="none"
              className="transition-opacity duration-300"
              style={{ opacity: circleActive(c.id) ? 1 : 0.55 }}
            />
          ))}

          {/* labels */}
          {REGIONS.map((region) => {
            const n = region.lines.length;
            const firstY =
              region.anchor.y - ((n - 1) * region.lineHeight) / 2;

            return (
              <text
                key={region.id}
                x={region.anchor.x}
                y={firstY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={region.labelFill}
                className={`${region.labelClass} pointer-events-none transition-opacity duration-300`}
                style={{
                  opacity: active === region.id ? 1 : region.labelOpacity,
                }}
              >
                {region.lines.map((line, i) => (
                  <tspan
                    key={line}
                    x={region.anchor.x}
                    dy={i === 0 ? 0 : region.lineHeight}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            );
          })}

          {/* hit areas */}
          {REGIONS.map((region) => (
            <circle
              key={region.id}
              cx={region.anchor.x}
              cy={region.anchor.y}
              r={region.hit}
              fill="transparent"
              style={{ pointerEvents: "all", cursor: "pointer" }}
              onMouseEnter={() => setActive(region.id)}
              onMouseLeave={() =>
                setActive((current) =>
                  current === region.id ? null : current
                )
              }
              onClick={() =>
                setActive((current) =>
                  current === region.id ? null : region.id
                )
              }
            />
          ))}
        </svg>

        {/* popups */}
        <div className="pointer-events-none absolute inset-0">
          <AnimatePresence>
            {activeRegion && (
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.94, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute z-20 w-[170px] rounded-xl border bg-white p-3 text-left shadow-xl sm:w-[220px]"
                style={{
                  left: `${(activeRegion.anchor.x / VIEW_W) * 100}%`,
                  top: `${(activeRegion.anchor.y / VIEW_H) * 100}%`,
                  borderColor: `${activeRegion.color}55`,
                  boxShadow: `0 18px 40px -18px ${activeRegion.color}`,
                }}
              >
                <p
                  className="text-[8px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: activeRegion.color }}
                >
                  {activeRegion.kicker}
                </p>

                <p className="mt-0.5 text-[11px] font-bold text-slate-900 sm:text-xs">
                  {activeRegion.title}
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-600">
                  {activeRegion.body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;