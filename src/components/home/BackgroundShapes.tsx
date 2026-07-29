const BackgroundShapes = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ===================== */}
      {/* Background Gradient */}
      {/* ===================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0416] via-[#43166B] to-[#7F4A9D]" />

      {/* ===================== */}
      {/* Soft Glow Left */}
      {/* ===================== */}

      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]" />

      {/* ===================== */}
      {/* Soft Glow Right */}
      {/* ===================== */}

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-[150px]" />

      {/* ===================== */}
      {/* Large Dashed Ring */}
      {/* ===================== */}

      <div className="absolute left-[8%] top-[18%] h-[320px] w-[320px] rounded-full border-[18px] border-dashed border-violet-400/25" />

      {/* ===================== */}
      {/* Top Circle */}
      {/* ===================== */}

      <div className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-violet-400/30" />

      {/* ===================== */}
      {/* Top Right Striped Circle */}
      {/* ===================== */}

      <div className="absolute right-24 top-20 h-36 w-36 rounded-full opacity-30">
        <div
          className="h-full w-full rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(167,139,250,.8) 0px, rgba(167,139,250,.8) 2px, transparent 2px, transparent 6px)",
          }}
        />
      </div>

      {/* ===================== */}
      {/* Middle Right Striped Circle */}
      {/* ===================== */}

      <div className="absolute right-10 top-72 h-40 w-40 rounded-full opacity-30">
        <div
          className="h-full w-full rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(167,139,250,.8) 0px, rgba(167,139,250,.8) 2px, transparent 2px, transparent 6px)",
          }}
        />
      </div>

      {/* ===================== */}
      {/* Hollow Ring */}
      {/* ===================== */}

      <div className="absolute bottom-10 right-40 h-28 w-28 rounded-full border-[12px] border-violet-400/25" />

      {/* ===================== */}
      {/* Floating Dot Pattern */}
      {/* ===================== */}

      <div className="absolute left-[58%] top-[34%] grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-violet-300/40"
          />
        ))}
      </div>

      {/* ===================== */}
      {/* Decorative Top Left Lines */}
      {/* ===================== */}

      <div className="absolute left-0 top-8 rotate-[-12deg] opacity-40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="mb-3 h-[3px] w-28 rounded-full bg-violet-400"
          />
        ))}
      </div>

      {/* ===================== */}
      {/* Small Floating Circles */}
      {/* ===================== */}

      <div className="absolute left-40 top-32 h-5 w-5 rounded-full bg-violet-300/50" />

      <div className="absolute right-96 top-56 h-3 w-3 rounded-full bg-violet-300/60" />

      <div className="absolute right-72 bottom-32 h-4 w-4 rounded-full bg-violet-300/50" />
    </div>
  );
};

export default BackgroundShapes;