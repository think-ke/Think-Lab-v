import { useState } from "react";
import { Send, CheckCircle2, XCircle, Sparkles, ShieldCheck, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import Logo from "../../assets/images/TH_Logo_FA_LAB.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const assessments = formData.getAll("assessment") as string[];

    if (assessments.length === 0) {
      setError("Please select at least one assessment.");
      setLoading(false);
      return;
    }

    const payload = {
      fullName: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      assessments,
    };

    try {
      const response = await fetch(
        `https://websites-labcommbackend-v8most-adf254-144-91-120-217.sslip.io/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed.");
      }

      setSuccess(
        "Thank you. Your registration has been received. We'll be in touch shortly."
      );
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#F1E7FA] via-[#F6EFFC] to-[#FBF8FE] py-10 md:py-12"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-16 h-[320px] w-[320px] rounded-full bg-violet-300/30 blur-[130px]" />
        <div className="absolute -right-32 bottom-10 h-[300px] w-[300px] rounded-full bg-fuchsia-300/25 blur-[130px]" />

        <div className="absolute -left-24 top-12 h-48 w-48 rounded-full border-[12px] border-dashed border-violet-300/30" />
        <div className="absolute -right-20 bottom-6 h-56 w-56 rounded-full border-[16px] border-violet-300/20" />

        <div className="absolute inset-0 opacity-[0.28] [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="absolute left-[12%] top-[26%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/60" />
        <div className="absolute right-[16%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400/60" />
        <div className="absolute bottom-[22%] left-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400/50" />
        <div className="absolute bottom-[26%] right-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300/60" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-sm">
            <Sparkles size={10} className="text-fuchsia-500" />
            Register
          </span>

          <h2 className="font-heading mt-3 text-2xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#2A084E] md:text-3xl">
            THiNK LAB Registration
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-6 text-slate-600 md:text-sm">
            Register your interest and choose the assessment you would like to
            participate in.
          </p>
        </motion.div>

        {/* =====================================================
            FORM CARD
        ====================================================== */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[24px] border border-violet-100 bg-white/90 px-5 py-5 shadow-[0_20px_50px_-20px_rgba(80,40,120,0.25)] backdrop-blur-md md:px-7 md:py-6"
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400" />
          <span className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-200/50 blur-3xl" />

          {/* Logo */}
          <div className="relative text-center">
            <img
              src={Logo}
              alt="THiNK LAB"
              className="mx-auto w-[90px] object-contain md:w-[110px]"
            />
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="relative mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/80 p-2.5 text-xs text-red-700 backdrop-blur-sm">
              <XCircle size={15} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="relative mt-3 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50/80 p-2.5 text-xs text-green-700 backdrop-blur-sm">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative mt-4 space-y-3">
            {/* Name */}
            <div>
              <label className="mb-1 block text-[11px] font-semibold text-slate-800">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 md:text-sm"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[11px] font-semibold text-slate-800">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 md:text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold text-slate-800">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+254 7XX XXX XXX"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 md:text-sm"
                />
              </div>
            </div>

            {/* Assessment Selection */}
            <div>
              <label className="mb-1 block text-[11px] font-semibold text-slate-800">
                Select Assessment{" "}
                <span className="font-normal text-slate-400">
                  (You may select both)
                </span>
              </label>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {/* AIMM */}
                <label className="group relative flex cursor-pointer items-start gap-2.5 overflow-hidden rounded-xl border border-violet-100 bg-white/70 p-2.5 transition hover:border-violet-300 hover:bg-violet-50/60 hover:shadow-[0_10px_30px_-15px_rgba(80,40,120,0.3)]">
                  <span className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-fuchsia-200/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <input
                    type="checkbox"
                    name="assessment"
                    value="AIMM"
                    className="relative mt-0.5 h-3.5 w-3.5 accent-violet-600"
                  />

                  <div className="relative">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-violet-600" />
                      <p className="text-xs font-bold text-[#2A084E]">
                        AIMM Assessment
                      </p>
                    </div>

                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                      AI Governance Pillar focused on Risk &amp; Opportunities
                      assessment.
                    </p>
                  </div>
                </label>

                {/* AIDMM */}
                <label className="group relative flex cursor-pointer items-start gap-2.5 overflow-hidden rounded-xl border border-violet-100 bg-white/70 p-2.5 transition hover:border-violet-300 hover:bg-violet-50/60 hover:shadow-[0_10px_30px_-15px_rgba(80,40,120,0.3)]">
                  <span className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-violet-200/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <input
                    type="checkbox"
                    name="assessment"
                    value="AIDMM"
                    className="relative mt-0.5 h-3.5 w-3.5 accent-violet-600"
                  />

                  <div className="relative">
                    <div className="flex items-center gap-1.5">
                      <BrainCircuit size={12} className="text-violet-600" />
                      <p className="text-xs font-bold text-[#2A084E]">
                        AIDMM Assessment
                      </p>
                    </div>

                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                      AI &amp; Data Maturity Model assessment.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Free Assessment Notice */}
            <div className="relative flex items-start gap-2 overflow-hidden rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-fuchsia-50/60 p-2.5">
              <span className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-fuchsia-200/40 blur-2xl" />

              <CheckCircle2
                size={14}
                className="relative mt-0.5 shrink-0 text-violet-600"
              />

              <div className="relative">
                <p className="text-[11px] font-bold text-[#2A084E]">
                  Complimentary Assessment
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-slate-600">
                  The first 20 organisations to register will receive a
                  complimentary assessment focused on the AI Governance
                  pillar - covering Risk &amp; Opportunities.
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#602191] to-[#7F4A9D] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_-15px_rgba(96,33,145,0.6)] disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                {loading ? "Submitting..." : "Register with THiNK LAB"}
                {!loading && <Send size={14} />}
              </span>
            </button>

            <p className="text-center text-[9px] leading-4 text-slate-400">
              By submitting this form, you agree to be contacted by the THiNK
              LAB team regarding your registration.
            </p>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Newsletter;