import { motion } from "framer-motion";
import { ShieldCheck, Activity, Cpu, Gauge } from "lucide-react";

const DashboardMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-violet-300/40 via-fuchsia-300/30 to-violet-300/40 blur-2xl" />

      {/* Card shell */}
      <div className="relative overflow-hidden rounded-[28px] border border-violet-100 bg-white/90 p-4 shadow-[0_20px_50px_-20px_rgba(80,40,120,0.35)] backdrop-blur-md md:p-5">
        {/* Top accent */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400" />

        <div className="overflow-hidden rounded-2xl border border-violet-100 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-violet-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700">
                <ShieldCheck size={12} />
              </span>

              <div>
                <p className="text-[10px] font-bold text-[#2A084E]">
                  CAP Dashboard
                </p>
                <p className="text-[9px] text-slate-400">Live assessment</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <span className="text-[9px] font-semibold text-slate-500">
                Active
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-12 border-r border-violet-100 bg-violet-50/40 p-2 space-y-2">
              <span className="flex h-7 w-full items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                <Activity size={12} />
              </span>
              <span className="flex h-7 w-full items-center justify-center rounded-md bg-white text-violet-300">
                <Cpu size={12} />
              </span>
              <span className="flex h-7 w-full items-center justify-center rounded-md bg-white text-violet-300">
                <Gauge size={12} />
              </span>
            </div>

            {/* Main panel */}
            <div className="flex-1 p-4">
              {/* Top metric card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3A1160] via-[#4B1C77] to-[#6B2C9C] p-4">
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-violet-200/80">
                      Conformity Score
                    </p>
                    <p className="mt-1 text-2xl font-black text-white">
                      94<span className="text-base text-violet-200">%</span>
                    </p>
                  </div>

                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Passed
                  </span>
                </div>

                {/* Radial gauge */}
                <div className="relative mt-3 flex items-center justify-center">
                  <svg viewBox="0 0 120 60" className="w-32">
                    <defs>
                      <linearGradient id="capGauge" x1="0" x2="1">
                        <stop offset="0%" stopColor="#c4b5fd" />
                        <stop offset="50%" stopColor="#f0abfc" />
                        <stop offset="100%" stopColor="#c4b5fd" />
                      </linearGradient>
                    </defs>

                    {/* Background arc */}
                    <path
                      d="M10 55 A 50 50 0 0 1 110 55"
                      fill="none"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />

                    {/* Foreground arc */}
                    <motion.path
                      d="M10 55 A 50 50 0 0 1 110 55"
                      fill="none"
                      stroke="url(#capGauge)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="157"
                      initial={{ strokeDashoffset: 157 }}
                      whileInView={{ strokeDashoffset: 25 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                    />
                  </svg>
                </div>
              </div>

              {/* Mini metric row */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { label: "Safety", value: "96%" },
                  { label: "Security", value: "91%" },
                  { label: "Gov.", value: "89%" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-violet-100 bg-white p-2"
                  >
                    <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-0.5 text-[11px] font-bold text-[#2A084E]">
                      {metric.value}
                    </p>
                    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-violet-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                        style={{ width: metric.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini activity row */}
              <div className="mt-3 flex items-center justify-between rounded-xl border border-violet-100 bg-violet-50/40 px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
                  <p className="text-[9px] font-semibold text-[#2A084E]">
                    Assessment running
                  </p>
                </div>
                <p className="text-[9px] text-slate-400">ETA 2d</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;