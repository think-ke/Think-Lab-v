import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Video,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const MEETING_URL = "https://meet.google.com/rph-mtwa-kys";
const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;
export default function WebinarPopup() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Registration state
  const [step, setStep] = useState<"register" | "success">("register");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsOpen(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/webinar/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email }),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      setStep("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center
            overflow-y-auto bg-[#100820]/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="webinar-title"
            className="relative my-auto w-full max-w-2xl overflow-hidden
              rounded-2xl border border-white/60 bg-[#FBF8F4]
              text-[#171653] shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20
                h-64 w-64 rounded-full bg-purple-300/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16
                h-56 w-56 rounded-full bg-fuchsia-200/40 blur-3xl"
            />

            {/* Header */}
            <div className="relative flex items-center justify-between
              border-b border-purple-100 px-5 py-4 sm:px-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase
                  tracking-[0.2em] text-purple-700">
                  THiNK LAB
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Webinar Announcement
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close webinar announcement"
                className="flex h-10 w-10 items-center justify-center
                  rounded-full text-slate-600 transition
                  hover:bg-purple-100 hover:text-purple-900
                  focus-visible:outline-2 focus-visible:outline-purple-600"
              >
                <X size={21} />
              </button>
            </div>

            {/* Main content */}
            <div className="relative grid gap-6 p-5 sm:p-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <span className="mb-4 inline-flex w-fit items-center gap-2
                  rounded-full bg-purple-100 px-3 py-1.5 text-[10px]
                  font-bold uppercase tracking-wider text-purple-800">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  JOIN US
                </span>

                <h2
                  id="webinar-title"
                  className="text-3xl font-extrabold leading-[1.08]
                    tracking-tight sm:text-4xl"
                >
                  Is the Future of Africa in{" "}
                  <span className="bg-gradient-to-r from-purple-700
                    to-fuchsia-500 bg-clip-text text-transparent">
                    Regional Standards?
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Harmonizing cross-border technology policies for a more
                  competitive and inclusive Africa.
                </p>

                <div className="mt-5 flex items-start gap-3">
                  <CalendarDays
                    className="mt-0.5 shrink-0 text-purple-700"
                    size={23}
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase
                      tracking-wider text-purple-700">
                      Date
                    </p>
                    <p className="mt-1 font-bold text-[#171653]">
                      14 October 2026
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <Clock3
                    className="mt-0.5 shrink-0 text-purple-700"
                    size={23}
                  />
                  <div>
                    <p className="font-bold text-[#171653]">
                      3:00 PM – 4:00 PM EAT
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      2:00 PM CAT · 1:00 PM WAT
                      <br />
                      12:00 PM GMT
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Topics & Registration */}
              <div className="flex flex-col justify-center rounded-xl
                bg-[#2A084E] p-5 text-white sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em]
                  text-purple-200">
                  Key topics
                </p>

                <ul className="mt-4 space-y-4 text-sm leading-5">
                  <li className="flex gap-3">
                    <span className="text-fuchsia-300">✓</span>
                    Emerging Digital Public Infrastructure
                  </li>
                  <li className="flex gap-3">
                    <span className="text-fuchsia-300">✓</span>
                    Harmonizing cross-border technology policies
                  </li>
                  <li className="flex gap-3">
                    <span className="text-fuchsia-300">✓</span>
                    Leveraging technology for competitive advantage
                  </li>
                </ul>

                <div className="my-6 h-px bg-white/15" />

                {/* Registration Form / Success State */}
                {step === "register" ? (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <p className="text-xs leading-5 text-purple-200">
                      Register to get the meeting link.
                    </p>
                    
                    <div>
                      <label htmlFor="fullName" className="sr-only">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-purple-200/70 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="sr-only">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-purple-200/70 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-red-300">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 inline-flex w-full min-h-12 items-center
                        justify-center gap-2 rounded-full bg-white px-5
                        py-3 text-sm font-bold text-[#2A084E]
                        transition hover:bg-purple-100
                        focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-white disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Registering...
                        </>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center text-center space-y-4">
                    <CheckCircle2 size={32} className="text-green-400" />
                    <p className="text-sm font-bold text-white">
                      You're registered!
                    </p>
                    <p className="text-xs text-purple-200">
                      Use the link below to join the webinar at the scheduled time.
                    </p>

                    <a
                      href={MEETING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-full min-h-12 items-center
                        justify-center gap-2 rounded-full bg-white px-5
                        py-3 text-sm font-bold text-[#2A084E]
                        transition hover:bg-purple-100
                        focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-white"
                    >
                      <Video size={18} />
                      Join the Webinar
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="relative border-t border-purple-100 px-5
              py-4 text-center sm:px-8">
              <p className="text-xs text-slate-500">
                Not ready yet? Close this window to explore THiNK Lab.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}